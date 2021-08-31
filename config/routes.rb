Rails.application.routes.draw do
  resources :jobs
  devise_for :users
  get '/sample_jobs', to: "home#sample_jobs"
  get '*path', to: 'home#index', constraints: ->(request){ request.format.html? }
  root 'home#index'  
end
