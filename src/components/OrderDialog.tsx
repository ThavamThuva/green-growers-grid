
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface Product {
  name: string;
  price: string;
  description: string;
  image: string;
  season: string;
}

interface OrderDialogProps {
  product: Product;
  children: React.ReactNode;
}

const OrderDialog = ({ product, children }: OrderDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [customerInfo, setCustomerInfo] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    notes: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!customerInfo.name || !customerInfo.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and phone number.",
        variant: "destructive",
      });
      return;
    }

    // Here you would typically send the order to a backend
    console.log("Order submitted:", {
      product: product.name,
      quantity,
      customer: customerInfo,
      total: `$${(parseFloat(product.price.replace('$', '').split('/')[0]) * quantity).toFixed(2)}`
    });

    toast({
      title: "Order Placed!",
      description: `Your order for ${quantity} ${product.name} has been submitted. We'll contact you shortly to confirm pickup/delivery details.`,
    });

    // Reset form and close dialog
    setCustomerInfo({
      name: "",
      email: "",
      phone: "",
      address: "",
      notes: ""
    });
    setQuantity(1);
    setIsOpen(false);
  };

  const totalPrice = parseFloat(product.price.replace('$', '').split('/')[0]) * quantity;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-green-800">Order {product.name}</DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Product Summary */}
          <div className="bg-green-50 p-4 rounded-lg border">
            <div className="flex items-center space-x-4">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-16 h-16 object-cover rounded"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-green-800">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="text-orange-600 font-bold">{product.price}</p>
              </div>
            </div>
            
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <label htmlFor="quantity" className="text-sm font-medium">Quantity:</label>
                <Input
                  id="quantity"
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                  className="w-20"
                />
              </div>
              <div className="text-lg font-bold text-green-700">
                Total: ${totalPrice.toFixed(2)}
              </div>
            </div>
          </div>

          {/* Customer Information */}
          <div className="space-y-3">
            <h4 className="font-semibold text-green-800">Your Information</h4>
            
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">
                Name *
              </label>
              <Input
                id="name"
                value={customerInfo.name}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, name: e.target.value }))}
                placeholder="Your full name"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium mb-1">
                Phone Number *
              </label>
              <Input
                id="phone"
                type="tel"
                value={customerInfo.phone}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, phone: e.target.value }))}
                placeholder="(555) 123-4567"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email (optional)
              </label>
              <Input
                id="email"
                type="email"
                value={customerInfo.email}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, email: e.target.value }))}
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-medium mb-1">
                Delivery Address (if applicable)
              </label>
              <Input
                id="address"
                value={customerInfo.address}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, address: e.target.value }))}
                placeholder="123 Main St, City, State"
              />
            </div>

            <div>
              <label htmlFor="notes" className="block text-sm font-medium mb-1">
                Special Instructions
              </label>
              <Input
                id="notes"
                value={customerInfo.notes}
                onChange={(e) => setCustomerInfo(prev => ({ ...prev, notes: e.target.value }))}
                placeholder="Any special requests or pickup preferences"
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-green-600 hover:bg-green-700"
            >
              Place Order
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDialog;
