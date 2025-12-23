import Card from "./components/Card";
import users from "./data.js";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="w-full">
        <div className="bg-[url('https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg')] bg-cover bg-bottom h-40 sm:h-50 md:h-60 lg:h-70 xl:h-80 relative rounded-b-3xl"></div>
      </div>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="px-2 pt-4 sm:px-6 pt-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-gray-800 tracking-wide">
            Connect with Like-minded People
          </h2>
          <p className="text-gray-600 mt-2 text-sm sm:text-base">
            Discover and engage with amazing individuals
          </p>
        </div>

        <div className="p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 justify-items-center">
          {users.map((user, index) => (
            <Card key={index} userIndex={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
