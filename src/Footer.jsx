import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-row gap-1 text-sm pt-2 pb-3 bg-orange-500 text-white pl-14 pr-14 lg:gap-8">
      <p>CHANGE LANGUAGE:</p>
      <div className="grid grid-cols-5 sm:grid-cols-6 gap-1 md:grid-cols-10 ">
      <p className="hover:text-blue-500 hover:underline">English</p>
      <p className="hover:text-blue-500 hover:underline">हिंदी</p>
      <p className="hover:text-blue-500 hover:underline">मराठी</p>
      <p className="hover:text-blue-500 hover:underline">বাংলা</p>
      <p className="hover:text-blue-500 hover:underline">தமிழ்</p>
      <p className="hover:text-blue-500 hover:underline">ગુજરાતી</p>
      <p className="hover:text-blue-500 hover:underline">ಕನ್ನಡ</p>
      <p className="hover:text-blue-500 hover:underline">മലയാളം</p>
      <p className="hover:text-blue-500 hover:underline">తెలుగు</p>
      <p className="hover:text-blue-500 hover:underline">ਪੰਜਾਬੀ</p>
      </div>
    </div>
  );
};

export default Footer;
