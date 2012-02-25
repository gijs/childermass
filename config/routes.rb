Childermass::Application.routes.draw do
  match 'dashboard' => 'dashboard#home'

  root :to => 'dashboard#home'
end
