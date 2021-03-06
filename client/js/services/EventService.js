/**
 * Created by barsa on 3/30/2017.
 */

angular.module('app.services', []).factory('Event', function ($resource) {
    return $resource('../api/v1/events/:id', {id: '@id'}, {
        update: {
            method: 'PUT'
        }
    });
}).service('popupService', ['$window', function ($window) {
    this.showPopup = function (message) {
        return $window.confirm(message); //Ask the users if they really want to delete
    }
}]);