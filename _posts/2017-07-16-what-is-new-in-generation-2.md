---
layout: post
title: "What is new in Generation 2.0"
date: 2017-07-16 15:00:00 -0500
categories: releases v2.0
---

Generation 2.0 just shipped this week and we will see what is new in this big
actualization.

## New core ##

Generation uses plain CSS3 until Generation v2.0, now it uses [SASS][sasslang]
with a powerful framework of mixins, functions and classes. Also, Generation
no more uses the vendor prefixers, the new [gulp][gulp] build system uses
[autoprefixer][autoprefixer] and [Clean CSS][cleancss] so you don't need to
worry about browsers incompatibilities when writting your own classes now.

## New APIs: Color Palete ##

The new color palete API makes designing color paletes for Generation 2.0 a
lot easier than Generation 1.1:

{% highlight scss %}
/* Generation 1.1: */

.color-mypallete-black {background-color: black !important; color: white;}
.border-color-mypallete-black {border-color: black !important;}
.text-color-mypallete-black {color: black !important;}
/* ... lots of code of the same form for ALL colors ... */

/* Generation 2.0: */

@import "../pallete";

@include pallete-new(
	// The name of the palete
	$name: "My pallete",
	// The prefix or namespace
	$prefix: "mypallete",
	// A list of authors or a string with only one author
	$authors: ("Me @octocat", "You @octocat"),
	// The palete semver version.
	$version: "1.0.0",
	// the creating date.
	$date: "2017-07-16"
);

@include pallete-color("black", black, white);
@include pallete-color("darkblack", black, white);
@include pallete-color("lightblack", #121212, white);
@include pallete-color("nonblack", red, green);

/* Instead of ~three lines per color we use only one! also this will generate
variations light and dark of colors! */
{% endhighlight %}

Of course the complete Color Pallete API is more than that, it provides sections
(to group similar colors), warnings, more metadata and we are working on a test
suite.

## New classes ##

A lot of new classes! their are designed to provide a better development experience.

## Breaking changes! ##

Oh no! Generation 2.0 makes some breaking changes:

* Some will be fixed in the patch release Generation **2.0.1**.
* Some will be never fixed.

### Deprecated classes ###

{: .table .table-striped}
| Class name                     | Use instead                         |
| ------------------------------ | ----------------------------------- |
| `.flexible`                    | `.flexbox`                          |
| `.top-navigation`              | `.navigation.top`                   |
| `.side-navigation`             | `.navigation.side`                  |
| `.block-left`                  | `.block-align-left`                 |
| `.block-right`                 | `.block-align-right`                |
| `.block-center`                | `.block-align-center`               |
| `.wrap-start`                  | `.content-start`                    |
| `.wrap-end`                    | `.content-end`                      |
| `.wrap-stretch`                | `.content-stretch`                  |
| `.wrap-space-between`          | `.content-space-between`            |
| `.wrap-space-around`           | `.content-space-around`             |
| `.font-bold`                   | `.font-style-bold`                  |
| `.font-italic`                 | `.font-style-italic`                |
| `.font-serif`                  | `.font-style-serif`                 |
| `.font-normal`                 | `.font-style-regular`               |
| `.font-monospace`              | `.font-style-monospace`             |
| `.text-tiny`                   | `.font-size-ultra-small`            |
| `.text-xsmall`                 | `.font-size-ultra-small`            |
| `.text-small`                  | `.font-size-small`                  |
| `.text-normal`                 | `.font-size-regular`                |
| `.text-big`                    | `.font-size-big`                    |
| `.text-ultra-big`              | `.font-size-ultra-big`              |
| `.text-large`                  | `.font-size-large`                  |
| `.text-xlarge`                 | `.font-size-ultra-large`            |
| `.text-jumbo`                  | `.font-size-jumbo`                  |
| `.text-jumbo-1`                | `.font-size-jumbo`                  |
| `.text-jumbo-2`                | `.font-size-ultra-jumbo`            |
| `.text-jumbo-3`                | `.font-size-extreme`                |
| `.text-jumbo-4`                | `.font-size-ultra-extreme`          |
| `.text-jumbo-5`                | `.font-size-mega`                   |
| `.text-left`                   | `.text-align-left`                  |
| `.text-right`                  | `.text-align-right`                 |
| `.text-center`                 | `.text-align-center`                |
| `.sw-c`                        | `.sw-1`                             |
| `.f` *N*                       | `.fx-` *N*                          |
| `.o` *N*                       | `.od-` *N*                          |
| `.margin`                      | None (see note 1)                   |
| `.padding`                     | None (see note 1)                   |
| `.modal-content`               | None (see note 2)                   |
| `.flat-button`                 | `.button.flat`                      |

Notes:

1. The `margin` and `padding` classes was created to specify that the default
margin and padding should be preserved. These classes no longer exists from
Generation beta-1.0, but for some reason Generation 1.1 includes these classes
in the Class List Document.
2. Now you can just put your modal's content on the main `.modal` element.

### Deprecated behaviors ###

The following elements or components changed their behaviors in an uncompatible
manner between versions, the older behavior of these elements or components is
now deprecated and should not be used.

#### Modals ####

The background of the modals is not inherited from the shadowed background now,
the modals now have a default *white* background with a *black* font color.

#### Grids ####

When using the `.grid` element to group `.row` s, the margin between rows is not
cleaned anymore, so the rows inside a grid have margin too.

#### Headers and Sections ####

The `.header` and `.section` now have a zero (`0`) margin by default, unlike most
containers.

#### Mains ####

The `.main` now have zero (`0`) margin and padding, unlike most containers.

#### Footers ####

The `.footer` now have much more padding than other containers: twice
as a regular `.container`.

#### Tables ####

Now the `.table` have a box margin, but not padding. Also, the `.table` have a
block's width by default (`.width-block` or `width: 100%`).

#### Font sizes ####

Now the default font sizes applied are for the mobile screen, so their are now
mobile-first!

[sasslang]: http://sass-lang.com/
[gulp]: http://gulpjs.com/
[autoprefixer]: https://autoprefixer.github.io/
[cleancss]: https://jakubpawlowicz.github.io/clean-css/
