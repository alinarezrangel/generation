---
layout: docref
title: Input Element
permalink: /docs/api-reference/refs/v2.0/el/input
seealso:
  - text: .box
    link: box
  - text: .container
    link: container
  - text: .form
    link: form
  - text: .fieldset
    link: fieldset
  - text: .label
    link: label
  - text: .input-text
    link: input-text
  - text: .input-mtext
    link: input-mtext
  - text: .select
    link: input-select
---

```scss
/* Input Class */

.input {...}         /* From 2.0.0 */
input.input {...}    /* From 2.0.0 */
select.input {...}   /* From 2.0.0 */
textarea.input {...} /* From 2.0.0 */
```

The `.input` class is a perfect fit for any HTML element that accepts user
input. This class behaves differently for each input type and element excluding
the need for different input classes.

This class inherits `.abstract-box`.

This class is specialized for most common input types like text, passwords,
textareas, selects and others. It never styles an unknow input type.

The correct usage of this class it's just applying it and letting CSS find
the correct input type:

```html
<input type="text" class="input" name="username" />
<input type="password" class="input" name="password" />
<textarea class="input">Some comment here!</textarea>
<select class="input" name="age-range">
  <option value="a1">0-1 years old</option>
  <option value="a2">2-10 years old</option>
  <option value="a3">10-100 years old</option>
  <option value="a4">+500 years old</option>
</select>
```
