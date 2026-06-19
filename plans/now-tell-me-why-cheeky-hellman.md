# Why the Intro Video Isn't Showing — and How to Fix It

## Context

The `Iframe-1/index.tsx` component is a Figma export of a video background placeholder. It contains two `<div>` elements — one named "Marko Video Background 1" (the video slot) and one named "Marko Video Background 2" (the dark overlay). Neither div has any actual video source, image, or content. It is a **structural placeholder only** — Figma exports layout/positioning but cannot export actual video assets.

## Root Cause

`MarkoVideoBackground` is an empty `<div>`. There is no `<video>` element, no `src`, no background image URL. So nothing is visible — only the dark overlay (`rgba(0,0,0,0.69)`) renders, which blends into the page's `#040404` background and appears invisible.

## Fix Plan

Replace the empty `MarkoVideoBackground` div inside `src/imports/Iframe-1/index.tsx` with a proper `<video>` element (or a background image as a fallback).

**Option A — Video file (recommended if you have a video):**
- Add a `.mp4` video file to `src/imports/Iframe-1/` (e.g. `hero-bg.mp4`)
- Replace the empty div with:
  ```tsx
  <video
    className="absolute h-[875px] left-0 top-[85.84px] w-[1860px] object-cover"
    src={heroBgVideo}
    autoPlay
    muted
    loop
    playsInline
  />
  ```

**Option B — Static image fallback (if no video yet):**
- Add a `.jpg/.png` image to `src/imports/Iframe-1/`
- Set it as a CSS background on the div

## Critical Files to Modify

- `src/imports/Iframe-1/index.tsx` — add the `<video>` or background image to `MarkoVideoBackground`

## Verification

After adding a video source, the hero section (top ~960px of the page) should show the video playing behind the page content, with the dark overlay (`rgba(0,0,0,0.69)`) dimming it.
