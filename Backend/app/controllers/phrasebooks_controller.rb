class PhrasebooksController < ApplicationController
  before_action :set_phrasebook, only: [:show, :update, :destroy]
  # before_action :authenticate_user 
  
  # GET /phrasebooks
  def index
    @phrasebooks = Phrasebook.all

    render json: @phrasebooks
  end

  # GET /phrasebooks/1
  def show
    render json: @phrasebook, :include => [:language, :entries => {:includes => [:phrase]}]
  end

  # POST /phrasebooks
  def create

    language = params[:language]
    newLang = Language.find_by(name: language)
    
    language_id = newLang.id
    @phrasebook = Phrasebook.new(user_id: phrasebook_params[:user_id], average_score: phrasebook_params[:average_score], language_id: language_id)

    if @phrasebook.save
      
      render json: @phrasebook, :include => [:entries, :language], status: :created, location: @phrasebook
    else
      render json: @phrasebook.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /phrasebooks/1
  def update
    if @phrasebook.update(phrasebook_params)
      render json: @phrasebook
    else
      render json: @phrasebook.errors, status: :unprocessable_entity
    end
  end

  # DELETE /phrasebooks/1
  def destroy
    @phrasebook.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_phrasebook
      @phrasebook = Phrasebook.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def phrasebook_params
      params.require(:phrasebook).permit(:language, :average_score, :user_id)
    end
end
