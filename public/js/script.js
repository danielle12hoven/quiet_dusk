$(document).ready(function() {
console.log("script loaded")


var $body = $('body');


// var getAuth = function () {
//   $.ajax ({
//     type:"GET",
//     url: 'https://www.linkedin.com/oauth/v2/authorization',
//   })
//   success: function(data) {
//     console.log(data);
//   }
// }

$.ajax({
  method: "GET",
  url: "https://api.linkedin.com/v1/people/~:(id,num-connections,picture-url)?format=json",
  success:function(data){
    console.log(data)
  },
  error: function(data){
    console.log('Nope')
  }
})





// var getEmployees = function() {
//   var query = $("#people-search").val();
//   $.ajax({
//     type:"GET",
//     url: 'https://api.linkedin.com/v1/people/~',
//     datatype: 'jsonp',
//     data : { term: query, limit: 25}
//   })
//     success: function(data) {
//       console.log(data);

//   var result = data.results;
//   var $results = $('<ul>');
//   var $item, $image, $description, $company, $name, $title, $email;

//   result.forEach(function(i){
//     $image = $('<img />').attr('src', i.picture).addClass('profilePic');
//     $company = ('<p />').addClass('Company: ' + i.company.name);
//     $name = ('<p />').addClass('Name: ' + i.name);
//     $title = ('<p />').addClass('Position: ' + i.positions.title);
//     $email = ('<p />').addClass('Email: ' + i.email);

//     $description.append($company);
//     $description.append($name);
//     $description.append($title);
//     $description.append($email);

//     $item.append($image);
//     $item.append($description);

//     $results.append($item);
//   });

//   $body.append($results);

//   },

//   error: function(data){
//     console.log(data)
//   }
//   };
// };
// getEmployees();




  // Event Handlers go here
 var addFunction = function(){
    $("#click-me").click(function(event){
      var getData = $("#people-search").val();
      getEmployees(getData);
      event.preventDefault();
    })
  };
  addFunction()
});
