---
layout: docref
title: Header Element
permalink: /docs/api-reference/refs/v2.0/el/header
seealso:
  - text: .box
    link: box
  - text: .section
    link: section
  - text: .container
    link: container
  - text: .main
    link: main
  - text: .footer
    link: footer
  - text: .fcontainer
    link: fcontainer
---

```scss
/* Header Class Specialization */

header.container {...} /* From 2.0.0 */
.header {...}          /* From 2.0.0 */
```

The `.header` class specialization provides a useful way to style headers with
no more than three (3) classes: This class removes any margin from the header
and also applies all other container properties, so the old
`.container.no-margin.padding-32` is gone.

This class inherits the `.container` class.

The `.header` class was added to remove common styles associated with a header,
this class removes any margin of the header, shows it as a `.container` and
adds a `32px` padding.
