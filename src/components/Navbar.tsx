import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#05050a]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="text-xl font-black tracking-tight bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          VOIDXHUB
        </Link>

        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <Link href="/tools" className="text-gray-400 hover:text-cyan-300 transition">
            Tools
          </Link>
          <Link href="/tournaments" className="text-gray-400 hover:text-cyan-300 transition">
            Tournaments
          </Link>
          <Link href="/dashboard" className="text-gray-400 hover:text-cyan-300 transition">
            Dashboard
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/login"
            className="text-sm text-gray-400 hover:text-white transition hidden sm:block"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-sm px-4 py-1.5 rounded-lg bg-cyan-500/15 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-500/25 transition"
          >
            Register
          </Link>
        </div>
      </div>
    </header>
  );
}
