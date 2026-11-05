"use client";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  FormControlLabel,
  IconButton,
  InputAdornment,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { AddAPhoto, Close } from "@mui/icons-material";
import type { ShopItem } from "../../lib/shop";

const MAX_PHOTO_SIZE_PX = 1600; // longest side after resizing

// Phone photos are often 4000px+ and several MB. Shrink them before upload so
// saving is quick on mobile data. Falls back to the original file if the
// browser can't decode it.
async function resizePhoto(file: File): Promise<File> {
  try {
    const bitmap = await createImageBitmap(file);
    const scale = Math.min(1, MAX_PHOTO_SIZE_PX / Math.max(bitmap.width, bitmap.height));
    const canvas = document.createElement("canvas");
    canvas.width = Math.round(bitmap.width * scale);
    canvas.height = Math.round(bitmap.height * scale);
    canvas.getContext("2d")!.drawImage(bitmap, 0, 0, canvas.width, canvas.height);
    const blob = await new Promise<Blob | null>((resolve) =>
      canvas.toBlob(resolve, "image/jpeg", 0.85),
    );
    if (!blob) return file;
    const name = file.name.replace(/\.[^.]+$/, "") + ".jpg";
    return new File([blob], name, { type: "image/jpeg" });
  } catch {
    return file;
  }
}

type ItemFormProps = {
  /** Item being edited, or undefined when adding a new one. */
  item?: ShopItem;
  onSaved: () => void;
  onCancel: () => void;
};

const ItemForm = ({ item, onSaved, onCancel }: ItemFormProps) => {
  const [title, setTitle] = useState(item?.title ?? "");
  const [price, setPrice] = useState(item ? String(item.price) : "");
  const [description, setDescription] = useState(item?.description ?? "");
  const [buyUrl, setBuyUrl] = useState(item?.buyUrl ?? "");
  const [sold, setSold] = useState(item?.sold ?? false);
  const [keepImages, setKeepImages] = useState<string[]>(item?.images ?? []);
  const [newPhotos, setNewPhotos] = useState<File[]>([]);
  const [previews, setPreviews] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const urls = newPhotos.map((file) => URL.createObjectURL(file));
    setPreviews(urls);
    return () => urls.forEach((url) => URL.revokeObjectURL(url));
  }, [newPhotos]);

  const handlePhotos = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    setNewPhotos((prev) => [...prev, ...files]);
    e.target.value = ""; // allow picking the same photo again after removing it
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError("");

    const form = new FormData();
    form.set("title", title);
    form.set("price", price);
    form.set("description", description);
    form.set("buyUrl", buyUrl);
    form.set("sold", String(sold));
    form.set("keepImages", JSON.stringify(keepImages));
    for (const photo of await Promise.all(newPhotos.map(resizePhoto))) {
      form.append("photos", photo);
    }

    const res = await fetch(
      item ? `/api/admin/products/${item.id}` : "/api/admin/products",
      { method: item ? "PUT" : "POST", body: form },
    );
    setSaving(false);
    if (res.ok) {
      onSaved();
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Something went wrong. Please try again.");
    }
  };

  const thumbSx = {
    position: "relative",
    width: 88,
    height: 88,
    borderRadius: "4px",
    overflow: "hidden",
    border: "1px solid #ccc",
  } as const;

  const removeButtonSx = {
    position: "absolute",
    top: 2,
    right: 2,
    bgcolor: "rgba(0,0,0,0.6)",
    color: "#fff",
    "&:hover": { bgcolor: "rgba(0,0,0,0.8)" },
  } as const;

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", color: "text.primary" }}>
        {item ? "Edit Item" : "Add Item"}
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}

      <Box>
        <Typography variant="body2" sx={{ color: "text.secondary", mb: 1 }}>
          Photos (the first one is the main photo)
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
          {keepImages.map((src) => (
            <Box key={src} sx={thumbSx}>
              <Box component="img" src={src} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <IconButton
                size="small"
                aria-label="Remove photo"
                onClick={() => setKeepImages((prev) => prev.filter((url) => url !== src))}
                sx={removeButtonSx}
              >
                <Close fontSize="small" />
              </IconButton>
            </Box>
          ))}
          {previews.map((src, index) => (
            <Box key={src} sx={thumbSx}>
              <Box component="img" src={src} alt="" sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <IconButton
                size="small"
                aria-label="Remove photo"
                onClick={() => setNewPhotos((prev) => prev.filter((_, i) => i !== index))}
                sx={removeButtonSx}
              >
                <Close fontSize="small" />
              </IconButton>
            </Box>
          ))}
          <Button
            component="label"
            variant="outlined"
            sx={{ width: 88, height: 88, flexDirection: "column", fontSize: "0.75rem" }}
          >
            <AddAPhoto />
            Add
            <input type="file" accept="image/*" multiple hidden onChange={handlePhotos} />
          </Button>
        </Box>
      </Box>

      <TextField label="Title" value={title} onChange={(e) => setTitle(e.target.value)} required fullWidth />
      <TextField
        label="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
        fullWidth
        slotProps={{
          input: { startAdornment: <InputAdornment position="start">$</InputAdornment> },
          htmlInput: { inputMode: "decimal", pattern: "[0-9]*\\.?[0-9]{0,2}" },
        }}
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        multiline
        minRows={3}
        fullWidth
      />
      <TextField
        label="Buy link (optional)"
        helperText="Stripe Payment Link, Peek, etc. Leave blank to send buyers to the Contact page."
        value={buyUrl}
        onChange={(e) => setBuyUrl(e.target.value)}
        type="url"
        fullWidth
      />
      <FormControlLabel
        control={<Switch checked={sold} onChange={(e) => setSold(e.target.checked)} />}
        label="Sold"
      />

      <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
        <Button onClick={onCancel} disabled={saving}>
          Cancel
        </Button>
        <Button type="submit" variant="contained" disabled={saving}>
          {saving ? "Saving…" : "Save"}
        </Button>
      </Box>
    </Box>
  );
};

export default ItemForm;
