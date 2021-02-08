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
        console.log(todosArray.length);

        if (todosArray.length === 1) {
            $('#itemsLeft').text(todosArray.length + " item left");
  
        }else {
            $('#itemsLeft').text(todosArray.length + " items left");

        }
        
        $('#output').append("<label id='" + newTodo + "' class='list-group-item'><input class='form-check-input me-1' type='checkbox' value=''>"  + newTodo + "<span><button class='removeTodo btn btn-danger'>Remove</button><button class='markTodo btn btn-success'>Mark as Complete</button> </span></label>");
        
            // remove it from todosArray (by clicking the 'Remove' button)

        $(".removeTodo").on( "click", function() {
                 //find the element that needs to be removed

            let idRemoval = $( this ).closest('.list-group-item').attr('id');
            console.log(idRemoval);
            if (todosArray.indexOf(idRemoval) !== -1 ) {
                todosArray.splice(todosArray.indexOf(idRemoval), 1);
                console.log(todosArray);
                if (todosArray.length === 1) {
                    $('#itemsLeft').text(todosArray.length + " item");
          
                }else if (todosArray.length <= 0 ) {
                        $('#itemsLeft').text("no items in your todo");
                }
                else {
                    $('#itemsLeft').text(todosArray.length + " items");
        
                }
                    // remove it from the html list output
    
                $( this ).closest('.list-group-item').remove();
            } 

          


          });

          $(".markTodo").on( "click", function() {
           // find the element that needs to be marked

       let idMarked = $( this ).closest('.list-group-item').attr('id');;
       console.log(idMarked);
       console.log(todosArray);
       if (todosArray.indexOf(idMarked) !== -1 ) {
        todosArray.splice(todosArray.indexOf(idMarked), 1);
        console.log(todosArray);
        if (todosArray.length === 1) {
            $('#itemsLeft').text(todosArray.length + " item");
  
        }else if (todosArray.length <= 0 ) {
                $('#itemsLeft').text("Wow! You completed all items in your list! What a champ!");
                $('.gif').show();
        }
        else {
            $('#itemsLeft').text(todosArray.length + " items");

        }
    }

           // remove it from the html list output
        $( this ).closest('label').css("text-decoration", "line-through");
    
       $( this ).closest('label').addClass('complete');

       
     });

     $(".clear-completed").on( "click", function() {
        $("label.complete").remove();
        todosArray.splice(todosArray.indexOf(idMarked), 1)
        console.log(todosArray);
    

     });



    
    }
    $input.val("");
  }
  //clear the value when the mouse is not inside the input
  $input.focusout(function() {
   
    $input.val("");
});


});