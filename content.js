function updateStyles(hideInbox, hideThreadList, hideHeader, hidePinned) {
    const style = document.getElementById('messenger-hide-style') || document.createElement('style');
    style.id = 'messenger-hide-style';
    
    let css = '';
    if (hideInbox) {
        css += `
        [role="navigation"][aria-label="Inbox switcher"] {
            display: none !important;
        }`;
    }
    if (hideThreadList) {
        css += `
        [role="navigation"][aria-label="Thread list"] {
            display: none !important;
        }`;
    }
    if (hideHeader) {
        css += `
        [role="main"] .x9f619.x1n2onr6.x1ja2u2z.x78zum5.x2lah0s.x1qughib.x6s0dn4.xozqiw3.x1q0g3np.xn6708d.x1ye3gou.x1a8lsjc {
            display: none !important;
        }`;
    }
    if (hidePinned) {
        css += `
        [aria-label*="Pinned Messages Banner"] {
            display: none !important;
        }`;
    }
    
    style.textContent = css;
    document.head.appendChild(style);
}

// Listen for messages from the popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "updateStyles") {
        chrome.storage.sync.get(['hideInbox', 'hideThreadList', 'hideHeader', 'hidePinned'], function(result) {
            updateStyles(result.hideInbox, result.hideThreadList, result.hideHeader, result.hidePinned);
        });
        sendResponse({status: "Styles updated"});
    }
});

// Initial load
chrome.storage.sync.get(['hideInbox', 'hideThreadList', 'hideHeader', 'hidePinned'], function(result) {
    updateStyles(result.hideInbox, result.hideThreadList, result.hideHeader, result.hidePinned);
});
