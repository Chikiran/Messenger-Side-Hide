document.addEventListener('DOMContentLoaded', function() {
    const inboxToggle = document.getElementById('inboxToggle');
    const threadListToggle = document.getElementById('threadListToggle');
    const headerToggle = document.getElementById('headerToggle');
    const pinnedToggle = document.getElementById('pinnedToggle');
    const themeToggle = document.getElementById('themeToggle');

    // Load saved states
    chrome.storage.sync.get(
        ['hideInbox', 'hideThreadList', 'hideHeader', 'hidePinned', 'darkMode'], 
        function(result) {
            inboxToggle.checked = result.hideInbox || false;
            threadListToggle.checked = result.hideThreadList || false;
            headerToggle.checked = result.hideHeader || false;
            pinnedToggle.checked = result.hidePinned || false;
            
            // Apply saved theme
            if (result.darkMode) {
                document.body.setAttribute('data-theme', 'dark');
            }
    });

    // Add event listeners for toggles
    inboxToggle.addEventListener('change', function() {
        chrome.storage.sync.set({
            hideInbox: this.checked
        });
        updateContentScript();
    });

    threadListToggle.addEventListener('change', function() {
        chrome.storage.sync.set({
            hideThreadList: this.checked
        });
        updateContentScript();
    });

    headerToggle.addEventListener('change', function() {
        chrome.storage.sync.set({
            hideHeader: this.checked
        });
        updateContentScript();
    });

    pinnedToggle.addEventListener('change', function() {
        chrome.storage.sync.set({
            hidePinned: this.checked
        });
        updateContentScript();
    });

    // Theme toggle functionality
    themeToggle.addEventListener('click', function() {
        const isDark = document.body.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.body.removeAttribute('data-theme');
            chrome.storage.sync.set({ darkMode: false });
        } else {
            document.body.setAttribute('data-theme', 'dark');
            chrome.storage.sync.set({ darkMode: true });
        }
    });
});

function updateContentScript() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "updateStyles" });
    });
}

document.getElementById('githubButton').addEventListener('click', () => {
    window.open('https://github.com/Chikiran/Messenger-Side-Hide', '_blank');
});
