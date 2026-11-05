import { randomUUID } from "crypto";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import { isAdmin } from "../../../lib/adminAuth";
import {
  ShopItem,
  getShopItems,
  readItemForm,
  saveShopItems,
  uploadShopImages,
} from "../../../lib/shop";

// Add a new item
export async function POST(request: Request) {
  if (!(await isAdmin())) {
    return NextResponse.json({ error: "Not signed in" }, { status: 401 });
  }

  const parsed = readItemForm(await request.formData());
  if ("error" in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  const id = randomUUID();
  const item: ShopItem = {
    id,
    ...parsed.fields,
    images: await uploadShopImages(id, parsed.photos),
    createdAt: new Date().toISOString(),
  };

  const items = await getShopItems();
  await saveShopItems([item, ...items]);
  revalidatePath("/shop");
  return NextResponse.json(item);
}
