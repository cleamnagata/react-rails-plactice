class V1::UsersController < ApplicationController
  def create
    logger.debug params
    render :json => { ok: true }
  end
end
