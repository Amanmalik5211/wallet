import { useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import offerSun from "../assets/offer-sun.png";

function OfferCard({ offer, onClick }) {
  return (
    <div className="relative bg-white rounded-xl border border-blue-400 shadow-sm p-4 flex flex-col gap-2">
      <span className="absolute top-2 right-3 bg-green-100 text-green-700 text-xs md:text-sm px-3 py-1 rounded-full font-semibold">
        {offer.label}
      </span>

      <h3 className="font-bold text-gray-900 text-base md:text-lg">
        {offer.title}
      </h3>
      <p className="text-sm md:text-base text-gray-800">{offer.description}</p>
      <p className="text-green-600 font-medium text-xs md:text-sm">
        Valid till {offer.validTill}
      </p>
      <p className="text-xs text-gray-600">
        Order amount : <span className="font-semibold">₹ {offer.orderAmount}</span>
      </p>
      <p className="text-red-500 text-xs font-semibold">
        Minimum order amount ₹ {offer.minOrderAmount}/-
      </p>

      <div className="flex justify-end">
        <button
          onClick={() => onClick(offer)}
          className="bg-green-700 text-white text-sm md:text-base px-4 py-1.5 rounded-full hover:bg-green-800 transition"
        >
          {offer.buttonText}
        </button>
      </div>
    </div>
  );
}

export default function OffersPage() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);

  

  // const fetchOffers = async () => {
  //   try {
  //     const response = await fetch("https://your-backend-api.com/api/offers"); 
  //     const data = await response.json();
  //     setOffers(data);
  //   } catch (error) {
  //     console.error("Failed to fetch offers:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const fetchOffers = async () => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const dummyData = [
      {
        id: 1,
        title: "WELCOME 30",
        description: "Rs. 30 Off on minimum order amount Rs.99",
        validTill: "28 Aug 2025",
        orderAmount: 0,
        minOrderAmount: 99,
        label: "Hot Deal",
        buttonText: "Order Now",
      },
      {
        id: 2,
        title: "5% off on first order",
        description: "5% off on first order",
        validTill: "18 Oct 2025",
        orderAmount: 0,
        minOrderAmount: 200,
        label: "Hot Deal",
        buttonText: "Order Now",
      },
      {
        id: 3,
        title: "FESTIVE100",
        description: "Flat ₹100 off on orders above ₹499",
        validTill: "30 Sep 2025",
        orderAmount: 0,
        minOrderAmount: 499,
        label: "Limited Time",
        buttonText: "Grab Deal",
      },
    ];

    setOffers(dummyData);
  } catch (error) {
    console.error("Failed to fetch offers:", error);
  } finally {
    setLoading(false);
  }
};


  const handleOfferClick = (offer) => {
    console.log("Clicked offer:", offer.title);
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  return (
    <div className="min-h-[500px] max-w-[700px] w-full mt-10 bg-[#dbdede] mx-auto border border-[#a0a0a0] rounded-xl shadow-lg flex flex-col items-center py-4 px-4 sm:px-6 md:px-8">
      <div className="w-full max-w-[600px]">
        <button className="text-black hover:text-green-700">
          <ArrowLeft size={28} />
        </button>
      </div>

      <div className="mt-4 w-full max-w-[600px] bg-[#D4F0C4] rounded-2xl shadow-md p-3">
        <div className="relative w-full rounded-2xl bg-[#FFFBEF] overflow-hidden border-8 border-[#ffffff] shadow-sm h-[200px] md:h-[220px]">
          <img
            src={offerSun}
            alt="Offer Sun"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 flex items-center justify-center z-10">
           <h2
  className="
    text-4xl 
    sm:text-5xl    
    md:text-6xl    
    lg:text-6xl   
    xl:text-6xl    
    font-extrabold
    font-['Times_New_Roman',serif]
    text-black
    tracking-wide
    drop-shadow-sm
  "
>
  OFFER ZONE
</h2>
 </div>
  </div>
        <div className="mt-4 flex flex-col gap-3">
          {loading ? (
            <p className="text-center text-gray-600 text-sm">Loading offers...</p>
          ) : offers.length > 0 ? (
            offers.map((offer) => (
              <OfferCard key={offer.id} offer={offer} onClick={handleOfferClick} />
            ))
          ) : (
            <p className="text-center text-gray-600 text-sm">No offers available right now.</p>
          )}
        </div>
      </div>
    </div>
  );
}
