Childermass::Application.routes.draw do
  mount JasmineRails::Engine => "/jasmine" unless Rails.env.production?
end
