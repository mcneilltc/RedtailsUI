"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, Chip, Dialog, DialogContent, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Add } from "@mui/icons-material";
import type { ShopItem } from "../../lib/shop";
import { formatPrice } from "../shop/ShopList";
import ItemForm from "./ItemForm";

const AdminDashboard = ({ items }: { items: ShopItem[] }) => {
  const router = useRouter();
  const theme = useTheme();
  const isPhone = useMediaQuery(theme.breakpoints.down("sm"));
  // undefined = form closed, null = adding a new item, otherwise the item being edited
  const [editing, setEditing] = useState<ShopItem | null | undefined>(undefined);

  const closeForm = () => setEditing(undefined);
  const handleSaved = () => {
    closeForm();
    router.refresh();
  };

  const handleDelete = async (item: ShopItem) => {
    if (!window.confirm(`Delete "${item.title}"? This can't be undone.`)) return;
    const res = await fetch(`/api/admin/products/${item.id}`, { method: "DELETE" });
    if (res.ok) router.refresh();
    else window.alert("Couldn't delete that item. Please try again.");
  };

  const handleSignOut = async () => {
    await fetch("/api/admin/logout", { method: "POST" });
    router.refresh();
  };

  return (
    <Box sx={{ maxWidth: 800, mx: "auto", pb: 4 }}>
      <Box sx={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 1, mb: 3 }}>
        <Typography variant="h5" sx={{ fontWeight: "bold", color: "text.primary", flexGrow: 1 }}>
          Shop Admin
        </Typography>
        <Button href="/shop" target="_blank">
          View Shop
        </Button>
        <Button onClick={handleSignOut}>Sign Out</Button>
      </Box>

      <Button
        variant="contained"
        startIcon={<Add />}
        onClick={() => setEditing(null)}
        fullWidth={isPhone}
        sx={{ mb: 3 }}
      >
        Add Item
      </Button>

      {items.length === 0 && (
        <Typography sx={{ color: "text.secondary" }}>
          No items yet. Tap &ldquo;Add Item&rdquo; to list your first one.
        </Typography>
      )}

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {items.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              gap: 2,
              p: 1.5,
              alignItems: "center",
              bgcolor: "background.paper",
              border: "1px solid #ccc",
              borderRadius: "8px",
            }}
          >
            <Box
              sx={{ width: 72, height: 72, flex: "none", borderRadius: "4px", overflow: "hidden", bgcolor: "action.hover" }}
            >
              {item.images[0] && (
                <Box
                  component="img"
                  src={item.images[0]}
                  alt=""
                  sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              )}
            </Box>
            <Box sx={{ flexGrow: 1, minWidth: 0 }}>
              <Typography sx={{ fontWeight: "bold", color: "text.primary" }} noWrap>
                {item.title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {formatPrice(item.price)}
                {item.sold && <Chip label="Sold" size="small" sx={{ ml: 1 }} />}
              </Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" }, gap: 0.5 }}>
              <Button size="small" onClick={() => setEditing(item)}>
                Edit
              </Button>
              <Button size="small" color="error" onClick={() => handleDelete(item)}>
                Delete
              </Button>
            </Box>
          </Box>
        ))}
      </Box>

      <Dialog open={editing !== undefined} onClose={closeForm} fullScreen={isPhone} fullWidth maxWidth="sm">
        <DialogContent>
          {editing !== undefined && (
            <ItemForm
              key={editing?.id ?? "new"}
              item={editing ?? undefined}
              onSaved={handleSaved}
              onCancel={closeForm}
            />
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default AdminDashboard;
