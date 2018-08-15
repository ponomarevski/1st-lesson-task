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
  form.onsubmit = validateForm;
  let table = doc.createElement('table');

  for (let i = 0; i < formElements.length; i++) {

    let tr = doc.createElement('tr');
    table.appendChild(tr);

    let label = doc.createElement("Label");
    label.setAttribute("for", formElements[i].name);
    label.innerHTML = formElements[i].label;
    form.appendChild(label);

    if (label) {
      let td = doc.createElement('td');
      td.appendChild(label);
      tr.appendChild(td);
    }

    let element;

    switch (formElements[i].kind) {
      case "longtext":
        element = createText(formElements[i], 255);
        break;
      case "number":
        element = createNumber();
        break;
      case "shorttext":
        element = createText(formElements[i], 50);
        break;
      case "memo":
        createMemo(label.parentElement);
        break;
      case "combo":
        element = select(formElements[i].variants);
        break;
      case "radio":
        radio(formElements[i].variants, tr);
        break;
      case "check":
        element = createCheck();
        break;
      case "submit":
        element = createSubmit(formElements[i], label);
        break;

    }

    switch (formElements[i].name) {
      case "secondname":
      case "firstname":
      case "lastname":
        element.oninput = validateText.bind(element);
        break;
      case "visitors":
      case "age":
        element.oninput = validateNumber.bind(element);
        break;
      case "sitename":
        element.oninput = validateSiteName.bind(element);
        break;
      case "siteurl":
        element.oninput = validateSiteUrl.bind(element);
        break;
      case "email":
        element.oninput = validateEmail.bind(element);
        break;
    }

    if (element) {
      element.required = true;
      let td = doc.createElement('td');

      element.id = formElements[i].name;

      td.appendChild(element);
      tr.appendChild(td);
    }

    form.appendChild(table);
  }
  doc.body.appendChild(form);
}
input(formDef1);
input(formDef2);

function createText(formElement, maxLength) {
  let element = doc.createElement("input");
  element.type = "text";
  element.className = formElement.kind;
  element.maxLength = maxLength;
  element.onke

  return element;
};

function createNumber() {
  let element = doc.createElement("input");
  element.type = "number";

  return element;
};

function createMemo(labelContainer) {
  let element = doc.createElement("textarea");
  element.cols = 70;
  element.rows = 3;

  labelContainer.appendChild(doc.createElement('br'));
  labelContainer.appendChild(element);
  labelContainer.setAttribute('colspan', '2');

  element.required = true;

  return element;
};

function createCheck() {
  let element = doc.createElement("input");
  element.type = "checkbox";

  return element;
};

function createSubmit(formElement, label) {
  label.parentElement.remove();

  let element = doc.createElement("input");
  element.type = "submit";
  element.value = formElement.label;

  return element;
};

function select(variants) {

  let element = doc.createElement("select");


  variants.forEach(variant => {
    let option = doc.createElement("option");
    option.value = variant.value;
    let textNode = doc.createTextNode(variant.text);
    option.appendChild(textNode);
    element.appendChild(option);
  });

  return element;
};

function radio(variants, tr) {
  let td = doc.createElement('td');

  variants.forEach(variant => {
    let radioButton = doc.createElement("input");
    radioButton.value = variant.value;
    radioButton.name = variant.name;
    radioButton.type = "radio";
    radioButton.required = true;
    let textNode = doc.createTextNode(variant.text);
    td.appendChild(radioButton);
    td.appendChild(textNode);
  });
  tr.appendChild(td);
};

function validateText(event) {

  while (this.parentElement.childNodes.length !== 1) {
    this.parentElement.removeChild(this.parentElement.lastChild);
  }

  let errorText;
  if (!this.value) {
    errorText = doc.createTextNode('Введите текст');
  } else if (!/^[a-zA-Zа-яА-Я]+$/.test(this.value)) {
    errorText = doc.createTextNode('Неверные данные');
  }

  if (errorText) {
    this.parentElement.appendChild(errorText);
  };
};

function validateNumber(event) {

  while (this.parentElement.childNodes.length !== 1) {
    this.parentElement.removeChild(this.parentElement.lastChild);
  }

  let errorText;
  if (!this.value) {
    errorText = doc.createTextNode('Введите число');
  } else if (!/^[0-9]+$/.test(this.value)) {
    errorText = doc.createTextNode('Неверные данные');
  }

  if (errorText) {
    this.parentElement.appendChild(errorText);
  };
};

function validateSiteName(event) {

  while (this.parentElement.childNodes.length !== 1) {
    this.parentElement.removeChild(this.parentElement.lastChild);
  }

  let errorText;
  if (!this.value) {
    errorText = doc.createTextNode('Введите название сайта');
  } else if (!/^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\.[a-zA-Z]{2,})+$/.test(this.value)) {
    errorText = doc.createTextNode('Неверные данные');
  }

  if (errorText) {
    this.parentElement.appendChild(errorText);
  };
};

function validateSiteUrl(event) {
  while (this.parentElement.childNodes.length !== 1) {
    this.parentElement.removeChild(this.parentElement.lastChild);
  }

  let errorText;
  if (!this.value) {
    errorText = doc.createTextNode('Введите url сайта');
  } else if (!/^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/.test(this.value)) {
    errorText = doc.createTextNode('Неверные данные');
  }

  if (errorText) {
    this.parentElement.appendChild(errorText);
  };
};

function validateEmail(event) {
  while (this.parentElement.childNodes.length !== 1) {
    this.parentElement.removeChild(this.parentElement.lastChild);
  }

  let errorText;
  if (!this.value) {
    errorText = doc.createTextNode('Введите email');
  } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value)) {
    errorText = doc.createTextNode('Неверные данные');
  }

  if (errorText) {
    this.parentElement.appendChild(errorText);
  };
}

function validateForm(e) {
  console.log(e);

}
