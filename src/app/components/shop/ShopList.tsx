"use client";
import React, { useState } from "react";
import { Box, Button, Chip, Typography } from "@mui/material";
import type { ShopItem } from "../../lib/shop";

export const formatPrice = (price: number) =>
  price.toLocaleString("en-US", { style: "currency", currency: "USD" });

const ShopCard = ({ item }: { item: ShopItem }) => {
  const [photoIndex, setPhotoIndex] = useState(0);
  const mainPhoto = item.images[photoIndex] ?? item.images[0];

  return (
    <Box
      sx={{
        width: { xs: "100%", sm: 320 },
        display: "flex",
        flexDirection: "column",
        bgcolor: "background.paper",
        border: "1px solid #ccc",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <Box sx={{ position: "relative", aspectRatio: "1 / 1", bgcolor: "action.hover" }}>
        {mainPhoto && (
          <Box
            component="img"
            src={mainPhoto}
            alt={item.title}
            loading="lazy"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              opacity: item.sold ? 0.6 : 1,
            }}
          />
        )}
        {item.sold && (
          <Chip
            label="Sold"
            color="primary"
            sx={{ position: "absolute", top: 12, left: 12, fontWeight: "bold" }}
          />
        )}
      </Box>

      {/* Extra photos: tap a thumbnail to show it above */}
      {item.images.length > 1 && (
        <Box sx={{ display: "flex", gap: 1, p: 1, overflowX: "auto" }}>
          {item.images.map((src, index) => (
            <Box
              key={src}
              component="button"
              type="button"
              onClick={() => setPhotoIndex(index)}
              aria-label={`Show photo ${index + 1} of ${item.title}`}
              sx={{
                p: 0,
                flex: "none",
                width: 56,
                height: 56,
                cursor: "pointer",
                borderRadius: "4px",
                overflow: "hidden",
                border: "2px solid",
                borderColor: index === photoIndex ? "primary.main" : "transparent",
                background: "none",
              }}
            >
              <Box
                component="img"
                src={src}
                alt=""
                sx={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
              />
            </Box>
          ))}
        </Box>
      )}

      <Box sx={{ p: 2, display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: "bold", color: "text.primary" }}>
          {item.title}
        </Typography>
        <Typography variant="h6" sx={{ color: "secondary.main", mb: 1 }}>
          {formatPrice(item.price)}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary", whiteSpace: "pre-line", mb: 2 }}
        >
          {item.description}
        </Typography>

        {item.sold ? (
          <Button variant="contained" disabled sx={{ mt: "auto" }}>
            Sold
          </Button>
        ) : item.buyUrl ? (
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: "auto" }} // Keep buttons aligned when descriptions differ
            href={item.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Buy ${item.title}`}
          >
            Buy Now
          </Button>
        ) : (
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: "auto" }}
            href="/contactus-page"
            aria-label={`Ask about ${item.title}`}
          >
            Ask About This Item
          </Button>
        )}
      </Box>
    </Box>
  );
};

const ShopList = ({ items }: { items: ShopItem[] }) => {
  // Available items first, sold items at the end
  const sorted = [...items].sort((a, b) => Number(a.sold) - Number(b.sold));

  return (
    <Box sx={{ px: 2, py: 4 }}>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: "bold", color: "text.primary", mb: 1 }}
      >
        Shop
      </Typography>
      <Typography variant="body1" sx={{ textAlign: "center", color: "text.secondary" }}>
        Gear and merch from Red Tails Outdoors
      </Typography>

      {sorted.length === 0 ? (
        <Typography
          variant="h6"
          sx={{ textAlign: "center", color: "text.primary", mt: 4 }}
        >
          New items are on the way. Check back soon!
        </Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 4,
            mt: 4,
          }}
        >
          {sorted.map((item) => (
            <ShopCard key={item.id} item={item} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default ShopList;
