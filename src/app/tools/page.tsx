"use client";

import { useMemo, useState } from "react";
import { DEVICES, GAMES } from "@/lib/devices";
import { getCompatibleTools } from "@/lib/tools/matching";

export default function ToolsPage() {
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const compatibleTools = useMemo(() => {
    if (!selectedDevice || !selectedGame) return [];
    return getCompatibleTools(selectedDevice, selectedGame);
  }, [selectedDevice, selectedGame]);

  return (
    <div className="min-h-screen p-4 md:p-10">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            TOOLS
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            Select your device first (enhanced from v1), then choose the game. Matching tools appear automatically.
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
                onClick={() => {
                  setSelectedDevice(device.id);
                  setSelectedGame(null);
                }}
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

        {/* Compatible Tools */}
        {selectedDevice && selectedGame && (
          <section className="space-y-4">
            <h2 className="text-xl font-bold text-cyan-300">Compatible Tools</h2>

            {compatibleTools.length === 0 ? (
              <div className="p-6 rounded-2xl border border-white/10 bg-white/5 text-gray-400">
                No tools available for this device + game combination yet.
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {compatibleTools.map((tool) => (
                  <div
                    key={tool.slug}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 hover:border-cyan-500/40 transition"
                  >
                    <div className="font-bold text-lg text-white">{tool.name}</div>
                    <div className="text-sm text-gray-400 mt-1 capitalize">{tool.game}</div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-pink-400 font-semibold">{tool.creditCost} VxH Cr</span>
                      <button className="px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-sm hover:bg-cyan-500/30 transition">
                        Unlock
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <button
              onClick={() => {
                setSelectedDevice(null);
                setSelectedGame(null);
              }}
              className="text-sm text-gray-500 hover:text-white transition"
            >
              ← Reset selection
            </button>
          </section>
        )}
      </div>
    </div>
  );
}
