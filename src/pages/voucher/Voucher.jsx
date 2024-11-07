import { useState } from "react";

const Voucher = () => {
  const [voucher1, setVoucher1] = useState(false);
  const [voucher2, setVoucher2] = useState(false);
  const handleRedeemBtn1 = () => {
    setVoucher1(true);
  };
  const handleRedeemBtn2 = () => {
    setVoucher2(true);
  };
  return (
    <div>
      <div className="bg-[#9538E2] py-10 mb-10">
        <div className="text-white flex flex-col justify-center text-center items-center mb-10">
          <h3 className="text-2xl font-bold mb-3">Voucher</h3>
          <p className="w-[55%] text-sm">
            Save more on your next purchase! Redeem a voucher and enjoy
            discounts on top gadgets.Check out our limited-time offers and
            loyalty rewards. Don’t miss out—claim your voucher today and save
            more on the products you love!
          </p>
        </div>
      </div>
      <div className="w-10/12 mx-auto mb-16">
        <p className="font-bold text-lg mb-10">Get Vouchers</p>
        <div className="flex ">
          <div
            className={`card ${
              voucher1
                ? "bg-gray-500"
                : "bg-gradient-to-r from-purple-500 to-blue-500 border-4 border-dashed border-amber-500"
            }   rounded-box grid h-32 
          w-[50%] text-white py-4 px-5 `}
          >
            <div className="flex justify-between items-center ">
              <div>
                <p className="text-3xl font-bold mb-3">"10% off"</p>
                <p>Applies to headphones only</p>
                <p>Valid until 30 Nov 2024</p>
              </div>
              <button
                onClick={handleRedeemBtn1}
                className={`self-end px-3 ${
                  voucher1 ? "bg-gray-400" : "bg-[#9538E2]"
                } py-2  w-1/4 font-semibold text-white border text-sm  border-white rounded-full`}
              >
                {voucher1 ? "Collected" : "Redeem"}
              </button>
            </div>
          </div>
          <div className="divider lg:divider-horizontal">OR</div>
          <div
            className={`card ${
              voucher2
                ? "bg-gray-500"
                : "bg-gradient-to-r from-purple-500 to-blue-500 border-4 border-dashed border-amber-500"
            }   rounded-box grid h-32 
          w-[50%] text-white py-4 px-5 `}
          >
            <div className="flex justify-between items-center ">
              <div>
                <p className="text-3xl font-bold mb-3">"$20 off"</p>
                <p>Save $20 on orders over $100</p>
                <p>Valid until 30 Nov 2024</p>
              </div>
              <button
                onClick={handleRedeemBtn2}
                className={`self-end px-3 ${
                  voucher2 ? "bg-gray-400" : "bg-[#9538E2]"
                } py-2  w-1/4 font-semibold text-white border text-sm  border-white rounded-full`}
              >
                {voucher2 ? "Collected" : "Redeem"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Voucher;
