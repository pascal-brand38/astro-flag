![Texte alternatif](https://raw.githubusercontent.com/pascal-brand38/astro-flag/images/astro-logo.png)

# Astro Flag

Check [full documentation and demo](https://pascal-brand38.github.io/astro-dev/packages/astro-flag)

## Installation

```bash
npm install astro-flag
pnpm add astro-flag
bun install astro-flag
```

## Usage
Display a flag of a country, in Astro, using really straioghforward code:

```jsx
---
import { Flag } from "astro-flag";
---
<Flag flagName="fr" />
```

The flag is rendered as an inlined svg (819 bytes for the french flag for example).
It is fully responsive, and flags can whatever size you'd like.

Arguments are:
* shape of the flag, either square (1x1) or rectangle (4x3 - default value)
* size the flag, as a string. Example: '48px', '100%'... '32px' is the default value

This leads to the following code to display the square Great Britain flag, of size 48px:
```jsx
---
import { Flag } from "astro-flag";
---
<Flag flagName="gb" shape="1x1" size="48px" />
```

## Credit

Original svgs come from [FlagPack](https://github.com/jackiboy/flagpack).
They have been updated to have unique ids, and viewBox replacing width and size.

## Support us

**Let's star the project as you like it.**
