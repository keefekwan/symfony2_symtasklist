// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

//$(function(){
//
//    //console.log('jQuery is active');
//
//    $('.ajax-task-complete').on({
//        click: function(e) {
//            e.preventDefault();
//            var $href = $(this).attr('href');
//
//            $('<div></div>').load($href+' form', function(){
//
//                // Set Form
//                var $form = $(this).children('form');
//
//                // Set Checkbox
//                var $cb = $form.find('input[type="checkbox"]');
//
//                // Toggle
//                $cb.prop('checked', !$cb.prop('checked'));
//
//                // From action URL
//                var $url = $form.attr('action');
//
//                // Set data
//                var $data = $form.serialize();
//
//                $.ajax({
//                    url: $url,
//                    data: $data,
//                    method: 'post',
//                    dataType: 'json',
//                    cache: false,
//                    success: function(obj) {
//                        var $tic = $('#task-complete-'+obj.id+' .ajax-task-complete');
//                        if (obj.complete) {
//                            $tic.text('X');
//                        } else {
//                            $tic.text('O');
//                        }
//                    },
//                    complete: function() {
//                        console.log('Complete!');
//                    },
//                    error: function() {
//                        console.log(err);
//                    }
//                });
//
//            });
//
//        }
//    });
//});

$(function(){

    //console.log('jQuery is active');

    $('.ajax-task-complete').on({
        click: function(e) {
            e.preventDefault();
            var $href = $(this).attr('href');

            $('<div></div>').load($href+' form', function(){

                // Set Form
                var $form = $(this).children('form');

                // Set Checkbox
                var $cb = $form.find('input[type="checkbox"]');

                // Toggle
                $cb.prop('checked', !$cb.prop('checked'));

                // From action URL
                var $url = $form.attr('action');

                // Set data
                var $data = $form.serialize();

                $.ajax({
                    url: $url,
                    data: $data,
                    method: 'post',
                    dataType: 'json',
                    cache: false,
                    success: function(obj) {
                        var $tic = $('#task-complete-'+obj.id+' .ajax-task-complete');
                        if (obj.complete) {
                            $tic.text('X');
                        } else {
                            $tic.text('O');
                        }
                    },
                    complete: function() {
                        console.log('Complete!');
                    },
                    error: function() {
                        console.log(err);
                    }
                });

            });

        }
    });
});
