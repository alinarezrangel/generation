---
layout: docref
title: Section Element
permalink: /docs/api-reference/refs/v2.0/el/section
seealso:
  - text: .box
    link: box
  - text: .header
    link: header
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
/* Section Class Specialization */

.section {...} /* From 2.0.0 */
```

The `.section` class provides general styling to `<section>` elements
**which will be stacked together**, this is very useful when displaying lots
of containers one above another making this class useful not only to
`<section>` elements but also for `<article>` elements.

This class inherits the `.container` class.

Visually, it's like a container but with a lesser bottom margin.

Note that, unlike other semantic HTML elements, there is no `section.container`
specialization, instead, you are free to choose the semantic value of your
`<section>` element. Use the `.section` class if you want to show several
containers together or use a `.container` if the element is stand-alone.
