Rails.application.routes.draw do
  resources :schedules
  devise_for :users
  root "pages#home"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/visits/:id/new", to: "schedules#new_visit"
  resources :places
  
end
