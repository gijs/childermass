class Github::UsersController < ApplicationController
  def show
    user = Octokit.user(params[:user])
    render :json => user
  end

  def following
    users_following = Octokit.following(params[:user])
    render :json => users_following
  end

  def followers
    users_followers = Octokit.followers(params[:user])
    render :json => users_followers
  end
end
