document.querySelector('.sidebar').hidden = true;
function getmenu(){
    let doc = document.querySelector('.sidebar');

    if (doc.hidden === true) { doc.hidden = false
    } else { doc.hidden = true}
}