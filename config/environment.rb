# Load the rails application
require File.expand_path('../application', __FILE__)

# Initialize the rails application
Childermass::Application.initialize! do
  config.frameworks -= [ :active_record, :active_resource, :action_mailer ]
end
