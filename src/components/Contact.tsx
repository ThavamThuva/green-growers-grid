
import { Phone, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-800">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">How to Order</h3>
              <p className="text-gray-700 mb-4">
                Ready to enjoy farm-fresh produce? It's easy! Simply give us a call or send us 
                an email with your order, and we'll have it ready for you.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-semibold text-green-800">Call Us</p>
                  <p className="text-gray-700">(555) 123-FARM</p>
                  <p className="text-sm text-gray-600">Mon-Sat: 7am-6pm, Sun: 9am-4pm</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-green-600" />
                <div>
                  <p className="font-semibold text-green-800">Email Us</p>
                  <p className="text-gray-700">orders@greenvalleyfarm.com</p>
                  <p className="text-sm text-gray-600">We respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-green-800 mb-4">Pickup & Delivery</h3>
              
              <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">🚚 Farm Pickup</h4>
                  <p className="text-gray-700 text-sm">
                    Visit our farm stand at 123 Green Valley Road. Open daily 7am-6pm.
                    No appointment needed!
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">🏠 Local Delivery</h4>
                  <p className="text-gray-700 text-sm">
                    Free delivery for orders over $25 within 10 miles. 
                    Delivery available Tuesday, Thursday, and Saturday.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">📅 Advance Orders</h4>
                  <p className="text-gray-700 text-sm">
                    Place orders 24 hours in advance to guarantee availability. 
                    Same-day orders subject to stock.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
