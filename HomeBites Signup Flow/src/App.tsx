import { useState } from 'react';
import { SignupWelcome } from './components/SignupWelcome';
import { UserTypeSelection } from './components/UserTypeSelection';
import { FoodieRegistration } from './components/FoodieRegistration';
import { ExplorePage } from './components/ExplorePage';
import { FoodDetailPage } from './components/FoodDetailPage';
import { CartPage } from './components/CartPage';
import { UserProfilePage } from './components/UserProfilePage';
import { ChefProfilePage } from './components/ChefProfilePage';
import { CartItem } from './components/mockData';
import { Toaster } from './components/ui/sonner';

export type UserType = 'foodie' | 'chef' | null;

export interface FoodieProfile {
  name: string;
  location: string;
}

type PageType = 'welcome' | 'userType' | 'registration' | 'explore' | 'detail' | 'cart' | 'profile' | 'chefProfile';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageType>('welcome');
  const [userType, setUserType] = useState<UserType>(null);
  const [foodieProfile, setFoodieProfile] = useState<FoodieProfile | null>(null);
  const [selectedDishId, setSelectedDishId] = useState<string | null>(null);
  const [selectedChefId, setSelectedChefId] = useState<string | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const handleSignup = () => {
    setCurrentPage('userType');
  };

  const handleUserTypeSelect = (type: UserType) => {
    setUserType(type);
    if (type === 'foodie') {
      setCurrentPage('registration');
    } else {
      alert('Chef registration coming soon!');
    }
  };

  const handleFoodieRegistration = (profile: FoodieProfile) => {
    setFoodieProfile(profile);
    setCurrentPage('explore');
  };

  const handleDishClick = (dishId: string) => {
    setSelectedDishId(dishId);
    setCurrentPage('detail');
  };

  const handleChefClick = (chefId: string) => {
    setSelectedChefId(chefId);
    setCurrentPage('chefProfile');
  };

  const handleBackToExplore = () => {
    setCurrentPage('explore');
  };

  const handleGoToCart = () => {
    setCurrentPage('cart');
  };

  const handleGoToProfile = () => {
    setCurrentPage('profile');
  };

  const handleLogout = () => {
    setCurrentPage('welcome');
    setUserType(null);
    setFoodieProfile(null);
    setCart([]);
    setFavorites(new Set());
  };

  const handleAddToCart = (dishId: string, quantity: number) => {
    const dish = cart.find(item => item.dish.id === dishId);
    if (dish) {
      setCart(cart.map(item => 
        item.dish.id === dishId 
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
    } else {
      const mockDishes = require('./components/mockData').mockDishes;
      const dishData = mockDishes.find((d: any) => d.id === dishId);
      if (dishData) {
        setCart([...cart, { dish: dishData, quantity }]);
      }
    }
  };

  const handleUpdateCartItem = (dishId: string, quantity: number) => {
    if (quantity === 0) {
      setCart(cart.filter(item => item.dish.id !== dishId));
    } else {
      setCart(cart.map(item => 
        item.dish.id === dishId 
          ? { ...item, quantity }
          : item
      ));
    }
  };

  const handleToggleFavorite = (dishId: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(dishId)) {
      newFavorites.delete(dishId);
    } else {
      newFavorites.add(dishId);
    }
    setFavorites(newFavorites);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {currentPage === 'welcome' && <SignupWelcome onSignup={handleSignup} />}
        {currentPage === 'userType' && <UserTypeSelection onSelect={handleUserTypeSelect} />}
        {currentPage === 'registration' && <FoodieRegistration onComplete={handleFoodieRegistration} />}
        {currentPage === 'explore' && (
          <ExplorePage 
            foodieProfile={foodieProfile}
            cart={cart}
            favorites={favorites}
            onDishClick={handleDishClick}
            onGoToCart={handleGoToCart}
            onGoToProfile={handleGoToProfile}
            onToggleFavorite={handleToggleFavorite}
            onLogout={handleLogout}
          />
        )}
        {currentPage === 'detail' && (
          <FoodDetailPage 
            dishId={selectedDishId}
            favorites={favorites}
            onBack={handleBackToExplore}
            onAddToCart={handleAddToCart}
            onToggleFavorite={handleToggleFavorite}
            onChefClick={handleChefClick}
            onGoToCart={handleGoToCart}
          />
        )}
        {currentPage === 'cart' && (
          <CartPage
            cart={cart}
            onBack={handleBackToExplore}
            onUpdateCartItem={handleUpdateCartItem}
          />
        )}
        {currentPage === 'profile' && (
          <UserProfilePage
            foodieProfile={foodieProfile}
            onBack={handleBackToExplore}
            onLogout={handleLogout}
          />
        )}
        {currentPage === 'chefProfile' && (
          <ChefProfilePage
            chefId={selectedChefId}
            onBack={handleBackToExplore}
            onDishClick={handleDishClick}
          />
        )}
      </div>
      <Toaster />
    </>
  );
}
