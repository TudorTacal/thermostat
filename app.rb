require 'sinatra/base'
require_relative './models/data_mapper_settings'
require_relative './models/thermostat'
require 'json'

class Thermostat < Sinatra::Base
  get '/' do
    erb(:index)
  end

  get '/thermostat/data' do
    @thermostat = ThermostatData.get(1)
    # require 'pry';binding.pry
    content_type :json
    {:temperature => @thermostat.temperature, :city => @thermostat.city,
     :city_temperature => @thermostat.city_temperature}.to_json
  end

  post '/thermostat/data' do
    thermostat = ThermostatData.get(1)
    thermostat.temperature = params[:temperature]
    thermostat.city = params[:city] || thermostat.city
    thermostat.city_temperature = params[:city_temperature] || thermostat.city_temperature
    thermostat.save
  end
  
  # start the server if ruby file executed directly
  run! if app_file == $0
end
