
$(document).ready(function() {
  var thermostat = new Thermostat();
  $.get("http://localhost:4567/thermostat/data", function(data){
    thermostat.setTemp(data.temperature);
    $("#temperature").text(thermostat.getTemperature());
    $("weather").text(data.city_temperature);
  });
  var c;
  var outside_temperature;
  $("#form").submit(function () {
    event.preventDefault();
    c =  $('#city').val();
    $.get("http://api.openweathermap.org/data/2.5/weather?q=" + c + "&APPID=6d4bbb8a1db58900a6e66af4b3cdacca&units=metric", function (data) {
      $('#weather').text(data.main.temp);
      outside_temperature = data.main.temp;
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
    console.log(c);
    console.log(outside_temperature);
    $.post("http://localhost:4567/thermostat/data", {temperature: thermostat.getTemperature(), city: c, city_temperature: outside_temperature
    });
  });
});
