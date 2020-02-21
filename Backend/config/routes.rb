Rails.application.routes.draw do
  resources :nation_langauages
  resources :phrasebooks
  resources :entries
  resources :user_phrasebooks
  resources :phrases
  resources :nations
  resources :users
  resources :languages
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
