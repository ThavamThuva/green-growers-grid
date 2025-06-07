
import { Phone, Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-green-800 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-xl font-bold">🌱</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold">Green Valley Farm</h1>
              <p className="text-green-200 text-sm">Fresh • Local • Organic</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="hover:text-green-200 transition-colors">Home</a>
            <a href="#about" className="hover:text-green-200 transition-colors">About</a>
            <a href="#products" className="hover:text-green-200 transition-colors">Products</a>
            <a href="#contact" className="hover:text-green-200 transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-sm">
              <Phone className="w-4 h-4" />
              <span>(555) 123-FARM</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
