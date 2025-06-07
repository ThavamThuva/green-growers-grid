
const About = () => {
  return (
    <section id="about" className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-green-800">Our Story</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop" 
                alt="Green Valley Farm landscape" 
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-green-800">Meet the Johnson Family</h3>
              <p className="text-gray-700 leading-relaxed">
                For over 60 years, the Johnson family has been dedicated to sustainable farming 
                practices on our 150-acre farm nestled in the heart of Green Valley. What started 
                as a small family garden has grown into a thriving operation that supplies the 
                freshest produce to our local community.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe in growing food the right way - with respect for the land, our 
                community, and future generations. Our commitment to organic practices and 
                sustainable farming ensures that every piece of produce we grow is not only 
                delicious but also environmentally responsible.
              </p>
              <div className="bg-green-100 p-4 rounded-lg">
                <p className="text-green-800 font-semibold">🌿 100% Organic Certified</p>
                <p className="text-green-800 font-semibold">🚚 Local Delivery Available</p>
                <p className="text-green-800 font-semibold">🥬 Picked Fresh Daily</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
