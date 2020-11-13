class HomeController < StaticController
  def index
    super
    @data = { path: '/home' }
  end
end
