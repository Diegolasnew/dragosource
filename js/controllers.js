/**
 * INSPINIA - Responsive Admin Theme
 *
 */

/**
 * MainCtrl - controller
 */
function MainCtrl() {
    this.userName = 'Usuario anónimo';
};


angular
    .module('inspinia')
    .controller('MainCtrl', MainCtrl)