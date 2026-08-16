import { createHmac, timingSafeEqual } from "crypto";

/**
 * Simple signed URL helper.
 * In production use Cloudflare R2 / S3 presigned URLs instead.
 */

const SECRET = process.env.DOWNLOAD_SIGNING_SECRET || "change-me-in-production";

export function createSignedDownloadToken(
  toolSlug: string,
  userId: number,
  expiresInSeconds = 900 // 15 minutes
) {
  const expires = Math.floor(Date.now() / 1000) + expiresInSeconds;
  const payload = `${toolSlug}:${userId}:${expires}`;
  const signature = createHmac("sha256", SECRET).update(payload).digest("hex");
  return Buffer.from(`${payload}:${signature}`).toString("base64url");
}

export function verifySignedDownloadToken(token: string): {
  valid: boolean;
  toolSlug?: string;
  userId?: number;
  expires?: number;
} {
  try {
    const decoded = Buffer.from(token, "base64url").toString("utf8");
    const [toolSlug, userIdStr, expiresStr, signature] = decoded.split(":");
    if (!toolSlug || !userIdStr || !expiresStr || !signature) {
      return { valid: false };
    }

    const expires = parseInt(expiresStr, 10);
    if (Date.now() / 1000 > expires) {
      return { valid: false };
    }

    const payload = `${toolSlug}:${userIdStr}:${expiresStr}`;
    const expected = createHmac("sha256", SECRET).update(payload).digest("hex");

    const a = Buffer.from(signature);
    const b = Buffer.from(expected);
    if (a.length !== b.length || !timingSafeEqual(a, b)) {
      return { valid: false };
    }

    return {
      valid: true,
      toolSlug,
      userId: parseInt(userIdStr, 10),
      expires,
    };
  } catch {
    return { valid: false };
  }
}
