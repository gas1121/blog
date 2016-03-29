new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!'
  },
  
  ready: function() {

      // GET request
      this.$http.get('/lab').then(function (response) {
          
          console.debug(response.data);
          this.message = $($.parseHTML(response.data)).text();

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