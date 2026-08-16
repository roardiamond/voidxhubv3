export default function DashboardPage() {
  return (
    <div className="min-h-screen p-6 md:p-10">
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-black text-cyan-400 tracking-wider">DASHBOARD</h1>
            <p className="text-gray-400 text-sm mt-1">Welcome back</p>
          </div>
          <div className="flex gap-3">
            <a href="/tools" className="px-5 py-2 border border-cyan-400 rounded-xl text-cyan-300 hover:bg-cyan-400 hover:text-black transition text-sm font-bold">
              TOOLS
            </a>
            <a href="/" className="px-5 py-2 border border-gray-600 rounded-xl text-gray-400 hover:text-white transition text-sm">
              HOME
            </a>
          </div>
        </div>

        {/* Credits Card - inspired by old dashboard */}
        <div className="rounded-2xl border border-cyan-500/25 bg-[rgba(17,17,28,0.9)] p-8 text-center">
          <p className="text-gray-400 text-xs tracking-widest mb-2">YOUR BALANCE</p>
          <div className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
            0
          </div>
          <p className="text-cyan-400 text-sm mt-2 tracking-wider">VxH Cr</p>
          <p className="text-gray-500 text-xs mt-1">1 ₹ = 2 VxH Cr</p>
          <button className="mt-6 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold rounded-xl hover:scale-105 transition text-sm tracking-wider">
            + BUY VxH Cr
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm text-gray-400">Active Licenses</div>
            <div className="text-2xl font-bold text-white mt-1">0</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <div className="text-sm text-gray-400">Tournament Entries</div>
            <div className="text-2xl font-bold text-white mt-1">0</div>
          </div>
        </div>

        <div className="rounded-xl border border-white/10 bg-white/5 p-6 text-center">
          <p className="text-gray-400 text-sm mb-3">Need help or more credits?</p>
          <a
            href="https://t.me/Voidxhubsupport_bot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-2 bg-purple-600 hover:bg-purple-500 rounded-xl text-sm font-bold transition"
          >
            Telegram Support
          </a>
        </div>
      </div>
    </div>
  );
}
