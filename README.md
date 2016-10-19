# angular-table-to-csv

[![Build Status][travis-image]][travis-url]
[![npm version][npm-image]][npm-url]
[![License][license-image]][license-url]

[travis-url]: https://travis-ci.org/tlvince/angular-table-to-csv
[travis-image]: https://img.shields.io/travis/tlvince/angular-table-to-csv.svg
[npm-url]: https://www.npmjs.com/package/angular-table-to-csv
[npm-image]: https://img.shields.io/npm/v/angular-table-to-csv.svg
[license-url]: https://opensource.org/licenses/MIT
[license-image]: https://img.shields.io/npm/l/angular-table-to-csv.svg

> Export a HTML table to CSV

Tries to do the simplest thing possible. No ngTables, assume all values are
plain strings, etc.

## Installation

```shell
bower install --save angular-table-to-csv
```

## Usage

```js
angular.module('app', [
  'tv.tableToCsv'
])
```

```html
<table>
  <tr>
    <th>Header</th>
  </tr>
  <tr>
    <td>Data</td>
  </tr>
</table>

<button table-to-csv>Export</button>
```

To add a dynamic filename, add a `csv-title` attribute to the button:

```html
<button table-to-csv csv-title="{table-title}">Export</button>
```

The resulting filename will be `{table-title}.csv`. If the `csv-title` attribute is omitted, the filename will be `table-to-csv.csv`.

## Author

© 2016 Tom Vincent <git@tlvince.com> (https://tlvince.com)

## License

Released under the [MIT license](http://tlvince.mit-license.org).
