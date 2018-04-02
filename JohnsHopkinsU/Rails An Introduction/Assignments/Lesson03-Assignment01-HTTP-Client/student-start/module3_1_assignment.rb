require 'httparty'
FOOD2FORK_KEY = 7647ea312f22fff136305a5ea2dc126d

class Recipe
	include HTTParty

	base_url "http://food2fork.com/api"
	default_params key: FOOD2FORK_KEY
	format :json

	def self.for (search)
		get("/search", query: {q: search})['recipes']
	end

end


