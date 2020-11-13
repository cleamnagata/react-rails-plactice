Rails.application.routes.draw do
  get 'sessions/new'
  namespace :v1, defaults: { format: 'json' } do
    post 'users', to: 'users#create'
    get 'things', to: 'things#index'
  end
  get '/login', to: 'sessions#new'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get 'home', to: 'home#index'
  root 'static#index'
end
