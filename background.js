console.log('background.js');

var g = {
    download: function (opts) {
        console.log(opts);
    }
};

chrome.extension.onRequest.addListener(function (req, sender, sendResponse) {
    console.log('onRequest');

    if (g.hasOwnProperty(req.action)) {
        g[req.action].call(req.opts);
    }
});
