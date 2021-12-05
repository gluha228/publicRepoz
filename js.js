/*

function filter(s){
    let cont = document.getElementById("filter"+s);
    console.log(cont.innerHTML);
    switch(cont.innerHTML) {
        case s:
            cont.innerHTML = s+" ↓";
            var temp = 0;
            for (var x = 0;  x<itemsSourse.length; x++) 
                for (var y = itemsSourse.length-1; y>x; y--){
                    if (itemsSourse[itemsOrder[y]][sourseOrder[s]]>itemsSourse[itemsOrder[y-1]][sourseOrder[s]]){
                        temp = itemsOrder[y];
                        itemsOrder[y] = itemsOrder[y-1];
                        itemsOrder[y-1] = temp;
                    }
                }
                console.log(itemsOrder);
                assignItems();
        break;
        case s+" ↓":
            cont.innerHTML = s+" ↑";
            var temp = 0;
            for (var x = 0;  x<itemsSourse.length; x++) 
                for (var y = itemsSourse.length-1; y>x; y--){
                    if (itemsSourse[itemsOrder[y]][sourseOrder[s]]<itemsSourse[itemsOrder[y-1]][sourseOrder[s]]){
                        temp = itemsOrder[y];
                        itemsOrder[y] = itemsOrder[y-1];
                        itemsOrder[y-1] = temp;
                    }
                }
                console.log(itemsOrder);
                assignItems();

        break;
        case s+" ↑":
            cont.innerHTML = s;
            itemsOrder = [];
            for (var i = 0; i <= itemsSourse.length-1; i++) {
                itemsOrder.push(i);
             }
            assignItems();
        break;
    }
}
*/
const assignItems = new Vue({
    el: '#items',
    data: {
        itemsSourse : [
            ["Vostok precision class", "Urss", 1965, "Wristwatch", "Wostok 2809", "Wostok", "Swiss", "Manual","0"],
            ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
            ["Roamer Jubile", "Swiss", 1958, "Wristwatch", "MST 402", "Roamer", "Swiss", "Manual","2"],
            ["Cylindre 4 rubis", "France", 1890, "Pocket watch", "38mm", "Remontoir","Cylinder", "Key","3"],
            ["Vostok precision class", "Urss", 1962, "Wristwatch", "Wostok 2809A", "Wostok", "Swiss", "Manual","4"],
            ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
            ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
            ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
            ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
            ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
            ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
            ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
            ["Vostok precision class", "Urss", 1965, "Wristwatch", "Wostok 2809", "Wostok", "Swiss", "Manual","0"],
            ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
            ["Roamer Jubile", "Swiss", 1958, "Wristwatch", "MST 402", "Roamer", "Swiss", "Manual","2"],
            ["Cylindre 4 rubis", "France", 1890, "Pocket watch", "38mm", "Remontoir","Cylinder", "Key","3"],
            ["Vostok precision class", "Urss", 1962, "Wristwatch", "Wostok 2809A", "Wostok", "Swiss", "Manual","4"],
            ["Vostok precision class", "Urss", 1965, "Wristwatch", "Wostok 2809", "Wostok", "Swiss", "Manual","0"],
            ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
            ["Roamer Jubile", "Swiss", 1958, "Wristwatch", "MST 402", "Roamer", "Swiss", "Manual","2"],
            ["Cylindre 4 rubis", "France", 1890, "Pocket watch", "38mm", "Remontoir","Cylinder", "Key","3"],
            ["Vostok precision class", "Urss", 1962, "Wristwatch", "Wostok 2809A", "Wostok", "Swiss", "Manual","4"],
            ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
            ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"],
            ["Volna", "Urss", 1960, "Wristwatch", "Wostok 2809A", "ChChZ", "Swiss", "Manual","1"]
        ],
        currentItemsOrder : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,24],
        sourseOrder : {'Year' : 2}    
        },
    methods: {
        filter(s){
            var itemsOrder = assignItems.currentItemsOrder;
            let cont = document.getElementById("filter"+s);
            console.log(cont.innerHTML);
            switch(cont.innerHTML) {
                case s:
                    cont.innerHTML = s+" ↓";
                    var temp = 0;
                    for (var x = 0;  x<assignItems.itemsSourse.length; x++) 
                        for (var y = assignItems.itemsSourse.length-1; y>x; y--){
                            if (assignItems.itemsSourse[itemsOrder[y]][assignItems.sourseOrder[s]]>assignItems.itemsSourse[itemsOrder[y-1]][assignItems.sourseOrder[s]]){
                                temp = itemsOrder[y];
                                itemsOrder[y] = itemsOrder[y-1];
                                itemsOrder[y-1] = temp;
                            }
                        }
                        console.log(itemsOrder === assignItems.currentItemsOrder);
                        assignItems.currentItemsOrder=[];
                        console.log(itemsOrder === assignItems.currentItemsOrder);
                        assignItems.currentItemsOrder=itemsOrder;
                        console.log(itemsOrder === assignItems.currentItemsOrder);
                break;
                case s+" ↓":
                    cont.innerHTML = s+" ↑";
                    var temp = 0;
                    for (var x = 0;  x<assignItems.itemsSourse.length; x++) 
                        for (var y = assignItems.itemsSourse.length-1; y>x; y--){
                            if (assignItems.itemsSourse[itemsOrder[y]][assignItems.sourseOrder[s]]<assignItems.itemsSourse[itemsOrder[y-1]][assignItems.sourseOrder[s]]){
                                temp = itemsOrder[y];
                                itemsOrder[y] = itemsOrder[y-1];
                                itemsOrder[y-1] = temp;
                            }
                        }
                        console.log(itemsOrder);
                        assignItems.currentItemsOrder=[];
                        assignItems.currentItemsOrder=itemsOrder;
        
                break;
                case s+" ↑":
                    cont.innerHTML = s;
                    assignItems.currentItemsOrder=arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,24,24];
                break;
            }
        }
        }
    
})
//assignItems.itemsOrder=[0,1];
document.querySelector('.sidebar').hidden = true;
function getmenu(){
    let doc = document.querySelector('.sidebar');
    if (doc.hidden === true) { doc.hidden = false
    } else { doc.hidden = true}
}

