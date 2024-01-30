// ==UserScript==
// @name         Test
// @namespace    http://tampermonkey.net/
// @version      2024-01-09
// @description  try to take over the world!
// @author       You
// @match        https://heathfield-community-college.uk.arbor.sc/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      http://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @grant        GM_addStyle
// ==/UserScript==

(function() {
    'use strict';
    console.log ("TEST");
    // Since teachers can now add a button to mark as done, I may repurpose this project so that on tasks where teachers forget to add the button it will add one manually, and use the post request that marks stuff as done.
    function actionFunction (jNode) {
        console.log ("TEST 2");
        console.log ("TEST 3");
        console.log($('.mis-section:contains("Assignments that are due")').children().children().children().last().find(".x-field .mis-property-row"))
        //I need to now make it loop through each of the tasks and add the button to each. starts on 1013, and then counts to 1017
        // Find each jQuery
        for (let i = 1013; i < 1100; i++) {
            break;
            var zNode = document.createElement ('div');
            zNode.innerHTML = `<button id="MkDn${i}"  type="button">`
                + 'Don\'t click me!</button>'
            ;
            zNode.setAttribute ('id', `myContainer${i}`);
            var task = document.getElementById (`mis-property-row-${i}-bodyEl`);
            //var Node1 = task[0];
            task.appendChild(zNode);
            console.log (zNode);
            document.getElementById (`MkDn${i}`).addEventListener (
                "click", function ButtonClickAction (zEvent) {
                    var zNode = document.createElement ('p');
                    zNode.innerHTML = 'The button was clicked.';
                    document.getElementById (`myContainer${i}`).appendChild (zNode);
                }, false
            );
        }
    }
    //--- Activate the newly added button.
    window.addEventListener("load", function(e){
        waitForKeyElements (".calendar-widget-header", actionFunction);
    })

    //--- Style our newly added elements using CSS.
    GM_addStyle ( `
    #myContainer {
        position:               absolute;
        top:                    0;
        left:                   0;
        font-size:              20px;
        background:             blue;
        border:                 3px outset black;
        margin:                 5px;
        opacity:                0.9;
        z-index:                1100;
        padding:                5px 20px;
    }
    #myButton {
        cursor:                 pointer;
    }
    #myContainer p {
        color:                  red;
        background:             white;
    }
` );
})();
