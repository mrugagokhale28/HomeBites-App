export interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  chefName: string;
  chefId: string;
  rating: number;
  location: string;
  cuisine: string;
  reviews: number;
  servings: number;
  prepTime: string;
  ingredients: string[];
}

export interface Chef {
  id: string;
  name: string;
  rating: number;
  totalReviews: number;
  totalDishes: number;
  verified: boolean;
  location: string;
  bio: string;
  specialties: string[];
}

export interface CartItem {
  dish: Dish;
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  total: number;
  status: 'delivered' | 'in-progress' | 'cancelled';
}

export const mockDishes: Dish[] = [
  {
    id: '1',
    name: 'Homemade Pasta Carbonara',
    description: 'Authentic Italian pasta with creamy egg sauce, crispy pancetta, and fresh parmesan cheese.',
    price: 18,
    image: 'https://images.unsplash.com/photo-1723588636244-e82f63cb01e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMHBhc3RhJTIwZGlzaHxlbnwxfHx8fDE3NjI1NDQ0Nzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Maria Romano',
    chefId: 'chef1',
    rating: 4.8,
    location: 'Champaign',
    cuisine: 'Italian',
    reviews: 42,
    servings: 2,
    prepTime: '30 mins',
    ingredients: ['Fresh pasta', 'Eggs', 'Pancetta', 'Parmesan', 'Black pepper']
  },
  {
    id: '2',
    name: 'Artisan Pizza Margherita',
    description: 'Classic wood-fired pizza with fresh mozzarella, basil, and homemade tomato sauce.',
    price: 22,
    image: 'https://images.unsplash.com/photo-1734774421809-48eac182a5cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMHBpenphfGVufDF8fHx8MTc2MjQ1MzYxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Tony Deluca',
    chefId: 'chef2',
    rating: 4.9,
    location: 'Urbana',
    cuisine: 'Italian',
    reviews: 67,
    servings: 1,
    prepTime: '25 mins',
    ingredients: ['Pizza dough', 'Mozzarella', 'Fresh basil', 'Tomato sauce', 'Olive oil']
  },
  {
    id: '3',
    name: 'Authentic Tacos Al Pastor',
    description: 'Marinated pork tacos with pineapple, onions, cilantro, and homemade salsa.',
    price: 15,
    image: 'https://images.unsplash.com/photo-1617154984805-07ca8f4e8150?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMHRhY29zfGVufDF8fHx8MTc2MjU0NDQ4MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Carlos Garcia',
    chefId: 'chef3',
    rating: 4.7,
    location: 'Austin',
    cuisine: 'Mexican',
    reviews: 38,
    servings: 3,
    prepTime: '20 mins',
    ingredients: ['Corn tortillas', 'Pork', 'Pineapple', 'Cilantro', 'Onions', 'Salsa']
  },
  {
    id: '4',
    name: 'Butter Chicken Curry',
    description: 'Rich and creamy Indian curry with tender chicken in a tomato-based sauce, served with rice.',
    price: 19,
    image: 'https://images.unsplash.com/photo-1729824159986-376b49c6b7e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMGN1cnJ5JTIwcmljZXxlbnwxfHx8fDE3NjI1NDQ0ODF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Priya Sharma',
    chefId: 'chef4',
    rating: 4.9,
    location: 'Bloomington',
    cuisine: 'Indian',
    reviews: 56,
    servings: 2,
    prepTime: '45 mins',
    ingredients: ['Chicken', 'Tomatoes', 'Cream', 'Butter', 'Garam masala', 'Basmati rice']
  },
  {
    id: '5',
    name: 'Fresh Sushi Platter',
    description: 'Assorted sushi rolls with fresh fish, avocado, cucumber, and premium sushi rice.',
    price: 28,
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMHN1c2hpfGVufDF8fHx8MTc2MjU0NDQ4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Kenji Tanaka',
    chefId: 'chef5',
    rating: 5.0,
    location: 'Ann Arbor',
    cuisine: 'Japanese',
    reviews: 89,
    servings: 2,
    prepTime: '40 mins',
    ingredients: ['Sushi rice', 'Fresh salmon', 'Tuna', 'Avocado', 'Nori', 'Wasabi']
  },
  {
    id: '6',
    name: 'Gourmet Beef Burger',
    description: 'Juicy beef patty with aged cheddar, caramelized onions, and special sauce on a brioche bun.',
    price: 16,
    image: 'https://images.unsplash.com/photo-1565016050896-d5f362810b48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMGJ1cmdlcnxlbnwxfHx8fDE3NjI0OTM2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Mike Johnson',
    chefId: 'chef6',
    rating: 4.6,
    location: 'West Lafayette',
    cuisine: 'American',
    reviews: 44,
    servings: 1,
    prepTime: '15 mins',
    ingredients: ['Ground beef', 'Brioche bun', 'Cheddar cheese', 'Lettuce', 'Tomato', 'Special sauce']
  },
  {
    id: '7',
    name: 'Mediterranean Salad Bowl',
    description: 'Fresh mixed greens with feta, olives, tomatoes, cucumbers, and lemon herb dressing.',
    price: 14,
    image: 'https://images.unsplash.com/photo-1671497408253-1c996a4a1fdd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMHNhbGFkJTIwYm93bHxlbnwxfHx8fDE3NjI1NDQ0ODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Elena Papadopoulos',
    chefId: 'chef7',
    rating: 4.7,
    location: 'Champaign',
    cuisine: 'Mediterranean',
    reviews: 31,
    servings: 1,
    prepTime: '10 mins',
    ingredients: ['Mixed greens', 'Feta cheese', 'Olives', 'Tomatoes', 'Cucumbers', 'Olive oil']
  },
  {
    id: '8',
    name: 'Chocolate Lava Cake',
    description: 'Decadent chocolate cake with a molten center, served with vanilla ice cream.',
    price: 12,
    image: 'https://images.unsplash.com/photo-1602683504046-cf7e90664396?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob21lbWFkZSUyMGRlc3NlcnQlMjBjYWtlfGVufDF8fHx8MTc2MjU0NDQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Sophie Martin',
    chefId: 'chef8',
    rating: 4.9,
    location: 'Austin',
    cuisine: 'French',
    reviews: 52,
    servings: 1,
    prepTime: '20 mins',
    ingredients: ['Dark chocolate', 'Butter', 'Eggs', 'Sugar', 'Flour', 'Vanilla ice cream']
  },
  {
    id: '9',
    name: 'Hyderabadi Chicken Biryani',
    description: 'Aromatic basmati rice layered with spiced chicken, saffron, and fried onions. Served with raita.',
    price: 22,
    image: 'https://images.unsplash.com/photo-1633945274309-2c16c9682a8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaXJ5YW5pJTIwcmljZXxlbnwxfHx8fDE3NjI1MDc1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Priya Sharma',
    chefId: 'chef4',
    rating: 4.9,
    location: 'Champaign',
    cuisine: 'Indian',
    reviews: 78,
    servings: 2,
    prepTime: '50 mins',
    ingredients: ['Basmati rice', 'Chicken', 'Yogurt', 'Saffron', 'Fried onions', 'Spices', 'Mint']
  },
  {
    id: '10',
    name: 'Chicken Tikka Masala',
    description: 'Tender chicken tikka pieces in a rich, creamy tomato-based curry sauce with aromatic spices.',
    price: 20,
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwdGlra2ElMjBtYXNhbGF8ZW58MXx8fHwxNzYyNTQ2ODg4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Amit Patel',
    chefId: 'chef9',
    rating: 4.8,
    location: 'Urbana',
    cuisine: 'Indian',
    reviews: 64,
    servings: 2,
    prepTime: '40 mins',
    ingredients: ['Chicken', 'Tomato', 'Cream', 'Garam masala', 'Kasuri methi', 'Ginger-garlic']
  },
  {
    id: '11',
    name: 'Palak Paneer',
    description: 'Fresh cottage cheese cubes in a smooth, creamy spinach curry with garlic and spices.',
    price: 17,
    image: 'https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWxhayUyMHBhbmVlciUyMHNwaW5hY2h8ZW58MXx8fHwxNzYyNDYyNTMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Priya Sharma',
    chefId: 'chef4',
    rating: 4.7,
    location: 'Bloomington',
    cuisine: 'Indian',
    reviews: 45,
    servings: 2,
    prepTime: '35 mins',
    ingredients: ['Paneer', 'Spinach', 'Cream', 'Garlic', 'Cumin', 'Garam masala']
  },
  {
    id: '12',
    name: 'Crispy Samosas (6 pcs)',
    description: 'Golden fried pastry pockets filled with spiced potatoes, peas, and herbs. Served with mint chutney.',
    price: 10,
    image: 'https://images.unsplash.com/photo-1591465619339-60fce055bc82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW1vc2ElMjBpbmRpYW58ZW58MXx8fHwxNzYyNTQ2ODg5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Amit Patel',
    chefId: 'chef9',
    rating: 4.6,
    location: 'Champaign',
    cuisine: 'Indian',
    reviews: 92,
    servings: 1,
    prepTime: '15 mins',
    ingredients: ['Potatoes', 'Peas', 'Pastry', 'Cumin', 'Coriander', 'Mint chutney']
  },
  {
    id: '13',
    name: 'Masala Dosa',
    description: 'Crispy rice crepe filled with spiced potato masala, served with sambar and coconut chutney.',
    price: 14,
    image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXNhbGElMjBkb3NhfGVufDF8fHx8MTc2MjU0Njg5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Lakshmi Reddy',
    chefId: 'chef10',
    rating: 4.9,
    location: 'West Lafayette',
    cuisine: 'Indian',
    reviews: 71,
    servings: 1,
    prepTime: '25 mins',
    ingredients: ['Rice batter', 'Urad dal', 'Potatoes', 'Onions', 'Curry leaves', 'Coconut chutney']
  },
  {
    id: '14',
    name: 'Chole Bhature',
    description: 'Spicy chickpea curry paired with fluffy deep-fried bread. A North Indian favorite!',
    price: 16,
    image: 'https://images.unsplash.com/photo-1696574727184-a8cdb758d3bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9sZSUyMGJoYXR1cmV8ZW58MXx8fHwxNzYyNDQ2NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Priya Sharma',
    chefId: 'chef4',
    rating: 4.8,
    location: 'Urbana',
    cuisine: 'Indian',
    reviews: 58,
    servings: 2,
    prepTime: '45 mins',
    ingredients: ['Chickpeas', 'Flour', 'Tomatoes', 'Onions', 'Spices', 'Yogurt']
  },
  {
    id: '15',
    name: 'Garlic Naan (4 pcs)',
    description: 'Soft, pillowy Indian flatbread brushed with garlic butter and fresh cilantro.',
    price: 8,
    image: 'https://images.unsplash.com/photo-1697155406014-04dc649b0953?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYWFuJTIwYnJlYWR8ZW58MXx8fHwxNzYyNDUyNjIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Amit Patel',
    chefId: 'chef9',
    rating: 4.7,
    location: 'Ann Arbor',
    cuisine: 'Indian',
    reviews: 85,
    servings: 2,
    prepTime: '20 mins',
    ingredients: ['Flour', 'Yogurt', 'Garlic', 'Butter', 'Cilantro', 'Yeast']
  },
  {
    id: '16',
    name: 'Tandoori Chicken (Half)',
    description: 'Succulent chicken marinated in yogurt and spices, cooked in a traditional tandoor oven.',
    price: 21,
    image: 'https://images.unsplash.com/photo-1727280376746-b89107a5b0df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YW5kb29yaSUyMGNoaWNrZW58ZW58MXx8fHwxNzYyNDMwNjA2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Amit Patel',
    chefId: 'chef9',
    rating: 4.9,
    location: 'Champaign',
    cuisine: 'Indian',
    reviews: 102,
    servings: 2,
    prepTime: '55 mins',
    ingredients: ['Chicken', 'Yogurt', 'Tandoori masala', 'Ginger-garlic', 'Lemon', 'Kashmiri chili']
  },
  {
    id: '17',
    name: 'Dal Makhani',
    description: 'Slow-cooked black lentils and kidney beans in a buttery, creamy tomato gravy.',
    price: 15,
    image: 'https://images.unsplash.com/photo-1586981114766-708f09a71e20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYWwlMjBsZW50aWwlMjBjdXJyeXxlbnwxfHx8fDE3NjI1NDY4OTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Priya Sharma',
    chefId: 'chef4',
    rating: 4.8,
    location: 'Bloomington',
    cuisine: 'Indian',
    reviews: 67,
    servings: 2,
    prepTime: '60 mins',
    ingredients: ['Black lentils', 'Kidney beans', 'Butter', 'Cream', 'Tomatoes', 'Spices']
  },
  {
    id: '18',
    name: 'Lamb Rogan Josh',
    description: 'Tender lamb curry with aromatic Kashmiri spices in a rich, flavorful red gravy.',
    price: 24,
    image: 'https://images.unsplash.com/photo-1728542575492-47e02eb3305c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb2dhbiUyMGpvc2glMjBjdXJyeXxlbnwxfHx8fDE3NjI1NDY4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Amit Patel',
    chefId: 'chef9',
    rating: 4.9,
    location: 'Austin',
    cuisine: 'Indian',
    reviews: 48,
    servings: 2,
    prepTime: '70 mins',
    ingredients: ['Lamb', 'Yogurt', 'Kashmiri chili', 'Fennel', 'Ginger', 'Cardamom']
  },
  {
    id: '19',
    name: 'Paneer Tikka',
    description: 'Marinated cottage cheese cubes grilled with bell peppers and onions. Served with mint chutney.',
    price: 18,
    image: 'https://images.unsplash.com/photo-1666001120694-3ebe8fd207be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW5lZXIlMjB0aWtrYXxlbnwxfHx8fDE3NjI1NDY4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Lakshmi Reddy',
    chefId: 'chef10',
    rating: 4.7,
    location: 'West Lafayette',
    cuisine: 'Indian',
    reviews: 55,
    servings: 2,
    prepTime: '35 mins',
    ingredients: ['Paneer', 'Bell peppers', 'Onions', 'Yogurt', 'Tandoori spices', 'Mint chutney']
  },
  {
    id: '20',
    name: 'Aloo Gobi',
    description: 'Classic dry curry of potatoes and cauliflower cooked with turmeric and aromatic spices.',
    price: 13,
    image: 'https://images.unsplash.com/photo-1652545296893-ff9227b3512e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbG9vJTIwZ29iaXxlbnwxfHx8fDE3NjI1NDY4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Priya Sharma',
    chefId: 'chef4',
    rating: 4.6,
    location: 'Champaign',
    cuisine: 'Indian',
    reviews: 41,
    servings: 2,
    prepTime: '30 mins',
    ingredients: ['Potatoes', 'Cauliflower', 'Turmeric', 'Cumin', 'Coriander', 'Ginger']
  },
  {
    id: '21',
    name: 'Gulab Jamun (6 pcs)',
    description: 'Soft, warm milk-based dumplings soaked in fragrant rose-cardamom syrup. A sweet delight!',
    price: 9,
    image: 'https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxndWxhYiUyMGphbXVuJTIwZGVzc2VydHxlbnwxfHx8fDE3NjI1NDY4OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Lakshmi Reddy',
    chefId: 'chef10',
    rating: 4.8,
    location: 'Urbana',
    cuisine: 'Indian',
    reviews: 76,
    servings: 1,
    prepTime: '25 mins',
    ingredients: ['Milk powder', 'Flour', 'Sugar', 'Rose water', 'Cardamom', 'Ghee']
  },
  {
    id: '22',
    name: 'Vegetable Korma',
    description: 'Mixed vegetables in a mildly spiced, creamy cashew and coconut sauce.',
    price: 16,
    image: 'https://images.unsplash.com/photo-1728542575492-47e02eb3305c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JtYSUyMGN1cnJ5fGVufDF8fHx8MTc2MjU0Njg5NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Priya Sharma',
    chefId: 'chef4',
    rating: 4.7,
    location: 'Ann Arbor',
    cuisine: 'Indian',
    reviews: 52,
    servings: 2,
    prepTime: '40 mins',
    ingredients: ['Mixed vegetables', 'Cashews', 'Coconut', 'Cream', 'Spices', 'Cilantro']
  },
  {
    id: '23',
    name: 'Goan Fish Curry',
    description: 'Fresh fish cooked in a tangy coconut-based curry with kokum and aromatic spices.',
    price: 23,
    image: 'https://images.unsplash.com/photo-1708782340377-882559d544fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aW5kYWxvbyUyMHNwaWN5JTIwY3Vycnl8ZW58MXx8fHwxNzYyNTQ2ODk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Amit Patel',
    chefId: 'chef9',
    rating: 4.8,
    location: 'Bloomington',
    cuisine: 'Indian',
    reviews: 39,
    servings: 2,
    prepTime: '35 mins',
    ingredients: ['Fish', 'Coconut', 'Kokum', 'Tamarind', 'Red chili', 'Curry leaves']
  },
  {
    id: '24',
    name: 'Plain Dosa with Chutney',
    description: 'Light and crispy rice crepe served with coconut chutney and tomato sambar.',
    price: 11,
    image: 'https://images.unsplash.com/photo-1694849789325-914b71ab4075?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb3NhJTIwY3Jpc3B5fGVufDF8fHx8MTc2MjU0Njg4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Lakshmi Reddy',
    chefId: 'chef10',
    rating: 4.6,
    location: 'West Lafayette',
    cuisine: 'Indian',
    reviews: 63,
    servings: 1,
    prepTime: '20 mins',
    ingredients: ['Rice batter', 'Urad dal', 'Coconut chutney', 'Sambar', 'Curry leaves']
  },
  {
    id: '25',
    name: 'Idli Sambar Combo',
    description: 'Soft, steamed rice cakes served with flavorful lentil soup and coconut chutney.',
    price: 12,
    image: 'https://images.unsplash.com/photo-1657196118354-f25f29fe636d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpZGxpJTIwc291dGglMjBpbmRpYW58ZW58MXx8fHwxNzYyNTA5OTgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Lakshmi Reddy',
    chefId: 'chef10',
    rating: 4.8,
    location: 'Ann Arbor',
    cuisine: 'Indian',
    reviews: 57,
    servings: 1,
    prepTime: '25 mins',
    ingredients: ['Rice', 'Urad dal', 'Toor dal', 'Vegetables', 'Tamarind', 'Coconut chutney']
  },
  {
    id: '26',
    name: 'Medu Vada (4 pcs)',
    description: 'Crispy fried lentil donuts with a soft interior, served with sambar and chutney.',
    price: 10,
    image: 'https://images.unsplash.com/photo-1683533678033-f5d60f0a3437?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YWRhJTIwaW5kaWFuJTIwc25hY2t8ZW58MXx8fHwxNzYyNTQ2OTAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    chefName: 'Lakshmi Reddy',
    chefId: 'chef10',
    rating: 4.7,
    location: 'Champaign',
    cuisine: 'Indian',
    reviews: 44,
    servings: 1,
    prepTime: '30 mins',
    ingredients: ['Urad dal', 'Curry leaves', 'Ginger', 'Green chili', 'Sambar', 'Chutney']
  }
];

