let ul = document.querySelector('.shoppingList');
let btnAdd = document.getElementsByClassName('btnAdd');
const btnDel = document.getElementsByClassName('btnDel');
const btnEdit = document.querySelectorAll('.btnEdit');
const btnEditDone = document.querySelectorAll('.btnEditDone');
let listItem = document.querySelectorAll('.listItem');
let listItem2 = document.querySelectorAll('.listItem2');
const listText = document.querySelectorAll('.listText');
let input = document.getElementsByClassName('userinput');
const btnErase = document.querySelector('.erase');
const settingsBtn = document.querySelector('.settingsBtn');
const closeBtn = document.querySelector('.closeBtn');
const container = document.querySelector('.container');
const navBar = document.querySelector('.navBar');
let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');

input = input[0];
btnAdd = btnAdd[0];

btnErase.onclick = function() {
    let ul = document.querySelectorAll('ul');
    let newList = document.createElement('ul');
    let div = document.querySelector('.list');
    let confirmation = confirm("Are you sure you want to erase the list?");
    if (confirmation) {
        for (let i = 1; i < ul.length; i++) {
            ul[i].remove();
        }
        newList.classList.add('shoppingList');
        div.appendChild(newList);
        length();
    }
}

for (let i = 0 ; i < btnDel.length; i++) {
    btnDel[i].onclick = function() {
        let listItem = document.querySelectorAll('.listItem');
        let listItem2 = document.querySelectorAll('.listItem2');
        let ul = document.querySelector('.shoppingList2');
        if (listItem.length >= 1) {    
            this.parentElement.remove();
            if (listItem.length < 12 && listItem2.length > 0) {
                transferListItem();
            }
        }
        if (listItem2.length === 1 && listItem.length === 11) {
            this.parentElement.remove();
            ul.remove();
        }
        if (length() <= 22) {
            let div = document.querySelector('.list');
            div.style.flexDirection = "row";
            div.style.maxHeight = "52vh";
            div.style.overflowY = "hidden";
        }

        length();
    }
    
    btnEdit[i].onclick = function() {
        let listText = document.querySelectorAll(".listText");
        listText[i].contentEditable = true;
        listText[i].style.backgroundColor = '#aaa';
        btnEdit[i].style.display = 'none';
        btnEditDone[i].style.display = 'block';
    }

    btnEditDone[i].onclick = function() {
        let listText = document.querySelectorAll(".listText");
        if (listText[i].innerHTML.length < 64) { 
            listText[i].contentEditable = false;
            listText[i].style.backgroundColor = 'transparent';
            btnEditDone[i].style.display = 'none';
            btnEdit[i].style.display = 'block';
        } else {
            alert('Text too long! (Max 64 characters)');
        }
    }
}

let length = () => {
    let listItem = document.querySelectorAll('.listItem');
    let listItem2 = document.querySelectorAll('.listItem2');
    return listItem.length + listItem2.length;
}

let inputLength = () => {
    return input.value.length;
};

