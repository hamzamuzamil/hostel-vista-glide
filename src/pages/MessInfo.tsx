
import { Utensils, Clock, Ban, Check, ReceiptText, CreditCard } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const messSchedule = [
  { day: 'Monday', breakfast: '7:30 AM - 9:30 AM', lunch: '12:00 PM - 2:00 PM', dinner: '7:00 PM - 9:00 PM' },
  { day: 'Tuesday', breakfast: '7:30 AM - 9:30 AM', lunch: '12:00 PM - 2:00 PM', dinner: '7:00 PM - 9:00 PM' },
  { day: 'Wednesday', breakfast: '7:30 AM - 9:30 AM', lunch: '12:00 PM - 2:00 PM', dinner: '7:00 PM - 9:00 PM' },
  { day: 'Thursday', breakfast: '7:30 AM - 9:30 AM', lunch: '12:00 PM - 2:00 PM', dinner: '7:00 PM - 9:00 PM' },
  { day: 'Friday', breakfast: '7:30 AM - 9:30 AM', lunch: '12:00 PM - 2:00 PM', dinner: '7:00 PM - 9:00 PM' },
  { day: 'Saturday', breakfast: '8:00 AM - 10:00 AM', lunch: '12:30 PM - 2:30 PM', dinner: '7:00 PM - 9:00 PM' },
  { day: 'Sunday', breakfast: '8:00 AM - 10:00 AM', lunch: '12:30 PM - 2:30 PM', dinner: '7:00 PM - 9:00 PM' }
];

const messRules = [
  'Food should be consumed within the designated mess area only',
  'Wastage of food is strictly prohibited',
  'Outside food is not allowed in the mess area',
  'Maintain silence and cleanliness in the mess area',
  'Follow the schedule strictly',
  'Carry your ID card while entering the mess'
];

const messPlans = [
  { name: 'Basic', price: '$150/month', meals: ['Breakfast', 'Dinner'], features: ['Vegetarian options', 'Self-service', 'Weekend brunch'] },
  { name: 'Standard', price: '$200/month', meals: ['Breakfast', 'Lunch', 'Dinner'], features: ['Vegetarian options', 'Non-vegetarian (twice a week)', 'Self-service', 'Weekend brunch'] },
  { name: 'Premium', price: '$250/month', meals: ['Breakfast', 'Lunch', 'Dinner', 'Snacks'], features: ['Vegetarian options', 'Non-vegetarian (daily)', 'Self-service', 'Special weekend meals', 'Customized meal plans'] }
];

const messMenuItems = {
  breakfast: ['Cereal with milk', 'Eggs & toast', 'Fruit platter', 'Pancakes', 'Smoothie bowls'],
  lunch: ['Pasta bar', 'Salad station', 'Soup of the day', 'Sandwiches', 'Rice & curry'],
  dinner: ['Grilled chicken/tofu', 'Vegetable stir fry', 'Pasta dishes', 'Mexican bowl', 'Pizza (weekends)']
};

const MessInfo = () => {
  return (
    <div className="container py-20 max-w-7xl mx-auto">
      <div className="pt-10">
        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Mess Information</h1>
        <p className="text-muted-foreground mb-8 max-w-2xl">
          Our hostel provides high-quality dining services with flexible meal plans to accommodate various preferences and dietary requirements.
        </p>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Mess Hours Card */}
          <Card className="animate-fade-in">
            <CardHeader className="flex flex-row items-center space-x-3">
              <Clock className="w-5 h-5 text-primary" />
              <div>
                <CardTitle>Mess Timings</CardTitle>
                <CardDescription>Daily schedule for meals</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Day</TableHead>
                      <TableHead>Breakfast</TableHead>
                      <TableHead>Lunch</TableHead>
                      <TableHead>Dinner</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {messSchedule.map((item) => (
                      <TableRow key={item.day}>
                        <TableCell className="font-medium">{item.day}</TableCell>
                        <TableCell>{item.breakfast}</TableCell>
                        <TableCell>{item.lunch}</TableCell>
                        <TableCell>{item.dinner}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        
          {/* Mess Rules Card */}
          <Card className="animate-fade-in [animation-delay:200ms]">
            <CardHeader className="flex flex-row items-center space-x-3">
              <Ban className="w-5 h-5 text-primary" />
              <div>
                <CardTitle>Mess Rules</CardTitle>
                <CardDescription>Guidelines for a pleasant dining experience</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {messRules.map((rule, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-secondary flex-shrink-0" />
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
        
        {/* Menu Section */}
        <h2 className="text-2xl font-bold mb-4">Menu Options</h2>
        <div className="mb-10">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="breakfast">
              <AccordionTrigger className="text-lg font-medium">Breakfast Menu</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6">
                  {messMenuItems.breakfast.map((item, index) => (
                    <li key={index} className="list-disc">{item}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="lunch">
              <AccordionTrigger className="text-lg font-medium">Lunch Menu</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6">
                  {messMenuItems.lunch.map((item, index) => (
                    <li key={index} className="list-disc">{item}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="dinner">
              <AccordionTrigger className="text-lg font-medium">Dinner Menu</AccordionTrigger>
              <AccordionContent>
                <ul className="space-y-2 pl-6">
                  {messMenuItems.dinner.map((item, index) => (
                    <li key={index} className="list-disc">{item}</li>
                  ))}
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        {/* Meal Plans Section */}
        <h2 className="text-2xl font-bold mb-6">Meal Plans</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {messPlans.map((plan, index) => (
            <Card key={index} className={`overflow-hidden animate-fade-in [animation-delay:${index * 100}ms]`}>
              <div className="bg-gradient-to-r from-primary to-secondary h-2" />
              <CardHeader>
                <CardTitle className="flex justify-between items-center">
                  <span>{plan.name}</span>
                  <span className="text-primary">{plan.price}</span>
                </CardTitle>
                <CardDescription>
                  {plan.meals.join(' • ')}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-2 h-4 w-4 text-secondary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Payment Section */}
        <div className="bg-muted rounded-lg p-6">
          <div className="flex items-center space-x-3 mb-4">
            <CreditCard className="h-6 w-6 text-primary" />
            <h2 className="text-xl font-bold">Payment Information</h2>
          </div>
          <p className="mb-4">
            Mess fees should be paid at the beginning of each month. We accept the following payment methods:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <Check className="h-5 w-5 text-secondary" />
              <span>Credit/Debit Cards</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="h-5 w-5 text-secondary" />
              <span>Mobile Wallets</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="h-5 w-5 text-secondary" />
              <span>Bank Transfer</span>
            </div>
            <div className="flex items-center space-x-3">
              <Check className="h-5 w-5 text-secondary" />
              <span>Cash (at the reception)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessInfo;
