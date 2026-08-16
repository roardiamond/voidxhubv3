"use client";

import { useState } from "react";

const DEVICES = [
  { id: "android-low", name: "Android (Low-end)", desc: "2-4 GB RAM devices" },
  { id: "android-mid", name: "Android (Mid-range)", desc: "4-8 GB RAM" },
  { id: "android-high", name: "Android (Flagship)", desc: "8 GB+ / Snapdragon 8 series" },
  { id: "emulator", name: "Emulator", desc: "BlueStacks / LDPlayer / MSI" },
  { id: "ios", name: "iOS", desc: "Limited support" },
];

const GAMES = [
  { id: "freefire", name: "Free Fire", color: "from-orange-500 to-red-500" },
  { id: "bgmi", name: "BGMI", color: "from-yellow-400 to-orange-500" },
  { id: "codm", name: "COD Mobile", color: "from-blue-500 to-cyan-500" },
  { id: "valorant", name: "Valorant Mobile", color: "from-pink-500 to-purple-500" },
];

export default function ToolsPage() {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  return (
    <div className="min-h-screen p-6 md:p-12">
      <div className="max-w-5xl mx-auto space-y-10">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Tools Catalog
          </h1>
          <p className="text-gray-400 mt-2">
            Select your device and game. Device selection helps deliver the most suitable config.
          </p>
        </div>

        {/* Device Selection - Enhanced from v1 */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-cyan-300">1. Select Device</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {DEVICES.map((device) => (
              <button
                key={device.id}
                onClick={() => setSelectedDevice(device.id)}
                className={`p-4 rounded-xl border text-left transition ${
                  selectedDevice === device.id
                    ? "border-cyan-400 bg-cyan-500/10 glow-cyan"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                }`}
              >
                <div className="font-medium">{device.name}</div>
                <div className="text-sm text-gray-400 mt-1">{device.desc}</div>
              </button>
            ))}
          </div>
        </section>

        {/* Game Selection */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-cyan-300">2. Select Game</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {GAMES.map((game) => (
              <button
                key={game.id}
                onClick={() => setSelectedGame(game.id)}
                disabled={!selectedDevice}
                className={`p-5 rounded-xl border text-left transition disabled:opacity-40 disabled:cursor-not-allowed ${
                  selectedGame === game.id
                    ? "border-purple-400 bg-purple-500/10"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                }`}
              >
                <div className={`font-bold text-lg bg-gradient-to-r ${game.color} bg-clip-text text-transparent`}>
                  {game.name}
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Result placeholder */}
        {selectedDevice && selectedGame && (
          <div className="p-6 rounded-2xl border border-cyan-500/30 bg-cyan-500/5">
            <h3 className="text-lg font-semibold text-cyan-300 mb-2">Ready</h3>
            <p className="text-gray-300">
              Device: <span className="text-white">{selectedDevice}</span> • Game:{" "}
              <span className="text-white">{selectedGame}</span>
            </p>
            <p className="text-sm text-gray-400 mt-3">
              In the full version, this will show available tools for the selected combination and require login + credits / key.
            </p>
            <button className="mt-4 px-5 py-2.5 rounded-lg bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/30 transition">
              View Compatible Tools →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
