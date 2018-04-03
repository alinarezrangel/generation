---
layout: docpage
title: Element List
permalink: /docs/api-reference/element-list
---

These classes are the *valid* (that is, no deprecated) elements in Generation
**2.0**.

To see a list of *all* elements in Generation **2.0**, see [this page][elems].

## Elements that inherit `.abstract-box` ##

These elements *directly* inherit the `.abstract-box` class:

{: .table .table-striped }
| Class Name          | Element Name             | Link to reference         |
| ------------------- | ------------------------ | ------------------------- |
| `.box`              | Box                      | [Link][lnk2]              |
| `.table`            | Table                    | [Link][lnk24]             |
| `.flexbox`          | Flexbox                  | [Link][lnk28]             |

## Elements that inherit `.box` ##

These elements *directly* inherit the `.box` class:

{: .table .table-striped }
| Class Name          | Element Name             | Link to reference         |
| ------------------- | ------------------------ | ------------------------- |
| `.container`        | Container                | [Link][lnk3]              |
| `.card`             | Card/Card Box            | [Link][lnk8]              |
| `.form`             | Form                     | [Link][lnk9]              |
| `.fieldset`         | Fieldset                 | [Link][lnk10]             |
| `.input`            | Input                    | [Link][lnk11]             |
| `.label`            | Label                    | [Link][lnk12]             |
| `.navigation`       | Navigation               | [Link][lnk18]             |
| `.navigation.top`   | Top Navigation           | [Link][lnk19]             |
| `.navigation.side`  | Side Navigation          | [Link][lnk20]             |
| `.button`           | Button                   | [Link][lnk21]             |
| `.button.raised`    | Raised Button            | [Link][lnk22]             |
| `.button.flat`      | Flat Button              | [Link][lnk23]             |
| `.list`             | List                     | [Link][lnk25]             |
| `.dropdown`         | Dropdown                 | [Link][lnk26]             |
| `.modal`            | Modal Dialog             | [Link][lnk27]             |
| `.group`            | Group                    | [Link][lnk34]             |

## Elements that inherit `.flexbox` ##

These elements *directly* inherit the `.flexbox` class:

{: .table .table-striped }
| Class Name          | Element Name             | Link to reference         |
| ------------------- | ------------------------ | ------------------------- |
| `.fcontainer`       | Flexible Container       | [Link][lnk29]             |
| `.grid`             | Grid                     | [Link][lnk30]             |
| `.row`              | Row                      | [Link][lnk31]             |
| `.col`              | Column                   | [Link][lnk32]             |
| `.vrow`             | Vertical Row             | [Link][lnk33]             |
| `.button-group`     | Button Group             | [Link][lnk35]             |

## Elements that aren't a box ##

These elements aren't a box, so their do not inherit the `.abstract-box` class
directly nor undirectly:

*No elements aren't a box in Generation 2.0*

[elems]: class-list#element-classes

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
