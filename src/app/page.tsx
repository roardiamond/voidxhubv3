export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="text-center space-y-6 max-w-3xl">
        <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium">
          ⚡ PREMIUM TOOLS HUB 2026 — v3
        </div>

        <h1 className="text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
          VOIDXHUB
        </h1>

        <p className="text-lg text-gray-400 max-w-xl mx-auto">
          Secure • Modern • Device-aware tools platform rebuilt from the ground up.
        </p>

        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <a
            href="/tools"
            className="px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/20 transition"
          >
            Browse Tools
          </a>
          <a
            href="/tournaments"
            className="px-6 py-3 rounded-xl bg-purple-500/10 border border-purple-500/40 text-purple-300 hover:bg-purple-500/20 transition"
          >
            Tournaments
          </a>
          <a
            href="/login"
            className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition"
          >
            Login
          </a>
        </div>

        <div className="pt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-500">
          <div className="p-4 rounded-xl border border-white/5 bg-white/5">
            <div className="text-cyan-400 font-semibold mb-1">High Security</div>
            Signed links • Rate limiting • Role-based access
          </div>
          <div className="p-4 rounded-xl border border-white/5 bg-white/5">
            <div className="text-cyan-400 font-semibold mb-1">Device Selection</div>
            Choose target device before tool access (v1 style enhanced)
          </div>
          <div className="p-4 rounded-xl border border-white/5 bg-white/5">
            <div className="text-cyan-400 font-semibold mb-1">Modern Stack</div>
            Next.js 15 + TypeScript + PostgreSQL
          </div>
        </div>
      </div>
    </main>
  );
}
