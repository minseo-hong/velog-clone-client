import { BsFillSunFill } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';

const Navbar = () => {
  return (
    <nav>
      <div className="px-8 mx-auto max-w-6xl">
        <div className="h-16 flex items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <a href="#">
              <img
                className="object-cover h-6"
                src="/images/logo/logo.svg"
                alt="velog"
              />
            </a>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-2xl">
              <BsFillSunFill />
            </button>
            <button className="text-2xl">
              <GoSearch />
            </button>
            <button className="bg-gray-900 text-white font-medium px-4 py-1 rounded-full">
              로그인
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
