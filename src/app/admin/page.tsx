"use client";

import { useState } from "react";

export default function AdminPage() {
  const [key, setKey] = useState("");
  const [tool, setTool] = useState("hologram");
  const [days, setDays] = useState(30);

  function generateKey() {
    const random = Math.random().toString(36).slice(2, 10).toUpperCase();
    const generated = `VXH-${tool.toUpperCase()}-${days}D-${random}`;
    setKey(generated);
  }

  return (
    <div className="min-h-screen p-6 md:p-10">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <h1 className="text-3xl font-black text-cyan-400 tracking-wider">ADMIN PANEL</h1>
          <p className="text-gray-400 text-sm mt-1">
            Restricted area — protect this route with real auth later
          </p>
        </div>

        <div className="rounded-2xl border border-cyan-500/25 bg-[rgba(17,17,28,0.9)] p-6 md:p-8 space-y-6">
          <h2 className="text-xl font-bold text-cyan-300">Generate License Key</h2>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Tool</label>
              <select
                value={tool}
                onChange={(e) => setTool(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-cyan-400 outline-none"
              >
                <option value="hologram">Hologram</option>
                <option value="magic">Magic</option>
                <option value="zombie">Zombie</option>
                <option value="laser">Laser</option>
                <option value="bypass">Bypass</option>
                <option value="sensi">Sensitivity</option>
              </select>
            </div>

            <div>
              <label className="block text-sm text-gray-400 mb-1.5">Days</label>
              <input
                type="number"
                min={1}
                max={365}
                value={days}
                onChange={(e) => setDays(Number(e.target.value))}
                className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-cyan-400 outline-none"
              />
            </div>
          </div>

          <button
            onClick={generateKey}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-red-600 to-pink-600 font-bold hover:opacity-90 transition"
          >
            GENERATE KEY
          </button>

          {key && (
            <div className="p-4 rounded-xl bg-black/60 border border-cyan-500/30">
              <p className="text-xs text-gray-500 mb-1">Generated Key</p>
              <p className="font-mono text-cyan-300 break-all">{key}</p>
            </div>
          )}
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-gray-400">
          <p className="font-medium text-gray-300 mb-2">Security notes</p>
          <ul className="list-disc list-inside space-y-1">
            <li>This page must be protected by admin role check</li>
            <li>Never store plaintext admin passwords</li>
            <li>Log every key generation in audit_logs</li>
            <li>Use short-lived signed URLs for tool downloads</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
