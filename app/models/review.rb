class Review < ApplicationRecord
    validates_uniqueness_of :product_id, scope: :user_id
    validates :title, :body, presence: true
    validates :rating, numericality: { in: 1..5 }

    belongs_to :user
    belongs_to :product

end
