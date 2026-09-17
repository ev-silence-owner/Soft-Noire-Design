**"**Soft-Noir — design system

Soft-Noir is the visual and behavioural contract of **SILENCE / PatternLens**: a mental studio whose first screen is sixty seconds of nothing. It is not a dark mode. It is a deterministic contract for protecting perception — low chromatic contrast, sufficient luminance contrast, and every colour, timing and proportion derived from φ = 1.618033988749895 or labelled \[T\] theoretical / \[E\] empirical / \[M\] modeled / \[H\] owner directive.

Motto: **„Cisza, która pokazuje Twój rytm." / "Silence that shows your rhythm.**

Violating a hard law fails compliance gate #8 (`adr-002-compliance`) and stops the release.

## Products in this system

| Surface | What it is | Kit |
| --- | --- | --- |
| PatternLens onboarding | `EKRAN_ZERO → WELCOME → INTENT → JITAI → FIRST_PULSE_TAP → CONSENTS → PLAN_PERMISSIONS` | `ui_kits/patternlens-onboarding/` |
| PatternLens app | Home dashboard (4 visual modes), φ-Garden, Paywall | `ui_kits/patternlens-app/` |
| S-02 Ekran Zero | FSM 60 000 ms, 4 fazy, 4 motywy, audio opt-in | `ui_kits/ekran-zero/` |
| Rolki motywów | Jeden rytuał w 4 kolorystykach + profile audio | `ui_kits/rolki-motywy/` |
| Dashboard | Zero Screen (6 stanów × 2 receptywności) + patternslab.app Health Grid | `ui_kits/dashboard/` |
| Nowy świat | W-01 … W-10: Genesis, Pulse, Garden, NDS-Gate, DSP-23, TDL-φ, Signal-Commons, Protocol Zero, Governance, Second World | `ui_kits/swiat-w/` |
| Command Center (B2B) | Fleet MFI, compliance panel, research views | **not built** — no source screens were available |

## Sources

- GitHub: **https://github.com/silence-ecosystem/silence** — read `04_packages/@silence/phi-tokens/src/phi-tokens.css` (token SSoT), `05_apps/patternlens-entry-gate/` (entry gate, garden, auth), `01_governance/` (canon documents). Explore it further before building anything new for this brand; the governance folder resolves conflicts this file only summarises.
- Uploaded canon: `SOFT_NOIR_MENTAL_STUDIO_v1.0.md`, `KANON_NAZEWNICTWA_SSOT_v1.0.3.md`, `SPEC_ELEMENT_CISZY_GOLDEN_SILENCE_ENTRY.md`, `MOTTO_I_OPIS_KANONICZNY_v1_0.md`, `DRAFT EKRANÓW.md`, `ekran-zero.css`, `silence-entry.css`, `phi-tokens.css`.
- Not supplied: font binaries, logo files, DELIVERED screenshots (S-01–S-03, S-07, S-08), the TypeScript components listed in the brief (`GoldenSilenceEntry.tsx`, `phiJitaiEngine.ts`, `CompliancePanel.tsx`, …) — those uploads did not arrive in the project.

## Hard laws

1. Accent is `#C9A84C`. `#D8A45A` is DRIFT (NC-092), as are `#D4AF37`, `#FFD700`, `#B8860B`, `#ffd27a`, `#c9a55a`.
2. No `#000000`, no `#FFFFFF`, anywhere.
3. Depth comes from luminance tiers scaled by √φ (1.272), never from cast shadows.
4. Reduced motion = `0.01ms !important`, opacity-only transitions, plus a runtime toggle independent of the media query.
5. No component may contain a literal colour or duration — only `var(--token)`.
6. Breakpoints are 618 / 1000 / 1618 px. Anything else needs an ADR.
7. Body text ≥ 16px, line-height ≥ 1.618, touch targets ≥ 44×44 px, contrast ≥ 4.5:1.
8. No gamification, no streaks, no emoji, no charts of the person, no red banners. The single sanctioned red in the whole system is `--signal-critical` #b85c5c, and only on the B2B patternslab.app surface (`HealthBadge`, `HealthGridCell`); ritual surfaces carry no red at all.

## CONTENT FUNDAMENTALS

**Voice: observation-only, structural (S11).** The interface reports what happened and in what rhythm. It never says what it means about the person.

