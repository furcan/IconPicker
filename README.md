<p align="center">
  <img src="https://raw.githubusercontent.com/furcan/IconPicker/master/github-cover.png" width="640" height="auto" alt="Icon Picker">
</p>


# Icon Picker
Use the Font Awesome Icons (Font Awesome Free v5.9.0) in your HTML forms. (1534 icons)


### Current Version
1.3.0 [*](https://github.com/furcan/IconPicker/blob/master/ReleaseNotes.md)

### Website and Demo
https://furcan.github.io/IconPicker/

---------

#### Install

##### [npm](https://www.npmjs.com/package/@furcan/iconpicker)
```
npm i @furcan/iconpicker
```
##### [yarn](https://yarnpkg.com/en/package/@furcan/iconpicker)
```
yarn add @furcan/iconpicker
```

---------

#### 1- CSS
`<link rel="stylesheet" href="dist/fontawesome590/css/all.min.css" />`

`<link rel="stylesheet" href="dist/iconpicker-1.3.0.css" />`

#### 2- JavaScript
`<script src="dist/iconpicker-1.3.0.js"></script>`

#### 3- HTML
`<button type="button" id="GetIconPicker" data-iconpicker-input="input#IconInput" data-iconpicker-preview="i#IconPreview">Select Icon</button>`

#### 4- Init

```js
// Default options
IconPicker.Init({
  // Required: You have to set the path of IconPicker JSON file to "jsonUrl" option. e.g. '/content/plugins/IconPicker/dist/iconpicker-1.3.0.json'
  jsonUrl: null,
  // Optional: Change the buttons or search placeholder text according to the language.
  searchPlaceholder: 'Search Icon',
  showAllButton: 'Show All',
  cancelButton: 'Cancel',
});
```

#### 5- Run

```js
// Select your Button element (ID or Class)
IconPicker.Run('#GetIconPicker');
```


---------
---------
---------

#### Copyright
Copyright © 2019 Icon Picker

#### License
MIT license - https://opensource.org/licenses/MIT