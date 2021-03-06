Rails.application.routes.draw do
  root "static_pages#root"

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :restaurants, only: [:index, :create, :show, :update] do
      resources :reviews, only: [:index]
    end
    resources :reviews, only: [:create, :show, :update]
  end
end