let createListElement = ()  => {
    let ul = document.getElementsByClassName('shoppingList');
    let li = document.createElement('li');
    let p = document.createElement('p');
    let btnDel = document.createElement('button');
    let btnEdit = document.createElement('button');
    let btnEditDone = document.createElement('button');
    let imgDel = document.createElement('img');
    let imgEdit = document.createElement('img');
    let imgEditDone = document.createElement('img');
    imgDel.src = "https://cdn-icons-png.flaticon.com/512/3405/3405244.png";
    imgDel.classList.add('deleteIcon');
    imgEdit.src = "https://cdn-icons-png.flaticon.com/128/1828/1828911.png";
    imgEdit.classList.add('editIcon');
    imgEditDone.src = "https://cdn-icons-png.flaticon.com/128/1442/1442912.png";
    imgEditDone.classList.add('editDoneIcon');
    li.classList.add('listItem');
    p.classList.add('listText');
    btnDel.classList.add('btnDel');
    btnEdit.classList.add('btnEdit');
    btnEditDone.classList.add('btnEditDone');
    ul[0].appendChild(li);
    li.appendChild(p);
    if (inputLength() < 65 && input.value != ' ') {
        p.innerHTML = input.value;
    } else {
        alert('Text too long! (Max 64 characters)');
        input.value = '';
    }
    li.appendChild(btnEdit);
    li.appendChild(btnEditDone);
    li.appendChild(btnDel);
    btnEdit.appendChild(imgEdit);
    btnEditDone.appendChild(imgEditDone);
    btnDel.appendChild(imgDel);
    btnDel.onclick = function() {
        const listItem = document.querySelectorAll('.listItem');
        const listItem2 = document.querySelectorAll('.listItem2');
        let ul = document.querySelector('.shoppingList2');
        if (listItem.length > 0) {    
            this.parentElement.remove();
            if (listItem.length < 12 && listItem2.length > 0) {
                transferListItem();
            }
        }
        if (listItem2.length === 1 && listItem.length === 11) {
            this.parentElement.remove();
            ul.remove();
        }
        if (length() <= 22) {
            let div = document.querySelector('.list');
            div.style.flexDirection = "row";
            div.style.maxHeight = "52vh";
            div.style.overflowY = "hidden";
        }
        length();
    }

    btnEdit.onclick = function() {
        p.contentEditable = true;
        p.style.backgroundColor = '#aaa';
        btnEdit.style.display = 'none';
        btnEditDone.style.display = 'block';
    }

    btnEditDone.onclick = function() {
        if (p.innerHTML.length < 64) {   
            p.contentEditable = false;
            p.style.backgroundColor = 'transparent';
            btnEditDone.style.display = 'none';
            btnEdit.style.display = 'block';
        } else {
            alert("Text too long! (Max 64 characters)")
        }
    }

    input.value = "";
    p.addEventListener('click', function() {
        p.classList.toggle('done')
    });
    li.addEventListener('dblclick', priority);
};

let createNewList = () => {
    let div = document.querySelector('.list');
    let ul = document.createElement('ul');
    ul.classList.add('shoppingList2')
    div.appendChild(ul);
};

let createNewListElement= () => {
    let ul = document.querySelector('.shoppingList2');
    let li = document.createElement('li');
    let p = document.createElement('p');
    let btn = document.createElement('button');
    let btnEdit = document.createElement('button');
    let btnEditDone = document.createElement('button');
    let img = document.createElement('img');
    let imgEdit = document.createElement('img');
    let imgEditDone = document.createElement('img');
    img.src = "https://cdn-icons-png.flaticon.com/512/3405/3405244.png";
    img.classList.add('deleteIcon');
    imgEdit.src = "https://cdn-icons-png.flaticon.com/128/1828/1828911.png";
    imgEdit.classList.add('editIcon');
    imgEditDone.src = "https://cdn-icons-png.flaticon.com/128/1442/1442912.png";
    imgEditDone.classList.add('editDoneIcon');
    li.classList.add('listItem2');
    p.classList.add('listText');
    btn.classList.add('btnDel');
    btnEdit.classList.add('btnEdit');
    btnEditDone.classList.add('btnEditDone');
    ul.appendChild(li);
    li.appendChild(p);
    if (inputLength() < 65 && input.value != ' ') {
        p.innerHTML = input.value;
    } else {
        alert('Text too long! (Max 64 characters)');
        input.value = '';
    }
    li.appendChild(btnEdit);
    li.appendChild(btnEditDone);
    li.appendChild(btn);
    btnEdit.appendChild(imgEdit);
    btnEditDone.appendChild(imgEditDone);
    btn.appendChild(img);
    btn.onclick = function() {
        let listItem = document.querySelectorAll('.listItem');
        let listItem2 = document.querySelectorAll('.listItem2');
        if (listItem2.length === 1 && listItem.length === 11) {
            this.parentElement.remove();
            ul.remove();
            if (listItem.length < 11 && listItem2.length > 0) {
                transferListItem();   
            }
            
        } else if (listItem2.length > 0 || listItem.length > 0) {    
            this.parentElement.remove();
            if (listItem.length < 11 && listItem2.length > 0) {
                transferListItem();
            }
            if (listItem.length === 11 && listItem2.length > 0  && this.parentElement.className === 'listItem moved') {
                transferListItem();
            }
            if (length() <= 22) {
                let div = document.querySelector('.list');
                div.style.flexDirection = "row";
                div.style.maxHeight = "52vh";
                div.style.overflowY = "hidden";
            }
        }
        length();
    }

    btnEdit.onclick = function() {
        p.contentEditable = true;
        p.style.backgroundColor = '#aaa';
        btnEdit.style.display = 'none';
        btnEditDone.style.display = 'block';
    }

    btnEditDone.onclick = function() {
        if (p.innerHTML.length < 64) {   
            p.contentEditable = false;
            p.style.backgroundColor = 'transparent';
            btnEditDone.style.display = 'none';
            btnEdit.style.display = 'block';
        } else {
            alert("Text too long! (Max 64 characters)")
        }
    }

    input.value = "";
    p.addEventListener('click', function() {
        p.classList.toggle('done')
    });
    li.addEventListener('dblclick', priority);
    
}

