import { useState } from 'react';
import { FoodieProfile } from '../App';
import { mockDishes, cuisineOptions, locationOptions, Dish, CartItem } from './mockData';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator } from './ui/dropdown-menu';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { User, ShoppingCart, Heart, Star, MapPin, ChefHat } from 'lucide-react';
import { Badge } from './ui/badge';

interface ExplorePageProps {
  foodieProfile: FoodieProfile | null;
  cart: CartItem[];
  favorites: Set<string>;
  onDishClick: (dishId: string) => void;
  onGoToCart: () => void;
  onGoToProfile: () => void;
  onToggleFavorite: (dishId: string) => void;
  onLogout: () => void;
}

export function ExplorePage({ 
  foodieProfile, 
  cart, 
  favorites,
  onDishClick, 
  onGoToCart, 
  onGoToProfile,
  onToggleFavorite,
  onLogout
}: ExplorePageProps) {
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedCuisine, setSelectedCuisine] = useState('All Cuisines');
  const [activeTab, setActiveTab] = useState('explore');

  const filteredDishes = mockDishes.filter((dish) => {
    const locationMatch = selectedLocation === 'All Locations' || dish.location === selectedLocation;
    const cuisineMatch = selectedCuisine === 'All Cuisines' || dish.cuisine === selectedCuisine;
    return locationMatch && cuisineMatch;
  });

  const favoriteDishes = mockDishes.filter((dish) => favorites.has(dish.id));

  const cartItemsCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const toggleFavorite = (dishId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    onToggleFavorite(dishId);
  };

  const renderDishCard = (dish: Dish) => (
    <Card
      key={dish.id}
      className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
      onClick={() => onDishClick(dish.id)}
    >
      <div className="relative aspect-video overflow-hidden">
        <ImageWithFallback
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <Button
            size="icon"
            variant="secondary"
            className={`rounded-full w-8 h-8 ${favorites.has(dish.id) ? 'bg-red-500 hover:bg-red-600' : 'bg-white/90 hover:bg-white'}`}
            onClick={(e) => toggleFavorite(dish.id, e)}
          >
            <Heart
              className={`w-4 h-4 ${favorites.has(dish.id) ? 'fill-white text-white' : 'text-gray-700'}`}
            />
          </Button>
        </div>
        <Badge className="absolute bottom-2 left-2 bg-white/90 text-gray-900 hover:bg-white">
          {dish.cuisine}
        </Badge>
      </div>
      <div className="p-4 space-y-3">
        <div className="space-y-1">
          <h3 className="line-clamp-1">{dish.name}</h3>
          <p className="text-gray-600 line-clamp-2">{dish.description}</p>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ChefHat className="w-4 h-4 text-gray-500" />
            <span className="text-gray-700">{dish.chefName}</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            <span>{dish.rating}</span>
            <span className="text-gray-500">({dish.reviews})</span>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 border-t">
          <div className="flex items-center gap-1 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{dish.location}</span>
          </div>
          <span className="text-orange-600">${dish.price}</span>
        </div>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-orange-500 p-2 rounded-lg">
                <ChefHat className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-orange-600">HomeBites</h1>
                <p className="text-gray-600">Welcome, {foodieProfile?.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="relative" onClick={onGoToCart}>
                <ShoppingCart className="w-5 h-5" />
                {cartItemsCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 w-5 h-5 rounded-full p-0 flex items-center justify-center bg-orange-500">
                    {cartItemsCount}
                  </Badge>
                )}
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <User className="w-5 h-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <DropdownMenuItem onClick={onGoToProfile}>
                    <User className="w-4 h-4 mr-2" />
                    User Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => alert('Settings coming soon!')}>
                    <User className="w-4 h-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={onLogout} className="text-red-600">
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
            <TabsTrigger value="explore">Explore</TabsTrigger>
            <TabsTrigger value="favorites">
              My Favorites {favorites.size > 0 && `(${favorites.size})`}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="explore" className="space-y-6">
            {/* Filters */}
            <Card className="p-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-gray-700">Location</label>
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {locationOptions.map((location) => (
                        <SelectItem key={location} value={location}>
                          {location}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-gray-700">Cuisine</label>
                  <Select value={selectedCuisine} onValueChange={setSelectedCuisine}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {cuisineOptions.map((cuisine) => (
                        <SelectItem key={cuisine} value={cuisine}>
                          {cuisine}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </Card>

            {/* Dishes Grid */}
            <div>
              <div className="mb-4">
                <h2 className="text-gray-900">
                  Available Dishes
                </h2>
                <p className="text-gray-600">
                  {filteredDishes.length} dish{filteredDishes.length !== 1 ? 'es' : ''} found
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDishes.map(renderDishCard)}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="favorites" className="space-y-6">
            <div>
              <div className="mb-4">
                <h2 className="text-gray-900">
                  My Favorites
                </h2>
                <p className="text-gray-600">
                  {favoriteDishes.length} favorite dish{favoriteDishes.length !== 1 ? 'es' : ''}
                </p>
              </div>
              {favoriteDishes.length === 0 ? (
                <Card className="p-12 text-center">
                  <Heart className="w-12 h-12 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-gray-900 mb-2">
                    No favorites yet
                  </h3>
                  <p className="text-gray-600">
                    Start adding dishes to your favorites to see them here
                  </p>
                </Card>
              ) : (
                <div className="space-y-4">
                  {favoriteDishes.map((dish) => (
                    <Card
                      key={dish.id}
                      className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => onDishClick(dish.id)}
                    >
                      <div className="flex gap-4 p-4">
                        <div className="relative w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                          <ImageWithFallback
                            src={dish.image}
                            alt={dish.name}
                            className="w-full h-full object-cover"
                          />
                          <Badge className="absolute bottom-2 left-2 bg-white/90 text-gray-900 hover:bg-white text-xs">
                            {dish.cuisine}
                          </Badge>
                        </div>
                        <div className="flex-1 min-w-0 space-y-2">
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <h3 className="line-clamp-1">{dish.name}</h3>
                              <p className="text-gray-600 line-clamp-2">{dish.description}</p>
                            </div>
                            <Button
                              size="icon"
                              variant="ghost"
                              className="text-red-500 hover:text-red-600 hover:bg-red-50 flex-shrink-0"
                              onClick={(e) => toggleFavorite(dish.id, e)}
                            >
                              <Heart className="w-5 h-5 fill-red-500" />
                            </Button>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <ChefHat className="w-4 h-4 text-gray-500" />
                              <span className="text-gray-700">{dish.chefName}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                              <span>{dish.rating}</span>
                              <span className="text-gray-500">({dish.reviews})</span>
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-2 border-t">
                            <div className="flex items-center gap-1 text-gray-600">
                              <MapPin className="w-4 h-4" />
                              <span>{dish.location}</span>
                            </div>
                            <span className="text-orange-600">${dish.price}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
