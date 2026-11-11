import type { Metadata } from "next";
import { Alert, Box, Container } from "@mui/material";
import AdminDashboard from "../components/admin/AdminDashboard";
import AdminLogin from "../components/admin/AdminLogin";
import { isAdmin } from "../lib/adminAuth";
import { ShopItem, getShopItems } from "../lib/shop";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

const AdminPage = async () => (
  <Container maxWidth="lg" sx={{ py: 4 }}>
    <AdminContent />
  </Container>
);

const AdminContent = async () => {
  if (!(await isAdmin())) return <AdminLogin />;

  let items: ShopItem[];
  try {
    items = await getShopItems();
  } catch (error) {
    console.error("Could not load shop items", error);
    return (
      <Box sx={{ maxWidth: 600, mx: "auto", mb: 6 }}>
        <Alert severity="error">
          Couldn&apos;t reach shop storage. Make sure a Vercel Blob store is
          connected to this project and BLOB_READ_WRITE_TOKEN is set for this
          environment (run <code>vercel env pull</code> and restart for local
          development).
        </Alert>
      </Box>
    );
  }
  return <AdminDashboard items={items} />;
};

export default AdminPage;