export const cuisineOptions = [
  'All Cuisines',
  'Italian',
  'Mexican',
  'Indian',
  'Japanese',
  'American',
  'Mediterranean',
  'French',
  'Chinese',
  'Thai'
];

export const locationOptions = [
  'All Locations',
  'Champaign',
  'Urbana',
  'Bloomington',
  'West Lafayette',
  'Ann Arbor',
  'Austin'
];

export const mockChefs: Chef[] = [
  {
    id: 'chef1',
    name: 'Maria Romano',
    rating: 4.8,
    totalReviews: 142,
    totalDishes: 3,
    verified: true,
    location: 'Champaign',
    bio: 'Passionate about authentic Italian cuisine with 15 years of culinary experience. I bring the flavors of my grandmother\'s kitchen to your table.',
    specialties: ['Italian', 'Pasta', 'Pizza']
  },
  {
    id: 'chef2',
    name: 'Tony Deluca',
    rating: 4.9,
    totalReviews: 203,
    totalDishes: 2,
    verified: true,
    location: 'Urbana',
    bio: 'Third-generation pizza maker specializing in wood-fired Neapolitan-style pizzas. Using only the finest ingredients for an authentic Italian experience.',
    specialties: ['Italian', 'Pizza', 'Baking']
  },
  {
    id: 'chef3',
    name: 'Carlos Garcia',
    rating: 4.7,
    totalReviews: 98,
    totalDishes: 1,
    verified: true,
    location: 'Austin',
    bio: 'Bringing authentic Mexican street food to Austin. My recipes are passed down from generations and use traditional cooking methods.',
    specialties: ['Mexican', 'Street Food', 'Tacos']
  },
  {
    id: 'chef4',
    name: 'Priya Sharma',
    rating: 4.9,
    totalReviews: 167,
    totalDishes: 1,
    verified: true,
    location: 'Bloomington',
    bio: 'Specializing in North Indian cuisine with a focus on rich, flavorful curries. Each dish is made with fresh spices and authentic techniques.',
    specialties: ['Indian', 'Curry', 'Vegetarian']
  },
  {
    id: 'chef5',
    name: 'Kenji Tanaka',
    rating: 5.0,
    totalReviews: 234,
    totalDishes: 1,
    verified: true,
    location: 'Ann Arbor',
    bio: 'Master sushi chef with 20 years of experience. Trained in Tokyo, now bringing the art of sushi to Ann Arbor with fresh, sustainable ingredients.',
    specialties: ['Japanese', 'Sushi', 'Seafood']
  },
  {
    id: 'chef6',
    name: 'Mike Johnson',
    rating: 4.6,
    totalReviews: 112,
    totalDishes: 1,
    verified: true,
    location: 'West Lafayette',
    bio: 'BBQ and grill master creating elevated comfort food. Every burger is crafted with premium locally-sourced beef and homemade sauces.',
    specialties: ['American', 'Burgers', 'BBQ']
  },
  {
    id: 'chef7',
    name: 'Elena Papadopoulos',
    rating: 4.7,
    totalReviews: 89,
    totalDishes: 1,
    verified: true,
    location: 'Champaign',
    bio: 'Mediterranean cuisine expert focusing on fresh, healthy ingredients. My dishes celebrate the vibrant flavors of Greece and the Mediterranean coast.',
    specialties: ['Mediterranean', 'Greek', 'Healthy']
  },
  {
    id: 'chef8',
    name: 'Sophie Martin',
    rating: 4.9,
    totalReviews: 156,
    totalDishes: 1,
    verified: true,
    location: 'Austin',
    bio: 'French pastry chef specializing in decadent desserts. Trained in Paris, I create artisanal pastries and desserts that transport you to France.',
    specialties: ['French', 'Desserts', 'Pastry']
  },
  {
    id: 'chef9',
    name: 'Amit Patel',
    rating: 4.8,
    totalReviews: 298,
    totalDishes: 8,
    verified: true,
    location: 'Champaign',
    bio: 'Award-winning Indian chef with expertise in North Indian and Tandoori cuisine. Using family recipes passed down through generations to create authentic flavors.',
    specialties: ['Indian', 'Tandoori', 'Curry']
  },
  {
    id: 'chef10',
    name: 'Lakshmi Reddy',
    rating: 4.9,
    totalReviews: 245,
    totalDishes: 6,
    verified: true,
    location: 'West Lafayette',
    bio: 'South Indian cuisine specialist bringing authentic flavors from Kerala and Tamil Nadu. Every dish is prepared with fresh ingredients and traditional methods.',
    specialties: ['South Indian', 'Dosa', 'Idli']
  }
];

export const mockOrders: Order[] = [
  {
    id: 'order1',
    date: '2025-11-05',
    items: [
      { dish: mockDishes[0], quantity: 2 },
      { dish: mockDishes[7], quantity: 1 }
    ],
    total: 48,
    status: 'delivered'
  },
  {
    id: 'order2',
    date: '2025-11-03',
    items: [
      { dish: mockDishes[4], quantity: 1 }
    ],
    total: 28,
    status: 'delivered'
  },
  {
    id: 'order3',
    date: '2025-10-30',
    items: [
      { dish: mockDishes[2], quantity: 3 },
      { dish: mockDishes[6], quantity: 1 }
    ],
    total: 59,
    status: 'delivered'
  }
];
