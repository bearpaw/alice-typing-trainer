# Alice Typing Trainer

A browser-based typing trainer for Alice-layout keyboards, with:

- An **ergonomic posture guide** to reduce wrist pain and carpal-tunnel risk.
- An **interactive Alice keyboard** that highlights the next key and flags split-sensitive keys (B, T, G, Y, H, N) where row-staggered muscle memory misfires.
- **Eight progressive lessons** — home row → full layout → split-sensitive drills → sentences.
- **Timed WPM/accuracy tests** with local history and a sparkline trend.

Everything runs client-side. No data leaves your browser.

## Live demo

https://bearpaw.github.io/alice-typing-trainer/

## Local development

Requires Node 20+.

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173/alice-typing-trainer/`).

```bash
npm run build      # type-check + production build into ./dist
npm run preview    # serve the built bundle locally
```

## Deploy to GitHub Pages (free)

This repo ships a GitHub Actions workflow ([`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)) that builds and publishes to GitHub Pages on every push to `main`.

One-time setup:

1. Create a **public** GitHub repo named `alice-typing-trainer` under your account.
   - If you want a different name, edit the `base` in [`vite.config.ts`](vite.config.ts) to match (`base: '/your-repo-name/'`) and update the favicon path in [`index.html`](index.html).
2. Push this project to the new repo's `main` branch.
3. On GitHub: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
4. Push any commit (or click **Run workflow** on the Actions tab). The site will publish at:

   ```
   https://<your-username>.github.io/alice-typing-trainer/
   ```

Subsequent pushes to `main` redeploy automatically.

## Project layout

```
src/
  App.tsx                      # HashRouter + nav shell
  pages/
    Home.tsx                   # landing
    Posture.tsx                # ergonomics guide
    Lessons.tsx                # lesson picker + runner
    Test.tsx                   # WPM test + history
  components/
    KeyboardView.tsx           # SVG Alice keyboard with highlight
    TypingArena.tsx            # prompt + keystroke capture + stats
    Sparkline.tsx              # history chart
  lib/
    aliceLayout.ts             # Alice key map
    lessons.ts                 # lesson + quote content
    wpm.ts                     # WPM/accuracy math
    storage.ts                 # localStorage wrappers
```

## Tips for adapting to Alice

The two hardest-to-retrain keys are almost always **B** and **N**:

- On row-staggered keyboards, many people hit **B** with the right index.
- On Alice, **B** belongs to the **left** index, and **N** to the **right** index.
- Lessons 5 and 6 drill exactly this.

Combine typing practice with the posture guide — form matters more than speed when you're building new muscle memory.
