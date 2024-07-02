// src/pages/HomePage.js
import React, { useState } from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function HomePage() {
    const [searchTerm, setSearchTerm] = useState("");

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      }
    ]
  };

  const categories = [
    { name: "Pizza", imageUrl: "https://c4.wallpaperflare.com/wallpaper/234/543/684/food-pizza-wallpaper-preview.jpg" },
    { name: "Sushi", imageUrl: "https://images5.alphacoders.com/134/thumb-1920-1341443.png" },
    { name: "Desserts", imageUrl: "https://img.freepik.com/premium-photo/group-indian-assorted-sweets-mithai-with-diya_466689-72282.jpg" },
    { name: "Burgers", imageUrl: "https://images5.alphacoders.com/433/433534.jpg" },
    { name: "Chowmine", imageUrl: "https://t3.ftcdn.net/jpg/06/10/03/82/360_F_610038219_jVhQanmTK0WUw2NO0lPhQBUqdQiLzTOs.jpg" }
  ];

  const featuredRestaurants = [
    { id: 1, name: "Pizza Palace", description: "The best pizza in town!", imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Sushi Central", description: "Fresh sushi, great prices.", imageUrl: "https://images.unsplash.com/photo-1553621042-f6e147245754" },
    { id: 3, name: "Burger Boss", description: "Burgers to die for.", imageUrl: "https://images.unsplash.com/photo-1571091655789-405eb7a3a3a8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, name: "Fine Dine Lux", description: "Experience luxury dining with us.", imageUrl: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0" }
  ];

  const topRatedRestaurants = [
    { id: 1, name: "Top Pizza Place", description: "Highest rated pizza!", imageUrl: "https://www.avikalp.com/cdn/shop/products/MWZ3167_wallpaper1.jpg?v=1653194674" },
    { id: 2, name: "Premium Sushi", description: "Top-rated sushi.", imageUrl: "https://img.veenaworld.com/wp-content/uploads/2022/10/12-Restaurants-in-Japan-that-You-Need-to-Try-Out-on-Your-Next-Vacation.jpg" }
  ];

  const newRestaurants = [
    { id: 1, name: "New Burger Joint", description: "Fresh and new burgers.", imageUrl: "https://homedecoram.com/cdn/shop/files/06copy_26536610-670d-4225-a43b-1b758be9ca5e_1445x.jpg" },
    { id: 2, name: "New Dessert Haven", description: "Delicious new desserts.", imageUrl: "https://img.freepik.com/premium-photo/plate-chocolate-desserts-with-candle-background_542670-5030.jpg" }
  ];

  const popularCuisines = [
    { id: 1, name: "Italian", description: "Pasta, Pizza and more.", imageUrl: "https://wallpapers.com/images/hd/4k-pasta-background-3840-x-2400-4bvbm9yzpi054ep0.jpg" },
    { id: 2, name: "Chinese", description: "Dim sum, noodles, and more.", imageUrl: "https://wallpapers.com/images/hd/chinese-food-pictures-uke4w2cpc1cn61n9.jpg" },
    { id: 3, name: "Mexican", description: "Tacos, burritos, and more.", imageUrl: "https://c4.wallpaperflare.com/wallpaper/570/745/92/comida-mexico-plato-tacos-wallpaper-preview.jpg" },
    { id: 4, name: "Indian", description: "Spicy curries, naan, and more.", imageUrl: "https://w0.peakpx.com/wallpaper/712/483/HD-wallpaper-reclaiming-indian-food-from-the-white-gaze-north-indian-food.jpg" },
    { id: 5, name: "Thai", description: "Pad Thai, green curry, and more.", imageUrl: "https://c4.wallpaperflare.com/wallpaper/806/828/863/asian-food-thai-thailand-wallpaper-preview.jpg" }
  ];

  const popularDishes = [
    { id: 1, name: "Margherita Pizza", description: "Classic cheese pizza.", imageUrl: "https://img.freepik.com/premium-photo/pizza-margherita-wooden-background-top-view-flyer-poster-restaurants-pizzerias_120962-7.jpg" },
    { id: 2, name: "California Roll", description: "Fresh sushi roll.", imageUrl: "https://i.pinimg.com/originals/4f/1c/f0/4f1cf0a91fdee088f1d0ca9284181252.png" },
    { id: 3, name: "Cheeseburger", description: "Juicy beef burger with cheese.", imageUrl: "https://c4.wallpaperflare.com/wallpaper/667/630/482/burger-dinner-food-hamburger-wallpaper-preview.jpg" },
    { id: 4, name: "Chocolate Cake", description: "Rich and moist chocolate cake.", imageUrl: "https://img.freepik.com/premium-photo/choclate-cake-4k-image_758367-98.jpg" },
    { id: 5, name: "Pad Thai", description: "Thai stir-fried noodles.", imageUrl: "https://img.freepik.com/free-photo/plate-pad-thai-with-shrimps-vegetables_188544-24767.jpg" }
  ];

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Search for:", searchTerm);
    // Implement real search logic here
  };

  

  return (
    <div className="container mx-auto px-4 relative">
      <div className="relative">
        <Slider {...settings} className="h-70 my-4 mb-10">
          {featuredRestaurants.map(restaurant => (
            <div key={restaurant.id} className="h-full">
              <img src={restaurant.imageUrl} alt={restaurant.name} className="w-full h-64 object-cover" />
            </div>
          ))}
        </Slider>
        <form onSubmit={handleSearch} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 w-3/4 md:w-1/2 ">
          <input
            type="text"
            placeholder="Search for restaurants or dishes"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 p-2 border-none text-black placeholder-black outline-none rounded bg-white bg-opacity-55 rounded-lg shadow-lg"
          />
          <FontAwesomeIcon icon={faSearch} className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black" />
        </form>
      </div>
      <div className="my-4">
        <h2 className="text-2xl font-bold my-2">Explore Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <div key={category.name} className="relative">
              <img src={category.imageUrl} alt={category.name} className="w-full h-32 object-cover rounded" />
              <button className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center text-lg font-bold rounded hover:bg-opacity-75">
                {category.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-bold my-2">Popular Cuisines</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {popularCuisines.map((cuisine) => (
            <div key={cuisine.id} className="relative">
              <img src={cuisine.imageUrl} alt={cuisine.name} className="w-full h-32 object-cover rounded" />
              <button className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center text-lg font-bold rounded hover:bg-opacity-75">
                {cuisine.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-bold my-2">Popular Dishes</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {popularDishes.map((dish) => (
            <div key={dish.id} className="relative">
              <img src={dish.imageUrl} alt={dish.name} className="w-full h-32 object-cover rounded" />
              <button className="absolute inset-0 bg-black bg-opacity-50 text-white flex items-center justify-center text-lg font-bold rounded hover:bg-opacity-75">
                {dish.name}
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-bold my-2">Top Rated Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {topRatedRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="p-4 border rounded shadow-sm">
              <img src={restaurant.imageUrl} alt={restaurant.name} className="w-full h-32 object-cover rounded" />
              <h3 className="text-xl font-bold">{restaurant.name}</h3>
              <p>{restaurant.description}</p>
              <Link to={`/restaurant/${restaurant.id}`} className="text-blue-500 hover:text-blue-700">View Menu</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-bold my-2">New Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {newRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="p-4 border rounded shadow-sm">
              <img src={restaurant.imageUrl} alt={restaurant.name} className="w-full h-32 object-cover rounded" />
              <h3 className="text-xl font-bold">{restaurant.name}</h3>
              <p>{restaurant.description}</p>
              <Link to={`/restaurant/${restaurant.id}`} className="text-blue-500 hover:text-blue-700">View Menu</Link>
            </div>
          ))}
        </div>
      </div>
      <div className="my-8">
        <h2 className="text-2xl font-bold my-2">Featured Restaurants</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredRestaurants.map((restaurant) => (
            <div key={restaurant.id} className="p-4 border rounded shadow-sm">
              <img src={restaurant.imageUrl} alt={restaurant.name} className="w-full h-32 object-cover rounded" />
              <h3 className="text-xl font-bold">{restaurant.name}</h3>
              <p>{restaurant.description}</p>
              <Link to={`/restaurant/${restaurant.id}`} className="text-blue-500 hover:text-blue-700">View Menu</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
