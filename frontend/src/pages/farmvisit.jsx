import { useState, useEffect } from "react";
import axios from "axios";
import farmBg from "../assets/farm-bg.png"; 
import formBg from "../assets/farmform-bg.png"; 
import { IoMdBackspace } from "react-icons/io";
export default function BookFarmVisit() {
  const [farms, setFarms] = useState([]);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    selectedFarm: "",
  });

  useEffect(() => {
    fetchFarms();
  }, []);

  const fetchFarms = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/farms");
      setFarms(res.data);
    } catch (err) {
      console.error("Error fetching farms:", err);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/book-visit", formData);
      alert("Farm visit booked successfully!");
    } catch (err) {
      console.error("Booking failed:", err);
    }
  };

  return (
    <div className="relative w-full min-h-screen flex items-center justify-center bg-[#FFFBEF] overflow-hidden">
      <img
        src={farmBg}
        alt="Farm Background"
        className="absolute bottom-0 left-0 w-full object-cover h-[120px] md:h-[160px] lg:h-[180px] pointer-events-none"
      />

      <div className="relative w-[90%] md:w-[70%] lg:w-[60%] max-w-[900px] bg-white shadow-xl rounded-2xl p-6 md:p-10 overflow-hidden">
        <img
          src={formBg}
          alt="Form Bottom Decoration"
          className="absolute bottom-0 left-0 w-full object-cover h-[80px] md:h-[100px] lg:h-[120px] rounded-b-2xl pointer-events-none"
        />

        <button className="absolute top-4 left-4 text-3xl  text-black hover:text-green-700">
           <IoMdBackspace />
        </button>

    
        <h2 className="text-center text-xl md:text-2xl font-bold">
          Book Your Farm Visit Today!
        </h2>
        <p className="text-center text-gray-700 mt-2">
          Fill in your details and experience nature and fresh produce up close.
        </p>

        <form
          className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10 "
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="firstName"
            placeholder="First Name *"
            value={formData.firstName}
            onChange={handleChange}
            className="w-[90%] md:w-[80%] lg:w-[70%] rounded-full bg-[#C7CF7A] placeholder-black px-4 py-3 focus:outline-none"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name *"
            value={formData.lastName}
            onChange={handleChange}
   className="w-[90%] md:w-[80%] lg:w-[70%] rounded-full bg-[#C7CF7A] placeholder-black px-4 py-3 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Email *"
            value={formData.email}
            onChange={handleChange}
             className="w-[90%] md:w-[80%] lg:w-[70%] rounded-full bg-[#C7CF7A] placeholder-black px-4 py-3 focus:outline-none"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone *"
            value={formData.phone}
            onChange={handleChange}
 className="w-[90%] md:w-[80%] lg:w-[70%] rounded-full bg-[#C7CF7A] placeholder-black px-4 py-3 focus:outline-none"
          />

          <select
            name="selectedFarm"
            value={formData.selectedFarm}
            onChange={handleChange}
    className="w-[90%] md:w-[80%] lg:w-[70%] rounded-full bg-[#C7CF7A] placeholder-black px-4 py-3 focus:outline-none"
          >
            <option value="">Select Farm *</option>
            {farms.length > 0 ? (
              farms.map((farm) => (
                <option key={farm._id} value={farm._id}>
                  {farm.name}
                </option>
              ))
            ) : (
              <option disabled>Loading farms...</option>
            )}
          </select>
        </form>

        <div className="flex justify-center mt-6 relative z-10">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full md:w-auto bg-green-800 text-white px-8 py-3 rounded-full hover:bg-green-900 transition"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
