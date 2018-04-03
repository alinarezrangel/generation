---
layout: docref
title: Abstract Box Element
permalink: /docs/api-reference/refs/v2.0/el/abstract-box
seealso:
  - text: .box
    link: box
  - text: .flexbox
    link: flexbox
  - text: .table
    link: table
---

```scss
/* Abstract Box Class */

.abstract-box {...} /* From 2.0.0 & Until 2.0.0 */
%abstract-box {...} /* From 2.0.1 */
```

The `.abstract-box` class is designed to be used when a `.box` or a `.flexbox`
is too much for the requirements. This is very useful when designing your
own boxes, like *tables* or similars. <span class="cond">This should not be
used in HTML elements <span class="cond-ex">(until 2.0.1)</span></span>.

The only use of this class is to act as a base class for all other boxes or
blocks in Generation, all (inclusive `.table`) inherit this class.

When using `.abstract-box`, always override the `display` property.
