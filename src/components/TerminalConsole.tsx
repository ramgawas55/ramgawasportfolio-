"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { terminalCommands } from "@/data/profile";

type TerminalEntry = {
  command: string;
  output: string[];
};

export default function TerminalConsole({
  onSectionChange,
}: {
  onSectionChange?: (section: string) => void;
}) {
  const [history, setHistory] = useState<TerminalEntry[]>(() => {
    const helpOutput =
      terminalCommands.find((command) => command.command === "help")?.output ??
      [];
    return [
      {
        command: "help",
        output: helpOutput,
      },
    ];
  });
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement | null>(null);
  const commandMap = useMemo(
    () =>
      terminalCommands.reduce<Record<string, string[]>>((acc, cmd) => {
        acc[cmd.command] = cmd.output;
        return acc;
      }, {}),
    []
  );

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const command = input.trim();
    if (!command) return;
    if (command === "clear") {
      setHistory([]);
      setInput("");
      return;
    }

    const output = commandMap[command];
    if (output) {
      setHistory((prev) => [...prev, { command, output }]);
      onSectionChange?.(command);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          command,
          output: [
            `Command not found: ${command}`,
            "Type help to list commands.",
          ],
        },
      ]);
    }
    setInput("");
  };

  return (
    <div className="rounded-3xl border border-[#1a1a1a] bg-[#050505] p-6 font-mono text-sm text-[#ffffff] neon-border">
      <div className="flex items-center gap-3 border-b border-[#1a1a1a] pb-4">
        <div className="h-3 w-3 rounded-full bg-[#d63d28]" />
        <div className="h-3 w-3 rounded-full bg-[#ff4d22]" />
        <div className="h-3 w-3 rounded-full bg-[#ff3b30]" />
        <div className="ml-3 text-xs uppercase tracking-[0.3em] text-[#c9c9c9]">
          terminal://portfolio
        </div>
      </div>
      <div className="mt-4 space-y-4">
        {history.map((entry, index) => (
          <div key={`${entry.command}-${index}`} className="space-y-2">
            <div className="text-[#ff3b30]">
              <span className="text-[#ff4d22]">$</span> {entry.command}
            </div>
            <div className="space-y-1 text-[#c9c9c9]">
              {entry.output.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-6 flex items-center gap-2">
        <span className="text-[#ff4d22]">$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Type a command..."
          aria-label="Terminal command input"
          className="w-full bg-transparent text-[#ffffff] outline-none placeholder:text-[#c9c9c9]"
        />
        <span className="terminal-cursor text-[#ff3b30]">█</span>
      </form>
    </div>
  );
}
