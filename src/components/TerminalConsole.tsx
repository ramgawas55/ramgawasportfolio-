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
  const [history, setHistory] = useState<TerminalEntry[]>([]);
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
    setHistory([
      {
        command: "help",
        output: commandMap.help ?? [],
      },
    ]);
  }, [commandMap]);

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
    <div className="rounded-3xl border border-[#1f2a20] bg-[#0f1410] p-6 font-mono text-sm text-[#e6ffe9] neon-border">
      <div className="flex items-center gap-3 border-b border-[#1f2a20] pb-4">
        <div className="h-3 w-3 rounded-full bg-[#ff2d55]" />
        <div className="h-3 w-3 rounded-full bg-[#ffb347]" />
        <div className="h-3 w-3 rounded-full bg-[#4dff8a]" />
        <div className="ml-3 text-xs uppercase tracking-[0.3em] text-[#8aa18a]">
          terminal://portfolio
        </div>
      </div>
      <div className="mt-4 space-y-4">
        {history.map((entry, index) => (
          <div key={`${entry.command}-${index}`} className="space-y-2">
            <div className="text-[#4dff8a]">
              <span className="text-[#ff2d55]">$</span> {entry.command}
            </div>
            <div className="space-y-1 text-[#8aa18a]">
              {entry.output.map((line) => (
                <div key={line}>{line}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="mt-6 flex items-center gap-2">
        <span className="text-[#ff2d55]">$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Type a command..."
          aria-label="Terminal command input"
          className="w-full bg-transparent text-[#e6ffe9] outline-none placeholder:text-[#8aa18a]"
        />
        <span className="terminal-cursor text-[#4dff8a]">█</span>
      </form>
    </div>
  );
}
