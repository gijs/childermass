class Github::UsersController < ApplicationController
  def show
    user = Octokit.user(params[:user])
    render :json => user
  end
end
