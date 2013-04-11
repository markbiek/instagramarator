(function($) {
    var getBgImage = function(sel) {
        var bgImg = $(sel).css('background-image');
        var m = bgImg.match(/url\((.*?)\)/);
        if(m.length > 0) {
            return m[1];
        }
        
        return undefined;
    };

    var kickoffDownload = function(url) {
        if(url != undefined) {
            /*chrome.extension.sendRequest({
                "action": "download",
                "opts": {"url": url}
            });*/
            var html = '<img src="' + url + '" width="76" alt="" />';

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

    var findImageAndDownload = function(sel) {
        kickoffDownload(getBgImage(sel));
    };

    var pageProfile = function() {
        setTimeout( function() {
            //This is an image popup from the profile page
            if($('#profile-media-modal').is(':visible')) {
                console.log(getBgImage('#profile-media-modal .imgImg'));
                findImageAndDownload('#profile-media-modal .imgImg');
            }else {
                console.log('remove?');
                $('#instagramarator').remove();
            }
        }, 500);
    };

    var pageMedia = function() {
        console.log(getBgImage('.media-photo .img'));
        findImageAndDownload('.media-photo .img');
    };

    $(document).ready( function() {
        /*chrome.extension.sendRequest({
          "greeting": "hello",
          "var1": "variable 1",  //string
          "var2": true           //boolean
        });*/
        console.log('ready');

        if($('body').hasClass('page-profile')) {
            $(document).on('click', function(e) {
                pageProfile();
            });
        }else if($('body').hasClass('page-media')) {
            //This is a direct link to an image
            pageMedia();
        }
    });

    /*chrome.extension.onRequest.addListener( function(req, sender, sendResponse) {
        console.log('onRequest');
        console.log(req);
    });*/
})(jQuery);
