---
title: "Scroll-snapping with CSS!"
description: "I always thought this was done with JavaScript, but it's actually possible with CSS!"
publishDate: 2019-05-31
source:
  title: "MDN docs: scroll-snap-type"
  url: https://developer.mozilla.org/en-US/docs/Web/CSS/scroll-snap-type
tags:
- css
---

CSS scroll-snapping allows for controlled scrolling experiences. If a user scrolls partially down/across an element, the CSS can force the scroll to snap to the top of the element instead.. or something.

I haven't given this a go, because I only just found out 🤯

## Browser compatibility
Fully-fledged in 🍎 Safari and 🤖 Chrome support this feature in it's latest builds. 🦊 Firefox supports properties from an older specification. 🌐 IE and 🔵 Edge have partial support, hidden behind a feature flag etc etc surprise surprise.

[Read more about scroll-snap-type browser compatibility](https://caniuse.com/#search=scroll-snap-type).

---
### Update

I gave this a go with <a href="/labs/fathers-day-2019/">a real classy Father's Day e-card</a>.

It's quite fun, but also didn't work at all on my dad's old old iPhone. Carefully with compatibility!

This kind of CSS black magic can also be very frustrating to the user, even I got a little bit annoyed when I was building with it 🙄
