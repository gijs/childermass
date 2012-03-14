Childermass::Application.routes.draw do
  match 'dashboard' => 'dashboard#home'

  namespace :github do
    match 'users/:user' => 'users#show'
  end

  root :to => 'dashboard#home'
end
