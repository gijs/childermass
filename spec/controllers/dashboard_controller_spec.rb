require 'spec_helper'

describe DashboardController do
  context "GET home" do
    it "renders home view" do
      get :home

      response.should render_template("home")
    end
  end

end
