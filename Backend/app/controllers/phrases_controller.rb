class PhrasesController < ApplicationController
  # before_action :set_phrase, only: [:show, :update, :create, :destroy]
 
  # GET /phrases
  def index
    @phrases = Phrase.all

    render json: @phrases
  end

  # GET /phrases/1
  def show
    render json: @phrase
  end

  # POST /phrases
  def create
    
    input = params[:input]
    @phrase = Phrase.find_or_create_by(input: input)
    
    
    if @phrase.save
      
      translation = @phrase.translate(params[:target])
      # phrase_id = JSON.parse(@phrase)
      transArray = [translation, @phrase]
      render json: transArray

    
    else
      render json: @phrase.errors, status: :unprocessable_entity
    end
  end

  

  # PATCH/PUT /phrases/1
  def update
    if @phrase.update(phrase_params)
      render json: @phrase
    else
      render json: @phrase.errors, status: :unprocessable_entity
    end
  end

  # DELETE /phrases/1
  def destroy
    @phrase.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_phrase
      @phrase = Phrase.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def phrase_params
      params.require(:phrase).permit(:category, :input, :target)
    end
end
