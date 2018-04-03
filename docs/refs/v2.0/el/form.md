---
layout: docref
title: Form Element
permalink: /docs/api-reference/refs/v2.0/el/form
seealso:
  - text: .box
    link: box
  - text: .container
    link: container
  - text: .fieldset
    link: fieldset
  - text: .label
    link: label
  - text: .input
    link: input
  - text: .input-text
    link: input-text
  - text: .input-mtext
    link: input-mtext
  - text: .select
    link: input-select
---

```scss
/* Form Class */

.form {...} /* From 2.0.0 */
```

The `.form` class specialization was designed to add semantic value to any
container of HTML inputs. You can use this class on both HTML forms (the
`<form>` element) or dynamic JavaScript forms (just a container with some
`<input>` elements inside). This class has a big semantic value.

This class inherits the `.box` class.

This class does not apply any other visible effect apart from those inherited
from `.box`.
