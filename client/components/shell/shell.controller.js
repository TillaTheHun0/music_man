'use strict';

angular.module('musicManApp').controller('ShellCtrl', function($mdSidenav, $mdDialog, $scope, $location, Auth, $http) {
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
        Auth.logout();
        $location.path('/login');
    };

    $scope.isActive = function(route) {
        return route === $location.path();
    };

    $scope.toggleLeft = function() {
        $mdSidenav('left').toggle();
    };

    var originatorEv;
    $scope.openMenu = function($mdOpenMenu, ev) {
        originatorEv = ev;
        $mdOpenMenu(ev);
    };

    $scope.newNotifications = [{
        id: 1234,
        title: 'someone did something'
    }, {
        id: 456,
        title: 'someone did something else'
    }, {
        id: 839,
        title: 'new upload'
    }, {
        id: 9742,
        title: 'ABCD forked your song!'
    }]; // TODO: get from server

    $scope.showUpload = function(ev) {
        // TODO: implement upload dialog
        console.log('Upload clicked');
    };

    $scope.libraries = [
        { name: 'Guitars' },
        { name: 'Drums' },
        { name: 'Funky Bass' },
        { name: 'Female Vocals' },
        { name: 'Sludgy Jazz' },
        { name: '70\'s Samples' }
    ]; // TODO: get from server

    $scope.collaborations = [
        { name: 'Ballad of Otis Grimsby' },
        { name: 'Jazzy J\'s Funky Flex' },
        { name: 'DJ Pwn3 Club Mix' },
        { name: 'Friday Cover' },
        { name: 'Lisp the Musical' },
        { name: 'Dan\'s Country Rap Song' }
    ]; // TODO: get from server

    $scope.redial = function() {
        $mdDialog.show(
            $mdDialog.alert()
            .targetEvent(originatorEv)
            .clickOutsideToClose(true)
            .parent('body')
            .title('Suddenly, a redial')
            .content('You just called a friend; who told you the most amazing story. Have a cookie!')
            .ok('That was easy')
        );
        originatorEv = null;
    };

    $scope.checkVoicemail = function() {
        // This never happens.
    };

    $scope.showAddDialog = function($event) {
        var parentEl = angular.element(document.body);
        $mdDialog.show({
            parent: parentEl,
            targetEvent: $event,
            templateUrl: 'components/shell/dialog/dialog.html',
            controller: 'DialogController'
        });
    };

    $scope.setFiles = function(element) {
        $scope.$apply(function(scope) {
            console.log('files:', element.files);
            // Turn the FileList object into an Array
            scope.files = []
            for (var i = 0; i < element.files.length; i++) {
                scope.files.push(element.files[i])
            }
        });
    };

    $scope.uploadFile = function() {
        var fd = new FormData()
        for (var i in $scope.files) {
            $http.post('/api/things', { fileName: $scope.files[i].name, fileType: $scope.files[i].type, fileLength: $scope.files[i].size });
        }
    }
});

angular.module('musicManApp').directive('fileModel', ['$parse', function($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function() {
                scope.$apply(function() {
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);
