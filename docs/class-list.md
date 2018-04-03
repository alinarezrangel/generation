---
layout: docpage
title: Class List
permalink: /docs/api-reference/class-list
---

There is a list of all classes in Generation **2.0**, note that the classes
have categories showed here but each category have a more detailed reference
page.

## Element Classes ###

These classes are the *valid* (that is, no deprecated) elements in Generation
**2.0**:

{: .table .table-striped }
| Class Name          | Element Name             | Link to reference         |
| ------------------- | ------------------------ | ------------------------- |
| `.abstract-box`     | Abstract Box             | [Link][lnk1]              |
| `.box`              | Box                      | [Link][lnk2]              |
| `.container`        | Container                | [Link][lnk3]              |
| `.header`           | Header                   | [Link][lnk4]              |
| `.section`          | Section/Article          | [Link][lnk5]              |
| `.main`             | Main Container           | [Link][lnk6]              |
| `.footer`           | Footer                   | [Link][lnk7]              |
| `.card`             | Card/Card Box            | [Link][lnk8]              |
| `.form`             | Form                     | [Link][lnk9]              |
| `.fieldset`         | Fieldset                 | [Link][lnk10]             |
| `.input`            | Input                    | [Link][lnk11]             |
| `.label`            | Label                    | [Link][lnk12]             |
| `.select`           | Select Box (alias)       | [Link][lnk13]             |
| `.input-text`       | Text Input               | [Link][lnk14]             |
| `.input-mtext`      | Multi-text Input         | [Link][lnk15]             |
| `.input-select`     | Select input             | [Link][lnk16]             |
| `.input-multitext`  | Multi-text Input (alias) | [Link][lnk17]             |
| `.navigation`       | Navigation               | [Link][lnk18]             |
| `.navigation.top`   | Top Navigation           | [Link][lnk19]             |
| `.navigation.side`  | Side Navigation          | [Link][lnk20]             |
| `.button`           | Button                   | [Link][lnk21]             |
| `.button.raised`    | Raised Button            | [Link][lnk22]             |
| `.button.flat`      | Flat Button              | [Link][lnk23]             |
| `.table`            | Table                    | [Link][lnk24]             |
| `.list`             | List                     | [Link][lnk25]             |
| `.dropdown`         | Dropdown                 | [Link][lnk26]             |
| `.modal`            | Modal Dialog             | [Link][lnk27]             |
| `.flexbox`          | Flexbox                  | [Link][lnk28]             |
| `.fcontainer`       | Flexible Container       | [Link][lnk29]             |
| `.grid`             | Grid                     | [Link][lnk30]             |
| `.row`              | Row                      | [Link][lnk31]             |
| `.col`              | Column                   | [Link][lnk32]             |
| `.vrow`             | Vertical Row             | [Link][lnk33]             |
| `.group`            | Group                    | [Link][lnk34]             |
| `.button-group`     | Button Group             | [Link][lnk35]             |

## Utility Classes ##

These classes are the *valid* (that is, no deprecated) utilities in Generation
**2.0**:

{: .table .table-striped }
| Class Name          | Utility Name             | Link to reference         |
| ------------------- | ------------------------ | ------------------------- |
| `.block-align-*`    | Block Align              | [Link][lnk36]             |
| `.display-*`        | Display                  | [Link][lnk37]             |
| `.*wrap`            | Flex Wrap                | [Link][lnk38]             |
| `.align-*`          | Flex Align (container)   | [Link][lnk39]             |
| `.self-*`           | Flex Align (items)       | [Link][lnk40]             |
| `.content-*`        | Flex Align (content)     | [Link][lnk41]             |
| `.justify-*`        | Flex Justify             | [Link][lnk42]             |
| `.direction-*`      | Flex Direction           | [Link][lnk43]             |
| `.font-size-*`      | Font Size                | [Link][lnk44]             |
| `.font-style-*`     | Font Style               | [Link][lnk45]             |
| `.fx-*`             | Flex Grow                | [Link][lnk46]             |
| `.od-*`             | Flex Order               | [Link][lnk47]             |
| `.hide-on-*`        | Hide-on Medias           | [Link][lnk48]             |
| `.*padding`         | MPB Classes (padding)    | [Link][lnk49]             |
| `.*margin`          | MPB Classes (margin)     | [Link][lnk50]             |
| `.*border`          | MPB Classes (border)     | [Link][lnk51]             |
| `.overflow-*`       | Overflow                 | [Link][lnk52]             |
| `.position-*`       | Position                 | [Link][lnk53]             |
| `.force-position-*` | Position                 | [Link][lnk53]             |
| `.sw-*`             | SZS Classes (mix)        | [Link][lnk54]             |
| `.zi-*`             | SZS Classes (zindex)     | [Link][lnk55]             |
| `.sd-*`             | SZS Classes (shadow)     | [Link][lnk56]             |
| `.text-align-*`     | Text Align               | [Link][lnk57]             |
| `.total-*`          | Total Width and Height   | [Link][lnk58]             |
| `.*-block`          | Block Width and Height   | [Link][lnk59]             |

