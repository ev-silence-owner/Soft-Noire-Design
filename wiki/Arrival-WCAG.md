# Sixty Seconds of Nothing

**Optional arrival state. Not a timed gate.**

> Silence remains available for sixty seconds; entry remains available immediately.

Do not say: the user must wait 60 seconds.  
Say: for 60 seconds the system initiates no demand.

[Live demo](./index.html)

---

## Role

The screen enacts Soft Noire: the system does not take attention before the user gives it. It must not:

- ration access behind a clock
- force a response in a fixed window
- use colour, animation, or a subtle gesture as the only way in
- hide a control in the name of “nothing”

Sixty seconds is a **brand hypothesis**. Compare 0 s, 15 s, 30 s, 60 s, and user-controlled. Measure skip rate, irritation, perceived calm, comprehension, and downstream completion. Do not treat 60 as a scientific optimum.

---

## WCAG 2.2 requirements

| Area | Criterion | The screen must | Definition of done |
|---|---|---|---|
| Time | 2.2.1 Timing Adjustable — A | No time limit that forces a transition, a decision, or a lost function | Enter now, stay longer, or skip, with no penalty |
| Motion | 2.2.2 Pause, Stop, Hide — A | Prefer no auto-motion; if it runs > 5 s, provide stop/pause/hide | No loops, pulse, marquee, auto-scroll, ambient animation |
| Keyboard | 2.1.1 Keyboard — A | Every action from the keyboard | Tab to **Enter when you choose**; Enter and Space activate |
| Focus | 2.4.7 Focus Visible — AA | Focus always visible | Never hue-shift alone |
| Focus | 2.4.11 Focus Not Obscured — AA | Focused control not covered by overlay, gradient, or fixed chrome | Visible at zoom, on-screen keyboard, small viewports |
| Focus | 2.4.13 Focus Appearance — AAA (quality bar) | Meet voluntarily | ≥ 2 CSS px ring, 3:1 vs unfocused |
| Pointer | 2.5.8 Target Size — AA | Hit area ≥ 24 × 24 CSS px | Soft Noire: ≥ 44 × 44 px for touch |
| Colour | 1.4.1 Use of Color — A | Ready / skip / active not colour-only | Text, focus, position, shape |
| Text contrast | 1.4.3 Contrast Minimum — AA | Standard text ≥ 4.5:1 | Measure **Enter when you choose** on the real fill |
| UI contrast | 1.4.11 Non-text Contrast — AA | Controls, borders, focus, key icons ≥ 3:1 | Outline and ring do not vanish into graphite |
| Reflow | 1.4.10 Reflow — AA | Works at 320 CSS px without two-axis scroll | No clipped button or copy |
| Text spacing | 1.4.12 Text Spacing — AA | Increased spacing does not break layout | No overlap, overflow, or cut text |
| Reduced motion | 2.3.3 Animation from Interactions — AAA | Interaction-driven motion can be turned off | `prefers-reduced-motion` → instant |
| Name, role, value | 4.1.2 — A | Control has a clear name and role | “Enter System Silence, button” |
| Status | 4.1.3 Status Messages — AA | If a 60 s state change exists, announce it programmatically | `aria-live="polite"` for a single discreet line, never a countdown |

The most Silence-aligned choice is **no automatic animation**.  
“Wait 60 seconds to enter” fails 2.2.1. This demo does not auto-advance.

---

## Accessible ritual

| Need | Requirement |
|---|---|
| Enter immediately | Visible **Enter when you choose** |
| Screen reader | “System Silence is ready. Continue when ready.” |
| Reduce Motion | No ambient fade loops, particles, animated marks |
| Increase Contrast | Stronger control edges and focus ring |
| Keyboard | Tab to continue; Enter / Space activate |
| Returning user | “Do not show this moment again” or a remembered choice |
| Time-sensitive use | Ritual must not block a critical function or a deep link |

---

## Recommended screen

```text
┌──────────────────────────────────────────────┐
│                                              │
│                    ◌                         │
│                                              │
│              System Silence                  │
│                                              │
│     Nothing requires your attention now.     │
│                                              │
│         [ Enter when you choose ]            │
│                                              │
│              Skip this moment                │
│                                              │
│     ☐  Do not show this moment again         │
│                                              │
└──────────────────────────────────────────────┘
```

Visible copy stays minimal. Accessibility behaviour must not.

| Element | Behaviour | Access |
|---|---|---|
| Background | `silence-void`, static, opaque | No video, noise, particles, moving gradient, autoplay |
| Mark | Static, low salience, decorative | `aria-hidden="true"` |
| Phrase | “Nothing requires your attention now.” | ≥ 4.5:1; not ultra-light |
| Primary | **Enter when you choose** | Native `<button>`, ≥ 44 × 44 px, visible focus |
| Secondary | **Skip this moment** | Not buried in a menu |
| Preference | **Do not show this moment again** | Labelled checkbox; state programmatic |
| After 60 s | No forced change | No per-second announcement, no countdown |
| Escape | Back / close if this is a true modal | Do not trap focus otherwise |

