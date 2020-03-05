
window.onload = function () {

    let nameInput = document.querySelector('#user-name');
    let messageInput = document.querySelector('#message');
    let sendBtn = document.querySelector('#send');
    let blogContainer = document.querySelector('#blog');
    let template = document.querySelector('#postTemplateContainer');

    let addPost = function () {
        let name = nameInput.value.trim();
        let message = messageInput.value.trim();
        if (name !== '' && message !== '') {

            let postHtml = template.innerHTML
                .replace('{%username%}', name)
                .replace('{%content%}', message);

            blogContainer.innerHTML = postHtml + blogContainer.innerHTML;
            nameInput.value = '';
            messageInput.value = '';
            nameInput.focus();

        }
        else {
            if (name === '') { nameInput.classList.add('is-invalid'); }
            if (message === '') { messageInput.classList.add('is-invalid'); }
        }


    }

    let removeErrorClass = function () {
        this.classList.remove('is-invalid');
    }


    sendBtn.onclick = addPost;
    nameInput.onkeypress = removeErrorClass;
    messageInput.onkeypress = removeErrorClass;

    nameInput.onkeydown= function (event) {
        if (event.key === 'Enter') { 
            event.preventDefault();
            messageInput.focus();
         }
    }


    messageInput.onkeydown = function (event) {
        if (event.key === 'Enter' && event.ctrlKey) { addPost(); }
    }


};


