"use client";

import { useState } from "react";
import { DEVICES, GAMES } from "@/lib/devices";

export default function ToolsPage() {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  return (
    <div className="min-h-screen p-4 md:p-10">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            TOOLS
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Select your device first (enhanced from v1), then choose the game. This helps deliver the best matching config.
          </p>
        </div>

        {/* Step 1 - Device Selection */}
        <section className="space-y-5">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-cyan-500/20 border border-cyan-400 flex items-center justify-center text-cyan-300 font-bold text-sm">
              1
            </div>
            <h2 className="text-xl font-bold text-cyan-300">Select Your Device</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {DEVICES.map((device) => (
              <button
                key={device.id}
                onClick={() => setSelectedDevice(device.id)}
                className={`group relative overflow-hidden rounded-2xl border transition-all ${
                  selectedDevice === device.id
                    ? "border-cyan-400 ring-2 ring-cyan-400/40 scale-[1.02]"
                    : "border-white/10 hover:border-white/25"
                }`}
              >
                <div className="aspect-square relative bg-black/40">
                  <img
                    src={device.image}
                    alt={device.name}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/200x200/0a0a12/67e8f9?text=" +
                        encodeURIComponent(device.name);
                    }}
                  />
                </div>
                <div className="p-2.5 bg-black/70 text-center">
                  <div className="text-sm font-medium truncate">{device.name}</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-wider">{device.tier}</div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Step 2 - Game Selection */}
        <section className={`space-y-5 transition-opacity ${!selectedDevice ? "opacity-40 pointer-events-none" : ""}`}>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-400 flex items-center justify-center text-purple-300 font-bold text-sm">
              2
            </div>
            <h2 className="text-xl font-bold text-purple-300">Select Game</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {GAMES.map((game) => (
              <button
                key={game.id}
                onClick={() => setSelectedGame(game.id)}
                className={`relative overflow-hidden rounded-2xl border text-left transition-all ${
                  selectedGame === game.id
                    ? "border-purple-400 ring-2 ring-purple-400/40"
                    : "border-white/10 hover:border-white/25"
                }`}
              >
                <div className="h-36 relative">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://via.placeholder.com/400x200/0a0a12/a855f7?text=" +
                        encodeURIComponent(game.name);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-3 left-4">
                    <div className={`text-xl font-black bg-gradient-to-r ${game.color} bg-clip-text text-transparent`}>
                      {game.name}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {selectedDevice && selectedGame && (
          <div className="p-6 md:p-8 rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/5 to-purple-500/5">
            <h3 className="text-lg font-bold text-cyan-300 mb-2">Selection Ready</h3>
            <p className="text-gray-300">
              Device: <span className="text-white font-medium">{selectedDevice}</span> • Game:{" "}
              <span className="text-white font-medium">{selectedGame}</span>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Next step will show available tools for this combination (login required for full access).
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="px-6 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/30 transition font-medium">
                View Compatible Tools →
              </button>
              <button
                onClick={() => {
                  setSelectedDevice(null);
                  setSelectedGame(null);
                }}
                className="px-6 py-2.5 rounded-xl border border-white/10 text-gray-400 hover:text-white transition"
              >
                Reset
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
