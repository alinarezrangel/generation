---
layout: docref
title: Card Element
permalink: /docs/api-reference/refs/v2.0/el/card
seealso:
  - text: .abstract-box
    link: abstract-box
  - text: .flexbox
    link: flexbox
  - text: .box
    link: box
---

```scss
/* Card Class */

.card {...} /* From 2.0.0 */
```

The `.card` class will add a controllable shadow to an element. The purpose
of this class is to define a *box* with *elevation* in order to make the
box more visible. This class has no semantic value.

This class inherits the `.box` class.

## Recommended usage ##

Sometimes is hard to deside between using this class (which is a box container)
or directly using the
[shadow utilities (`.sw-*`)](/docs/api-reference/refs/v2.0/ut/sw). The
recommended approach is:

* *Is the container a plain box*: Then use `.card`.
* *The container is not a box* (instead, is a `.flexbox`, a `.container` or
  something): Then use `.sw-*`.
