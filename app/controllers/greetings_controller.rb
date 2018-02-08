class GreetingsController < ApplicationController

	# GET /greetings
  def index
  	@greetings = Greeting.all
  	respond_to do |format|
  		format.html {}
  		format.json {}
  	end
  end

  # POST /greetings
  def create
  	
  	g = Greeting.new( message: greeting_params['text'] )
		if g.save
			@greetings = Greeting.all
			render :index
		else
			render json: g.errors, status: :unprocessable_entity
		end

		
  	# respond_to do |format| 
  	# 	format.json do
  	# 		if g.save
  	# 			@greetings = Greeting.all
  	# 		else
  	# 			render json: g.errors, status: :unprocessable_entity
  	# 		end
  	# 	end
  	# 	format.html { render :none, notice: 'error - only json allowed'}
  	# end

  end

  # DELETE /greetings

	def destroy
		greetings = Greeting.find(greetings_params[:ids])
		greetings.each { |g| g.destroy }

		@greetings = Greeting.all

		render :index
		
	end


  private

  def greeting_params
  	params.require(:greeting).permit(:text)
	end  

  def greetings_params
  	params.require(:greetings).permit(ids: [])
  end


end
