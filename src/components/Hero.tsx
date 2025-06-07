
const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-r from-green-700 to-green-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-5xl font-bold mb-6">Farm Fresh Produce</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Welcome to Green Valley Farm, where we've been growing the freshest, 
          most delicious fruits and vegetables for over three generations. 
          Taste the difference that local, sustainable farming makes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#products" 
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Shop Fresh Produce
          </a>
          <a 
            href="#contact" 
            className="bg-transparent border-2 border-white hover:bg-white hover:text-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
