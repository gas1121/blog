/// <reference path="../../../../../typings/main.d.ts" />

//TODO fix d.ts file include path
//TODO use vue-router to manage route
//TODO add variable to judge if use spa mode and include vue files
//TODO replace main div when click link
//TODO make code pretty
//TODO follow es2015 coding pattern
//TODO add test and comment
new Vue({
  el: '#main',
  replace: false,
  data: {
    message: 'Hello Vue.js!'
  },
  
  ready: function() {

      // GET request
      this.$http.get('/lab').then(function (response) {
          
          let receivedHTML = $('<div/>').append(response.data);
          $('main').replaceWith(receivedHTML.find('main'));
          //this.message = receivedHTML.find('main')[0].innerHTML;

          // get status
          response.status;

          // get all headers
          response.headers();

          // get 'expires' header
          response.headers('expires');

          // set data on vm
          this.$set('someData', response.data)

      }, function (response) {

          // error callback
      });

    }
})