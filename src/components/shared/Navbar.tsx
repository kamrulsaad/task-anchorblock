const Navbar = () => {
  return (
    <div className="w-full h-[72px] bg-[#6941C6]">
      <div className="max-w-7xl h-full mx-auto text-[#F4EBFF] flex items-center justify-between">
        <div className="h-full flex gap-12 items-center justify-center">
          <div className="h-full flex gap-2 items-center justify-center">
            <div>
              <img className="w-[40px]" src="assets/logo1.png" alt="LOGO" />
            </div>
            <h1 className="font-bold text-xl">Stack</h1>
          </div>
          <div className="h-full flex gap-2 items-center justify-center">
            <p className="px-3 py-2 rounded-md cursor-pointer font-medium hover:bg-[#7F56D9]">
              Home
            </p>
            <p className="px-3 py-2 rounded-md cursor-pointer font-medium hover:bg-[#7F56D9]">
              User
            </p>
            <p className="px-3 py-2 rounded-md cursor-pointer font-medium hover:bg-[#7F56D9]">
              Projects
            </p>
            <p className="px-3 py-2 rounded-md cursor-pointer font-medium hover:bg-[#7F56D9]">
              Tasks
            </p>
            <p className="px-3 py-2 rounded-md cursor-pointer font-medium hover:bg-[#7F56D9]">
              Reporting
            </p>
          </div>
        </div>
        <div className="flex gap-5 items-center">
          <img
            className="w-5 h-5"
            src="assets/navbar/search.png"
            alt="Avatar "
          />
          <img
            className="w-5 h-5"
            src="assets/navbar/settings.png"
            alt="Avatar "
          />
          <img
            className="w-5 h-5"
            src="assets/navbar/bell.png"
            alt="Avatar "
          />
          <img
            className="w-[40px] h-[40px] rounded-full"
            src="assets/navbar/Avatar.png"
            alt="Avatar "
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
