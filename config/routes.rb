Rails.application.routes.draw do
  get 'api/cards', :to => 'api/cards#index'
  
  namespace :api do
    resources :categories do
      resources :cards 
    end
  end
end
