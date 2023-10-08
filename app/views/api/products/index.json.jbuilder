@products.each do |product|
    json.set! product.id do
        json.extract! product, :id, :category, :name, :description, :price
        # TO INVESTIGATE
        # json.photoUrl product.photo.attached? ? product.photo.url : nil
    end
end
