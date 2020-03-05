class EntriesController < ApplicationController
  before_action :set_entry, only: [:show, :update, :destroy]

  # GET /entries
  def index
    @entries = Entry.all

    render json: @entries
  end

  # GET /entries/1
  def show
    render json: @entry, :include => [:phrase, :phrasebook]
  end

  # POST /entries
  def create
    @entry = Entry.new(entry_params)
   
    if @entry.save
      # newEntry = @entry.translate
      @phrasebooks = @entry.phrasebook.user.phrasebooks
      

      render json: @phrasebooks, :include => [:language, :phrases, :entries => {:include => [:phrase]} ], status: :created, location: @entry
    else
      render json: @entry.errors, status: :unprocessable_entity
    end
  end
# Remove translate from entries controller/model to phrase
  def translate
    @entry = Entry.new(entry_params)
    translated_text = @entry.translate
    render 

  end

  # PATCH/PUT /entries/1
  def update
    if @entry.update(entry_params)
      render json: @entry
    else
      render json: @entry.errors, status: :unprocessable_entity
    end
  end

  # DELETE /entries/1
  def destroy
    @entry.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_entry
      @entry = Entry.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def entry_params
      params.require(:entry).permit(:phrasebook_id, :phrase_id)
    end
end
