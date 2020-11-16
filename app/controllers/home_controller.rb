class HomeController < StaticController
  before_action :logged_in_user

  def index
    super
    @data = {
        user: @current_user.as_json(only: [:id, :name, :email]),
        path: '/home'
    }
  end

  private

  # ログイン済みユーザーかどうか確認
  def logged_in_user
    unless logged_in?
      redirect_to login_url
    end
  end
end
