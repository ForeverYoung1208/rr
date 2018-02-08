Rails.application.routes.draw do

  get 'greetings/index'
  post 'greetings', to: 'greetings#create'
  delete 'greetings', to: 'greetings#destroy'

  get 'main/index'
  
  root to: 'main#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
