const Cart = require('../models/cart')


//controller for adding items to cart
exports.addToCartController = (req, res) => {

    Cart.findOne({ user: req.user._id }).exec((error, cart) => {
        if (error) return res.status(400).json({ error })
        if (cart) {
            //if the cart already exists then we only need to update it 
            const product = req.body.cartItems.product
            const item = cart.cartItems.find(c => c.product == product)
            if (item) {
                Cart.findOneAndUpdate({ "user": req.user._id, "cartItems.product": product }, {
                    "$set": {
                        "cartItems": {
                            ...req.body.cartItems,
                            quantity: item.quantity + req.body.cartItems.quantity
                        }
                    }
                }).exec((error, cart) => {
                    if (error) return res.status(400).json({ error })
                    if (cart) return res.status(200).json({ cart })
                })
            }
        } else {
            //create a new cart
            const cart = new Cart({
                user: req.user._id,
                cartItems: req.body.cartItems
            })
            cart.save((error, cart) => {
                if (error) return res.status(400).json({ error })
                if (cart) return res.status(200).json({ cart })
            })
        }
    })
}   