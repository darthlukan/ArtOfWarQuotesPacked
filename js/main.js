/**
 * @author Brian Tomlinson <darthlukan at gmail dot com>
 */

chrome.app.runtime.onLaunched.addListener (function () {
    chrome.app.window.create('index.html', {
        'bounds': {
            'width': 500,
            'height': 400
        },
        minWidth: 500,
        minHeight: 400
    });
});