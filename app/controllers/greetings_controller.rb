class GreetingsController < ApplicationController

  def index
  	@greetings = Greeting.all
  	respond_to do |format|
  		format.html {}
  		format.json {}
  	end

  end
end
