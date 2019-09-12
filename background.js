chrome.webNavigation.onBeforeNavigate.addListener(function (details) {
    var AEM_URL = 'http://localhost:4502/content/';

    function updatedURL(url) {
        // return url.slice(-1) === '/' ? url.slice(0, -1) + '.html' : url + '.html';
        return (url + '.html').replace(/\/\./, '.');
    }

    if (details.url.indexOf(AEM_URL) !== -1 && details.url.indexOf('.html') === -1) {
        chrome.tabs.update(details.tabId, {
            url: updatedURL(details.url)
        });
    }
});
