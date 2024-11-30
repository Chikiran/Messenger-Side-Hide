<<<<<<< HEAD
document.getElementById('toggleInboxButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "toggleInbox" }, (response) => {
            console.log(response.status);
        });
    });
});

document.getElementById('toggleThreadButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "toggleThread" }, (response) => {
            console.log(response.status);
        });
    });
});

document.getElementById('githubButton').addEventListener('click', () => {
    window.open('https://github.com/Chikiran/Messenger-Side-Hide', '_blank');
});
=======
document.getElementById('toggleInboxButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "toggleInbox" }, (response) => {
            console.log(response.status);
        });
    });
});

document.getElementById('toggleThreadButton').addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "toggleThread" }, (response) => {
            console.log(response.status);
        });
    });
});

document.getElementById('githubButton').addEventListener('click', () => {
    window.open('https://github.com/Chikiran/Messenger-Side-Hide', '_blank');
});
>>>>>>> 593ed0f (Updated)
