
$(document).ready(function() {
  var thermostat = new Thermostat();
  $.get("http://localhost:4567/thermostat/data", function(data){
    console.log(data);
    thermostat.setTemp(data.temperature);
    $("#temperature").text(thermostat.getTemperature());
    $("#weather").text(data.city_temperature);
    $("#city-name").text(data.city);
  });
  var c;
  var outside_temperature;


  $("#city").focusout(function (){
    c =  $('#city').val();
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + c + "&APPID=6d4bbb8a1db58900a6e66af4b3cdacca&units=metric", function (data) {
      $('#weather').text(data.main.temp);
      $("#city-name").text(c);
      outside_temperature = data.main.temp;
    });
  });

  $("#form").submit(function () {
    event.preventDefault();
    console.log(outside_temperature);
    $.post("http://localhost:4567/thermostat/data", {temperature: thermostat.getTemperature(), city: c , city_temperature: outside_temperature
    });
  });



  $("#powerSaveOn").on("click", function(){
    thermostat.powerSaving("on");
    $("#powerSavingMode").text("Power Saving Mode is on");
  });

  $("#powerSaveOff").click(function (){
    thermostat.powerSaving("off");
    $("#powerSavingMode").text("Power Saving Mode is off");
  });

  $('#increase').click(function(){
    thermostat.increaseTemperature();
  });

  $('#decrease').click(function(){
    thermostat.decreaseTemperature();
  });

  $('#reset').click(function () {
    thermostat.reset();

  });

  $(':button').click(function () {
    $("#temperature").text(thermostat.getTemperature());
    $('#usage').text(thermostat.energyUsage());
    $('#usage').attr('class', thermostat.energyUsage());
    $.post("http://localhost:4567/thermostat/data", {temperature: thermostat.getTemperature() 
    });
  });
});
