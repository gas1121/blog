/// <reference path="../../../../../typings/main.d.ts" />

//TODO fix d.ts file include path
//TODO add variable to judge if use spa mode and include vue files
//TODO replace content div when click link
//TODO make code pretty
//TODO follow es2015 coding pattern
//TODO add test and comment
//TODO solve load animation problem(motion.js)
//TODO title name differs with different address
//TODO use promise to replace callback

//Register and start router
page('*', ReplaceHtmlData);
page({
    dispatch:false
});

function ReplaceHtmlData(context) {
    console.log(context);
    console.log(context.path);
    Vue.http.get(context.path).then(function (response) {
        let receivedHTML = $('<div/>').append(response.data);
        $('#content').fadeOut("slow", function() {
            $(this).replaceWith(receivedHTML.find('#content'));
            $('#content').fadeIn("slow", function() {
                //TODO year slide in animation is just a patch now
                $('.archive-year').velocity(
                    'transition.slideLeftIn',
                    {
                        stagger: 50,
                        drag: true
                    }
                );
                //Setting for post animation
                let postAnimationTrigger = {}
                $.extend(postAnimationTrigger,NexT.motion.integrator);
                postAnimationTrigger.queue = [];
                postAnimationTrigger.cursor = -1;
                //postAnimationTrigger.add(NexT.motion.middleWares.menu);
                postAnimationTrigger.add(NexT.motion.middleWares.postList);
                CONFIG.motion && postAnimationTrigger.bootstrap();
                $(document).trigger('bootstrap:after');
            });
        })
    }, function (response) {
        // error callback
    });
}