$(document).ready(function() {
console.log("script loaded")


var $body = $('body');



var getEmployees = function() {
  var query = $("#people-search").val();
  $.ajax({
    type:"GET",
    // url: 'http://www.linkedin.com/ta/federator?query=Facebook&types=company',
    url: 'https://www.cannabisreports.com/api/v1.0/strains/search/Blue',
    dataType:"jsonp",
    // headers: {
    // //   'app_id': '77t50vcnrucwlt',
    //   'app_key': '3i27MZaJYTa5qDNp'
    // },
    data : { term: query, limit: 25},
    success: function(data) {
      console.log(data);

  // var result = data.results;
  // var $results = $('<ul>');
  // var $item, $description, $image, $name, $lineage;

  // result.forEach(function(){
  //   $image = $('<img />').attr(item.image);
  //   $name = ('<p />').addClass(item.name);
  //   $lineage = ('<p />').addClass(item.lineage);

  //   $description.append($name);
  //   $description.append($lineage);

  //   $item.append($image);
  //   $item.append($description);
  //   $results.append($item);
  // });

  // $body.append($results);

  },
    error: function(data){
      console.log(data)
    }
  })
}
// getEmployees();





  // Event Handlers go here
  // var addFunction = function(){
  //   $("#click-me").click(function(event){
  //     var getData = $("#people-search").val();
  //     getEmployees(getData);
  //     event.preventDefault();
  //   });
  // };
  // addFunction()

  $('#click-me').on('click', getEmployees);



});
