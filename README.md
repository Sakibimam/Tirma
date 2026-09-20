# TIRMA

Single-origin Indian tea, sold by the harvest. Next.js 16 · TypeScript · Tailwind.

## The design

Warm, photographic, and built around the hills the tea comes from. A
photograph opens the page; the shop sits directly beneath it, so nobody has
to scroll past a manifesto to buy tea.

- **Cream, garden green, terracotta.** `#FBF7F0` paper, `#2F4A36` garden
  green, `#B5643C` clay — the colour of a kulhad and of the red earth between
  tea rows. Defined in `tailwind.config.js`.
- **Fraunces and Karla.** Fraunces is a variable serif run with its `SOFT`
  and `WONK` axes up, which rounds the terminals and swaps in the softer
  alternates; that is what keeps it warm rather than sharp and editorial.
  Karla is a humanist sans with some character, not another neutral grotesque.
- **No monospace anywhere.** An earlier build set every label in mono, which
  is most of why it read as a dashboard rather than a shop.
- **Soft corners and soft light.** `rounded-card` / `rounded-plate`, and two
  gentle shadows (`lift`, `lift-lg`). Nothing has a hard 90° corner.
- **One curve.** `cubic-bezier(0.22, 1, 0.36, 1)` on everything. Cards lift
  3px and their photo scales 4.5% on hover; that is the extent of the motion.
- **Photography does the work.** See `PHOTOS.md` for the image inventory,
  licensing and the swap-in checklist.

Everything honours `prefers-reduced-motion`.

## Content rules

Copy is specific rather than lyrical, because specifics are what a customer
can check:

- State the real elevation. Assam is a lowland tea (45–120 m) and the site
  says so, rather than borrowing a mountain.
- Name the flush and the month, not the year.
- Explain mechanisms — why blue tea turns violet, why milk goes in after the
  boil — instead of asserting quality.
- No health or medical claims anywhere.

## Structure

```
app/
  page.tsx            home — Hero, ShopRange, Gardens, Standards, StarterBox, Reviews, JournalTeaser
  tea/                shop grid and /tea/[slug] detail
  brewing/            four methods, and /brewing/[slug]
  journal/            long-form notes, and /journal/[slug]
  about/ terms/ checkout/ orders/ payment/
components/
  Hero.tsx            full-bleed garden photograph and the one-line pitch
  TeaCard.tsx         the product card, used by every grid on the site
  ShopRange.tsx       the shop, directly under the hero
  TeaGrid.tsx         filterable catalogue (client; Suspense-wrapped by the route)
  TeaDetail.tsx       product page — gallery, size picker, brew guide
  Gardens.tsx Standards.tsx StarterBox.tsx Reviews.tsx
  JournalTeaser.tsx Masthead.tsx Footer.tsx
lib/teaData.ts        the whole catalogue, recipes, journal, testimonials
types/index.ts        Product, Liquor, Recipe, JournalPost, Order
```

Adding a tea means adding one entry to `productsData`. The home page shows the
first six non-`Sets` teas; everything appears on `/tea`.

## Running it

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Known gaps

- Checkout, orders and the auth modal are front-end mocks; there is no payment
  gateway or backend wired up.
- `.eslintrc.json` is the legacy format and ESLint 9 wants a flat
  `eslint.config.js`. `npm run lint` needs migrating.
- **All photography is free-licensed stock, not yours.** It is legally clean
  (Pexels licence, commercial use, no attribution) but generic. `PHOTOS.md`
  lists every file, what it stands in for, and the priority order for
  replacing it. Start with the blue pea colour change.
- Legal copy in `/terms` is plain-language and deliberately modest, but it has
  not been reviewed by anyone qualified.
