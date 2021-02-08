// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );

        //    let newTodo= $("#new").val();
        //     $( "#output" ).append( newTodo );
        //why this would not work, and below one would?
      
let todosArray = [];     
let $input = $('#new');

let timer = null;
$input.keydown(function(){
       clearTimeout(timer); 
       timer = setTimeout(doStuff, 1000)
});

function doStuff() {

    if (($input).val() !== "") {
        let newTodo = $input.val();
        console.log(newTodo);


        todosArray.push(newTodo);
        console.log(todosArray);
        
        $('#output').append( "<li id='" + newTodo + "'>" + newTodo + "<span><button class='removeTodo' id='" + newTodo + "'>Remove</button></span></li>" );
    }
  
  }
  //clear the value when the mouse is not inside the input
  $input.focusout(function() {
   
    $input.val("");

    //remove the item from the list
    //1. find the element that needs to be removed
    //2. remove it from todosArray (by clicking the 'Remove' button)
    //3. cross it out in the html list output
});
   
           
});