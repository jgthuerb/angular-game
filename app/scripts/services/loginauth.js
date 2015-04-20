/* global app:true */
/* exported app */
/*global Firebase */

'use strict';

app.factory('Auth', ['$firebaseAuth',
  function($firebaseAuth) {
    var ref = new Firebase('https://jon-game.firebaseio.com');
    return $firebaseAuth(ref);
  }
]);