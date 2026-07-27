# Animation Choreography

## Purpose

Define exactly when movement happens.

The Motion System defines how motion behaves. This document defines when motion occurs.

## Core Principles

- Motion exists to clarify.
- Motion must never compete with content.
- Stillness is the default state.
- Authority is more important than spectacle.
- Every animation must have a purpose.

## Global Rules

- No idle animations.
- No floating.
- No looping.
- No breathing effects.
- No shimmer.
- No decorative movement.
- No infinite animation.
- Motion ends in complete stillness.

## Opening Room Timeline

Define an exact timeline.

Example:

- 0 ms: Black screen
- 200 ms: Logo fades in
- 450 ms: Headline begins character reveal
- 900 ms: Headline complete
- 1000 ms: Supporting copy fades
- 1150 ms: CTA appears
- 1300 ms: Motion complete
- 1400 ms: Everything becomes static

## Scroll Interruption

If the user scrolls before the sequence finishes:

- Immediately cancel unfinished animation.
- Snap all elements into their completed state.
- Never fight the user's input.

## Room Entry

Each room may animate once.

- Maximum duration: 800 ms.

## Room Exit

- No exit animation while scrolling.
- The user controls navigation.

## Hover

Hover exists only to confirm interaction.

- Maximum: 180 ms.

## Focus

Keyboard focus must never animate dramatically.

- Only color or border changes.

## Navigation

- Menu open
- Menu close
- Page transition

All use the same easing tokens.

## Reduced Motion

- No character stagger.
- No translation.
- Opacity only where appropriate.

## Performance Rules

Animate only:

- opacity
- transform
- color
- background-color

Never animate:

- height
- width
- top
- left
- filter
- blur
- box-shadow

## Animation Approval Checklist

Every animation must answer:

- Why does it exist?
- What information does it communicate?
- Does removing it improve authority?

If yes, remove it.
