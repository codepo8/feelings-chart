(function() {
    document.body.classList = '';
    let toggle = (ev) => {
        let te = ev.target.parentNode.querySelector('ul');
        te.className = (te.className === 'hidden') ? '' : 'hidden';
        ev.preventDefault();
    };
    let createButton = function(elm) {
        let b = document.createElement('button');
        b.innerHTML = elm.firstChild.textContent;
        elm.replaceChild(b, elm.firstChild);
        elm.querySelector('ul').className = 'hidden';
        b.addEventListener('click', toggle)
    }
    let parentlists = document.querySelectorAll('ul'); 
    [... parentlists].forEach((item) => {
        if (item.parentNode.tagName === 'LI') {
            createButton(item.parentNode);
        }
    });
 })();