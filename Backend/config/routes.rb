Rails.application.routes.draw do
  resources :user_nations
  # post 'user_token' => 'user_token#create'
  resources :nation_langauages
  resources :phrasebooks
  resources :entries
  resources :user_phrasebooks
  resources :phrases
  resources :nations
  resources :users
  resources :languages
  get '/login', to: 'users#decode'
  post '/login', to: 'sessions#create'
  post '/signup', to: 'users#create'
  post "/phrases" => "phrases#create"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
