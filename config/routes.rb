Rails.application.routes.draw do
  namespace :v1, defaults: { format: 'json' } do
    get 'things', to: 'things#index'
  end
  get 'home', to: 'home#index'
  root 'static#index'
end
