---
layout: docpage
title: JavaScript Core
permalink: /docs/api-reference/javascript-core
---

Generation includes a JavaScript Core which manages dynamic elements like
`.modal`s and others.

## Content Security Police ##

The Generation's JavaScript Core can be used in applications along with CSP
(Content Security Police). The JavaScript Core never uses unsafe DOM methods
like `innerHTML`.

## Modals ##

* If an element have the `data-open-modal` attribute, the content of the
`data-open-modal` attribute must be a valid ID of an element in the current
document which have the `.modal` class. When the element that have the
`data-open-modal` attribute is clicked, the modal with the specified ID will
be opened. The opening animation will be a fade-in animation which will not
last more than `700ms`. All elements in the document that are not children
from the currently-open modal will be shadowed and therefore blocked until
the modal is closed.
* If an element have the `data-close-modal` attribute, the content of the
`data-close-modal` attribute must be a valid ID of an element in the current
document which have the `.modal` class. When the element that have the
`data-close-modal` attribute is clicked, the modal with the specified ID will
be closed. The closing animation will be a fade-out animation which will not
last more than `700ms`. All shadowed elements in the document will be
unblocked enabling the user to interact with them again.

That is, in non-technical language:

* The `data-open-modal` attribute points to the modal that should be opened
when the element that **contains** the `data-open-modal` is clicked.
* The `data-close-modal` attribute points to the modal that should be closed
when the element that **contains** the `data-close-modal` is clicked.

For example:

```html
<div class="modal" id="my-modal">
  Hi! I am a modal!

  <a href="#" data-close-modal="my-modal">Close</a>
</div>

<a href="#" data-open-modal="my-modal">Open</a>
```

## Tabs ##

<div class="card">
	<strong class="font-size-ultra-big">Note</strong>
	<p>
		This is an experimental feature that may not be available on all versions
		or downloads of Generation, until stabilized, please don't use it.
	</p>
</div>

If your Generation was builded with the *Tab* module, then you have access
to the experimental Tabs! these Tabs represents an area in which all the
content is not available at the same time: the user needs to select which
view he/she wants.

Example:

```html
<div class="tabs-container">
  <div class="tabs-headers">
    <div class="tab-header" data-open-tab="tab-a">
      Open the tab A
    </div>
    <div class="tab-header" data-open-tab="tab-b">
      Open the tab B
    </div>
    <div class="tab-header" data-open-tab="tab-c">
      Open the tab C
    </div>
    <div class="tab-header" data-open-tab="tab-d">
      Open the tab D
    </div>
  </div>
  <div class="tabs-contents">
    <div class="tab-body" id="tab-a">
      <p>I am the tab A</p>
    </div>
    <div class="tab-body" id="tab-b">
      <p>I am the tab B</p>
    </div>
    <div class="tab-body" id="tab-c">
      <p>I am the tab C</p>
    </div>
    <div class="tab-body" id="tab-d">
      <p>I am the tab D</p>
    </div>
  </div>
</div>
```
