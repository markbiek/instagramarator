(function ($) {
    $(document).ready(function () {
        console.log('ready');
        $(document).on('mouseenter', 'div', function (e) {
            var $a = $(this).parents('a');
            var $imgs = $a.find('img');

            $imgs.each(function () {
                var $img = $('<img />').css({
                    'z-index': 1000,
                    'display': 'block',
                    'position': 'absolute',
                    'top': '0px',
                    'left': '0px',
                    'width': '32px',
                    'height': '32px',
                    'border': '1px solid #ccc'
                }).attr('src', $(this).attr('src')).addClass('preview-image');

                $a.append($img);
            });
        });

        $(document).on('mouseleave', 'div', function (e) {
            var $a = $(this).parents('a');
            var $preview = $a.find('preview-image');

            $preview.remove();
        });
    });
})(jQuery);
