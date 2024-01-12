// ==UserScript==
// @name         ARBOR SCRIPT
// @namespace    http://tampermonkey.net/
// @version      2024-01-09
// @description  try to take over the world!
// @author       You
// @match        https://heathfield-community-college.uk.arbor.sc/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const MkDn_btn = document.createElement('button');
    MkDn_btn.textContent = 'Mark Done';
    MkDn_btn.style.backgroundColor = '#0bc904';
    MkDn_btn.style.color = 'white';
    MkDn_btn.style.border = 'none';
    MkDn_btn.style.borderRadius = '5px';
    MkDn_btn.style.padding = '10px';
    const TaskDiv = document.querySelector ('div.top-bar');
    if (TaskDiv) {
        TaskDiv.appendChild(MkDn_btn);
    }

    // Your code here...
})();