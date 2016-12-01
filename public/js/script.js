$(document).ready(function() {
console.log("script loaded")


//GET STRAINS
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
    var $strainLi = $('<li>');
    $strainLi = $strainLi.addClass("appendedItems")

    var $saveButton = $("<button>Save</button>")
    $saveButton = $saveButton.addClass("saveButton")

    var strainName = data.data[i].name;
    var createdDate = data.data[i].createdAt.datetime;
    var countryData = data.data[i].lineage;
    var str = "";
    for (var key in countryData) {
      str += key + " ";
    }
    var seedCompany = data.data[i].seedCompany.name;
    var seedCompanyLink = data.data[i].url;
    var strain_img_url = data.data[i].image;

    $strainLi.append("Strain: " + strainName + "<br />");
    $strainLi.append("Origins: " + str + "<br />");
    $strainLi.append("Retailer: " + seedCompany + "<br />");
    $strainLi.append("Website: " + seedCompanyLink + "<br />");
    $strainLi.append("<br><br>");
    $strainLi.append($saveButton);
    // $strainLi.append($('<img>',{id:'theImg',src: strain_img_url }));

    $strainUl.append($strainLi);
    $(".postStrainData").append($strainUl)
  }
}




//GET EDIBLES
var getEdiblesInfo = function(edibles) {
  $.ajax({
    type:"GET",
    url: 'https://www.cannabisreports.com/api/v1.0/edibles?sort='+edibles+'&page=43',
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
  var $ediblesUl = $("<ul>");

  for(var j=0; j < data.data.length; j++){
    var $ediblesLi = $("<li>");
    $ediblesLi = $ediblesLi.addClass("appendedItems")

    var $saveButton = $("<button>Save</button>")
    $saveButton = $saveButton.addClass("saveButton")

    var ediblesName = data.data[j].name;
    var producerName = data.data[j].producer.name;
    var edibleType = data.data[j].type;
    var edibles_img_url = data.data[j].image;
    var ediblesTHC = data.data[j].thc;

    $ediblesLi.append("Name: " +ediblesName + "<br />");
    $ediblesLi.append("Created by: " + producerName + "<br />");
    $ediblesLi.append("Type: " + edibleType + "<br />");
    $ediblesLi.append("THC : " + ediblesTHC + "<br />");
    $ediblesLi.append("<br><br>");
    $ediblesLi.append($('<img>',{id:'theImg',src: edibles_img_url }));
    $ediblesLi.append("<br><br>")
    $ediblesLi.append($saveButton);

    $ediblesUl.append($ediblesLi);
    $(".postEdiblesData").append($ediblesUl);

  }
}


//GET DISPENSARIES
var getDispensaryInfo = function(dispensaries) {
  $.ajax({
    type:"GET",
    url: 'https://www.cannabisreports.com/api/v1.0/dispensaries',
    dataType:"jsonp",
    success: function(data) {
      console.log(data.data);
      parseDispensaryData(data);
  },
    error: function(data){
      console.log(data)
    }
  })
}

//EVENTHANDLER
var addDispensaryFunction = function(){
    $("#button3").click(function(dispensaries){
      var dispensaries = $("#button3").val();
      getDispensaryInfo(dispensaries);
      event.preventDefault();
    });
  };
  addDispensaryFunction()

//PARSEDATA
var parseDispensaryData = function(data){
  var $dispensaryUl = $("<ul>");

  for(var n=0; n < data.data.length; n++){
    var $dispensaryLi = $('<li>');
    $dispensaryLi = $dispensaryLi.addClass("appendedItems")

    var $saveButton = $("<button>Save</button>")
    $saveButton = $saveButton.addClass("saveButton")

    var dispensaryName = data.data[n].name;
    var dispensaryCity = data.data[n].city;
    var dispensaryAddress = data.data[n].address.address1;
    var dispensaryZip = data.data[n].address.zip;
    var dispensaryEdibles = data.data[n].edibles.count;
    var dispensaryFlowers = data.data[n].flowers.count;
    var dispensaryExtracts = data.data[n].extracts.count;
    var dispensary_img_url = data.data[n].image;

    $dispensaryLi.append(dispensaryName + "<br />");
    $dispensaryLi.append("City: " + dispensaryCity + "<br />");
    $dispensaryLi.append(dispensaryAddress + " " + dispensaryZip + "<br />");
    $dispensaryLi.append("What they Sell: <br />");
    $dispensaryLi.append("Edibles: " + dispensaryEdibles + "<br />");
    $dispensaryLi.append("Flowers: " + dispensaryFlowers + "<br />");
    $dispensaryLi.append("Extracts: " + dispensaryExtracts + "<br />");
    $dispensaryLi.append("<br><br>");
    $dispensaryLi.append($saveButton);
    // $strainLi.append($('<img>',{id:'theImg',src: strain_img_url }));

    $dispensaryUl.append($dispensaryLi);
    $(".postDispensaryData").append($dispensaryUl)
  }
}



//GETTING USER INFO FOR LOGIN
var getUser = function(users) {
  $.ajax({
    type:"GET",
    url: "/db/users",
    dataType:"jsonp",
    success: function(data) {
      console.log(data.data);
  },
    error: function(data){
      console.log(data)
    }
  })
}

var addUserFunction = function(){
    $("#signInButton").click(function(edibles){
      var users = $("#signInButton").val();
      getUser(users);
      event.preventDefault();
    });
  };
  addUserFunction()


//EVENTHANDLER SAVE BUTTON
var saveButton = function(){
    $(".saveButton").click(function(data){
      var save = $(".saveButton").val();
      saveAllData(data);
      event.preventDefault();
    });
  };
  saveButton()

 var saveAllData = function(data){
  var $savedUl = $("<ul>");
  var $savedLi = $("<li>");

  $savedLi = $savedLi.addClass("savedItems")

  var appendItem = (saveButton);

  $savedLi.append(appendItem);
  $savedUl.append($savedLi);

  $(".postSavedData").append($savedUl);
 }





});
