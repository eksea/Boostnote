/* global angular */
angular.module('codexen')
  .directive('btnEditSnippet', function (Modal) {
    return {
      scope: {
        snippet: '=btnEditSnippet'
      },
      link: function (scope, el) {
        el.on('click', function () {
          Modal.editSnippet(angular.copy(scope.snippet))
        })
      }
    }
  })