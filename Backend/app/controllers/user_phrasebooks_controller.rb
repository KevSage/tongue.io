class UserPhrasebooksController < ApplicationController
  before_action :set_user_phrasebook, only: [:show, :update, :destroy]

  # GET /user_phrasebooks
  def index
    @user_phrasebooks = UserPhrasebook.all

    render json: @user_phrasebooks
  end

  # GET /user_phrasebooks/1
  def show
    render json: @user_phrasebook
  end

  # POST /user_phrasebooks
  def create
    @user_phrasebook = UserPhrasebook.new(user_phrasebook_params)

    if @user_phrasebook.save
      render json: @user_phrasebook, status: :created, location: @user_phrasebook
    else
      render json: @user_phrasebook.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_phrasebooks/1
  def update
    if @user_phrasebook.update(user_phrasebook_params)
      render json: @user_phrasebook
    else
      render json: @user_phrasebook.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_phrasebooks/1
  def destroy
    @user_phrasebook.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_phrasebook
      @user_phrasebook = UserPhrasebook.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_phrasebook_params
      params.require(:user_phrasebook).permit(:phrasebook_id, :user_id)
    end
end
