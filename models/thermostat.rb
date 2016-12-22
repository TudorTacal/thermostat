require 'data_mapper'
require 'dm-postgres-adapter'
require_relative './data_mapper_settings'

class ThermostatData

  include DataMapper::Resource

  property :id, Serial
  property :temperature, Float
  property :city, String

end
