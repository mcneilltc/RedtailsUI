// Shop items are stored in Vercel Blob: one JSON file holds every item, and
// each photo is its own blob. Only import this from server code — it needs
// the BLOB_READ_WRITE_TOKEN environment variable.

import { del, get, put } from "@vercel/blob";

export type ShopItem = {
  id: string;
  title: string;
  /** Price in US dollars, e.g. 25 or 19.99. */
  price: number;
  description: string;
  /** Public Blob URLs, first one is the main photo. */
  images: string[];
  /** Optional checkout link (Stripe Payment Link, Peek, etc.). */
  buyUrl?: string;
  sold: boolean;
  createdAt: string;
};

const ITEMS_PATH = "shop/items.json";

export async function getShopItems(): Promise<ShopItem[]> {
  // useCache: false skips the CDN so edits show up immediately.
  const result = await get(ITEMS_PATH, { access: "public", useCache: false });
  if (!result) return [];
  const text = await new Response(result.stream).text();
  return JSON.parse(text) as ShopItem[];
}

export async function saveShopItems(items: ShopItem[]) {
  await put(ITEMS_PATH, JSON.stringify(items, null, 2), {
    access: "public",
    contentType: "application/json",
    addRandomSuffix: false,
    allowOverwrite: true,
  });
}

export async function uploadShopImages(itemId: string, files: File[]) {
  const uploads = files
    .filter((file) => file.size > 0)
    .map((file) =>
      put(`shop/images/${itemId}-${file.name}`, file, {
        access: "public",
        contentType: file.type || undefined,
        addRandomSuffix: true,
      }),
    );
  return (await Promise.all(uploads)).map((blob) => blob.url);
}

export async function deleteShopImages(urls: string[]) {
  if (urls.length > 0) await del(urls);
}

/** Reads the add/edit form sent by the admin page. Returns an error message if invalid. */
export function readItemForm(form: FormData) {
  const title = String(form.get("title") ?? "").trim();
  const price = Number(form.get("price"));
  const description = String(form.get("description") ?? "").trim();
  const buyUrl = String(form.get("buyUrl") ?? "").trim();
  const sold = form.get("sold") === "true";
  const photos = form.getAll("photos").filter((v): v is File => v instanceof File);

  if (!title) return { error: "Title is required" } as const;
  if (!Number.isFinite(price) || price < 0) return { error: "Enter a valid price" } as const;
  if (buyUrl && !/^https?:\/\//.test(buyUrl)) {
    return { error: "Buy link must start with http:// or https://" } as const;
  }

  return {
    fields: { title, price, description, buyUrl: buyUrl || undefined, sold },
    photos,
  } as const;
}
