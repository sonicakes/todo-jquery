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
        
        $('#output').append( "<li id='" + newTodo + "'>" + newTodo + "<button class='removeTodo'>Remove</button><button class='markTodo'>Mark as Complete</button></li>" );
        
        
            //2. remove it from todosArray (by clicking the 'Remove' button)

        $(".removeTodo").on( "click", function() {
                //1. find the element that needs to be removed

            let idRemoval = $( this ).parent().attr('id');
            console.log(idRemoval);
            todosArray.splice(todosArray.indexOf(idRemoval), 1)
            console.log(todosArray);
                //3. remove it from the html list output

            $( this ).parent().remove();
          });
    
    }
    $input.val("");
  }
  //clear the value when the mouse is not inside the input
  $input.focusout(function() {
   
    $input.val("");
});          
});