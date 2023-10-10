class User < ApplicationRecord
  validates :email, 
    uniqueness: true, 
    length: { in: 3..255 }, 
    format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :name, presence: true
  validates :session_token, presence: true, uniqueness: true
  validates :password, length: { in: 6..255 }, allow_nil: true

  has_secure_password

  before_validation :ensure_session_token

  has_many :cart_items,
  dependent: destroy

  # has_many :reviews,
  # dependent: destroy

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.authenticate(password) ? user : nil
  end

  def reset_session_token!
    self.update!(session_token: generate_unique_session_token)
    self.session_token
  end

  private

  def generate_unique_session_token
      while true
        token = SecureRandom.base64
        return token unless User.exists?(session_token: token)
      end
  end

  def ensure_session_token
    self.session_token ||= generate_unique_session_token
  end
end
