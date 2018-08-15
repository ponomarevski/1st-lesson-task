'use strict';

window.onhashchange = switchToStateFromURLHash;

function switchToStateFromURLHash() {
    
    let URLHash = window.location.hash;

    let hash = decodeURIComponent(URLHash.substr(1));

    let pageHTML;
    switch (hash) {
        case "Main":
            pageHTML = '<p>Информация о сайте</p><a href="#Contents">Оглавление</a>';
            break;
        default : 
            pageHTML = '<h3>Hello world!</h3>';
            break;

    }

    document.getElementById('Page').innerHTML = pageHTML;

}

switchToStateFromURLHash();