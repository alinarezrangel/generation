# Generation

[![license](https://img.shields.io/github/license/alinarezrangel/generation.svg)]()
[![GitHub issues](https://img.shields.io/github/issues/alinarezrangel/generation.svg)]()

Generation is a CSS3 based framework for creating web pages, HTML5 applications and more.

This is Generation 2.

## Instalation

Copy these link and script tags to your project and use

```html
<link href="generation/css/generation.css" rel="stylesheet"/>
<script src="generation/js/generation.js"></script>
```

The JavaScript/ECMAScript core is optional.

## Usage

All Generation classes can be applied to any element:

```html
<div class="container">
	Hello!
</div>
<section class="container">
	Hello!
</section>
```

A list of generation classes can be found on the
[wiki](https://github.com/alinarezrangel/generation/wiki/Class-List).
For further reading, see the [tutorial](tutorial.html) file.

## Building

Generation uses Gulp for building, by default, it will generate compressed
output, but you can customize the building by editing the
[gulpfile](gulpfile.js):

```sh
# To build generation, use:
gulp
```

All compiled files will be on the `css/` folder (for compatibility reasons,
all HTML files that uses Generation should use the `css/` files instead of
the SASS ones).

## License

See the [LICENSE.txt](LICENSE.txt) file.
