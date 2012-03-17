require 'spec_helper'

describe Github::ReposController do
  context "GET index" do
    it "gets public repos for a login" do
      repos = []
      Octokit.should_receive(:repos).with("githubber").and_return(repos)

      get :index, :user => "githubber"
    end

    it "responds with json version of user" do
      repos = []
      Octokit.should_receive(:repos).with("githubber").and_return(repos)

      get :index, :user => "githubber"

      response.body.should == repos.to_json
    end

  end
end

