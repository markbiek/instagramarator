(function ($) {
    var kickoffDownload = function (url) {
        if (url != undefined) {
            var html = '<img src="' + url + '" width="76px" height="76px" alt="" />';

            var div = $('<div />').css({
                'position': 'fixed',
                'top': '0px',
                'right': '16px',
                'width': '76px',
                'height': '76px',
                'overflow': 'hidden',
                'z-index': '100000',
                'border': '3px solid #ccc'
            });

            $(div).attr('id', 'instagramarator');
            $(div).html(html);
            $('body').append(div);
        } else {
            console.error('Invalid undefined url passed to kickoffDownload');
        }
    };

    var profileLinkExists = function () {
        return $('.-cx-PRIVATE-ProfilePage__username').length > 0;
    };

    var findImageAndDownload = function () {
        var img = findImage();

        if (img != '') {
            kickoffDownload(img);
        }
    };

    var findImage = function () {
        var $image = $('.-cx-PRIVATE-Photo__image');

        if ($image.length > 0) {
            return $image.attr('src');
        }

        return '';
    };

    $(document).ready(function () {
        $(document).on('mouseenter', 'a', function (e) {
            console.log(this);
        });

        $(document).on('mouseenter', '.-cx-PRIVATE-PostsGridItem__root', function (e) {
            var imgSrc = $('img', this).attr('src');
            console.log(imgSrc);

            var $img = $('<img />').css({
                'z-index': 1000,
                'display': 'block',
                'position': 'absolute',
                'top': '0px',
                'left': '0px',
                'width': '32px',
                'height': '32px',
                'border': '1px solid #ccc'
            }).attr('src', imgSrc);

            $('.-cx-PRIVATE-PostsGridItem__postInfo').append($img);
        });

        $(document).on('mouseleave', '.-cx-PRIVATE-PostsGridItem__root,.-cx-PRIVATE-PostsGridItem__postInfo', function (e) {
        });

        /*
        if (!profileLinkExists()) {
            findImageAndDownload();
        }
        */
    });
})(jQuery);
