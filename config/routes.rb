Childermass::Application.routes.draw do
  match 'dashboard' => 'dashboard#home'

  namespace :github do
    match 'users/:user' => 'users#show'
    match 'repos/:user' => 'repos#index'
  end

  root :to => 'dashboard#home'
end
