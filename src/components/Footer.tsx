
const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-lg">🌱</span>
              </div>
              <h3 className="text-xl font-bold">Green Valley Farm</h3>
            </div>
            <p className="text-green-200">
              Growing fresh, organic produce for our community since 1963.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Farm Address</h4>
            <p className="text-green-200">
              123 Green Valley Road<br />
              Farmington, ST 12345<br />
              United States
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Farm Hours</h4>
            <p className="text-green-200">
              Monday - Saturday: 7:00 AM - 6:00 PM<br />
              Sunday: 9:00 AM - 4:00 PM<br />
              <span className="text-sm">Closed major holidays</span>
            </p>
          </div>
        </div>
        
        <div className="border-t border-green-700 mt-8 pt-8 text-center">
          <p className="text-green-200">
            © 2024 Green Valley Farm. All rights reserved. | Proudly serving our community with fresh, local produce.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
