console.log('background.js');

var g = {
    download: function(opts) {
        console.log(opts);
    }
};

chrome.extension.onRequest.addListener(function(req, sender, sendResponse) {
    console.log('onRequest');

    if(g.hasOwnProperty(req.action)) {
        g[req.action].call(req.opts);
    }

    /*if(req.greeting == "hello") {
        console.log(req);
        console.log(sender);
        var1 = req.var1; // Set variable 1
        var2 = req.var2; // Set variable 2

        chrome.tabs.getSelected(null, function(tab) {
            chrome.tabs.sendRequest(tab.id, {method: 'ping'}, function(response) {
                console.log(response.data);
            });
        });
        
    } else {
        sendResponse({});    // Stop
    }*/
});
