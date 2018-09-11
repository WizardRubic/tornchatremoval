// ==UserScript==
// @name         Poker Chat Removal
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world! i mean remove the poker beta chat
// @author       WizardRubic
// @match        *.torn.com/*
// @grant        none
// ==/UserScript==



(function() {
    'use strict';
    var collectionOfChats = document.getElementsByClassName("chat-box-title_out6E");
    for(var index = collectionOfChats.length-1; index>=0; index--) {
        if(collectionOfChats[index].title == "Poker Beta") {
            collectionOfChats[index].parentElement.style.display = "none";
        }
    }
})();