import thankBg from '../assets/thankyou-bg.png';

const ThankYouPage = () => {
  return (
    <div className="flex items-center justify-center  min-h-screen bg-gray-100 px-4">

      <div
        className="relative w-full max-w-3xl h-[450px] rounded-3xl border border-gray-300 overflow-hidden shadow-2xl"
        style={{
          backgroundImage: `url(${thankBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">

          <div className="bg-green-100 p-3 rounded-full mb-4 shadow-md">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h1>
          <p className="text-gray-600 text-sm mb-6 leading-relaxed">
            for booking milk testing <br />
            Our team will get in touch with you
          </p>

          <div className="flex flex-col items-center gap-3 w-full max-w-xs mx-auto">
  <a
    href="/"
    className="block w-full text-green-700 hover:text-green-900 text-sm font-medium text-center transition"
  >
    Visit our website
  </a>
  <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all">
    Shop More
  </button>
</div>
  </div>
 </div>
</div>
  );
};

export default ThankYouPage;
