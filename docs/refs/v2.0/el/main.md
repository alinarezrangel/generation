---
layout: docref
title: Main Element
permalink: /docs/api-reference/refs/v2.0/el/main
seealso:
  - text: .box
    link: box
  - text: .section
    link: section
  - text: .container
    link: container
  - text: .header
    link: header
  - text: .footer
    link: footer
  - text: .fcontainer
    link: fcontainer
---

```scss
/* Main Class Specialization */

.main {...}    /* From 2.0.0 */
main.container /* From 2.0.1 */
```

The `.main` specialization carries a very **very** high semantic value. This
class determines where the main content of the page is, this content should:

* Not contain anything repeated on other pages like navigations, logos and
  such thing.
* Be the principal content of the page.

Basicly, the main element is *the* content of the page, removing anything
except it should preserve all the page's information.
