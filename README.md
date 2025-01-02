This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Material UI

This all uses components from [Material UI](https://mui.com/) which contains their own default styles.
To set the default font, you need to set the values for the `typography` component in `src/app/components/ThemeProvider.tsx`:

```javascript
const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
        },
        typography: {
            "fontFamily": `"Alkatra", "system-ui", "sans-serif"`,
        }
    });
```

## Color Palette

To create color palettes for this site, I used [Canva's color palette generator](https://www.canva.com/colors/color-palette-generator/) and [Adobe Color](https://color.adobe.com/create/image) on the site logo to come up with suggestions:

Main theme:

- Outer space (`#23312F`)
- Pavlova (`#DBC49C`)
- Tradewind (`#5DAEA7`)
- Eastern Blue (`#20899E`)

**Second theme:**

- `#D90718`
- `#898C20`
- `#D9C077`
- `#A65C1C`
- `#0D0D0D` (or `#000000`)

**Dark mode theme:**

- `#022340`
- `#031C26`
- `#485922`
- `#898C20`
- `#0D0D0D`
