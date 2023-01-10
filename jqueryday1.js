
$("#btnAdd").on("click",function()
{

let buttonval=$("#taskInput").val();
let divelemts=$(".tasksBox");
let bigdiv=$("<div></div>");
let element1 = $("<input type='text'></input>" );
element1.appendTo( bigdiv ).addClass("task");
element1.val(buttonval);
let element2 = $("<button value='Done'>Done</button>" );
element2.appendTo( bigdiv).addClass("done");

let element3 = $("<button value='Delete'>Delete</button>" ).clone();
element3.appendTo( bigdiv).addClass("delete");

bigdiv.appendTo(divelemts);

element3.on("click",function(){
    $(this).parent().remove();
})

element2.on("click",function(){
    $(this).parent().css("backgroundColor","red");
    element1.css("backgroundColor","red");
})
})
