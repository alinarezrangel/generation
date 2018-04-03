---
layout: docpage
title: Color Palletes
permalink: /docs/color-palletes
---

The new color palletes API makes you happy by saving code and enabling you to
stay DRY (Don't Repeat Yourself).

## Using the new API ##

First of all, [fork Generation from GitHub][fork] and uncompress the downloaded
file in a new folder. In this tutorial, we will assume that you used the name
`generation-code`.

Enter to `generation-code/palletes/` and create a new directory called
`my-pallete`, inside it create a file called `my-pallete.scss`.

**Note**: You can replace `my-pallete` by your pallete's name.

Edit the content of `my-pallete.scss` to:

```scss
@import "../pallete";

@include pallete-new(
  $name: "My Pallete",
  $prefix: "mypallete",
  $authors: "Your name here",
  $version: "0.1.0",
  $date: "YYYY-MM-DD"
);
```

Replace:

1. The `$authors` section, enter your name in the section that says
`"Your name here"`. If you want to publish this pallete on GitHub, also
append your GitHub username, so for example if your name is Octocat and
your GitHub username is @octocat, use `"Octocat @octocat"`.
2. The `$date` section, enter the current date in the YYYY-MM-DD format,
where YYYY is the 4-digit year, MM is the 2-digit month and DD is the 2-digit
day.

Most of the fields explains itselfs very well.

**Note**: If you want to include more than one author in your pallete,
use a list like `("First author @octocat", "Second author @octodog)`. Also,
is recommended to use [semver][semver] to your version number.

## Adding Colors ##

Now you have an empty pallete, so you need to add colors! the colors are easy
to add, and almost never you will need to use any function other than
`pallete-color`.

To add a color, add **after** the call to `pallete-new` the following code:

```scss
@include pallete-color("my-awesome-color-name", red, blue);
```

Now you can use your pallete! after build Generation a new folder will be on
the `css/` directory. Now, you can use your pallete by adding

```html
<!-- In the HEAD tag -->
<link rel="stylesheet" href="css/my-pallete/main.css" type="text/css" />

<!-- Anywhere! -->
<span class="color-mypallete-my-awesome-color-name">
  My Awesome Color!
</span>
```

To the `index.html` file in Generation.

### How it works ###

When you call `pallete-new`, a `$prefix` is requested. That prefix will be
added to **all** colors that you define to prevent name collisions.

The `pallete-color` function syntax is:

```scss
@mixin pallete-color($color-name, $color, $accent);
```

In this case, `$color-name` is `"my-awesome-color-name"` to the generated
color name is `mypallete-my-awesome-color-name`. Note that any valid CSS
class name is a valid color name (remember to not use spaces!).

The `$color` parameter must be a valid CSS color that will be used as the
main color. The `$accent` color should bea color that makes contrast with
`$color`. The `$accent` will be used in text-colors and similars.

For example:

```scss
// Color name: "red"
// Color: red
// Accent: blue
@include pallete-color("red", red, blue);
```

Will make:

* `color-mypallete-red` will have a `red` background over a `blue` text.
* `text-color-mypallete-red` will have a `red` text.
* `border-color-mypallete-red` will have a `red` border.

### Light and Dark ###

The `pallete-color` mixin also generates light and dark variations of the
colors, and uses the specified accent color to generate the corresponding
accents for these variations. The variations have the name
`color-[pallete name]-(light|dark)-[color-name]`. Following the last example,
the color names are `color-mypallete-light-red` and `color-mypallete-dark-red`.

Sometimes, when generating the accent color for the dark and light variations,
the accent color gots wrong and in the resulting color is hard to read. To
prevent this, the `pallete-color` mixin have two more optional parameters that
acts like a filter to the new accent. Their are:

```scss
@mixin pallete-color($color-name, $color, $laccent: #FFF, $daccent: #000);
```

The two new variables are:

* `$laccent`: When more **darken** is the generated color variation, more of
this color will be mixed with the `$accent` to get a new accent. By default
is `#FFF` (white) so when more darken is the generated color variation, more
lighten will be the generated accent.
* `$daccent`: When more **lighten** is the generated color variation, more
of this color will be mixed with the `$accent` to get a new accent. By default
is `#000` (black) so when more lighten is the generated color variation, more
darken will be the generated accent.

If the generated accent is wrong, try to make `$laccent` to be a light
variation of your accent and `$daccent` to be a dark variation of your accent,
this will work a lot better.

**Note**: Rarely, even making `$laccent` and `$daccent` have the right values,
the generated accent will be wrong, in that case try to change gradually
the values of `$laccent` and `$daccent` to eventually get the right colors.

### Without variations ###

If you need to define a color and **not** define it's variations, use
the `pallete-color-base` instead. This will generate the same classes but
will not generate the lighten and darken variations:

```scss
@mixin pallete-color-base($color-name, $color, $accent);
```

It's usage is the same than `pallete-color` except for one thing: because
the color will not be modified, there is no need for `$laccent` and
`$daccent` variables.

**Note**: Is good to leave a note in your pallete documentation with says
which colors does not have lighten and darken variations, because Generation
makes heavy use of them of most users might expect all colors to have these
variations.

### Sections ###

Also, the color pallete API supports grouping colors in color-groups with
similar properties. You only need to call a mixin each time that you want to
create a section:

```scss
@include pallete-tag("section", "Your section's name here!");
```

Remember to replace `"Your section's name here!"` by a string containing
your section's name.

### A final example ###

Now, copy the following code to your `palletes/my-pallete/main.scss` file:

```scss
/*
 * My first awesome pallete!
 */

@import "../pallete";

@include pallete-new(
  $name: "Example pallete",
  $prefix: "example",
  $authors: "Your name here! @octocat",
  $version: "0.1.0",
  $date: "2017-08-05"
);

@include pallete-tag("section", "Example colors");
@include pallete-color("red", red, black);
@include pallete-color("blue", blue, white);
@include pallete-color("green", green, black);
@include pallete-color("n1", #312412, black);
@include pallete-color("n2", #977385, black);
```

If you have more questions about how a color pallete might be written,
try to [read some of the existing palletes][palletes], their are documented
and uses all available features of the Color Pallete API.

[fork]: https://github.com/alinarezrangel/generation/fork
[palletes]: https://github.com/alinarezrangel/generation/
