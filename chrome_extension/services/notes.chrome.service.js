'use strict';

(function () {

  function notesService($resource) {
    return $resource('http://localhost:3000/notes/:noteId', {
      noteId: '@_id'
    }, {
      update: {
        method: 'PUT'
      }
    });
  }
  //Articles service used for communicating with the articles REST endpoints
  angular.module('drops')
    .factory('Notes', ['$resource', notesService])

}());
