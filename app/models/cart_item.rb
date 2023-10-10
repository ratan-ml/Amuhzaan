class CartItem < ApplicationRecord
    validates_uniqueness_of :user_id, scope: :product_id
    validates :quantity, presence: true

    belongs_to :user
    belongs_to :product
end