**Note**: In all of these cases, the wildcard `*` represents all values that a
given class may have, these values depends on the specific utility class, so
see the utility class reference for help. Also, classes begining with `*` are
utility classes with the `no-` and `-*` forms.

## Special Classes ##

These classes have a meaning **only** when combined with other classes:

{: .table .table-striped }
| Class Name                 | Use with                  |
| -------------------------- | ------------------------- |
| `.side`                    | `.navigation`             |
| `.top`                     | `.navigation`             |
| `.raised`                  | `.button`                 |
| `.flat`                    | `.button`                 |
| `.non-automatic-flexible`  | `.button-group`           |
| `.no-inner-border`         | `.navigation.top`         |
| `.no-absolute`             | `.dropdown-content`       |
| `.dropdown-content`        | `.dropdown`               |
| `.link`                    | `.navigation`             |
| `.no-style`                | `ul.list`                 |
| `.centerme`                | `.center`                 |
| `.col`                     | `.row`                    |
| `.no-link`                 | `.navigation > .dropdown` |

<!-- Links: -->

[lnk1]: refs/v2.0/el/abstract-box
[lnk2]: refs/v2.0/el/box
[lnk3]: refs/v2.0/el/container
[lnk4]: refs/v2.0/el/header
[lnk5]: refs/v2.0/el/section
[lnk6]: refs/v2.0/el/main
[lnk7]: refs/v2.0/el/footer
[lnk8]: refs/v2.0/el/card
[lnk9]: refs/v2.0/el/form
[lnk10]: refs/v2.0/el/fieldset
[lnk11]: refs/v2.0/el/input
[lnk12]: refs/v2.0/el/label
[lnk13]: refs/v2.0/el/input-select ".select (alias)"
[lnk14]: refs/v2.0/el/input-text
[lnk15]: refs/v2.0/el/input-mtext
[lnk16]: refs/v2.0/el/input-select
[lnk17]: refs/v2.0/el/input-mtext ".input-multitext (alias)"
[lnk18]: refs/v2.0/el/navigation
[lnk19]: refs/v2.0/el/navigation-top
[lnk20]: refs/v2.0/el/navigation-side
[lnk21]: refs/v2.0/el/button
[lnk22]: refs/v2.0/el/button-raised
[lnk23]: refs/v2.0/el/button-flat
[lnk24]: refs/v2.0/el/table
[lnk25]: refs/v2.0/el/list
[lnk26]: refs/v2.0/el/dropdown
[lnk27]: refs/v2.0/el/modal
[lnk28]: refs/v2.0/el/flexbox
[lnk29]: refs/v2.0/el/fcontainer
[lnk30]: refs/v2.0/el/grid
[lnk31]: refs/v2.0/el/row
[lnk32]: refs/v2.0/el/col
[lnk33]: refs/v2.0/el/vrow
[lnk34]: refs/v2.0/el/group
[lnk35]: refs/v2.0/el/button-group

[lnk36]: refs/v2.0/ut/block-align
[lnk37]: refs/v2.0/ut/display
[lnk38]: refs/v2.0/ut/wrap
[lnk39]: refs/v2.0/ut/align
[lnk40]: refs/v2.0/ut/self
[lnk41]: refs/v2.0/ut/content
[lnk42]: refs/v2.0/ut/justify
[lnk43]: refs/v2.0/ut/direction
[lnk44]: refs/v2.0/ut/font-size
[lnk45]: refs/v2.0/ut/font-style
[lnk46]: refs/v2.0/ut/fx
[lnk47]: refs/v2.0/ut/od
[lnk48]: refs/v2.0/ut/hide-on
[lnk49]: refs/v2.0/ut/padding
[lnk50]: refs/v2.0/ut/margin
[lnk51]: refs/v2.0/ut/border
[lnk52]: refs/v2.0/ut/overflow
[lnk53]: refs/v2.0/ut/position
[lnk54]: refs/v2.0/ut/sw
[lnk55]: refs/v2.0/ut/zi
[lnk56]: refs/v2.0/ut/sd
[lnk57]: refs/v2.0/ut/text-align
[lnk58]: refs/v2.0/ut/total
[lnk59]: refs/v2.0/ut/block
