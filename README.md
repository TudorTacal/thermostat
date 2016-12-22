### Thermostat

This project represents our fifth weekly challenge at Makers Academy coding bootcamp.

A user can set the temperature of the thermostat. This can increase, decrease or be reseted. The default temperature is 20 degrees. The outside temperature can be obtained by inputing the location: city. Then, an Ajax request is being sent using 'http://openweathermap.org/api' to extract the weather information for the required city. It also features a power saving mode which can be turned on or off. This alters the maximum and minimum temperature of the thermostat. The last feature is showing the usage which changes colours relative to the temperature. Every change is saved into the database and loaded on startup. 

## Screenshots

![Thermostat](https://s30.postimg.org/44d6jl38h/Screen_Shot_2016_12_22_at_18_44_36.png)  

## Installation and use

1. Clone or download the repository.
2. Create a **thermostat_test** database.
```
$ psql
user=# CREATE DATABASE thermostat_test;
user=# \q
$
```
3. Run **ruby app.rb**
4. In your browser open **localhost:4567**

## Technologies used

* **Sinatra** for DSL.
* **JavaScript** for writing the thermostat logic.
* **Jquery** for event handling.
* **Ajax** for sending requests.
* **PostgreSQL** as database.
* **Jasmine** and **Rspec** for testing.
* **HTML5** and **CSS3** for styling.

#Contact

tudor.tacal@gmail.com
