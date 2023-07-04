# view-pdf-in-browser

A browser extension to force PDFs to be viewed inline using your browser instead of downloading them to your file system.

Available for Firefox here: https://addons.mozilla.org/en-US/firefox/addon/viewpdfinbrowser/

# Docs/background

https://ciaran.dev/2022/06/30/why-do-some-pdfs-download-and-others-are-viewable-in-browser.html

# Setup

1. After installing the extension right click it and select "Manage" extension. 
2. Click on the permissions tab. 
3. Click on the toggle button for the "Access your data for all websites" option.

# Test

1. Disable the extension.
2. Open https://www.researchgate.net/profile/M-Vinay-Kumar/post/Can-anyone-suggest-me-case-study-of-ground-improvement-through-vacuum-consolidation/attachment/5c4e868e3843b0544e62b27d/AS%3A719904953094144%401548650124561/download/Ground_Improvement_Case_Histories_hANSBO.pdf
3. It will download to your device.
4. Enable the extension.
5. Open https://www.researchgate.net/profile/M-Vinay-Kumar/post/Can-anyone-suggest-me-case-study-of-ground-improvement-through-vacuum-consolidation/attachment/5c4e868e3843b0544e62b27d/AS%3A719904953094144%401548650124561/download/Ground_Improvement_Case_Histories_hANSBO.pdf
6. It will open in your browsers built-in PDF viewer.

# Permissions

This extension requests permissions to see data related to all URLs that contain a PDF. This is the most restrictive I
can make the permissions while keeping the extension useful.
