$(document).ready(function() {
console.log("script loaded")


//STRAIN
var getStrainInfo = function(strains) {
  $.ajax({
    type:"GET",
    url: 'https://www.cannabisreports.com/api/v1.0/strains?sort='+strains+'&page=2',
    dataType:"jsonp",
    success: function(data) {
      console.log(data.data);
      parseStrainData(data);
  },
    error: function(data){
      console.log(data)
    }
  })
}

//EVENTHANDLER
var addStrainFunction = function(){
    $("#button1").click(function(strains){
      var strains = $("#button1").val();
      getStrainInfo(strains);
      event.preventDefault();
    });
  };
  addStrainFunction()

//PARSEDATA
var parseStrainData = function(data){
  var $strainUl = $("<ul>");

  for(var i=0; i < data.data.length; i++){
    var $strainLi = $('<li>')

    var strainName = data.data[i].name;
    var createdDate = data.data[i].createdAt.datetime;
    var countryData = data.data[i].lineage;
    var str = "";
    for (var key in countryData) {
      str += key + " ";
    }
    var seedCompany = data.data[i].seedCompany.name;
    var strain_img_url = data.data[i].image;

    $(".postStrainData").append(strainName + " was created in " + createdDate + ".");
    $(".postStrainData").append(" It's origins are: " + str + ".");
    $(".postStrainData").append(" You can buy " + strainName + " at the company: " + seedCompany + ".");
    $(".postStrainData").attr(strain_img_url);
    $(".postStrainData").append()
    $(".postStrainData").append("<br><br>");



  }
}



//EDIBLES
var getEdiblesInfo = function(edibles) {
  $.ajax({
    type:"GET",
    url: 'https://www.cannabisreports.com/api/v1.0/edibles?sort='+edibles+'&page=2',
    dataType:"jsonp",
    success: function(data) {
      console.log(data.data);
      parseEdiblesData(data);
  },
    error: function(data){
      console.log(data)
    }
  })
}

//EVENTHANDLER
var addEdiblesFunction = function(){
    $("#button2").click(function(edibles){
      var edibles = $("#button2").val();
      getEdiblesInfo(edibles);
      event.preventDefault();
    });
  };
  addEdiblesFunction()

//PARSEDATA
var parseEdiblesData = function(data){
  for(var j=0; j < data.data.length; j++){
    var ediblesName = data.data[j].name;
    var producerName = data.data[j].producer.name;
    var edibleType = data.data[j].type;
    var edibles_img_url = data.data[i].image;

    $(".postEdiblesData").append(ediblesName + " was created by " + producerName + ".");
    $(".postEdiblesData").append(" Type: " + edibleType + ".");
    $(".postEdiblesData").attr(<img>edibles_img_url);
    $(".postEdiblesData").append("<br><br>");
  }
}





});
