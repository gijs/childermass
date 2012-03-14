class Github::UsersController < ApplicationController
  def show
    user = Octokit.user(params[:user])
    puts user.to_json.inspect

    render :json => user
  end
end
