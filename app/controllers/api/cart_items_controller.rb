class Api::CartItemsController < ApplicationController
    # user should be able to add to cart without login
    # login should retain cart items
    def index
        # @cart_items = 
    end

    def create
        @cart_item = CartItem.find_or_initialize_by(
            user_id: current_user.id, 
            product_id: cart_item_params[:product_id]
        )
        # @cart_item ||= CartItem.new(cart_item_params)

        # if record already exists, increment quantity
        @cart_item.quantity += cart_items_params[:quantity].to_i if @cart_item.persisted?
        
        if @cart_item.save
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def update

    end

    def destroy

    end

    private

    def cart_item_params
        params.require(:cart_item).permit(:user_id, :product_id, :quantity)
    end
end
