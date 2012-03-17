class Github::ReposController < ApplicationController
  def index
    repos = Octokit.repos(params[:user])
    render :json => repos
  end
end
