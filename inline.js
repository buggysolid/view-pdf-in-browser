"use strict";

function ChangeContentDispositionHeaderToInline(e) {
    let found = false;
    for (const header of e.responseHeaders) {
        if (header.name.toLowerCase() === 'content-disposition') {
            found = true;
            header.value = 'inline';
        }
    }
    if (!found) {
        console.debug(e.responseHeaders, "Did not find header.");
    }
    return {responseHeaders: e.responseHeaders};
}

browser.webRequest.onHeadersReceived.addListener(
    ChangeContentDispositionHeaderToInline,
    {urls: ["https://*/*.pdf"]},
    ["blocking", "responseHeaders"]
);
