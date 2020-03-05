class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update, :destroy]

  # GET /users
  def index
    @users = User.all

    render json: @users
  end

  # GET /users/1
  def show 
    render json: @user, :include => {
      :nation => {:except => [:created_at]}, :phrasebooks => {:include => [:language]} }
  end

  def decode
    @currentUser = User.find_by(id: current_user)
   render json: @currentUser, :include => {
    :nation => {:except => [:created_at]}, :phrasebooks => {:include => [:language , :phrases, :entries => {:include => [:phrase]}]}  }
  end

  # POST /users
  def create
    
    nation = params[:user][:nation]
    newNation = Nation.find_by(name: nation)
    nation_id = newNation.id
    @user = User.new(username: user_params[:username], email: user_params[:email], password: user_params[:password], nation_id: nation_id)
    
    

    if @user.save!

      render json: @user, :include => [:phrasebooks => {:include => [:entries => {:include => :phrases}] }], status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /users/1
  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  # DELETE /users/1
  def destroy
    @user.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user
      @user = User.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_params
      params.require(:user).permit(:username, :email, :password, :nation)
    end
end
