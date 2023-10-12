class Api::CartItemsController < ApplicationController
    before_action :require_logged_in, only: [:create]
    # user should be able to add to cart without login
    # login should retain cart items
    def index
        @cart_items = current_user.cartItems
        render :index
    end

    def create
        @cart_item = CartItem.find_by(
            user_id: current_user.id, 
            product_id: cart_item_params[:product_id]
        )
        @cart_item ||= CartItem.new(cart_item_params)

        # if record already exists, increment quantity
        @cart_item.quantity += cart_item_params[:quantity].to_i if @cart_item.persisted?
        
        if @cart_item.save
            render :show
        else
            render json: @cart_item.errors.full_messages, status: 422
        end
    end

    def update
        @cart_item = CartItem.find_by(id: params[:id])

        if @cart_item
            @cart_item.quantity = params[:quantity]
            @cart_item.save
            render :show
        else
            render json: { error: 'Failed to update cart item'}, status: 422
        end
    end

    def destroy
        @cart_item = CartItem.find_by(id: params[:id])
        render json: {} if @cart_item.delete
    end

    private

    def cart_item_params
        params.require(:cart_item).permit(:user_id, :product_id, :quantity)
    end
end