Visible default:

```text
System Silence
Nothing requires your attention now.
Enter when you choose
Skip this moment
```

Screen reader:

```text
System Silence is ready. This screen stays open as long as you need.
Button: Enter when you choose.
Button: Skip this moment.
```

Never: “59 seconds left”, “Wait to begin”, “Do not touch the screen”, “Unlock after a minute”. Those turn silence into a clock.

---

## States

| State | Trigger | Visible effect | Access |
|---|---|---|---|
| `arrival` | Open | Static canvas, no flash | Focus to `<main>` or heading — not a hidden control |
| `quiet` | 0–60 s and beyond | No automatic change | No live countdown, no auto-advance |
| `ready` | User chooses enter | Fade to interior | Pressed, then route |
| `skip` | User skips | Route; persist only if the checkbox is on | One status confirmation, not a loop |
| `reduced-motion` | OS or product setting | Instant state change | Same function without motion |
| `high-contrast` | OS or product setting | Stronger type, borders, ring | Controls ≥ 3:1, text ≥ 4.5:1 |
| `large-text` | Dynamic Type / zoom | Stack, larger buttons, more vertical space | No clip, no horizontal scroll |

| Element | Default | `prefers-reduced-motion` | Forbidden |
|---|---|---|---|
| Content enter | Optional fade 150–200 ms | Instant | Zoom, scale-in, blur reveal |
| Button press | 100–150 ms tonal change | Instant | Ripple, burst, spark, metallic flash |
| To the product | Fade 180–250 ms | Instant / 0–50 ms | Slide, parallax, camera |
| Nothing | Static | Static | Pulse, breath, rotation, cursor loop |
| Mark | Static or absent | Static or absent | Orb, orbit, particles, screen noise |

---

## Colour on this screen

| Element | Colour | Rule |
|---|---|---|
| Canvas | `#0A0A0B` | Root |
| Heading | `#F2F3F5` | High contrast |
| Body | `#C4C7CE` | Design and verify ≥ 4.5:1 |
| Secondary | `#969AA3` | Never for the critical instruction |
| Primary surface | `#C6A15B` | This screen’s single gold action |
| Primary label | `#0A0A0B` | ≥ 4.5:1 on the real fill |
| Secondary | transparent + `#D7D9DE` | Border ≥ 3:1; label ≥ 4.5:1 |
| Focus ring | `#F2F3F5` | ≥ 3:1 vs neighbour; 2 px outline |
| Gold marker | `#C6A15B` | Accent only — never the sole interactivity cue |

Do not put a gold focus ring on a gold button. Use a silver-white ring.

```css
:focus-visible {
  outline: 2px solid #F2F3F5;
  outline-offset: 4px;
  box-shadow: 0 0 0 1px #0A0A0B;
}
```

The focus ring is a navigation channel, not decoration.

Pairings in this file are **unverified** until measured in the shipped context (opacity, overlay, disabled, zoom, Increase Contrast, real font rendering).

---

## Acceptance tests

| Test | Procedure | Pass |
|---|---|---|
| No wait | Open and activate **Enter when you choose** at once | Product, no 60 s lock |
| Stay | Leave the screen 2–5 minutes | Nothing expires, resets, or nags |
| Keyboard | Tab, Shift+Tab, Enter, Space, Esc only | All actions reachable; focus visible and unobscured |
| Screen reader | VoiceOver, TalkBack, or NVDA | Heading, description, roles, names; no per-second chatter |
| Reflow | 320 CSS px or 200% zoom | No clipped text/button; no horizontal scroll |
| Text spacing | 1.4.12 spacing | No overlap, no hidden function |
| Contrast | Text, label, outline, focus, checkbox | Text ≥ 4.5:1; UI/focus/border ≥ 3:1 |
| Grayscale | Drop colour | Primary, secondary, checkbox still differ by text, border, hierarchy |
| Reduce Motion | Enable | No motion; flow complete |
| Increase Contrast | Enable | Focus and edges remain unambiguous |
| Returning user | Check “Do not show again”, leave, return | Ritual skipped; restorable in settings |
| Deep link | Open a direct link to a real task | Arrival does not capture the flow |

WCAG 2.2 does not certify screens. Compliance is an evaluation of the whole implementation.

---

## Evidence still required

- Contrast of every pair in the final context
- 0 / 15 / 30 / 60 / user-controlled arrival comparison
- φ spacing at real breakpoints and large text
- No wellbeing, concentration, or outcome claim without a comparative study
