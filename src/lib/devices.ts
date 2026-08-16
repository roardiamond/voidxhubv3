export type Device = {
  id: string;
  name: string;
  brand: string;
  image: string; // raw github url from old repo for now
  tier: "low" | "mid" | "high" | "emulator" | "ios";
};

const BASE = "https://raw.githubusercontent.com/roardiamond/VOIDXHUB/main";

export const DEVICES: Device[] = [
  { id: "samsung", name: "Samsung", brand: "Samsung", image: `${BASE}/samsung.jpg`, tier: "high" },
  { id: "redmi", name: "Redmi / Xiaomi", brand: "Xiaomi", image: `${BASE}/redmi.jpg`, tier: "mid" },
  { id: "iqoo", name: "iQOO", brand: "iQOO", image: `${BASE}/iqoo.jpg`, tier: "high" },
  { id: "oneplus", name: "OnePlus", brand: "OnePlus", image: `${BASE}/oneplus.png`, tier: "high" },
  { id: "oppo", name: "OPPO", brand: "OPPO", image: `${BASE}/oppo.png`, tier: "mid" },
  { id: "vivo", name: "Vivo", brand: "Vivo", image: `${BASE}/vivo.png`, tier: "mid" },
  { id: "poco", name: "POCO", brand: "POCO", image: `${BASE}/poco.png`, tier: "mid" },
  { id: "realme", name: "Realme", brand: "Realme", image: `${BASE}/realme.png`, tier: "mid" },
  { id: "motorola", name: "Motorola", brand: "Motorola", image: `${BASE}/motorola.jpg`, tier: "mid" },
  { id: "nothing", name: "Nothing", brand: "Nothing", image: `${BASE}/nothing.jpg`, tier: "high" },
  { id: "infinix", name: "Infinix", brand: "Infinix", image: `${BASE}/infinix.jpg`, tier: "low" },
  { id: "techno", name: "Tecno", brand: "Tecno", image: `${BASE}/techno.png`, tier: "low" },
  { id: "iphone", name: "iPhone", brand: "Apple", image: `${BASE}/iphone.jpg`, tier: "ios" },
];

export const GAMES = [
  {
    id: "freefire",
    name: "Free Fire",
    image: `${BASE}/ff.jpg`,
    color: "from-orange-500 to-red-500",
  },
  {
    id: "bgmi",
    name: "BGMI",
    image: `${BASE}/bgmi.jpg`,
    color: "from-yellow-400 to-orange-500",
  },
  {
    id: "codm",
    name: "COD Mobile",
    image: `${BASE}/cod.jpg`,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "valorant",
    name: "Valorant Mobile",
    image: `${BASE}/valo.jpg`,
    color: "from-pink-500 to-purple-500",
  },
  {
    id: "apex",
    name: "Apex Legends",
    image: `${BASE}/apex.jpg`,
    color: "from-red-500 to-rose-600",
  },
] as const;

export const TOOL_IMAGES = {
  hologram: `${BASE}/holo.jpg`,
  magic: `${BASE}/magic600.jpg`,
  zombie: `${BASE}/zombie.jpg`,
  laser: `${BASE}/laser.jpg`,
  bypass: `${BASE}/bypass.jpg`,
  sensi: `${BASE}/sensi.jpg`,
  arrow: `${BASE}/arrow.jpg`,
  card: `${BASE}/card.jpg`,
};
