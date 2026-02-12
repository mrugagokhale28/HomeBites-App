import { Card } from './ui/card';
import { Button } from './ui/button';
import { UtensilsCrossed, ChefHat } from 'lucide-react';
import { UserType } from '../App';

interface UserTypeSelectionProps {
  onSelect: (type: UserType) => void;
}

export function UserTypeSelection({ onSelect }: UserTypeSelectionProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center space-y-2">
          <h1 className="text-orange-600">
            Join HomeBites
          </h1>
          <p className="text-gray-600">
            Choose how you'd like to get started
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Foodie Card */}
          <Card className="p-8 space-y-6 hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-orange-300">
            <div className="flex justify-center">
              <div className="bg-orange-100 p-6 rounded-full">
                <UtensilsCrossed className="w-12 h-12 text-orange-600" />
              </div>
            </div>
            <div className="text-center space-y-3">
              <h2 className="text-orange-600">
                Join as a Foodie
              </h2>
              <p className="text-gray-600">
                Explore homemade meals from local chefs. Order delicious food made with care and delivered to your door.
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span>
                  Browse local homemade dishes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span>
                  Save your favorite meals
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-orange-500">✓</span>
                  Easy ordering and delivery
                </li>
              </ul>
            </div>
            <Button 
              onClick={() => onSelect('foodie')}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              size="lg"
            >
              Continue as Foodie
            </Button>
          </Card>

          {/* Chef Card */}
          <Card className="p-8 space-y-6 hover:shadow-lg transition-shadow cursor-pointer border-2 hover:border-amber-300">
            <div className="flex justify-center">
              <div className="bg-amber-100 p-6 rounded-full">
                <ChefHat className="w-12 h-12 text-amber-600" />
              </div>
            </div>
            <div className="text-center space-y-3">
              <h2 className="text-amber-600">
                Join as a Chef
              </h2>
              <p className="text-gray-600">
                Share your culinary passion with your community. Cook what you love and earn from your kitchen.
              </p>
              <ul className="text-left space-y-2 text-gray-600">
                <li className="flex items-center gap-2">
                  <span className="text-amber-500">✓</span>
                  List your homemade dishes
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-500">✓</span>
                  Set your own prices
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-amber-500">✓</span>
                  Build your customer base
                </li>
              </ul>
            </div>
            <Button 
              onClick={() => onSelect('chef')}
              className="w-full bg-amber-500 hover:bg-amber-600 text-white"
              size="lg"
            >
              Continue as Chef
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
}
