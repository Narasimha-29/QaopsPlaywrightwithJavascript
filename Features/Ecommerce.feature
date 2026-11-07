Feature: Ecommerce Validation

Scenario: Placing the Order
Given a Login to Ecommerce application with "y19ec1367@gmail.com" and "Narasimha@123"
And Add "iphone 13 pro" to cart
Then Verify "iphone 13 pro" is displayed in the cart
When Enter valid details and place the order
Then Verify order in present in the OrderHistory

    