class Api::ReviewsController < ApplicationController
    def index
        # @reviews = Product.reviews
    end

    def create
        @review = Review.new(review_params)
        if @review.save
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find_by(id: params[:id])
        if @review && @review.update(review_params)
            render :show
        else
            render json: {error: 'Failed to update review' }, status: 422
        end
    end

    # def show 
    #     @review = Review.find_by(id: params[:id])
    #     render :show
    # end

    def destroy
        @review = Review.find_by(id: params[:id])
        render json: {} if @review.delete
    end

    private

    def review_params
        params.require(:review).permit(:title, :body, :rating, :user_id, :product_id)
    end
end
