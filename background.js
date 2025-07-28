chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'openFreshTab') {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      const currentTab = tabs[0];
      if (currentTab && currentTab.url) {
        const url = new URL(currentTab.url);

        // Create a new tab with the homepage
        chrome.tabs.create({ url: null }, (newTab) => {
          // Clear cookies for the domain in the new tab
          chrome.cookies.getAll({ domain: url.hostname }, (cookies) => {
            cookies.forEach((cookie) => {
              chrome.cookies.remove({
                url: url.protocol + '//' + url.hostname + cookie.path,
                name: cookie.name,
              });
            });
          });
        });
      }
    });
  }
});
