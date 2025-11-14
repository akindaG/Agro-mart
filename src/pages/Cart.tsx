import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const total = getTotalPrice();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center py-12">
        <div className="text-center">
          <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-4">Your Cart is Empty</h2>
          <p className="text-muted-foreground mb-8">Start shopping to add items to your cart</p>
          <Link to="/products">
            <Button size="lg">Browse Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container px-4 sm:px-6 py-8 sm:py-12">
        <div className="space-y-6 sm:space-y-8">
          <div>
            <Link to="/products">
              <Button variant="ghost" className="mb-4 sm:mb-6 -ml-2">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Continue Shopping
              </Button>
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground">Shopping Cart</h1>
          </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-5 sm:space-y-6">
            {cart.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full sm:w-32 h-32 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-start gap-3 mb-3">
                        <div>
                          <h3 className="font-semibold text-lg text-foreground">{item.name}</h3>
                          <p className="text-sm text-muted-foreground">{item.unit}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeFromCart(item.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between mt-5">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-12 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        <span className="text-xl font-bold text-primary">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
            <Button 
              variant="outline" 
              onClick={clearCart} 
              className="w-full mt-2 sm:mt-3"
              size="lg"
            >
              Clear Cart
            </Button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
              <Card className="sticky top-24 sm:top-28">
                <CardContent className="p-5 sm:p-6">
                <h3 className="text-xl font-semibold text-foreground mb-5 sm:mb-6">Order Summary</h3>
                  <div className="space-y-5">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>{total > 50 ? "Free" : "$5.00"}</span>
                  </div>
                  <div className="border-t border-border pt-4">
                    <div className="flex justify-between text-lg font-bold text-foreground">
                      <span>Total</span>
                      <span className="text-primary">
                        ${(total + (total > 50 ? 0 : 5)).toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <Button size="lg" className="w-full mt-6">
                    Proceed to Checkout
                  </Button>
                  {total < 50 && (
                    <p className="text-xs text-muted-foreground text-center">
                      Add ${(50 - total).toFixed(2)} more for free shipping!
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Cart;
