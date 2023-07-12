"use strict";

function ChangeContentDispositionHeaderToInline(e) {
    let found_content_disposition_header = false;
    let found_content_type_header = false;
    for (const header of e.responseHeaders) {
        if (header.name.toLowerCase() === 'content-disposition') {
            found_content_disposition_header = true;
            header.value = 'inline';
        }
        if (header.name.toLowerCase() === 'content-type') {
            found_content_type_header = true;
            header.value = 'application/pdf';
        }
    }
    if (!found_content_disposition_header) {
        console.debug("Did not find Content-Disposition header. Adding the header.");
        e.responseHeaders.push({"name":"content-disposition", "value": "inline"});
    }
    if (!found_content_type_header){
        console.debug("Did not find Content-Type header. Adding the header.");
        e.responseHeaders.push({"name":"content-type", "value": "application/pdf"});
    }
    console.debug(e.responseHeaders);
    return {responseHeaders: e.responseHeaders};
}

browser.webRequest.onHeadersReceived.addListener(
    ChangeContentDispositionHeaderToInline,
    {urls: ["*://*/*.pdf*"]},
    ["blocking", "responseHeaders"]
);
