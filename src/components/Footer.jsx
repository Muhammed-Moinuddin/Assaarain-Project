const Footer = () => {
    return (
      <footer className="bg-customDarkblue px-12 ">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 md:mr-4 text-left py-6">
            <h3 className="text-2xl font-bold text-white font-cabin">Delivered on time with no hassle.</h3>
            <div>
                
            </div>
          </div>
          
          <div className="text-left py-6">
            <h3 className="text-lg font-medium text-white font-inter">Keep Up To Date</h3>
                <div className="flex flex-col md:flex-row gap-4">
                <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="w-full md:w-auto bg-blue-500 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none">
                    Sign Up
                </button>
                </div>
            <div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Div */}
          <div className="mb-4 md:mb-0 md:mr-4 text-center md:text-left py-6">
            <p className="text-xs text-white font-inter">
                Copyright © 2023 - Assarain Food Products L.L.C. Design & Developed by Codevative
            </p>
          </div>
          
          {/* Right Div */}
          <div className="text-center md:text-right py-6">
            <p className="text-sm text-white font-openSans">Privacy   /   Terms & Conditions   /   Site map   /   Contact</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
   