$(document).ready(function() {
console.log("script loaded")


var $body = $('body');


// var getNews = function(){
// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// url += '?' + $.param({
//   'api-key': "eab94020aa4b4262b69f33cb8b94e8c1",
//   'fq': "technology"
// });
// $.ajax({
//   url: url,
//   method: 'GET',
// }).done(function(result) {
//   console.log(result);
// }).fail(function(err) {
//   throw err;
// });
}




var getEmployees = function() {
  var query = $("#people-search").val();
  $.ajax({
    type:"GET",
    // url: 'http://www.linkedin.com/ta/federator?query=Facebook&types=company',
    // url: 'http://www.linkedin.com//v1/people/~',
    url: 'https://www.cannabisreports.com/api/v1.0/strains/search/Blue',
    dataType:"jsonp",
    // headers: {
    // //   'app_id': '77t50vcnrucwlt',
    //   'app_key': '3i27MZaJYTa5qDNp'
    // },
    data : { term: query, limit: 25},
    success: function(data) {
      console.log(data);


  var result = data.results;
  var $results = $('<ul>');
  var $item, $description, $image, $name, $lineage;

  result.forEach(function(){
    $image = $('<img />').attr(item.image);
    $name = ('<p />').addClass(item.name);
    $lineage = ('<p />').addClass(item.lineage);

    $description.append($name);
    $description.append($lineage);

    $item.append($image);
    $item.append($description);
    $results.append($item);
  });

  $body.append($results);

  },
    error: function(data){
      console.log(data)
    }
  })
}
// getEmployees();





  // Event Handlers go here
  var addFunction = function(){
    $(".button").click(function(event){
      var getData = $(".submit").val();
      getEmployees(getData);
      event.preventDefault();
    });
  };
  addFunction()

  // $('#click-me').on('click', getEmployees);



});
