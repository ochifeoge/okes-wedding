import { FaPaypal, FaAmazon, FaCreditCard } from "react-icons/fa";

const GiftOptions = () => {
  return (
    <section id="gift-options" className="py-20 bg-pink-50 text-center px-4">
      <h2 className="font-playfair text-3xl text-gray-800 mb-4">
        Send Us a Gift 💝
      </h2>
      <p className="font-body text-gray-600 max-w-md mx-auto mb-10">
        Your love means everything — but if you wish to bless us with a token,
        please choose any of the options below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
        {/* Flutterwave */}
        <button
          onClick={() => {
            alert("coming soon");
            // window.open("https://flutterwave.com/pay/yourlink", "_blank")
          }}
          className="flex flex-col items-center gap-3 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer border border-pink-100 hover:bg-pink-100/40"
        >
          <FaCreditCard size={28} className="text-pink-600" />
          <span className="text-gray-800 font-medium">
            Flutterwave (Nigeria)
          </span>
        </button>

        {/* PayPal */}
        <button
          onClick={() => window.open("https://paypal.me/okofficial", "_blank")}
          className="flex flex-col items-center gap-3 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer border border-pink-100 hover:bg-pink-100/40"
        >
          <FaPaypal size={28} className="text-blue-600" />
          <span className="text-gray-800 font-medium">PayPal (Global)</span>
        </button>

        {/* Amazon Wishlist */}
        <button
          onClick={() =>
            window.open(
              "https://www.amazon.co.uk/wedding/registry/6O4RJC53PB3O",
              "_blank"
            )
          }
          className="flex flex-col items-center gap-3 bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition cursor-pointer border border-pink-100 hover:bg-pink-100/40"
        >
          <FaAmazon size={28} className="text-yellow-600" />
          <span className="text-gray-800 font-medium">Amazon Wishlist</span>
        </button>
      </div>
    </section>
  );
};

export default GiftOptions;
