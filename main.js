menu_list_array = ["Veg Margherita Pizza",
                    "Veg Tandoori Pizza",
                    "Cheese Pizza ",
                    "Veggie Pizza" ,
                    "Pepperoni Pizza",
                   " BBQ Chicken Pizza ",
                   "Hawaiian Pizza "
                    ];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>"
menu_list_array.sort();
for (var i = 0; i < menu_list_array.length; i++) {
    htmldata=htmldata+"<li>"+ menu_list_array[i]+"</li>"
}
htmldata=htmldata+"</ol>"
document.getElementById("display_menu").innerHTML=htmldata;
console.log(htmldata);
}
    
function add_item(){
var htmldata;
var item=document.getElementById("add_item").value
menu_list_array.sort()
for (var i = 0; i < menu_list_array.length; i++) {
    htmldata=htmldata+"<div class='cards'>"+"<img src='images/topping.png'/>"
 menu_list_array[i]+'</div>'
}
htmldata=htmldata+"<section/>"
document.getElementById("display_addedmenu").innerHTML=htmldata;
console.log(htmldata);

}

function add_top()
{
  var item=document.getElementById("add_item").value;
  menu_list_array.push(item);
  add_item();
}