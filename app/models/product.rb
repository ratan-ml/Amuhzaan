class Product < ApplicationRecord
    validates :category, :name, :description, :price, presence: true
    # category inclusion validation?

    has_one_attached :photo

    has_many :reviews,
    dependent: :destroy

    has_many :cartItems,
    dependent: :destroy
end
