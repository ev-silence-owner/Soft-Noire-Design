# Ritual components

Canon for Screen Zero and onboarding. One CTA per view, or none. Refusal is never visually weaker than acceptance.

## Button

```
<Button variant="quiet" />
```

Variants: `signal` (gold hairline), `quiet` (elevated surface), `bare` (no border). Disabled opacity **0.382**. Min height `--touch-min` (44 px).

## BreathLine

```
<BreathLine phase="deepening" />
```

Amplitude per phase: entry 100%, deepening 76.4%, silence 47.2% (opacity .382), return 100%. `aria-hidden` — decorative. Exempt from contrast audit in the silence phase **by design**.

## GoldenClock

```
<GoldenClock progress={0.618} />
```

Orientation in the day, not a countdown. No target, no remaining-time pressure. If `progress` omitted, uses time of day after mount (SSR-safe).

## GoldenRectangle

```
<GoldenRectangle width={144} cycle={6472} />
```

The single object of Screen Zero. Ratio **144:233** (Fibonacci). 1 px gold stroke. 21 px inner glow at 3.82% opacity. Scale 1 → 1.013 → 1. Anchor left 61.8vw / top 38.2vh. **Never fill it. Never add a logo inside it.**

## IntentSelector

```
<IntentSelector locked onIntent={(k) => …} />
```

SCR-02. Five intents in a 61.8 / 38.2 bento. Locked **1618 ms** (anti-impulse). Do not remove the lock.

| Key | Line |
|---|---|
| QUIET | Jedno tło. Jeden rytm. |
| RHYTHM | Pięć stuknięć. Równość. |
| CLUSTER | Serie z przerwami. |
| BARE | Tylko pomiar. Bez oprawy. |
| GARDEN | Karmi wzrost. |

`IntentKey` is not the theme mapping. Separate systems.

Rhythm / Cluster continue to Pulse Tap. Quiet / Bare / Garden continue to quiet.

## PulseTapSurface

```
<PulseTapSurface taps={3} elapsedMs={4236} onTap={register} />
```

First Pulse Tap of onboarding. Emits median ITI, ITI variance, CV, tempo drift, omission count and phase-lock — **never a score shown during tapping**. Gate opens after 4236 ms unless `gateOpen`.
