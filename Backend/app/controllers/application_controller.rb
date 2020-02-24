class ApplicationController < ActionController::API
    # include Knock::Authenticable
    def current_user
        token = request.headers['Access-Token']
        if(token)
        user_id = JWT.decode(token, ENV['SECRET'])[0]['user_id']
        end
        
    end

    def authenticate!
        unless current_user
            return nil  
        end
    end
end
