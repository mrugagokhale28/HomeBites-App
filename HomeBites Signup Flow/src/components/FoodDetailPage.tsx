import { useState } from 'react';
import { mockDishes } from './mockData';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { toast } from 'sonner@2.0.3';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { 
  ArrowLeft, 
  Star, 
  MapPin, 
  Clock, 
  Users, 
  ChefHat,
  ShoppingCart,
  Heart,
  Plus,
  Minus,
  Package
} from 'lucide-react';

interface FoodDetailPageProps {
  dishId: string | null;
  favorites: Set<string>;
  onBack: () => void;
  onAddToCart: (dishId: string, quantity: number) => void;
  onToggleFavorite: (dishId: string) => void;
  onChefClick: (chefId: string) => void;
  onGoToCart: () => void;
}

export function FoodDetailPage({ 
  dishId, 
  favorites,
  onBack, 
  onAddToCart,
  onToggleFavorite,
  onChefClick,
  onGoToCart
}: FoodDetailPageProps) {
  const [quantity, setQuantity] = useState(1);
  const [showCartDialog, setShowCartDialog] = useState(false);

  const dish = mockDishes.find((d) => d.id === dishId);

  if (!dish) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="p-8 text-center">
          <p className="text-gray-600">Dish not found</p>
          <Button onClick={onBack} className="mt-4">
            Go Back
          </Button>
        </Card>
      </div>
    );
  }

  const totalPrice = dish.price * quantity;
  const isFavorite = favorites.has(dish.id);

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleAddToCart = () => {
    onAddToCart(dish.id, quantity);
    setShowCartDialog(true);
  };

  const handleChefNameClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onChefClick(dish.chefId);
  };

  const handleGoToCart = () => {
    setShowCartDialog(false);
    onGoToCart();
  };

  const handleContinueShopping = () => {
    setShowCartDialog(false);
    onBack();
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
            <div>
              <h1 className="text-orange-600">HomeBites</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <ImageWithFallback
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
              <Button
                size="icon"
                variant="secondary"
                className={`absolute top-4 right-4 rounded-full ${
                  isFavorite ? 'bg-red-500 hover:bg-red-600' : 'bg-white/90 hover:bg-white'
                }`}
                onClick={() => onToggleFavorite(dish.id)}
              >
                <Heart
                  className={`w-5 h-5 ${isFavorite ? 'fill-white text-white' : 'text-gray-700'}`}
                />
              </Button>
            </div>
          </div>

          {/* Details Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-2">
                  <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                    {dish.cuisine}
                  </Badge>
                  <h1 className="text-gray-900">
                    {dish.name}
                  </h1>
                </div>
                <div className="text-right">
                  <div className="text-orange-600">${dish.price}</div>
                  <p className="text-gray-500">per serving</p>
                </div>
              </div>

              <p className="text-gray-700">{dish.description}</p>

              {/* Chef Info - Clickable */}
              <Card 
                className="p-4 bg-amber-50 border-amber-200 cursor-pointer hover:bg-amber-100 transition-colors"
                onClick={handleChefNameClick}
              >
                <div className="flex items-center gap-3">
                  <div className="bg-amber-500 p-3 rounded-full">
                    <ChefHat className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-600">Chef</p>
                    <p className="text-gray-900 hover:text-amber-600 transition-colors">
                      {dish.chefName} →
                    </p>
                  </div>
                </div>
              </Card>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span>{dish.rating} ({dish.reviews} reviews)</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="w-5 h-5" />
                  <span>{dish.location}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="w-5 h-5" />
                  <span>{dish.prepTime}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Users className="w-5 h-5" />
                  <span>{dish.servings} serving{dish.servings !== 1 ? 's' : ''}</span>
                </div>
              </div>

              {/* Ingredients */}
              <div className="space-y-3">
                <h3 className="text-gray-900">Ingredients</h3>
                <div className="flex flex-wrap gap-2">
                  {dish.ingredients.map((ingredient, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-gray-100 text-gray-700 hover:bg-gray-200"
                    >
                      {ingredient}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-3">
                <h3 className="text-gray-900">Quantity</h3>
                <div className="flex items-center gap-4">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={decrementQuantity}
                    disabled={quantity === 1}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="text-gray-900 min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <Button variant="outline" size="icon" onClick={incrementQuantity}>
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Add to Cart */}
              <Card className="p-4 bg-orange-50 border-orange-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-gray-700">Total</span>
                  <span className="text-orange-600">${totalPrice.toFixed(2)}</span>
                </div>
                <Button 
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white" 
                  size="lg"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Add to Cart
                </Button>
              </Card>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8 space-y-6">
          <Card className="p-6">
            <h2 className="text-gray-900 mb-4">
              About this dish
            </h2>
            <p className="text-gray-700 leading-relaxed">
              This {dish.name.toLowerCase()} is lovingly prepared by {dish.chefName} using traditional 
              cooking methods and the finest ingredients. Every dish is made to order to ensure maximum 
              freshness and flavor. Perfect for {dish.servings === 1 ? 'a personal meal' : `sharing with ${dish.servings} people`}.
            </p>
          </Card>

          <Card className="p-6 bg-blue-50 border-blue-200">
            <h3 className="text-blue-900 mb-3">
              Delivery Information
            </h3>
            <div className="space-y-3 text-blue-800">
              <div>
                <p className="mb-2">
                  <strong>Pickup Options:</strong>
                </p>
                <ul className="space-y-1 ml-4">
                  <li>• Pickup @ ISR 8pm</li>
                  <li>• Pickup @ Ikenberry Commons @ 9pm</li>
                </ul>
              </div>
              <p className="pt-3 border-t border-blue-300">
                <strong>Home Delivery:</strong> Extra charge applied at checkout!
              </p>
            </div>
          </Card>
        </div>
      </main>

      {/* Add to Cart Dialog */}
      <Dialog open={showCartDialog} onOpenChange={setShowCartDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <div className="bg-green-100 p-2 rounded-full">
                <ShoppingCart className="w-5 h-5 text-green-600" />
              </div>
              Added to Cart!
            </DialogTitle>
            <DialogDescription>
              {quantity}x {dish.name} has been added to your cart.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-col sm:flex-row gap-2">
            <Button 
              variant="outline" 
              onClick={handleContinueShopping}
              className="w-full sm:w-auto"
            >
              Continue Shopping
            </Button>
            <Button 
              onClick={handleGoToCart}
              className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600"
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Go to Cart
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
