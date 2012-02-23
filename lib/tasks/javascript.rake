namespace :jasmine do
  task :headless do
    sh "bundle exec jasmine-headless-webkit --keep --color"
  end
end
