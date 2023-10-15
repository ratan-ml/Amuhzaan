json.extract! @review, :id, :title, :body, :rating, :user_id, :product_id, :updated_at
json.username @review.user.name