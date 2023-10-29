# [Amuhzaan](https://amuhzaan.onrender.com/) - [Amazon](https://www.amazon.com/) Clone

## Overview

Amuhzaan is a full-stack e-commerce application designed as a clone of Amazon. The application replicates its core functionalities by allowing users to browse, purchase, and review products.

## Technologies Used
<img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" height="33"/><img src="https://img.shields.io/badge/Ruby-CC342D?style=for-the-badge&logo=ruby&logoColor=white" height="33" />

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" height="33"/><img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" height="33"/><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" height="33" /><img src="https://img.shields.io/badge/HTML-239120?style=for-the-badge&logo=html5&logoColor=white" height="33" /><img src="https://img.shields.io/badge/CSS-239120?&style=for-the-badge&logo=css3&logoColor=white" height="33"/>
<img src="https://img.shields.io/badge/Ruby_on_Rails-CC0000?style=for-the-badge&logo=ruby-on-rails&logoColor=white" height="33"/><img src="https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white" height="33"/><img src="https://img.shields.io/badge/Amazon_AWS-232F3E?style=for-the-badge&logo=amazon-aws&logoColor=white" height="33" /><img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" height="33"/>

+ Languages: Javascript, Ruby
+ Frontend: React, Redux
+ Backend API: Rails
+ Database: PostgreSQL
+ Hosting: Render
+ Asset Storage: AWS
+ HTML/CSS

## Key Features

### 1. Product Reviews

**Challenge:** Implementing a robust product review system that allows users to read and write reviews for various products, each with its rating and feedback.

**Solution:** Only logged-in users can create a review with the restriction of one review per product and only the author of the review and edit or delete the review. If not logged in, text will appear to prompt for a login and the create form will not be displayed.

```javascript
// ProductReviewForm.js
if (!sessionUser) {
    return <p className="review-disabled">Please sign in to review this product.</p>
} else if (reviewers.includes(sessionUser.id)) {
    return <p className="review-disabled">Your feedback for this product has been previously submitted. Please utilize the options above to make any necessary adjustments or remove your review.</p>
}
```
Restrict access to update and delete functions to only the reviewer.

```javascript
// ReviewIndexItem.js
const sessionUser = useSelector(state => state.session.user)
const reviewer = review.userId == sessionUser?.id

const editButton = reviewer ? (
    <button className="edit-btn" onClick={e => setEditMode(true)}>Edit</button>
) : null

const deleteButton = reviewer ? (
    <button className="delete-btn" onClick={handleDeleteReview}>Delete</button>
) : null
```

### 2. Cart Item

**Challenge:** Updating the existing cart items when an item was added more than once, and dynamically adjusting the HTML components based on the item quantity.

**Solution:** 

In CartItemsController, if the cart item is found, it will add the selected or inputted quantity to the existing quantity. If not, it will create and save a new cart item object.

```javascript
// CartItemsController
def create
  @cart_item = CartItem.find_by(
      user_id: current_user.id, 
      product_id: cart_item_params[:product_id]
  )
  @cart_item ||= CartItem.new(cart_item_params)

  @cart_item.quantity += cart_item_params[:quantity].to_i if @cart_item.persisted?
  
  if @cart_item.save
      render :show
  else
      render json: @cart_item.errors.full_messages, status: 422
  end
end
```
To ensure the updated quantity was accurately reflected on the cart index page, I managed the quantity state by setting it to the new value passed by cartItem and including cartItem in the dependency array to account for changes in this variable. This allowed the quantity state to have the move updated value displayed when entering the page.

```javascript
// CartIndexItem.js
useEffect(()=> {
    setQuantity(cartItem.quantity)
    setInputMode(quantity > 9 ? true : false)
},[cartItem])
```
The *inputMode* state serves as a versatile switch that dynamically alters the HTML component based on the selected quantity. This feature empowers customers to conveniently choose their desired quantity by seamlessly toggling between a select option and an input text field. I introduced a new state called *qtyBuffer*. This state prevents the quantity from updating with every input in the text field, ensuring that changes are only applied when the form is officially submitted. This approach promotes a more user-friendly interaction while maintaining data integrity.

```javascript
const [qtyBuffer, setQtyBuffer] = useState(quantity)

const handleBufferChange = e => {
    e.preventDefault();
    setQtyBuffer(e.target.value)

<input
    type="text"
    className="item-input"
    value={qtyBuffer}
    onClick={showButton}
    onChange={handleBufferChange}
    min={1}
/>
```
### Future Implementations
+ Order History
