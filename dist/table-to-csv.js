'use strict'
angular.module('tv.tableToCsv', [])
  .directive('tableToCsv', ["$window", "$timeout", "$document", function (
    $window,
    $timeout,
    $document
  ) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        // Pinched from ng-csv, see: https://git.io/vom5n
        function download (csv, filename) {
          var charset = scope.charset
          var blob = new Blob([csv], {
            type: 'text/csv;charset=' + charset + ';'
          })

          if ($window.navigator.msSaveOrOpenBlob) {
            return navigator.msSaveBlob(blob, filename)
          }

          var downloadContainer = angular.element(
            '<div data-tap-disabled="true"><a></a></div>'
          )
          var downloadLink = angular.element(downloadContainer.children()[0])
          downloadLink.attr('href', $window.URL.createObjectURL(blob))
          downloadLink.attr('download', filename)
          downloadLink.attr('target', '_blank')

          $document.find('body').append(downloadContainer)
          $timeout(function () {
            downloadLink[0].click()
            downloadLink.remove()
          }, null)
        }

        element.bind('click', function (e) {
          var table = e.target.previousElementSibling
          var csv = ''
          for (var i = 0; i < table.rows.length; i++) {
            var rowData = table.rows[i].cells
            for (var j = 0; j < rowData.length; j++) {
              csv = csv + rowData[j].innerText + ','
            }
            csv = csv.substring(0, csv.length - 1)
            csv = csv + '\n'
          }
          csv = csv.substring(0, csv.length - 1)
          download(csv, 'data.csv')
        })
      }
    }
  }])
