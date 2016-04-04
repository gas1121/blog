/// <reference path="../../../../../typings/main.d.ts" />

//TODO fix d.ts file include path
//TODO make code pretty
//TODO follow es2015 coding pattern
//TODO add test and comment
//TODO title name differs with different address
//TODO use promise to replace callback
//TODO close menu motion
//TODO menu highlight error

//Register and start router
page('/(.*)', ReplaceHtmlData);
page({
    dispatch:false
});

function ReplaceHtmlData(context) {
    console.log(context);
    console.log(context.path);
    Vue.http.get(context.path).then(function (response) {
        var path = window.location.pathname;
        console.log(path);
        let receivedHTML = $('<div/>').append(response.data);
        $('.sidebar-inner').replaceWith(receivedHTML.find('.sidebar-inner'));
        $('#content').fadeOut("slow", function() {
            $(this).replaceWith(receivedHTML.find('#content'));
            $('#content').fadeIn("slow", function() {
                Reboot();
            });
        })
    }, function (response) {
        // error callback
    });
}

//TODO select motion by page type
//TODO post-details.swig only exists in some pages
function Reboot() {
    //viaibale to identify spa mode
    CONFIG.in_ajax = true;

    console.log("motion.js");
    motion();
    console.log("pisces.js");
    //from pisces.js
    pisces();
    //from archive.swig
    $('.archive-year').velocity('transition.slideLeftIn');
    //from post-details.js(post-details.swig)
    console.log("post-details.swig");
    sidebarTocHighlight();
    sidebarNav();
    //from bootstrap.js
    console.log("bootstrap.js");
    bootstrap();
}