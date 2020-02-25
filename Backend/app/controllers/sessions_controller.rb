class SessionsController < ApplicationController
    require 'jwt'
    def create
        @user = User.find_by(email: login_params[:email])
        
        if @user && @user.authenticate(login_params[:password])
            token = JWT.encode({user_id: @user.id}, ENV['SECRET'])
            
            render :json => { :token => token, :user => @user}
        else
            render :json =>{ :msg => "Login Failed"}
        end
    end

    private
    def login_params
        params.require(:user).permit(:email, :password)
    end
    
end
