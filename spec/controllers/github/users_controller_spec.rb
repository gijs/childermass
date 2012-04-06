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

  context "GET following" do
    it "gets users following a user" do
      users_following = [{"name" => "bar"}, {"name" => "foo"}]
      Octokit.should_receive(:following).with("githubber").and_return(users_following)

      get :following, :user => "githubber"
    end

    it "responds with json version of users following" do
      users_following = [{"name" => "bar"}, {"name" => "foo"}]
      Octokit.should_receive(:following).with("githubber").and_return(users_following)

      get :following, :user => "githubber"
      response.body.should == users_following.to_json
    end
  end

  context "GET followers" do
    it "gets users followers a user" do
      followers = [{"name" => "bar"}, {"name" => "foo"}]
      Octokit.should_receive(:followers).with("githubber").and_return(followers)

      get :followers, :user => "githubber"
    end

    it "responds with json version of users followers" do
      followers = [{"name" => "bar"}, {"name" => "foo"}]
      Octokit.should_receive(:followers).with("githubber").and_return(followers)

      get :followers, :user => "githubber"
      response.body.should == followers.to_json
    end
  end
end