- Structure of every insight: **observation → option → agency**. "Trzy obserwacje wróciły do tego samego obiektu. Możesz otworzyć obiekt albo zostawić to tak."
- **Person**: second person, plain and unhurried ("Zaczynasz od jednej obserwacji"). The system never speaks as "I", never as a companion or coach.
- **Casing**: sentence case in body and display copy. UPPERCASE only in monospace utility labels (`SIGNAL_FLOW`, `ENTRY 6472 MS`), never in prose. Title Case is not used.
- **Punctuation**: full stops on statements, no exclamation marks, no ellipses as suspense. Numbers keep their exact φ derivation (1618 ms, not "about 1.6 s").
- **Emoji: never.** Not in UI, not in docs, not in commit messages.
- **Forbidden words** (blocked by `s11-check`): AI, terapia/therapy, zdrowie, diagnoza, stres, lęk, relaks, mindfulness as a category, "normal", "trigger", streak, leaderboard, campaign, drip, any promise of an outcome.
- **Disclaimer, verbatim**: "Non-clinical behavioral protocol. No diagnosis. No therapy."
- **Failures are never named as failures**: a failed sync renders as "Synchronizacja…". A critical alert never interrupts; it routes to a Zona Oddechu.
- **Prices** come only from DISPLAY_PRICES: 49 zł / 11.99 € / $12.99 / £10.99, yearly 46.80 €. Never a literal invented at the call site.
- **Bilingual**: product copy is Polish first, App Store copy exists in PL and EN. Keep both registers equally plain.

## VISUAL FOUNDATIONS

**Rozstrzygnięcia kanoniczne wdrożone.** Ion Haze: akcent dekoracji #8EC0C7, tekst #E6ECF5 / #A7B0C2 / #6B7487 (konflikt #3 zamknięty). Wszystkie cztery motywy mają identyczne tiery tekstu — zmienia się wyłącznie odcień powierzchni, nie jasność, więc kontrasty 14.5 / 9.2 / 4.58:1 są niezmienne. `--surface-zero` #121417 używane WYŁĄCZNIE jako pre-entry Ekranu Zero; po wejściu w dashboard motyw ustala własną paletę (konflikt #1 zamknięty).

**Motywy i akcenty (NC-092), rozdział wdrożony w każdym komponencie.** `--accent-brand` #C9A84C to akcent MARKI i nie zmienia się nigdy z motywem: `Button variant="signal"`, zaznaczona `ChoiceCard`, włączony `Switch`, wypełnienie `Slider`, kropki `PulseTapSurface`, akcja `InsightCard`, bieżący punkt `RhythmLine`, liczba `SummaryRow`, krawędź `NextWindowHint`, akcja `ViewState`, szyna `HealthGridCell`, numery `CrisisBanner`, focus ring. `--accent-theme` (#7FB0B8 / #6B8F96 / #C49A6A / #8EC0C7) to wyłącznie dekoracja powierzchni rytuału i zmienia się z motywem: `GoldenRectangle`, `BreathLine`, `GoldenClock`, `ClusterPulse`, `SeedIndicator`, cząstki i spirala Ekranu Zero. Zmiana motywu nie zmienia layoutu, timingów ani typografii.

