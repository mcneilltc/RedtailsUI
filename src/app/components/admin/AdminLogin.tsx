"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Alert, Box, Button, TextField, Typography } from "@mui/material";

const AdminLogin = () => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    setLoading(false);
    if (res.ok) {
      router.refresh();
    } else if (res.status === 401) {
      setError("That password didn't work. Try again.");
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "Something went wrong. Please try again.");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ maxWidth: 360, mx: "auto", my: 6, px: 2, display: "flex", flexDirection: "column", gap: 2 }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold", color: "text.primary", textAlign: "center" }}>
        Shop Admin
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        label="Password"
        type="password"
        autoComplete="current-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        fullWidth
      />
      <Button type="submit" variant="contained" disabled={loading}>
        {loading ? "Signing in…" : "Sign In"}
      </Button>
    </Box>
  );
};

export default AdminLogin;
