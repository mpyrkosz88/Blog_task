$(function() {

  // var picture = null;
  // var date = null;
  // var dataUrl = null;
  // var title = null;
  // var main_container = null;
  var pictures = $(".picture");
  var date = $('.date');
  var dataUrl = 'https://blog-project-cf835.firebaseio.com/.json';
  var title = $('.title');
  var main_container = $('.main-container');
  var button = $('#show_more');

  function loadVars (){
    pictures = $(".picture");
    date = $('.date');
    dataUrl = 'https://blog-project-cf835.firebaseio.com/.json';
    title = $('.title');
    main_container = $('.main-container');
}

  function insertContent(datas) {
    $.each(datas, function(index, data) {
      pictures.eq(index).attr('src',data.image);
      date.eq(index).html(data.date)
      title.eq(index).html(data.description);
    });
  }

  /* Load movies and insert them into the DOM
  */
  function loadContent() {
        $.ajax({
            	url: dataUrl
        }).done(function(response){
     		    insertContent(response.results);
            console.log(response.results);
    	 }).fail(function(error) {
           console.log(error);
       });
  }
  loadContent();

button.on('click',function(){
  for (var i = 0; i<3; i++){
    var newContent = $('<div class = "col-1"><img class = "picture" alt = "Small photo"/><p class = "date date-font"></p><p class = "title title-font"></p><div class = "circle"></div></div>')
    main_container.append(newContent);
  }
  loadVars();
  loadContent();
});
});
