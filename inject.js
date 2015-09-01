(function($) {
    var kickoffDownload = function(url) {
        if(url != undefined) {
            var html = '<img src="' + url + '" width="76px" height="76px" alt="" />';

            var div = $('<div />').css( {
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
        }else {
            console.error('Invalid undefined url passed to kickoffDownload');
        }
    };

    var profileLinkExists = function() {
        return $('.-cx-PRIVATE-ProfilePage__editProfileLink').length > 0;
    };

    var findImageAndDownload = function() {
        var img = findImage();

        if(img != '') {
            kickoffDownload(img);
        }
    };

    var findImage = function() {
        var $image = $('.-cx-PRIVATE-Photo__image');
    
        if($image.length > 0) {
            return $image.attr('src');
        }

        return '';
    };

    $(document).ready( function() {
        if(!profileLinkExists()) {
            findImageAndDownload();
        }
    });
})(jQuery);
