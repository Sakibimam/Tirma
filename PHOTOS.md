# Photography

Every image on the site is free-licensed stock standing in for a shot you
should eventually take yourself. All of it is **Pexels licence** — free for
commercial use, no attribution required, no sign-up. None of it carries
another brand's packaging or a watermark, which is the mistake in the
original image set (see the bottom of this file).

## How to swap one in

Photos are referenced in exactly two places, both in `lib/teaData.ts`:

```ts
photo: '/photos/leaf-black-dry.jpg',            // the main product shot
extraPhotos: ['/photos/chai-pour.jpg', ...],    // gallery, product page only
```

Drop your file into `public/photos/`, change the path, done. No component
touches a filename. Recommended: **1600 px on the long edge, JPEG, ~80%
quality**; the product grid crops to 4:5, so shoot with room top and bottom.

## The checklist

Priority 1 is what changes a buying decision. Do those first.

| # | File in use | What it stands in for | Priority |
|---|---|---|---|
| 1 | `cup-bluepea-lime.jpg` | **Your** blue pea mid-colour-change, lime going in. The single most persuasive shot in the range. | ★★★ |
| 2 | `leaf-black-dry.jpg` | Your second flush Assam dry leaf, macro, golden tip visible. The tip is the thing you are charging for. | ★★★ |
| 3 | `cup-saffron.jpg` | Your kahwa, pale gold, **with the threads visible in the cup**. The whole pitch is that the saffron is real. | ★★★ |
| 4 | `leaf-green-dry.jpg` | Your first flush green dry leaf. | ★★ |
| 5 | `chai-spices.jpg` | Your masala chai blend loose, so the cracked (not powdered) cardamom reads. | ★★ |
| 6 | `chai-kulhad.jpg` | Your everyday CTC made up as chai. | ★★ |
| 7 | `leaf-bowl.jpg` | The Index Box itself — four pouches, open, together. | ★★ |
| 8 | `garden-valley.jpg` | **Home hero.** A garden you actually buy from, landscape, mist if you can get it. | ★★ |
| 9 | `garden-munnar.jpg` | About-page header. Contour rows on a slope. | ★ |
| 10 | `plucker-india.jpg` | A picker at one of your gardens. Get permission and name them. | ★ |
| 11 | `plucking-hands.jpg` | Two leaves and a bud in hand, close. | ★ |
| 12 | `saffron-threads.jpg` | Your Pampore threads, loose on a neutral surface. | ★ |
| 13 | `bluepea-dry.jpg` | Your dried blossoms, whole. | ★ |
| 14 | `garden-hills.jpg` | Shop-page header. | ★ |
| 15 | `cup-green.jpg` `cup-green-table.jpg` | Green liquor in glass. | ★ |
| 16 | `chai-pour.jpg` | Chai being strained. | ★ |
| 17 | `garden-walk-india.jpg` `cup-bluepea-colour.jpg` | Secondary/editorial. | — |

## A note on the originals

Three files shipped in the first version of this site and had to be deleted:

- `tea1.jpg` — a **competitor's branded packshot** (ORINOKO, a Polish
  retailer), logo and pouch design visible. It was live on the blue pea
  product page.
- `tea3.jpg` — stock **watermarked** `www.alemeksyk.eu`, and a cocktail.
- `matcha*.jpg` — matcha, which you do not sell.

`tea2.jpg` and `tea4.jpg` remain in `public/images/products/` but are
unreferenced: generic stock, and `tea2` has matcha powder in frame. Safe to
delete whenever you like.
