# Soft Noire Palette

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

**Gold law.** On a standard screen, at most **one** dominant gold action. If three things are “important”, none of them gets gold automatically — fix the information architecture.

Silence themes (entry geometry, not a second palette): Ember Silence, Graphite Drift, Midnight Paper, Ion Haze. Geometry is identical; chroma of the form changes.

Auditable floors (not a certificate):

| Surface | Minimum |
|---|---|
| Standard text | 4.5 : 1 |
| Large / bold text | 3 : 1 |
| Controls, borders, icons, focus, meaningful graphics | 3 : 1 |
| Every status | colour **and** text / icon / shape |

Source: [Tokens](Tokens). Pairings must be measured in the real context.
