import { Button } from './ui/button';
import { ChefHat } from 'lucide-react';

interface SignupWelcomeProps {
  onSignup: () => void;
}

export function SignupWelcome({ onSignup }: SignupWelcomeProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="text-center space-y-6 max-w-md">
        <div className="flex justify-center">
          <div className="bg-orange-500 p-6 rounded-full">
            <ChefHat className="w-16 h-16 text-white" />
          </div>
        </div>
        <h1 className="text-orange-600">
          Welcome to HomeBites
        </h1>
        <p className="text-gray-600">
          Discover authentic homemade meals from talented chefs in your neighborhood. 
          Fresh, delicious, and made with love.
        </p>
        <Button 
          onClick={onSignup}
          className="w-full bg-orange-500 hover:bg-orange-600 text-white"
          size="lg"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}
