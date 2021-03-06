'use strict';

window.onhashchange = switchToStateFromURLHash;

let objA = {
    article_1:{ 
        name : 'Информация',
        text : '<b>Информация</b>  — сведения независимо от формы их представления. Несмотря на широкую распространённость, понятие информации остаётся одним из самых дискуссионных в науке, а термин может иметь различные значения в разных отраслях человеческой деятельности.'
    },
    article_2:{
        name: 'Общество',
        text: '<b>Культурное разнообразие</b> — это наличие множества самых разнообразных культур в отличие от монокультуры, глобальной монокультуры или стирания культурных различий, что, в общем-то, схоже с упадком культуры. Понятие «культурное разнообразие» может также означать уважение к особенностям иных культур.'
    },    
    article_3:{
        name: 'Природа',
        text: '<b>Природа</b> — материальный мир планеты Земля, в сущности — основной объект изучения естественных наук. В быту слово «природа» часто употребляется в значении естественная среда обитания (всё, что не создано человеком).'
    },
    article_4:{
        name: 'Человек',
        text: '<b>Человек</b> — общественное существо, обладающее разумом и сознанием, а также субъект общественно-исторической деятельности и культуры. Возник на Земле в результате эволюционного процесса — антропогенеза, детали которого продолжают изучаться. Специфическими особенностями человека, отличающими его от других животных, являются прямохождение, высокоразвитый головной мозг, мышление и членораздельная речь.'
    },
    article_5:{
        name: 'Техника',
        text: '<b>Техника</b>  — обобщающее наименование технических средств. Понятие техники охватывает технические изделия, ранее не существовавшие в природе и процессы их изготовления человеком для осуществления какой-либо деятельности, в том числе: машины, механизмы, оборудование, аппараты, инструменты, приборы и т. д. — а также системы взаимосвязанных технических устройств.'
    },
    article_6:{
        name: 'Объекты',
        text: '<b>Объект</b> — философская категория, выражающая нечто, на что направлена практическая или познавательная деятельность субъекта (наблюдателя). Это нечто может существовать как в реальной действительности, так и в вымышленном мире; а объектом может быть и сам субъект.'
    }
};

localStorage.setItem('article', JSON.stringify(objA));

function switchToStateFromURLHash() {
    
    let URLHash = window.location.hash;

    let hash = decodeURIComponent(URLHash.substr(1));

    let pageHTML;
    
    let splitHash = hash.split('_')[0];

    let items = JSON.parse(localStorage.getItem('article'));   

    switch (splitHash) {
        case "Main":
            pageHTML = '<p><b>Информация о сайте</b></p><a href="#Contents">Оглавление</a>' ;
            break;
        case "Contents":
            pageHTML = '<p><i><b>Оглавление</b></i></p>'
            for(let key in items) {
                let name = items[key].name; 
                pageHTML += `<p>${name[0]}<p>`;
                pageHTML += `<a href="#${key}">${items[key].name}</a><br>`;        
            };
            break;            
        case "article": 
            pageHTML = `<p><b><big>${items[hash].name}</big></b></p>`;
            pageHTML +=`<p>${items[hash].text}</p>`;
            for(let key in items) {
                if(hash !== key) {
                    pageHTML += `<a href="#${key}">${items[key].name}</a><br>`;
                }
            }
            break;  
        default : 
            pageHTML = '<h3>Hello world!</h3>';
            break;
    }

    document.getElementById('Page').innerHTML = pageHTML;

}

switchToStateFromURLHash();