let transferListItem = () => {
    let listItem2 = document.querySelectorAll('.listItem2');
    firstList = document.querySelector('.shoppingList');
    listItem2[0].classList.add('listItem');    
    listItem2[0].classList.add('moved');
    listItem2[0].classList.remove('listItem2');
    return firstList.appendChild(listItem2[0]);
}

let addElementAfterClick = ()  => {
    if (inputLength() > 0  && input.value != ' ') { 
        if (length() < 11) {
            createListElement();
            console.log(length);
        } else if (length() === 11) {
            createNewList();
            createNewListElement();
            length()
        } else if ((length() > 11) && (length() < 22)) {
            createNewListElement();
            length()
        } else if (length() >= 22) {
            let div = document.querySelector('.list');
            div.style.flexDirection = "column";
            div.style.height = "50vh";
            div.style.overflowY = "scroll";
            createNewListElement();
            length();
        }
    } else if (inputLength() > 65){
        alert('Text too long! (Max 64 characters)')
        input.value = '';
    };
};

let addElementAfterKeypress = (event)  => {
    if (inputLength() > 0  && input.value != ' ' && event.keyCode === 13 ) {
        if (length() < 11) {
            createListElement();
            length();
        } else if (length() === 11)  {
            createNewList();
            createNewListElement();
            length();
        } else if ((length() > 11) && (length() < 22)) {
            createNewListElement();
            length();
        } else if (length() >= 22) {
            let div = document.querySelector('.list');
            div.style.flexDirection = "column";
            div.style.maxHeight = "50vh";
            div.style.overflowY = "scroll";
            createNewListElement();
            length();
        }
        
    } else if (inputLength() > 65) {
        alert('Text too long! (Max 64 characters)')
        input.value = '';
    };
};

let toggledone = (event) => {
    let listText = document.querySelectorAll('.listText');
    for (let i = 0; i < listText.length; i++) {
        if (event.target === listText[i]) {
           return event.target = listText[i].classList.toggle('done');
        }
    }
}

let priority = (event) => {
    let listText = document.querySelectorAll('.listText');
    for (let i = 0; i < listText.length; i++) {
        if (event.target === listText[i]) {
            return event.target = listText[i].classList.toggle('priority');
        }
    }
}

let backgroundChange = () => {
    container.style.background = "linear-gradient( to bottom right, " + color1.value + ", " + color2.value + ")";
    navBar.style.background = "linear-gradient( to bottom right, " + color1.value + ", " + color2.value + ")";
}

let displaySettingsBlock = () => {
    let settings = document.querySelector('.settingsContainer');
    let slideIn = document.querySelectorAll('.slide-in');
    settings.classList.remove('slide-out')
    if (slideIn.length > 0 ) {
        settings.classList.toggle('slide-in');
        settings.classList.toggle('slide-in');
        settings.style.display = "block";
    } else {
        settings.classList.toggle('slide-in');
        settings.style.display = "block";
}
}
let displaySettingsNone = () => {
    let settings = document.querySelector('.settingsContainer');
    let slideOut = document.querySelectorAll('.slide-out');
    settings.classList.remove('slide-in')
    if (slideOut.length > 0) {
        settings.classList.toggle('slide-out');
        settings.classList.toggle('slide-out');
        setTimeout(() => { 
            settings.style.display = "none";
        }, 200);
    } else {
        settings.classList.toggle('slide-out');
        setTimeout(() => { 
            settings.style.display = "none";
        }, 200);
    }
}

btnAdd.addEventListener('click', addElementAfterClick);
input.addEventListener("keypress", addElementAfterKeypress);
color1.addEventListener('input', backgroundChange);
color2.addEventListener('input', backgroundChange);
settingsBtn.addEventListener('click', displaySettingsBlock);
closeBtn.addEventListener('click', displaySettingsNone);

for (let i=0; i < listItem.length;i++) {
    listText[i].addEventListener('click', toggledone);
    listItem[i].addEventListener('dblclick', priority);
}