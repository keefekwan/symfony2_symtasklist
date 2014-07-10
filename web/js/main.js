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
