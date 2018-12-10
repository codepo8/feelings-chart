(function() {
    document.body.classList = '';
    let toggle = (ev) => {
        let te = ev.target.parentNode.querySelector('ul');
        if (te.className === 'hidden') {
            te.className = '';
            if (te.querySelector('button')) {
                te.querySelector('button').focus();
            } else {
                te.tabIndex = 1;
                te.focus();
            }
        } else {
            te.className = 'hidden';
            te.tabIndex = -1;
        }
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