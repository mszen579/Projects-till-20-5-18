
$(document).ready(function(){

  $('form').on('submit', function(){// when we submit the form and add an item then

      var item = $('form input');
      var todo = {item: item.val()};// here it will grap wht it is inside the form and added to 'item'

      $.ajax({// we could use the ajax as we added jqurey to the todo.ejs
        type: 'POST',
        url: '/todo',
        data: todo,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });

      return false;

  });

  $('li').on('click', function(){
      var item = $(this).text().replace(/ /g, "-");
      $.ajax({
        type: 'DELETE',
        url: '/todo/' + item,
        success: function(data){
          //do something with the data via front-end framework
          location.reload();
        }
      });
  });

});
