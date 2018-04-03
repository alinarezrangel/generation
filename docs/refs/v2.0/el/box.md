---
layout: docref
title: Box Element
permalink: /docs/api-reference/refs/v2.0/el/box
seealso:
  - text: .abstract-box
    link: abstract-box
  - text: .flexbox
    link: flexbox
  - text: .card
    link: card
  - text: .container
    link: container
  - text: .header
    link: header
  - text: .section
    link: section
  - text: .footer
    link: footer
  - text: .form
    link: form
---

```scss
/* Box Class */

.box {...} /* From 2.0.0 */
```

The `.box` class defines a *box*, the equivalent in Generation to a CSS
*block*. Most classes in Generation inherit this one, and you should inherit
this class if your element have a `display: block` property or similar.

This class inherits `.abstract-box`. Useful when styling elements with no
semantic value:

```html
<div class="box card">
  Hi!
</div>
```

In old Generation styling you will see a lot of `.box.card` combinations, that
is because the old `.card` class was not a box. Now it is, please refer to the
`.card` documentation for more help.
