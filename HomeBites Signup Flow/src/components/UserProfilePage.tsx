import { Button } from './ui/button';
import { Card } from './ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { FoodieProfile } from '../App';
import { mockOrders } from './mockData';
import { ArrowLeft, User, CreditCard, Star, ChefHat } from 'lucide-react';

interface UserProfilePageProps {
  foodieProfile: FoodieProfile | null;
  onBack: () => void;
  onLogout: () => void;
}

export function UserProfilePage({ foodieProfile, onBack, onLogout }: UserProfilePageProps) {
  // Mock user rewards - 125 stars equals 12.5 completed orders (10 stars per order)
  const totalPoints = 125;
  const maxPoints = 150;
  const progress = (totalPoints / maxPoints) * 100;

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
              <h1 className="text-orange-600">My Profile</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 py-6">
        {/* Profile Header */}
        <Card className="p-6 mb-6">
          <div className="flex items-center gap-6">
            <div className="bg-orange-100 p-6 rounded-full">
              <User className="w-12 h-12 text-orange-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-gray-900 mb-1">{foodieProfile?.name}</h2>
              <p className="text-gray-600">{foodieProfile?.location}</p>
            </div>
          </div>
        </Card>

        <Tabs defaultValue="orders" className="space-y-6">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3">
            <TabsTrigger value="orders">Orders</TabsTrigger>
            <TabsTrigger value="payment">Payment</TabsTrigger>
            <TabsTrigger value="rewards">Rewards</TabsTrigger>
          </TabsList>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-4">
            <h2 className="text-gray-900">Order History</h2>
            {mockOrders.map((order) => (
              <Card key={order.id} className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-gray-900">Order #{order.id}</h3>
                      <Badge 
                        className={
                          order.status === 'delivered' 
                            ? 'bg-green-100 text-green-700 hover:bg-green-200'
                            : order.status === 'in-progress'
                            ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }
                      >
                        {order.status === 'delivered' ? 'Delivered' : order.status === 'in-progress' ? 'In Progress' : 'Cancelled'}
                      </Badge>
                    </div>
                    <p className="text-gray-600">{new Date(order.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                  </div>
                  <span className="text-orange-600">${order.total.toFixed(2)}</span>
                </div>
                <div className="space-y-3">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                        <ImageWithFallback
                          src={item.dish.image}
                          alt={item.dish.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="line-clamp-1">{item.dish.name}</h4>
                        <p className="text-gray-600">by {item.dish.chefName}</p>
                        <p className="text-gray-600">Quantity: {item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </TabsContent>

          {/* Payment Tab */}
          <TabsContent value="payment" className="space-y-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-gray-900">Payment Methods</h2>
              <Button variant="outline" size="sm">
                Add New Card
              </Button>
            </div>
            
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-lg">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-gray-900">Visa</h3>
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-200">
                      Default
                    </Badge>
                  </div>
                  <p className="text-gray-600">•••• •••• •••• 4532</p>
                  <p className="text-gray-500 mt-1">Expires 12/26</p>
                </div>
                <Button variant="ghost" size="sm">
                  Edit
                </Button>
              </div>
            </Card>

            <Card className="p-6 bg-blue-50 border-blue-200">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                  <CreditCard className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-blue-900 mb-1">Secure Payments</h4>
                  <p className="text-blue-800">
                    All payment information is encrypted and securely stored. We never share your financial details.
                  </p>
                </div>
              </div>
            </Card>
          </TabsContent>

          {/* Rewards Tab */}
          <TabsContent value="rewards" className="space-y-4">
            <Card className="p-8 bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
              <div className="text-center space-y-6">
                <div className="bg-orange-500 p-4 rounded-full w-20 h-20 mx-auto flex items-center justify-center">
                  <Star className="w-10 h-10 text-white fill-white" />
                </div>
                <div>
                  <h2 className="text-orange-600 mb-2">
                    {totalPoints} Points
                  </h2>
                  <p className="text-gray-600">
                    {maxPoints - totalPoints} more points to your next reward!
                  </p>
                </div>

                {/* Progress Number Line */}
                <div className="max-w-2xl mx-auto">
                  <div className="relative pt-8 pb-4">
                    {/* Progress Bar */}
                    <div className="relative w-full bg-gray-200 rounded-full h-3">
                      <div 
                        className="absolute top-0 left-0 bg-gradient-to-r from-orange-500 to-amber-500 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${progress}%` }}
                      >
                        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2">
                          <div className="bg-orange-500 w-6 h-6 rounded-full border-4 border-white shadow-lg"></div>
                        </div>
                      </div>
                    </div>

                    {/* Number markers */}
                    <div className="absolute -top-1 left-0 right-0 flex justify-between px-1">
                      {[0, 50, 100, 150].map((point) => (
                        <div key={point} className="flex flex-col items-center">
                          <div className={`w-3 h-3 rounded-full ${point <= totalPoints ? 'bg-orange-500' : 'bg-gray-300'} mb-2`}></div>
                          <span className="text-gray-600">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-3 gap-4">
              <Card className="p-6 text-center">
                <div className="bg-orange-100 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-orange-600" />
                </div>
                <p className="text-gray-900 mb-1">10 pts</p>
                <p className="text-gray-600">Per order</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="bg-amber-100 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Star className="w-6 h-6 text-amber-600 fill-amber-600" />
                </div>
                <p className="text-gray-900 mb-1">150 pts</p>
                <p className="text-gray-600">Free dish</p>
              </Card>
              <Card className="p-6 text-center">
                <div className="bg-green-100 p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                  <Star className="w-6 h-6 text-green-600 fill-green-600" />
                </div>
                <p className="text-gray-900 mb-1">{Math.floor(totalPoints / 10)}</p>
                <p className="text-gray-600">Orders completed</p>
              </Card>
            </div>

            <Card className="p-6">
              <h3 className="text-gray-900 mb-4">How Rewards Work</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0 mt-1">
                    <span className="text-orange-600">1</span>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Earn Points</h4>
                    <p className="text-gray-600">Get 10 points for every completed order</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0 mt-1">
                    <span className="text-orange-600">2</span>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Reach Milestone</h4>
                    <p className="text-gray-600">Collect 150 points to unlock a free dish worth up to $15</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 p-2 rounded-lg flex-shrink-0 mt-1">
                    <span className="text-orange-600">3</span>
                  </div>
                  <div>
                    <h4 className="text-gray-900 mb-1">Redeem Rewards</h4>
                    <p className="text-gray-600">Use your rewards on any dish from our amazing chefs</p>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
