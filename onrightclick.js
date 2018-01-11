//mostly taken from http://tomoprogramming.blogspot.com/2013/08/simple-tutorial-for-chrome-extension.html

// Set up context menu at install time.
chrome.runtime.onInstalled.addListener(function () {
    var context = "selection";
    var title = "Quick link";
    var id = chrome.contextMenus.create({
        "title": title,
        "contexts": [context],
        "id": "context" + context
    });
});

// add click event
chrome.contextMenus.onClicked.addListener(onClickHandler);

// The onClicked callback function.
function onClickHandler(info, tab) {
    var sText = info.selectionText;
    var url = "https://www.google.com/search?q=" + encodeURIComponent(sText) + "&btnI";
    window.open(url);
};