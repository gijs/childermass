require 'spec_helper'

describe Github::UsersController do
  context "GET show" do
    it "gets an unauthenticated user" do
      user_hash = {}
      Octokit.should_receive(:user).with("githubber").and_return(user_hash)

      get :show, :user => "githubber"
    end

    it "responds with json version of user" do
      user_hash = {:login => "githubber", :type => "User", :github_attr => "something"}
      Octokit.should_receive(:user).with("githubber").and_return(user_hash)

      get :show, :user => "githubber"

      response.body.should == user_hash.to_json
    end

  end
end
