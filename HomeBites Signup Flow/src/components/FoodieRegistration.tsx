import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card } from './ui/card';
import { FoodieProfile } from '../App';

interface FoodieRegistrationProps {
  onComplete: (profile: FoodieProfile) => void;
}

export function FoodieRegistration({ onComplete }: FoodieRegistrationProps) {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && location) {
      onComplete({ name, location });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-br from-orange-50 to-amber-50">
      <Card className="max-w-md w-full p-8 space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-orange-600">
            Complete Your Profile
          </h1>
          <p className="text-gray-600">
            Tell us a bit about yourself to get started
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="location">Location</Label>
            <Input
              id="location"
              type="text"
              placeholder="Enter your city or area"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white"
            size="lg"
          >
            Continue
          </Button>
        </form>
      </Card>
    </div>
  );
}
