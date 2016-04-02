/// <reference path="../../../../../typings/main.d.ts" />

//TODO fix d.ts file include path
//TODO add variable to judge if use spa mode and include vue files
//TODO replace content div when click link
//TODO make code pretty
//TODO follow es2015 coding pattern
//TODO add test and comment
//TODO solve archives load problem
function ReplaceHtmlData(context) {
    console.log(context);
    console.log($('#content'));
    Vue.http.get(context.path).then(function (response) {
        let receivedHTML = $('<div/>').append(response.data);
        $('#content').fadeOut("slow", function() {
            $(this).replaceWith(receivedHTML.find('#content'));
            $('#content').fadeIn("slow");
        })
    }, function (response) {
        // error callback
    });
}

//Register and start router
page('*', ReplaceHtmlData);
page();