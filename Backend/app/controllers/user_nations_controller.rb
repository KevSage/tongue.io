class UserNationsController < ApplicationController
  before_action :set_user_nation, only: [:show, :update, :destroy]

  # GET /user_nations
  def index
    @user_nations = UserNation.all

    render json: @user_nations
  end

  # GET /user_nations/1
  def show
    render json: @user_nation
  end

  # POST /user_nations
  def create
    @user_nation = UserNation.new(user_nation_params)

    if @user_nation.save
      render json: @user_nation, status: :created, location: @user_nation
    else
      render json: @user_nation.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_nations/1
  def update
    if @user_nation.update(user_nation_params)
      render json: @user_nation
    else
      render json: @user_nation.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_nations/1
  def destroy
    @user_nation.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_nation
      @user_nation = UserNation.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_nation_params
      params.require(:user_nation).permit(:user_id, :nation_id)
    end
end
