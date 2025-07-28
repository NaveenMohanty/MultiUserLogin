# Multi User Login Chrome Extension

## Description

The Multi User Login Chrome Extension is designed to simplify the process of logging into multiple accounts on the same website. It works by opening a new tab with cleared cookies for the target domain, allowing you to start a fresh login session without interfering with your existing sessions.

## Features

*   Opens a new tab with a clean cookie slate.
*   Automatically clears cookies for the domain of the currently active tab.
*   Simple and easy to use.

## Installation

1.  **Download the Extension:** Download the extension files as a ZIP archive.
2.  **Extract the Files:** Extract the contents of the ZIP archive to a folder on your computer.
3.  **Open Chrome Extensions Page:** In Chrome, go to `chrome://extensions/`.
4.  **Enable Developer Mode:** In the top right corner of the Extensions page, toggle the "Developer mode" switch to the on position.
5.  **Load Unpacked Extension:** Click the "Load unpacked" button that appears in the top left corner.
6.  **Select the Extension Directory:** Browse to the folder where you extracted the extension files and select it.

The extension should now be installed and active in your Chrome browser.

## Usage

1.  **Navigate to the Website:** Open a tab and navigate to the website you want to log into with a new account.
2.  **Click the Extension Icon:** Click the Multi User Login extension icon in the Chrome toolbar.
3.  **Open New Tab:** Click the "Open New Tab" button in the extension popup.

A new tab will open, and the cookies for the domain of the original tab will be cleared. You can now log into the website with a different account in the new tab.

## Permissions

The extension requires the following permissions:

*   **activeTab:** To access the URL of the currently active tab.
*   **tabs:** To create and manage tabs.
*   **cookies:** To clear cookies for the specified domain.
*   **storage:** To store extension settings (if needed in future versions).
*   **host_permissions:** To access cookies for all URLs.

## Icon Attributions

The extension uses an icon sourced from a free online resource. All rights remain with the original creator.

## Support

For questions, feedback, or bug reports, please open an issue on the [GitHub repository](https://github.com/your-username/multi-user-login).

## License

This project is open source and available under the [MIT License](LICENSE).