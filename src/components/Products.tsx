
import OrderDialog from "./OrderDialog";

const Products = () => {
  const products = [
    {
      name: "Fresh Tomatoes",
      price: "$4.50/lb",
      description: "Vine-ripened heirloom tomatoes",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=300&h=200&fit=crop",
      season: "Summer"
    },
    {
      name: "Crisp Lettuce",
      price: "$3.00/head",
      description: "Organic butter lettuce",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop",
      season: "Spring"
    },
    {
      name: "Sweet Corn",
      price: "$5.00/dozen",
      description: "Non-GMO sweet corn",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=300&h=200&fit=crop",
      season: "Summer"
    },
    {
      name: "Fresh Carrots",
      price: "$2.50/lb",
      description: "Orange and purple carrots",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=300&h=200&fit=crop",
      season: "Fall"
    },
    {
      name: "Green Beans",
      price: "$3.50/lb",
      description: "Tender green beans",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300&h=200&fit=crop",
      season: "Summer"
    },
    {
      name: "Fresh Herbs",
      price: "$2.00/bunch",
      description: "Basil, parsley, and more",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop",
      season: "Year-round"
    }
  ];

  return (
    <section id="products" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-800">Fresh Produce</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          All our produce is picked fresh daily and available for pickup or delivery. 
          Prices may vary based on season and availability.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-green-800">{product.name}</h3>
                  <span className="text-orange-600 font-bold text-lg">{product.price}</span>
                </div>
                <p className="text-gray-600 mb-2">{product.description}</p>
                <div className="flex justify-between items-center">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                    {product.season}
                  </span>
                  <OrderDialog product={product}>
                    <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition-colors">
                      Order Now
                    </button>
                  </OrderDialog>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
