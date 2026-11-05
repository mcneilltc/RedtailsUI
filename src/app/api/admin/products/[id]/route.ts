import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { isAdmin } from "../../../../lib/adminAuth";
import {
  deleteShopImages,
  getShopItems,
  readItemForm,
  saveShopItems,
  uploadShopImages,
} from "../../../../lib/shop";

type Params = { params: Promise<{ id: string }> };

const unauthorized = () =>
  NextResponse.json({ error: "Not signed in" }, { status: 401 });
const notFound = () =>
  NextResponse.json({ error: "Item not found" }, { status: 404 });

// Edit an item. `keepImages` lists the existing photo URLs to keep, in order;
// new `photos` are added after them.
export async function PUT(request: Request, { params }: Params) {
  if (!(await isAdmin())) return unauthorized();
  const { id } = await params;

  const form = await request.formData();
  const parsed = readItemForm(form);
  if ("error" in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const items = await getShopItems();
  const index = items.findIndex((item) => item.id === id);
  if (index === -1) return notFound();
  const existing = items[index];

  const requestedKeep: string[] = JSON.parse(String(form.get("keepImages") ?? "[]"));
  const keep = requestedKeep.filter((url) => existing.images.includes(url));
  const removed = existing.images.filter((url) => !keep.includes(url));
  const added = await uploadShopImages(id, parsed.photos);

  const updated = { ...existing, ...parsed.fields, images: [...keep, ...added] };
  items[index] = updated;
  await saveShopItems(items);
  await deleteShopImages(removed);
  revalidatePath("/shop");
  return NextResponse.json(updated);
}

export async function DELETE(_request: Request, { params }: Params) {
  if (!(await isAdmin())) return unauthorized();
  const { id } = await params;

  const items = await getShopItems();
  const item = items.find((i) => i.id === id);
  if (!item) return notFound();

  await saveShopItems(items.filter((i) => i.id !== id));
  await deleteShopImages(item.images);
  revalidatePath("/shop");
  return NextResponse.json({ ok: true });
}
