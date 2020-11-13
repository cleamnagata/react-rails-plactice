class StaticController < ApplicationController
  def index
    @data = { path: '/' }
  end
end
