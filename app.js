//onclick button function
function getData(){

  //retrieve value from input
var category = $('input[name="offense"]:checked').val();

var day = $('input[name="day"]:checked').val();

  
var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 37.784204, lng: -122.414354},
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
  
$.ajax({
      url: "https://data.sfgov.org/resource/gxxq-x39z.json?pddistrict=TENDERLOIN&dayofweek="+ day +"&$order=date DESC&$where=date>'2016-01-01T12:00:00'&category="+ category,
      dataType: "json",
      success: function(data) {
    

    for (var i = 0; i < data.length; i++) {
    
    var marker = new google.maps.Marker({
        position:{lat: parseFloat(data[i].location.latitude) , lng: parseFloat(data[i].location.longitude)},

   
        map: map,
        title:data[i].dayofweek + ", "+ data[i].date.substring(0,10) +  " Resolution: " + data[i].resolution + ", " + "Description: " + data[i].descript


    });


  }
  }

})



$('#details').css({'opacity':'1', 'margin-top':'2%','transition':'2s'})

}