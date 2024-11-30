
function toggleInbox() {
    const inboxSwitcher = document.querySelector('div[aria-label="Inbox switcher"]');
    if (inboxSwitcher) {
        inboxSwitcher.style.display = inboxSwitcher.style.display === 'none' ? 'block' : 'none';
    }
}

function toggleThread() {
    const threadList = document.querySelector('div[aria-label="Thread list"]');
    if (threadList) {
        threadList.style.display = threadList.style.display === 'none' ? 'block' : 'none';
    }
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "toggleInbox") {
        toggleInbox();
        sendResponse({status: "Inbox toggled"});
    } else if (request.action === "toggleThread") {
        toggleThread();
        sendResponse({status: "Thread toggled"});
    }
});
