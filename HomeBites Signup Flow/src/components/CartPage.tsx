import { Button } from './ui/button';
import { Card } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { CartItem } from './mockData';
import { ArrowLeft, ShoppingCart, Plus, Minus, Trash2, ChefHat } from 'lucide-react';

interface CartPageProps {
  cart: CartItem[];
  onBack: () => void;
  onUpdateCartItem: (dishId: string, quantity: number) => void;
}

export function CartPage({ cart, onBack, onUpdateCartItem }: CartPageProps) {
  const subtotal = cart.reduce((sum, item) => sum + (item.dish.price * item.quantity), 0);
  const deliveryFee = cart.length > 0 ? 5 : 0;
  const total = subtotal + deliveryFee;

  const incrementQuantity = (dishId: string, currentQuantity: number) => {
    onUpdateCartItem(dishId, currentQuantity + 1);
  };

  const decrementQuantity = (dishId: string, currentQuantity: number) => {
    onUpdateCartItem(dishId, Math.max(0, currentQuantity - 1));
  };

  const removeItem = (dishId: string) => {
    onUpdateCartItem(dishId, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" onClick={onBack}>
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 p-2 rounded-lg">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-orange-600">Your Cart</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-6">
        {cart.length === 0 ? (
          <Card className="p-12 text-center">
            <ShoppingCart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-gray-900 mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">
              Add some delicious homemade dishes to get started!
            </p>
            <Button onClick={onBack} className="bg-orange-500 hover:bg-orange-600">
              Browse Dishes
            </Button>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-gray-900">Cart Items ({cart.length})</h2>
              {cart.map((item) => (
                <Card key={item.dish.id} className="p-4">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={item.dish.image}
                        alt={item.dish.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <div>
                          <h3 className="line-clamp-1">{item.dish.name}</h3>
                          <p className="text-gray-600">by {item.dish.chefName}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="text-red-500 hover:text-red-600 hover:bg-red-50 flex-shrink-0"
                          onClick={() => removeItem(item.dish.id)}
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => decrementQuantity(item.dish.id, item.quantity)}
                          >
                            <Minus className="w-3 h-3" />
                          </Button>
                          <span className="text-gray-900 min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => incrementQuantity(item.dish.id, item.quantity)}
                          >
                            <Plus className="w-3 h-3" />
                          </Button>
                        </div>
                        <span className="text-orange-600">
                          ${(item.dish.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="p-6 space-y-4 sticky top-24">
                <h3 className="text-gray-900">Order Summary</h3>
                <div className="space-y-3 pt-4 border-t">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between pt-3 border-t">
                    <span className="text-gray-900">Total</span>
                    <span className="text-orange-600">${total.toFixed(2)}</span>
                  </div>
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" size="lg">
                  Proceed to Checkout
                </Button>
                <Button variant="outline" className="w-full" onClick={onBack}>
                  Continue Shopping
                </Button>
              </Card>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
