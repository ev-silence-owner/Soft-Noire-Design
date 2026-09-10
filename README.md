<div align="center">

[![pre-launch](https://img.shields.io/badge/status-PRE--LAUNCH-8b5cf6?labelColor=0A0A0B&style=for-the-badge)](#status)
[![non-clinical](https://img.shields.io/badge/safety-NON--CLINICAL-14b8a6?labelColor=0A0A0B&style=for-the-badge)](#boundary)
[![umbrella](https://img.shields.io/badge/brand-UMBRELLA-C6A15B?labelColor=0A0A0B&style=for-the-badge)](#what-this-is)
[![perceptual](https://img.shields.io/badge/contract-PERCEPTUAL%20PROTECTION-969AA3?labelColor=0A0A0B&style=for-the-badge)](#three-theses)
[![wcag](https://img.shields.io/badge/bar-WCAG%202.2-3b82f6?labelColor=0A0A0B&style=for-the-badge)](./ARRIVAL.md)
[![license](https://img.shields.io/badge/license-MIT-72B89B?labelColor=0A0A0B&style=for-the-badge)](./LICENSE)

# SOFT NOIRE DESIGN

**A perceptual operating language for System Silence.**

Not a single app. Not a dark-mode variant. Not a skin to drop on a product.

It begins with sixty seconds of nothing: no demand, no prompt, no reward loop, no visual urgency.  
It protects attention through deterministic rules for luminance, chroma, timing, hierarchy and proportion.

[Wiki canon](./wiki/Home.md) · [What this is](#what-this-is) · [Theses](#three-theses) · [Architecture](#brand-architecture) · [Arrival](#sixty-seconds-of-nothing) · [Palette](#soft-noire-palette) · [φ](#φ-proportion-framework) · [Status](#status)

**Canon lives in [`wiki/`](./wiki/Home.md)** (GitHub Wiki git is empty until the first page is created in the UI; these files are the source).

</div>

Graphite, silver, restrained gold. Void `#0A0A0B`. Gold is commitment, not decoration.

---

## Recommendation

Move the brand story off “minimal dark interface” and onto a **Perceptual Protection System**.

**Sixty Seconds of Nothing** is an optional arrival state, not a timed gate.

> Silence remains available for sixty seconds; entry remains available immediately.

The safest WCAG 2.2 shape:

- no auto-advance after 60 seconds
- no countdown
- no ambient motion
- an immediate, named action: **Enter when you choose**
- keyboard and screen reader as first-class
- a remembered skip preference

[Open the arrival demo](./index.html) · [Full arrival contract](./ARRIVAL.md)

---

## What this is

Soft Noire Design is the **authorial umbrella** of System Silence. Its job is to write a deterministic contract for protecting perception: controlled stimuli, low chromatic contrast, sufficient luminance contrast, and proportion, time and colour derived from φ as a **design constraint**.

| It is | It is not |
|---|---|
| An authorial brand and methodology | A single application name |
| A perceptual operating language | A dark-mode preset |
| A contract for luminance, chroma, timing, hierarchy | An aesthetic to paste onto a product |
| Low chromatic contrast + high functional contrast | Low-contrast grey-on-black |
| φ as internal consistency | A scientific claim that φ improves focus or wellbeing |

Forbidden in consumer copy and contracts: diagnosis, therapy, medical device language, “scientifically proven golden ratio”, attention-extraction theatre, LIVE claims without HTTPS evidence.

---

## Three theses

1. **We do not extract attention.**
2. **We protect perception.**
3. **We make silence operational.**

System Silence does not compete for the user’s attention. It returns it.

The first screen — sixty seconds of nothing — is not an onboarding trick and not a loading screen. It is the system’s working manifesto:

- It does not ask for a decision on arrival.
- It does not dominate with a logo.
- It does not show a carousel of values, tooltips, or “welcome back”.
- It does not run a tutorial.
- It does not count down if the count would create pressure.
- It allows leave / skip through an available, non-aggressive control.
- It ends in a low-amplitude transition: **fade**, never zoom, slide, parallax or shimmer.

---

## Brand architecture

```text
Soft Noire Design
        │   umbrella — language, method, perceptual law
        ▼
System Silence
        │   product system that implements the law
        ▼
Sixty Seconds of Nothing     Silence Protocol     φ Proportion Framework
        │                         │                        │
        ▼                         ▼                        ▼
optional arrival ritual     motion, density,      spacing, type, duration
not a timed gate            interruption, state   as relations, not theatre
```

| Layer | Name | Role | What it says |
|---|---|---|---|
| Umbrella brand | **Soft Noire Design** | Authorial language, method, perceptual rules, design system | We design conditions for attention. |
| Product system | **System Silence** | Deterministic experience that implements Soft Noire | We protect perception from excess. |
| Entry ritual | **Sixty Seconds of Nothing** | First, repeatable contact with the philosophy | Before the system asks for attention, it returns it. |
| Visual layer | **Soft Noire Palette** | Graphite, silver, restrained gold, tonal elevation | Silence has structure. |
| Behavioural layer | **Silence Protocol** | Motion, timing, density, interruption, feedback, transitions | Stimuli are controlled, not accidental. |
| Rule layer | **φ Proportion Framework** | Grid, rhythm, spacing, durations, compositional hierarchy | Proportion is a system rule, not ornament. |

Product surfaces (PatternLens, Entry Gate, and others) **consume** this language. They are not the brand.

---

## Sixty Seconds of Nothing

A controlled presence state: the product is active, available, technically ready — and does not demand perception.

| It means | It does not mean |
|---|---|
| Zero content urgency | A black screen with no purpose |
| Zero gamification | A cinematic intro |
| Zero prompt debt | A splash or hidden loader |
| Zero movement without user intent | A countdown or patience test |
| A perceptible, available continue | A required ritual with no exit |

| Time | State | UI | Silence rule |
|---|---|---|---|
| 0–3 s | Arrival | Canvas `#0A0A0B`, no flash, no animated mark | Enter without a startle |
| 3–12 s | Orientation | Optional static, low-salience mark | Brand does not compete with perception |
| 12–45 s | Nothing | No prompts, cards, feed, rewards, auto-motion | The system asks for nothing |
| 45–60 s | Availability | Discrete **Enter when you choose** already present from 0 s | Agency is never delayed |
| After user intent | Transition | 180–300 ms fade; Reduce Motion → instant | The transition is not a show |

**60 seconds is a brand hypothesis**, not a universal UX constant. Compare 0 s, 15 s, 30 s, 60 s, and user-controlled. Never block a deep link or a time-sensitive task.

---

## Soft Noire Palette

**Low chromatic contrast. High functional contrast.**

Do not build hierarchy by shouting hue. Build it with luminance, surface, size, type weight, spacing, position, stroke, icon, copy, response time, and component state. Colour is one signal. Never the only one.

| Token | Hex | Function | Allowed use |
|---|---|---|---|
| `silence-void` | `#0A0A0B` | Absolute background / arrival | Root canvas, focus mode |
| `silence-black` | `#101114` | Base layer | App shell |
| `graphite-01` | `#17181B` | Default surface | Cards, navigation, panels |
| `graphite-02` | `#202125` | Raised surface | Popovers, sheets, dialogs |
| `graphite-03` | `#2A2C31` | Selected / pressed | Selected row, active group |
| `silver-muted` | `#969AA3` | Metadata | Timestamp, tertiary label |
| `silver-soft` | `#C4C7CE` | Secondary content | Supportive copy, secondary icon |
| `silver-core` | `#D7D9DE` | Structural emphasis | Dividers, selected outline, system icon |
| `silver-light` | `#F2F3F5` | Primary content | Body, headings |
| `gold-muted` | `#8F6E32` | Passive value cue | Fine keyline, low-salience marker |
| `gold-core` | `#C6A15B` | Deliberate commitment | **One** primary CTA or verified state |
| `gold-light` | `#E3C47A` | Hover / active detail | Hover edge, controlled accent |
| `success` | `#72B89B` | Positive outcome | Explicit success only |
| `warning` | `#D9A760` | Caution | Warning plus icon and copy |
| `danger` | `#D97777` | Error / destructive | Error plus icon and copy |
| `info` | `#8CAEDA` | Informational | Information plus copy |

| Material | System role | Means | Does not mean |
|---|---|---|---|
| Silver | Structure | Orientation, hierarchy, legibility | Reward, urgency, premium tier |
| Gold | Value earned or confirmed | Commitment, verified evidence, canonical item | Default CTA, error, unread badge, “AI magic” |
| Graphite | Container | Calm, separation, tonal elevation | Disabled opacity without semantics |
| Status | State | Success, warning, danger, info | Brand expression |

**Gold law.** On a standard screen, at most **one** dominant gold action. If three things are “important”, none of them gets gold automatically — fix the information architecture.

Good: a silver summary, one gold **Keep as a decision**, then a small verified marker.  
Bad: gold CTA + gold ring + gold badges + gold nav + gold KPIs + gold shimmer on an “AI insight”. That is value inflation, not quiet authority.

Auditable floors (not a certificate):

| Surface | Minimum |
|---|---|
| Standard text | 4.5 : 1 |
| Large / bold text | 3 : 1 |
| Controls, borders, icons, focus, meaningful graphics | 3 : 1 |
| Every status | colour **and** text / icon / shape |

Tokens live in [`tokens.css`](./tokens.css). Pairings must be measured in the real context — including opacity, overlay, zoom, and Increase Contrast. Do not treat the hex table as already passed.

---

## φ Proportion Framework

φ is a **constraint for internal consistency**, not a claim of objective superiority.

> Soft Noire uses a φ-derived proportional framework to make hierarchy, spacing and pacing internally consistent across the System Silence experience.

Do **not** write: “the golden ratio scientifically improves usability.” There is no comparative study in this repository that would support that sentence.

Base unit: 8 px. φ does not replace the grid, touch targets, or platform law. It sits on top as a layer of relations. Working sequence: **8 · 13 · 21 · 34 · 55**.

| Area | Rule | Example |
|---|---|---|
| Spacing | Relate gaps to the sequence | 13 internal, 21 section, 34 card |
| Type | Controlled editorial steps; respect Dynamic Type | 16 → 21 → 34 → 55 for display, not for UI labels |
| Layout | Primary ~61.8%, secondary ~38.2% when it helps | Desktop work / context split |
| Timing | Felt intervals, not magic numbers | 130 ms feedback, 210 ms surface, 340 ms modal |
| Density | Focus screens breathe more than utility | Focus 34; settings 13–21 |
| Progress | No spirals, overlays, or φ diagrams without use | Proportion is felt as rhythm, not drawn |

Touch targets and platform requirements outrank a pure proportional wish. 8/13/21/34/55 is a working system until it is tested at real breakpoints and large text.

---

## Silence Protocol

| Perceptual problem | System Silence rule | Visible effect |
|---|---|---|
| Competing accents | Gold only for value, confirmation, or conscious commitment | One decision point, not many fake CTAs |
| Saturation fatigue | Low chroma on the neutral scale; status used sparingly | Less visual alarm, semantics kept |
| Unreadable dark UI | Luminance contrast tokenised and audited per pairing | Soft Noire does not collapse into grey-on-black |
| Stimulation by motion | Motion is short, optional, feedback-driven, replaceable by fade | No ambient motion, shimmer, or temporal pressure |
| Onboarding pressure | Sixty seconds of non-demand | The user starts at their own pace |
| Proportional chaos | Spacing, density, type, rhythm, duration under φ constraints | Predictable rhythm, no golden-ratio theatre |
| Opaque intelligence | Every recommendation needs source, confidence, uncertainty, correction | Trust through transparency, not visual authority |

Reduce Motion: no zoom, scale, peripheral motion, looping fade, blur animation. Fade or instant.  
Increase Contrast: stronger borders and focus, never a second palette of panic.

---

## Award thesis (when evidence exists)

> System Silence is not a dark interface. It is a deterministic perceptual contract.

Designed under the Soft Noire Design umbrella, it replaces attention extraction with attention protection. Its first screen offers sixty seconds of nothing: a deliberate absence of prompts, rewards, urgency, and visual demand.

Every visible colour, interval, transition and proportion follows a constrained system intended to reduce unnecessary sensory load while preserving legibility, agency and accessibility.

A submission needs: the overload problem, the constraints, accessibility variants, prototype tests of the arrival (including skip), **results**, and what changed after research. This file is the contract. It is not the study.

---

## Status

```text
Umbrella brand        ██████░░░░  named — Soft Noire Design
Perceptual contract   █████░░░░░  written — not yet audited in product
Arrival ritual        █████░░░░░  optional demo in this repo
Palette               █████░░░░░  tokens published — pairings unmeasured
φ framework           ████░░░░░░  working sequence — untested at breakpoints
Silence Protocol      ████░░░░░░  rules written — not productised
LIVE / DNS            ░░░░░░░░░░  blocked
Clinical claims       ░░░░░░░░░░  forbidden
```

This repository does not certify WCAG, Apple HIG, or any outcome. Compliance is an evaluation of a whole implementation.

---

## In this repo

| File | Role |
|---|---|
| [wiki/](./wiki/Home.md) | Full canon: ritual, palette, φ, WCAG, tokens, surfaces |
| [index.html](./index.html) | Optional arrival demo — enter immediately, stay as long as you like |
| [ARRIVAL.md](./ARRIVAL.md) | WCAG 2.2 arrival contract and acceptance tests |
| [tokens.css](./tokens.css) | Soft Noire palette and φ spacing/timing tokens |
| [WALLPAPERS.md](./WALLPAPERS.md) | iOS/Android lock-home wallpapers + tap/signal (Rust) |
| [wallpapers/](./wallpapers/) | Download studio — measure taps on this device |
| [LICENSE](./LICENSE) | MIT for the files; marks stay authorial |

Related product surface: [entry-gate](https://github.com/ev-silence-owner/entry-gate) (Screen Zero). Entry Gate consumes this language. It is not the umbrella.

---

<div align="center">

`#0A0A0B` void · `#D7D9DE` silver · `#C6A15B` gold

We do not extract attention. We protect perception. We make silence operational.

PRE-LAUNCH · NON-CLINICAL · MIT

</div>
