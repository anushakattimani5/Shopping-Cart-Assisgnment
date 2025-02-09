## :warning: Please read these instructions carefully and entirely first
* Clone this repository to your local machine.
* Use your IDE of choice to complete the assignment.
* Use Javascript or preferably Typescript to complete the assignment, other languages will not be considered unfortunately.
* When you have completed the assignment, you need to  push your code to a public repository and send the link via email.
* Once you reply back to the email, your assignment will be considered completed. Please make sure that you have completed the assignment and pushed all code from your local machine to the repository before you reply.
* There is no time limit for this task - however, for guidance, it is expected to typically take around 3-4 hours.

# Begin the task

Write some code that provides the following basic shopping cart capabilities:

1. Add a product to the cart
   1. Specifying the product name and quantity
   2. Retrieve the product price by issuing a request to the the [Price API](#price-api) specified below
   3. Cart state (totals, etc.) must be available

2. Calculate the state:
   1. Cart subtotal (sum of price for all items)
   2. Tax payable (charged at 12.5% on the subtotal)
   3. Total payable (subtotal + tax)
   4. Totals should be rounded up where required

## Price API

The price API is an HTTP service that returns the price details for a product, identified by it's name. The shopping cart should integrate with the price API to retrieve product prices. 

### Price API Service Details

Start the price API by running the following command: `npm run serve-products`

Base URL: `http://localhost:3001/`

View Product: `GET /products/{product}`

List of available products
* `cheerios`
* `cornflakes`
* `frosties`
* `shreddies`
* `weetabix`

## Example
The below is a sample with the correct values you can use to confirm your calculations

### Inputs
* Add 1 × cornflakes @ 2.52 each
* Add another 1 x cornflakes @2.52 each
* Add 1 × weetabix @ 9.98 each
  
### Results  
* Cart contains 2 x cornflakes
* Cart contains 1 x weetabix
* Subtotal = 15.02
* Tax = 1.88
* Total = 16.90

## Tips on what we’re looking for

* We value simplicity as an architectural virtue and as a development practice. Solutions should reflect the difficulty of the assigned task, and shouldn’t be overly complex.
* We prefer simple, well tested solutions over clever solutions.
* We will appreciate descriptive and unambiguous names for the concepts you introduce.
* Atomic commits with descriptive messages will get you extra brownie points.

### DO

* ✅ Include unit tests.
* ✅ Test both any client and logic.
* ✅ Update the README.md with any relevant information, assumptions, and/or tradeoffs you would like to highlight.
* ✅ Add some information on how the reviewer might test your solution.

### DO NOT

* ❌ Submit any form of app, such as web APIs, browser, desktop, or command-line applications.
* ❌ Add unnecessary layers of abstraction.
* ❌ Add unnecessary patterns/ architectural features that aren’t called for e.g. persistent storage.

-----------------------------------------------------------------------------------------------------------------------------------
### README.md Update for Your JavaScript Web-Based Shopping Cart

---

# Shopping Cart Web Application

This project is a browser-based shopping cart that retrieves product prices from a local Price API, allows users to add products via an input field, and calculates the subtotal, tax (12.5%), and total payable.  

---

## 1. Assumptions, Tradeoffs, and Relevant Information 

### Assumptions:
✅ The Price API (`http://localhost:3001/products/{product}`) is already running before using the shopping cart.  
✅ The available products are cheerios, cornflakes, frosties, shreddies, and weetabix.  
✅ The API returns valid JSON responses containing product prices.  
✅ The user enters correct product names (matching API values) and valid quantities.  

### Tradeoffs & Design Choices:  
⚡ Web-Based UI – The shopping cart is designed for a browser and uses HTML & JavaScript (DOM Manipulation) for interactions.  
⚡ Fetch API for Price Retrieval – Uses `fetch()` to request prices from the Price API.  
⚡ Simple Cart Structure – Stores cart data in an array of objects.  
⚡ Automatic UI Update – The cart display updates dynamically after adding products.  
⚡ Rounded Tax & Totals – Tax (12.5%) and total payable amounts are rounded up for accurate financial calculations.  

---

## 2. How to Test the Solution  

### Prerequisites:  
- Ensure Node.js (v14 or later) and npm are installed.  
- Clone the repository and navigate to the project folder:  
  ```bash
  git clone https://github.com/YOUR_GITHUB_USERNAME/shopping-cart.git
  cd shopping-cart
  ```

### Step 1: Install Dependencies  
Run the following command to install required packages:  
```bash
npm install
```

### Step 2: Start the Price API 
Start the local Price API (must be running before using the cart):  
```bash
npm run serve-products
```

### Step 3: Open the Web Application  
1. Open the index.html file in your browser.  
2. Enter a product name and quantity in the provided input fields.  
3. Click the "Add to Cart" button.  

### Step 4: Verify the Cart Updates  
After adding products, the cart display should update dynamically:  
- Example input: "cornflakes", quantity: 2  
- Example output on the webpage:  
  ```
  Cart contains 2 x cornflakes
  Subtotal: 5.04
  Tax: 0.63
  Total: 5.67
  ```

### Step 5: Repeat and Test Different Inputs  
- Add multiple products.  
- Try different quantities.  
- Verify calculations and UI updates.  

---

## Future Enhancements  
🔹 Add local storage support to persist cart data across page reloads.  
🔹 Improve error handling for invalid products or API failures.  
🔹 Implement a checkout/payment flow.  