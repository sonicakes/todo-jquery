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

  //confetti, from https://codepen.io/simlind/pen/BZwjbv
  function throwConfetti () {
    $("#confetti-wrapper").show();

    for(i=0; i<200; i++) {
        // Random rotation
        var randomRotation = Math.floor(Math.random() * 360);
        // Random width & height between 0 and viewport
        var randomWidth = Math.floor(Math.random() * Math.max(document.documentElement.clientWidth, window.innerWidth || 0));
        var randomHeight =  Math.floor(Math.random() * Math.max(document.documentElement.clientHeight, window.innerHeight || 0));
        
        // Random animation-delay
        var randomAnimationDelay = Math.floor(Math.random() * 10);
        console.log(randomAnimationDelay)
      
        // Random colors
        var colors = ['#0CD977', '#FF1C1C', '#FF93DE', '#5767ED', '#FFC61C', '#8497B0']
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
      
        // Create confetti piece
        var confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.top=randomHeight + 'px';
        confetti.style.left=randomWidth + 'px';
        confetti.style.backgroundColor=randomColor;
        confetti.style.transform='skew(15deg) rotate(' + randomRotation + 'deg)';
        confetti.style.animationDelay=randomAnimationDelay + 's';
        document.getElementById("confetti-wrapper").appendChild(confetti);
      }
    }

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
        
        $('#output').append("<label id='" + newTodo + "' class='list-group-item'><input class='form-check-input me-1' type='checkbox' value=''>"  + newTodo + "<span><button class='removeTodo btn btn-danger'>Remove</button></span></label>");
        
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

          $('.form-check-input').change(function(){
            var c = this.checked ? 'line-through' : 'none';
            let idMarked = $( this ).closest('.list-group-item').attr('id');
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
                     throwConfetti();
             }
             else {
                 $('#itemsLeft').text(todosArray.length + " items");
     
             }
             $( this ).closest('label').css("text-decoration", c);
    
             $( this ).closest('label').addClass('complete');
        }

    });





       

     $(".clear-completed").on( "click", function() {
        $("label.complete").remove();
        $('.gif').hide();
        $("#confetti-wrapper").hide();
        $('#itemsLeft').text('Add some more');
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