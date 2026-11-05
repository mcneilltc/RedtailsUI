import ShopList from "../components/shop/ShopList";
import { ShopItem, getShopItems } from "../lib/shop";

// Admin edits refresh this page right away; this is just a fallback.
export const revalidate = 60;

const ShopPage = async () => {
  let items: ShopItem[] = [];
  try {
    items = await getShopItems();
  } catch (error) {
    console.error("Could not load shop items", error);
  }
  return <ShopList items={items} />;
};

export default ShopPage;
