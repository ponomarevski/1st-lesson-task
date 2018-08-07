'use strict';

let formDef1 =
  [
    { label: 'Название сайта:', kind: 'longtext', name: 'sitename' },
    { label: 'URL сайта:', kind: 'longtext', name: 'siteurl' },
    { label: 'Посетителей в сутки:', kind: 'number', name: 'visitors' },
    { label: 'E-mail для связи:', kind: 'shorttext', name: 'email' },
    {
      label: 'Рубрика каталога:', kind: 'combo', name: 'division',
      variants: [{ text: 'здоровье', value: 1 }, { text: 'домашний уют', value: 2 }, { text: 'бытовая техника', value: 3 }]
    },
    {
      label: 'Размещение:', kind: 'radio', name: 'payment',
      variants: [{ text: 'бесплатное', value: 1 }, { text: 'платное', value: 2 }, { text: 'VIP', value: 3 }]
    },
    { label: 'Разрешить отзывы:', kind: 'check', name: 'votes' },
    { label: 'Описание сайта:', kind: 'memo', name: 'description' },
    { label: 'Опубликовать:', kind: 'submit' },
  ];

let formDef2 =
  [
    { label: 'Фамилия:', kind: 'longtext', name: 'lastname' },
    { label: 'Имя:', kind: 'longtext', name: 'firstname' },
    { label: 'Отчество:', kind: 'longtext', name: 'secondname' },
    { label: 'Возраст:', kind: 'number', name: 'age' },
    { label: 'Зарегистрироваться:', kind: 'submit' },
  ];

let doc = document;


function input(formElements) {

  let form = doc.createElement("form");

  for (let i = 0; i < formElements.length; i++) {

    let label = doc.createElement("Label");
    label.setAttribute("for", formElements[i].name);
    label.innerHTML = formElements[i].label;
    form.appendChild(label);
    let element;
    switch (formElements[i].kind) {
      case "longtext":
        element = doc.createElement("input");
        element.id = formElements[i].name;
        element.type = "text";
        break;
      case "number":
        element = doc.createElement("input");
        element.id = formElements[i].name;
        element.type = "number";
        break;
      case "shorttext":
        element = doc.createElement("input");
        element.id = formElements[i].name;
        element.type = "text";
        element.maxLength = 50;
        break;
      case "radio":
        // element.type = "radio";
        break;
      case "check":
        // element.type = "checkbox";
        break;
      case "memo":
        element = doc.createElement("textarea");
        element.id = formElements[i].name;
        break;
      case "submit":
        // element.type = "submit";
        break;
    }
    if(element)
    form.appendChild(element);
  }
  doc.body.appendChild(form);
}
input(formDef1);

