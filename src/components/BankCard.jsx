// BankCard.jsx
import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

const BankCard = ({
  bankName = "UBA",
  accountName = "Okeoghene Ofualagba",
  accountNumber = "2175756528",
}) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    } catch (err) {
      alert("Copy failed — please copy manually.");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition cursor-pointer border border-pink-100 hover:bg-pink-100/40 p-6 flex flex-col justify-between">
      <div>
        <h3 className="text-sm text-pink-600 font-medium">Bank Transfer</h3>

        <div className="mt-2">
          <p className="text-xs text-gray-500">Bank</p>
          <p className="text-lg font-playfair text-gray-800">{bankName}</p>
        </div>

        <div className="mt-3">
          <p className="text-xs text-gray-500">Account Name</p>
          <p className="font-medium">{accountName}</p>
        </div>

        <div className="mt-3 bg-pink-50 rounded-lg p-3 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-500">Account Number</p>
            <p className="text-xl font-semibold tracking-wide">
              {accountNumber}
            </p>
          </div>

          <button
            onClick={() => copyToClipboard(accountNumber)}
            aria-label="Copy account number"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-pink-100 shadow-sm hover:shadow-md transition"
          >
            {copied ? (
              <>
                <FiCheck className="text-green-500" />
                <span className="text-sm text-green-600">Copied</span>
              </>
            ) : (
              <>
                <FiCopy className="text-pink-600" />
                <span className="text-sm text-pink-600">Copy</span>
              </>
            )}
          </button>
        </div>
      </div>

      <p className="mt-4 text-xs text-gray-400 text-center">
        Tap to copy and transfer via your banking app.
      </p>
    </div>
  );
};

export default BankCard;
