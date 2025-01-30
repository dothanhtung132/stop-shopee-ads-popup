// ==UserScript==
// @name         Stop ads popup
// @namespace    http://tampermonkey.net/
// @version      0.0.1
// @description  Stop window.open if matched URLs
// @author       Tung Do
// @match        *://*/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
    'use strict';
    
    const originalWindowOpen = window.open;
    window.open = (...args) => {
        if (/^(.*\.)?(shopee|lazada)\./.test(args[0])) return;
        originalWindowOpen.apply(window, args);
    };
})();