**Colour.** One obsidian continuum: five surface tiers whose luminance scales by √φ (#0F0F14 → #1A1A20 → #25252E → #32323E → #3F3F4F), plus `--phi-surface-zero` #07070F for the pre-entry screen and #121417 for Ekran Zero itself. Text is three tiers (#E8E4DF/#E8E8F0, #CBD5E1, #ADADBD) with the muted tier sitting exactly on the 4.58:1 AA boundary against Tier 0. Gold #C9A84C is the only accent and appears as a *signal*: focus ring, the current point on a rhythm line, one CTA, a critical JITAI/PCS alert. Four themes (Ember Silence, Graphite Drift, Midnight Paper, Ion Haze) change surface hue, secondary accent and texture; geometry and gold never change. Three states (Calm/Focus/Flow) modulate brightness, saturation and the motion ceiling — 4 themes × 3 states × 4 visual modes = 48 deterministic combinations from one token set.

**Type.** STIX Two Text for display and ritual copy (letter-spacing 0.0382em), IBM Plex Sans for body (16px floor, line-height 1.618, letter-spacing 0.02em), IBM Plex Mono for every number, flag, event name and HUD label (13px, letter-spacing 0.18em, uppercase). Sizes are 16 × φⁿ only: 16 / 25.888 / 41.887 / 67.773. No `clamp()`, no intermediate steps.

**Spacing and layout.** Two scales, namespaced apart: `--space-phi-*` (φⁿ rem) for vertical rhythm, `--space-fib-N` (3/5/8/13/21/34/55/89/144/233 px) for geometry. The canonical composition is 61.8% content / 38.2% structural silence — the empty part is content, not leftover. Key anchor: the golden point at 61.8vw × 38.2vh. Signal rectangles are 1:1.618 (144:233 in px).

**Backgrounds.** Flat surface tiers, no imagery, no photography, no illustration. The only permitted background events are a radial vignette (`radial-gradient(ellipse at 61.8% 38.2%, transparent 38.2%, rgba(13,15,18,0.618) 89%)`), a per-theme texture at very low opacity (film grain, vertical band, paper noise, radial haze), and the Fibonacci construction spiral at opacity 0.0618. Gradients exist only as these vignettes — never as a decorative brand gradient, never chromatic.

**Animation.** Everything is a φ duration: 62 / 162 / 262 / 424 / 685 / 1094 / 1618 / 2618 / 4236 / 6854 ms. Easing is `cubic-bezier(0.382, 0, 0.618, 1)` (control points φ⁻² and φ⁻¹) with decel/accel/settle variants. Breath keyframes always hold their peak between 38.2% and 61.8% of the cycle. Amplitudes are tiny: scale 1.004–1.02, never more. Zero bounce, zero overshoot, zero flash, zero strobe, zero confetti, no animation on text ever. Touch stops motion (somatic grounding). Reduced motion is a hard law, not an enhancement.

**Hover / press / focus.** Hover raises one luminance tier or scales by 1.018 — never a colour change, never a shadow. Press does not shrink or bounce; it changes the border to `--border-gold`. Focus is always `outline: 2px solid var(--accent-gold); outline-offset: 2px`. Disabled = opacity 0.382 (φ⁻²).

**Borders and shadows.** Borders carry all the structure: 1px at 8% / 12% / 18% white-tint. There is **no drop-shadow system** — depth is luminance. The single legal shadow is an inner glow on gold forms: `inset 0 0 21px color-mix(in srgb, var(--accent-gold) 3.82%, transparent)`.

**Radii.** 4 / 8 / 12 / 18 px, and 21px (φ² × 8) for the ritual form. Nothing is square-cornered; the ND contract forbids sharp corners.

**Cards.** Surface one tier above the page, 1px `--border-subtle`, radius 21px, padding `--space-phi-1`, no shadow, no left-border accent stripe. A selected card gains a gold border and a gold title — never a fill, never a checkmark.

**Transparency and blur.** Used in exactly two places: the garden HUD pill (`hsla(220,8%,8%,0.75)` + `backdrop-filter: blur(12px)`) and the Screen Zero phase blur (1 → 4px on the form). Nothing else is glass.

**Fixed elements.** The sync badge is always visible. The garden HUD is pinned bottom-centre. Screen Zero's form is absolutely anchored at the golden point and does not respond to scroll — the screen does not scroll at all.

## ICONOGRAPHY

There is **no icon set in this product**, and that is a deliberate position, not a gap. The repository ships no `.svg` assets and no icon font; the audited screens use, in order of preference:

1. **Geometry as icon** — a 1px gold rectangle, a 3px dot, a 2px line, a circle. The Screen Zero rectangle and the garden's plant circles are the brand's entire visual vocabulary.
2. **Monospace text labels** where other products would use an icon: `SIGNAL_FLOW`, `F(5)`, `RITUAL CLOSED`, `ENTRY 6472 MS`. The garden HUD is text, not glyphs.
3. **State by colour and opacity** — a 5px dot in `--state-ok` / `--state-attention` / `--text-muted` is the whole sync indicator.

Emoji are forbidden. Unicode symbols are used only where they are typography, not decoration: φ, ≥, ·, —. If a future surface genuinely needs pictographic icons, pick a 1px-stroke outline set (Lucide is the closest CDN match to the 1px gold stroke used here), load it from CDN, tint it `--text-muted`, and record the addition as an NC — do not draw one-off SVGs.

**No logo exists.** No mark, wordmark file or app icon was present in the sources. Everywhere a logo would go, set the product name in STIX Two Text with `letter-spacing: 0.0382em` (see `guidelines/logo-absence.card.html`). Do not draw or approximate a mark.

## Index

- `styles.css` — the single entry point consumers link. `@import` list only.
- `tokens/` — `phi`, `colors`, `typography`, `spacing`, `motion`, `radii`, `layout`, `themes`, `states`, `a11y`, `fonts`.
- `guidelines/` — 27 specimen cards (w tym `theme-matrix.card.html`: wszystkie 24 komponenty × 4 motywy obok siebie): colours, themes, type, spacing, layout, breakpoints, radii, motion, states, voice, Screen Zero, wordmark.
- `components/core/` — Button, Switch, Slider, ChoiceCard.
- `components/ritual/` — BreathLine, GoldenRectangle, PulseTapSurface, GoldenClock.
- `components/signals/` — QuietCard, BareNumbers, RhythmLine, ClusterPulse, InsightCard.
- `components/status/` — SyncBadge, CrisisBanner, ConsentRow, SeedIndicator, PriceRow.
- `components/dashboard/` — ObservationCount, SummaryRow, NextWindowHint, ViewState, HealthBadge, HealthGridCell.
- `ui_kits/patternlens-onboarding/` — the seven-step onboarding flow.
- `ui_kits/patternlens-app/` — Home / Garden / Paywall.
- `ui_kits/ekran-zero/` — S-02 Ekran Zero UI KOMPLET (FSM + motywy + audio + reduced-motion toggle).
- `ui_kits/rolki-motywy/` — cztery rolki 1080×1920, wariacje kolorystyki ubrań, sloty na kadry.
- `ui_kits/dashboard/` — wszystkie karty dashboardu: Zero Screen w stanach FIRST_RUN / EMPTY_TODAY / SIGNAL_PRESENT / OVERLOADED / OFFLINE / ERROR / LOADING, w wariantach receptywności low i high, oraz powierzchnia B2B patternslab.app (Health Grid, drilldown, nawigacja modułów).
- `audio/noiseEngine.js` — cztery profile audio (WebAudio, opt-in, crossfade 2618 ms).
- `tokens/audio.css` — parametry audio jako tokeny. `tokens/themes.css` — pełne palety 4 motywów + rozdział akcentu MARKI od akcentu motywu.
- `ui_kits/swiat-w/` — dziesięć ekranów drugiego świata, we wszystkich czterech motywach.
- `guidelines/BRIEF_BLUEPRINT_STRATEGIA.md` — dokument nadrzędny: brief, architektura czterech warstw, rozdział akcentów, mapowanie intencji (NC-093), rejestr 37 powierzchni, strategia trzech etapów z progami, ryzyka strukturalne.
- `guidelines/RAPORT_RECENZJA.md` — recenzja stanu systemu: 4 red flags, 5 attention, 6 approved, 6 rekomendacji, 4 punkty decyzyjne, 8 wytycznych wykonawczych.
- `guidelines/RAPORT_EKRAN_ZERO_DASHBOARD.md` — raport projektowy Ekran Zero → HomeDashboard: 7 pytań badawczych, kanon zmapowany na Apple Design Awards 2024–2026, Awwwards, FWA, CSSDA, benchmark konkurentów (Co–Star, The Pattern, How We Feel, Endel, Opal, Portal, Balance, Rise), 12 decyzji ZGODNE / KONFLIKT / WARUNKOWE, rekomendacje etapowe z progami, caveaty i korekty faktograficzne. Skrót w `guidelines/decisions.card.html`.
- `github.md` — upstream association and screen map. `SKILL.md` — portable skill wrapper.

### Intentional additions

- **Button, Switch, Slider, ChoiceCard** are not named as components in the canon, but the specified screens (JITAI opt-in, damping slider, density choice, FLOW/FOCUS/CALM cards, single CTA rule) cannot be built without them. They are deliberately thin.

### Known gaps

- Font binaries are loaded from Google Fonts (STIX Two Text, IBM Plex Sans, IBM Plex Mono are all available there and are the correct families). Self-host before production.
- The Command Center / B2B surfaces, Object Detail, Objects List, History and Patterns screens are specified in `DRAFT EKRANÓW.md` but no implementation or screenshot exists to recreate from — they are not built here.
- The generative `PlantSpiral` SVG of the φ-Garden was not copied; the kit uses placeholder circles.
- \~\~Mapowanie intencja→motyw \[H\]\~\~ — **ZATWIERDZONE 2026-08-17 jako NC-093**, wdrożone w `tokens/intent.css`: FOCUS→Graphite, FLOW→Ion, RESET→Midnight, GROW→Ember, OBSERVE→Graphite, domyślny Ember. Motyw jest sugerowany (`--intent-theme-suggest: 1`), nigdy wymuszany (`--intent-theme-force: 0`); nadpisanie użytkownika jest trwałe.
- **Konflikt gainów audio**: DS_UI_KOMPLET podaje 0.20 / 0.20 / 0.15 / 0.12, DS_DASHBOARD_B2C (nowszy) 0.30 / 0.25 / 0.20 / 0.15. Wdrożono wartości DS_DASHBOARD_B2C; master cap 0.25 pozostaje twardy. Wymaga wpisu NC.
- Kadry sylwetek w rolkach to sloty `<image-slot>` — nie generuję zdjęć. Prompty generacyjne są w każdej rolce do skopiowania.
- **Konflikt tokenów patternslab.app** — spec B2B podaje `border-radius: 0`, tiery #0a0b0c→#54606d, `--text-primary #f5f5f5` i `--color-accent-tertiary #D4AF37` (**#D4AF37 jest na liście DRIFT w NC-092**), oraz `--space-phi-1 = 8×1.272` zamiast 1.618rem. Kit renderuje na tokenach Soft-Noir; zachowana jest tylko jedna odrębność — kwadratowe narożniki na HealthBadge i HealthGridCell. Reszta wymaga wpisu NC.
- Kadry sylwetek w rolkach to sloty `<image-slot>` — nie generuję zdjęć.
