---
layout: docref
title: Container Element
permalink: /docs/api-reference/refs/v2.0/el/container
seealso:
  - text: .box
    link: box
  - text: .section
    link: section
  - text: .header
    link: header
  - text: .main
    link: main
  - text: .footer
    link: footer
  - text: .fcontainer
    link: fcontainer
  - text: .form
    link: form
---

```scss
/* Container Class */

.container {...} /* From 2.0.0 */
```

The `.container` class represents an element which *contains* one or more
flow content, that is, the `.container` element is prefect for articles,
comments, sections, headers, footers, wrappers around one or more navigations,
forms (please see the `.form` element) and more. The `.container` class
carries a very big semantic value, so please do not use it to style div soups,
GUI widgets (unless applicable) and other non-semantic elements.

<div class="note">
  <strong>Note</strong>: There is nothing wrong about using this element on
  divs, but make sure that the div <em>has</em> any semantic value.
</div>

The `.container` class includes a decent margin and padding and inherits the
`.box` class.

## Specializations ##

This class behaves differently for the HTML elements:

* `<header>`: [`.header`](/docs/api-reference/refs/v2.0/el/header)
* `<main>`: [`.main`](/docs/api-reference/refs/v2.0/el/main)
* `<footer>`: [`.footer`](/docs/api-reference/refs/v2.0/el/footer)
