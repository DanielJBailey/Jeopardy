Rails.application.routes.draw do
  namespace :api do
    resources :categories do
      resources :questions 
    end
  end
end
