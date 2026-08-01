---
version: alpha
name: Lukulu Academy Dark Console
description: A premium dark Academy interface inspired by DAW consoles, waveform meters, and South African music-production learning.
colors:
  primary: "#07090C"
  surface: "#0E1319"
  surface-raised: "#151C24"
  text: "#F7F5F1"
  muted: "#C6CDD5"
  dim: "#A2ABB5"
  accent: "#FF946C"
  gold: "#F5C45C"
  border: "#3E4854"
typography:
  display:
    fontFamily: Oswald
    fontSize: clamp(2.8rem, 5.4vw, 5.25rem)
    fontWeight: 600
  body:
    fontFamily: Inter
    fontSize: clamp(1rem, .96rem + .16vw, 1.075rem)
    fontWeight: 400
  label-caps:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: 700
rounded:
  sm: 2px
  md: 4px
spacing:
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 40px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "13px 18px"
  card:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: 24px
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.text}"
    rounded: "{rounded.sm}"
    padding: "12px 14px"
---

# Lukulu Academy Dark Console

## Overview

The Lukulu Academy interface is a dark, readable learning platform for music-production students. It should feel like a neat DAW console: black graphite surfaces, warm signal accents, clear meters, and generous reading space.

## Colors

Use semantic roles before hex values. The interface must stay dark and high-contrast.

- **primary (#07090C)** — page background and deepest console areas.
- **surface (#0E1319)** — section surfaces.
- **surface-raised (#151C24)** — cards, panels and forms.
- **text (#F7F5F1)** — primary copy and headings.
- **muted (#C6CDD5)** — paragraph copy and secondary text.
- **dim (#A2ABB5)** — labels and metadata only; never long paragraphs.
- **accent (#FF946C)** — primary action and signal state.
- **gold (#F5C45C)** — secondary highlight and waveform warmth.
- **border (#3E4854)** — visible dark-mode separation.

## Typography

| Token | Font | Size | Weight |
| --- | --- | --- | --- |
| `display` | Oswald | `clamp(2.8rem, 5.4vw, 5.25rem)` | 600 |
| `body` | Inter | `clamp(1rem, .96rem + .16vw, 1.075rem)` | 400 |
| `label-caps` | Inter | `0.75rem` | 700 |

Body copy should stay at or above 1rem. Avoid using `dim` for explanatory text.

## Layout

- Max page width: 78rem.
- Use two-column layouts only when both columns have enough breathing room.
- Prefer two-column card grids over four-column dense grids for readability.
- On mobile, collapse content into a single column and remove decorative signal rails when they compete with content.

## Elevation & Depth

Depth comes from tonal layering, visible borders, and small warm signal accents. Heavy shadows are reserved for the hero console only.

## Shapes

- Corners stay minimal: 2–4px.
- Buttons and inputs use crisp console-like geometry.

## Components

### button-primary
- backgroundColor: `{colors.accent}`
- textColor: `{colors.primary}`
- rounded: `{rounded.sm}`
- padding: `13px 18px`

### card
- backgroundColor: `{colors.surface-raised}`
- textColor: `{colors.text}`
- rounded: `{rounded.sm}`
- padding: `24px`

### input
- backgroundColor: `{colors.surface}`
- textColor: `{colors.text}`
- rounded: `{rounded.sm}`
- padding: `12px 14px`

## Do's and Don'ts

- Do keep Academy content separate from studio, label, beat licensing or design-service content.
- Do keep paragraph contrast high and text sizes readable on phones.
- Do use orange and gold as signal accents, not as large background fills.
- Don't return to the older light theme tokens.
- Don't create dense five-column layouts for explanatory content.
- Don't use small uppercase text for anything a learner must read carefully.
