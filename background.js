chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    const AEM_URL = 'http://localhost:4502/content/';
    const requestURL = details.url;

    if (requestURL.indexOf(AEM_URL) !== -1 && requestURL.indexOf('.html') === -1) {
        chrome.tabs.update(details.tabId, {
            url: (requestURL + '.html').replace(/\/\./, '.')
        });
    }
});
