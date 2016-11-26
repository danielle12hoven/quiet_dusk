$(document).ready(function() {


var getEmployees = function() {
  $.ajax({
    type:"GET",
    url: "http://apply.useast.appfog.ctl.io/api/signin.php"
  })
  .done(function(data) {
    console.log(data);
  })
}
getEmployees();




});
