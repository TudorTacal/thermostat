describe("Thermostat", function () {
  var thermostat;
  beforeEach(function () {
    thermostat = new Thermostat();
  });

  it('initializes at 20 degrees', function () {
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it('increases temperature by one degree with an up function', function () {
    thermostat.increaseTemperature();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it('descreases temperature by 1 degree', function () {
    thermostat.decreaseTemperature();
    expect(thermostat.getTemperature()).toEqual(19);
  });

  it('minimum temperature is 10 degrees', function () {
    var i = 0;
    do {
      thermostat.decreaseTemperature();
      i++;
    }
    while (i < 10);
    expect(function () {thermostat.decreaseTemperature()}).toThrow("Mininum temperature is 10 degrees. Cannot go below.")
  });

  it('if power saving mode is on the maximum temperature is 25 degrees', function () {
    thermostat.powerSaving('on');
    var i = 0;
    do {
      thermostat.increaseTemperature();
      i++;
    }
    while (i < 5);
    expect()
  });
});
