Childermass::Application.routes.draw do
  match 'dashboard' => 'dashboard#home'
  match ':user' => 'dashboard#home'
  match ':user/following' => 'dashboard#home'

  namespace :github do
    match 'users/:user' => 'users#show'
    match 'users/:user/following' => 'users#following'
    match 'users/:user/followers' => 'users#followers'
    match 'repos/:user' => 'repos#index'
  end

  root :to => 'dashboard#home'
end
