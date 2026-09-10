# Golden Silence Entry

First contact with PatternLens / Entry Gate. Not an onboarding slide. A **behavioural session zero**.

Duration flexible **30–60 s**. User decides when to leave. System suggests 30 s. Full cycle 60 000 ms. Accident lock: no exit before **10 000 ms**.

## Four phases (φ)

| Phase | Name | Duration (ms) | % | Breath cycle |
|---|---|---|---|---|
| 1 | Entry | 6 472 | 10.8% | 6 472 |
| 2 | Deepening | 10 472 | 17.5% | 10 472 |
| 3 | Silence | 32 360 | 53.9% | 16 944 |
| 4 | Return | 10 696 | 17.8% | 10 472 |

Boundaries: 0 → 6 472 → 16 944 → 49 304 → 60 000.

## Object

Single object: [GoldenRectangle](Ritual-components) 144:233, 1 px gold stroke, 21 px inner glow at 3.82% opacity, scale 1 → 1.013 → 1. Anchor `left: 61.8vw` / `top: 38.2vh`. Never fill. Never a logo inside.

[BreathLine](Ritual-components) sets tempo. Amplitude: entry 100%, deepening 76.4%, silence 47.2% (opacity .382), return 100%.

[GoldenClock](Ritual-components) orients in the day. Not a countdown. No remaining-time pressure.

## Copy

- After 1618 ms: **Pozwól sobie na ciszę**
- Silence phase: no text
- Return, ~3 s in: **Wracasz gotowa/gotów**

Tap after 10 s = conscious exit, not mind-wandering. No score.

After session: **Pozostałaś/eś w ciszy przez [X] sekund. To jest Twój punkt wyjścia.** Then thought category, then [Intent Selector](Ritual-components).

## Breath math

| Sub-phase | % of cycle | Transform |
|---|---|---|
| Inhale | 38.2% | scale 1.0 → 1.0X |
| Hold | 23.6% | hold |
| Exhale | 38.2% | 1.0X → 1.0 |

X: entry 1.012, deepening 1.008, silence 1.004, return 1.01. Easing `cubic-bezier(0.236, 0, 0.236, 1)`.

Reduce Motion: no breath, no spiral/rotation. Opacity and blur phases remain.
