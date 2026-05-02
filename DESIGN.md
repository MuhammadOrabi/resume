---
name: Muhammad Orabi Resume
description: Technical, proof-first portfolio identity system for recruiter-speed evaluation.
colors:
  primary: "#3490dc"
  primary-strong: "#1d68a7"
  neutral-bg: "#f8fafc"
  neutral-surface: "#ffffff"
  neutral-text: "#212529"
  neutral-muted: "#6c757d"
  neutral-strong: "#343a40"
  success: "#38c172"
  danger: "#e3342f"
typography:
  display:
    fontFamily: "Nunito, sans-serif"
    fontSize: "2.25rem"
    fontWeight: 700
    lineHeight: 1.2
  headline:
    fontFamily: "Nunito, sans-serif"
    fontSize: "1.8rem"
    fontWeight: 700
    lineHeight: 1.2
  title:
    fontFamily: "Nunito, sans-serif"
    fontSize: "1.35rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Nunito, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Nunito, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.04em"
rounded:
  sm: "4px"
  md: "8px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.neutral-surface}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  button-primary-hover:
    backgroundColor: "{colors.primary-strong}"
    textColor: "{colors.neutral-surface}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  card-default:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.md}"
    padding: "16px"
  input-default:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.neutral-text}"
    rounded: "{rounded.sm}"
    padding: "8px 12px"
---

# Design System: Muhammad Orabi Resume

## 1. Overview

**Creative North Star: "The Engineer's Console"**

This visual system presents Muhammad as a hands-on engineer whose credibility comes from shipped work, not decorative storytelling. The interface should feel technical and focused, with quick scan paths for recruiters and enough density for technical evaluators who want details.

The experience favors clarity, evidence, and speed. Surfaces stay clean, hierarchy stays explicit, and accents are used to guide attention rather than decorate. The overall mood is practical and coding-first, with a professional tone that supports role conversion.

This system explicitly rejects generic AI-generated portfolio aesthetics, over-polished agency-like marketing language, and visual noise that hides substance.

Key Characteristics:
- Proof-first structure over personality-first layout.
- Fast, scannable information hierarchy.
- Technical confidence with restrained visual effects.
- Professional clarity on both mobile and desktop.

## 2. Colors

The palette is restrained and utility-driven, with one core blue accent and neutral foundations for readability.

### Primary
- **Signal Blue** (`#3490dc`): Primary links, key actions, and focused attention moments.
- **Deep Signal Blue** (`#1d68a7`): Hover and active reinforcement for interactive affordances.

### Neutral
- **Paper Mist** (`#f8fafc`): Page background for low-noise reading.
- **Clear Surface** (`#ffffff`): Content surfaces and cards.
- **Graphite Text** (`#212529`): Primary body text and dense technical content.
- **Steel Muted** (`#6c757d`): Secondary text and supportive labels.
- **Anchor Charcoal** (`#343a40`): Headings and high-emphasis labels.

### Named Rules
**The One Accent Rule.** Keep the primary accent to navigational and action semantics. Avoid turning entire sections into accent-colored blocks.

## 3. Typography

**Display Font:** Nunito, sans-serif
**Body Font:** Nunito, sans-serif
**Label/Mono Font:** Nunito, sans-serif

**Character:** Rounded but disciplined. The system feels modern and technical without becoming cold or sterile.

### Hierarchy
- **Display** (700, 2.25rem, 1.2): High-importance page headings and identity statements.
- **Headline** (700, 1.8rem, 1.2): Section-level framing such as page topic headers.
- **Title** (600, 1.35rem, 1.3): Subsection titles and emphasized role labels.
- **Body** (400, 0.9rem, 1.6): Main content with comfortable reading rhythm. Keep line length near 65-75ch where layout allows.
- **Label** (600, 0.75rem, 0.04em letter-spacing): Metadata, compact identifiers, and low-noise UI labels.

### Named Rules
**The Recruiter Scan Rule.** Weight and size shifts should communicate priority in under 3 seconds of scanning.

## 4. Elevation

This system is mostly flat. Depth should come from spacing, typographic hierarchy, and border contrast first. Shadows are optional and minimal, used only for interaction feedback or separation in dense layouts.

### Shadow Vocabulary
- **Lift-1** (`0 1px 3px rgba(0, 0, 0, 0.08)`): Subtle hover lift for interactive cards and buttons.
- **Lift-2** (`0 8px 24px rgba(0, 0, 0, 0.1)`): Temporary emphasis for key interactive surfaces.

### Named Rules
**The Flat-by-Default Rule.** Resting state is flat and crisp. Elevation appears only as a state response.

## 5. Components

### Buttons
- **Shape:** Soft rectangular (`4px` radius).
- **Primary:** `#3490dc` background with white text, compact padding (`8px 16px`).
- **Hover / Focus:** Shift to `#1d68a7`, visible focus ring, and quick ease-out transition.
- **Secondary / Ghost:** Neutral text on transparent background with subtle neutral hover tint.

### Chips
- **Style:** Neutral surface with muted text and subtle border.
- **State:** Active chips can use the primary accent for text or border, not full saturated fills.

### Cards / Containers
- **Corner Style:** `8px` radius for grouped content.
- **Background:** White on `#f8fafc` canvas.
- **Shadow Strategy:** Flat by default; optional Lift-1 on hover if interactive.
- **Border:** Hairline neutral border.
- **Internal Padding:** `16px` default, `24px` in key summary sections.

### Inputs / Fields
- **Style:** White fill, neutral border, `4px` radius.
- **Focus:** Accent border/focus ring to reinforce keyboard accessibility.
- **Error / Disabled:** Error uses `#e3342f`; disabled state reduces contrast while remaining readable.

### Navigation
- **Style:** Text-led navigation with clear active state through weight and color shift.
- **States:** Default neutral, hover primary, active high-contrast.
- **Mobile:** Keep touch targets comfortable and spacing generous for quick contact/action access.

## 6. Do's and Don'ts

### Do:
- **Do** keep content blocks proof-oriented, with skills, projects, and outcomes visible without deep scrolling.
- **Do** use `#3490dc` for meaningful interaction states only.
- **Do** keep body text at readable contrast and consistent rhythm (`0.9rem` / `1.6`).
- **Do** preserve fast-scan hierarchy with clear heading and subsection distinction.

### Don't:
- **Don't** use generic AI-generated portfolio aesthetics.
- **Don't** use over-polished agency-like marketing language.
- **Don't** add visual noise that hides substance.
- **Don't** add playful gimmicks that make the profile feel junior or unfocused.
- **Don't** use gradient text or decorative glassmorphism as default styling.
