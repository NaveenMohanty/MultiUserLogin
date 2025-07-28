console.log('popup.js loaded');
document.getElementById('openFreshTab').addEventListener('click', () => {
  chrome.runtime.sendMessage({ action: 'openFreshTab' });
});
