const BASE = "https://raw.githubusercontent.com/roardiamond/VOIDXHUB/main";

const TOURNAMENTS = [
  {
    id: "ff-scrims",
    title: "Free Fire Paid Scrims",
    game: "Free Fire",
    image: `${BASE}/ff-tournament.jpg`,
    prize: "₹500 – ₹10,000+",
    status: "Coming Soon",
  },
  {
    id: "bgmi-scrims",
    title: "BGMI Paid Scrims",
    game: "BGMI",
    image: `${BASE}/bgmi-tournament.jpg`,
    prize: "₹1,000 – ₹20,000+",
    status: "Coming Soon",
  },
];

export default function TournamentsPage() {
  return (
    <div className="min-h-screen p-6 md:p-10">
      <div className="max-w-5xl mx-auto space-y-10">
        <div className="text-center space-y-3">
          <h1 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            TOURNAMENTS
          </h1>
          <p className="text-gray-400">Daily & weekly paid scrims with real cash prizes</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {TOURNAMENTS.map((t) => (
            <div
              key={t.id}
              className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 hover:border-cyan-500/40 transition"
            >
              <div className="h-44 relative">
                <img
                  src={t.image}
                  alt={t.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/600x300/0a0a12/67e8f9?text=Tournament";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-3 left-4 right-4">
                  <div className="text-xl font-bold text-white">{t.title}</div>
                  <div className="text-sm text-cyan-300">{t.prize}</div>
                </div>
              </div>
              <div className="p-4 flex justify-between items-center">
                <span className="text-xs uppercase tracking-wider text-gray-500">{t.status}</span>
                <button className="px-4 py-2 rounded-lg bg-purple-600/80 hover:bg-purple-500 text-sm font-bold transition">
                  Join Soon
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
