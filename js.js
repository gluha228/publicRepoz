document.querySelector('.sidebar').hidden = true;
function getmenu(){
    let doc = document.querySelector('.sidebar');

    if (doc.hidden === true) { doc.hidden = false
    } else { doc.hidden = true}
}
let items = document.querySelectorAll('.collection-item');

if (items != null) {
    console.log(items)
    console.log(items[0])
    for (var itemId = 0;  itemId<=items.length-1; itemId++) {
    items[itemId].insertAdjacentHTML("afterbegin",
    '<img src="images/name.jpg" alt="watch"><table><caption><h3>Vostok precision class</h3></caption><tbody><tr><td>Manufacturer</td><td>Urss</td></tr><tr><td>Production year</td><td>1965</td></tr><tr><td>Type</td><td>Wristwatch</td></tr><tr><td>Caliber</td><td>Wostok 2809</td></tr><tr><td>Brand</td><td>Wostok</td></tr><tr><td>Escapement</td><td>swiss</td></tr><tr><td>Winding</td><td>manual</td></tr></tbody></table>')
    }
}