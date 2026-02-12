import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { mockChefs, mockDishes } from './mockData';
import { ArrowLeft, Star, MapPin, ChefHat, BadgeCheck, Award } from 'lucide-react';

interface ChefProfilePageProps {
  chefId: string | null;
  onBack: () => void;
  onDishClick: (dishId: string) => void;
}

export function ChefProfilePage({ chefId, onBack, onDishClick }: ChefProfilePageProps) {
  const chef = mockChefs.find((c) => c.id === chefId);
  const chefDishes = mockDishes.filter((d) => d.chefId === chefId);

  if (!chef) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="p-8 text-center">
          <p className="text-gray-600">Chef not found</p>
          <Button onClick={onBack} className="mt-4">
            Go Back
          </Button>
        </Card>
      </div>
    );
  }

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
              <h1 className="text-orange-600">Chef Profile</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        {/* Chef Header */}
        <Card className="p-8">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="bg-amber-100 p-8 rounded-full flex-shrink-0">
              <ChefHat className="w-16 h-16 text-amber-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-gray-900">{chef.name}</h1>
                {chef.verified && (
                  <Badge className="bg-blue-500 hover:bg-blue-600 text-white flex items-center gap-1">
                    <BadgeCheck className="w-4 h-4" />
                    Verified Chef
                  </Badge>
                )}
              </div>
              <div className="flex items-center gap-4 mb-4 flex-wrap">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                  <span className="text-gray-900">{chef.rating}</span>
                  <span className="text-gray-600">({chef.totalReviews} reviews)</span>
                </div>
                <div className="flex items-center gap-1 text-gray-600">
                  <MapPin className="w-5 h-5" />
                  <span>{chef.location}</span>
                </div>
              </div>
              <p className="text-gray-700 mb-4">{chef.bio}</p>
              <div className="flex flex-wrap gap-2">
                {chef.specialties.map((specialty, index) => (
                  <Badge key={index} variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-200">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid sm:grid-cols-3 gap-4">
          <Card className="p-6 text-center">
            <div className="bg-orange-100 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <ChefHat className="w-6 h-6 text-orange-600" />
            </div>
            <p className="text-gray-900 mb-1">{chef.totalDishes}</p>
            <p className="text-gray-600">Active Dishes</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="bg-amber-100 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <Star className="w-6 h-6 text-amber-600 fill-amber-600" />
            </div>
            <p className="text-gray-900 mb-1">{chef.rating}</p>
            <p className="text-gray-600">Average Rating</p>
          </Card>
          <Card className="p-6 text-center">
            <div className="bg-blue-100 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
              <Award className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-gray-900 mb-1">{chef.totalReviews}</p>
            <p className="text-gray-600">Total Reviews</p>
          </Card>
        </div>

        {/* Chef's Dishes */}
        <div className="space-y-4">
          <h2 className="text-gray-900">Dishes by {chef.name}</h2>
          {chefDishes.length === 0 ? (
            <Card className="p-8 text-center">
              <p className="text-gray-600">No dishes available at the moment</p>
            </Card>
          ) : (
            <div className="grid sm:grid-cols-2 gap-4">
              {chefDishes.map((dish) => (
                <Card
                  key={dish.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => onDishClick(dish.id)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <ImageWithFallback
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute bottom-2 left-2 bg-white/90 text-gray-900 hover:bg-white">
                      {dish.cuisine}
                    </Badge>
                  </div>
                  <div className="p-4 space-y-3">
                    <div className="space-y-1">
                      <h3 className="line-clamp-1">{dish.name}</h3>
                      <p className="text-gray-600 line-clamp-2">{dish.description}</p>
                    </div>
                    <div className="flex items-center justify-between pt-2 border-t">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span>{dish.rating}</span>
                        <span className="text-gray-500">({dish.reviews})</span>
                      </div>
                      <span className="text-orange-600">${dish.price}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Customer Reviews Preview */}
        <Card className="p-6">
          <h3 className="text-gray-900 mb-4">Customer Reviews</h3>
          <div className="space-y-4">
            {[
              { name: 'Sarah Johnson', rating: 5, comment: 'Absolutely amazing! Best homemade food I\'ve ever ordered. Will definitely order again!', date: '2 days ago' },
              { name: 'Mike Chen', rating: 5, comment: 'The food was delicious and authentic. You can really taste the quality ingredients.', date: '1 week ago' },
              { name: 'Emily Davis', rating: 4, comment: 'Great food and generous portions. Delivery was quick too!', date: '2 weeks ago' }
            ].map((review, index) => (
              <div key={index} className="pb-4 border-b last:border-b-0 last:pb-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-gray-900">{review.name}</p>
                    <div className="flex items-center gap-1 mt-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <span className="text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700">{review.comment}</p>
              </div>
            ))}
          </div>
        </Card>
      </main>
    </div>
  );
}
