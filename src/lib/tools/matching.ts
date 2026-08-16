import { DEVICES } from "@/lib/devices";

export type ToolMeta = {
  slug: string;
  name: string;
  game: string;
  supportedTiers: Array<"low" | "mid" | "high" | "emulator" | "ios">;
  creditCost: number;
};

/**
 * Example tool catalog.
 * Later this will come from the database.
 */
export const TOOL_CATALOG: ToolMeta[] = [
  {
    slug: "hologram",
    name: "Hologram",
    game: "freefire",
    supportedTiers: ["low", "mid", "high", "emulator"],
    creditCost: 50,
  },
  {
    slug: "magic",
    name: "Magic Bullet",
    game: "freefire",
    supportedTiers: ["mid", "high", "emulator"],
    creditCost: 80,
  },
  {
    slug: "zombie",
    name: "Zombie Mode",
    game: "freefire",
    supportedTiers: ["low", "mid", "high"],
    creditCost: 40,
  },
  {
    slug: "highfps",
    name: "High FPS Config",
    game: "bgmi",
    supportedTiers: ["low", "mid", "high"],
    creditCost: 30,
  },
  {
    slug: "bypass",
    name: "Bypass",
    game: "bgmi",
    supportedTiers: ["mid", "high", "emulator"],
    creditCost: 100,
  },
];

export function getDeviceTier(deviceId: string) {
  const device = DEVICES.find((d) => d.id === deviceId);
  return device?.tier ?? null;
}

export function getCompatibleTools(deviceId: string, gameId: string) {
  const tier = getDeviceTier(deviceId);
  if (!tier) return [];

  return TOOL_CATALOG.filter(
    (tool) => tool.game === gameId && tool.supportedTiers.includes(tier)
  );
}
