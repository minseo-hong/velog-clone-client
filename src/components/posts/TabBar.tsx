import { BiTrendingUp } from 'react-icons/bi';
import { AiOutlineClockCircle } from 'react-icons/ai';

const TabBar = () => {
  return (
    <div className="flex max-w-6xl mx-auto mt-8 px-8">
      <div className="px-4 pb-2 flex items-center text-lg font-semibold border-b-2 border-black cursor-pointer">
        <i className="inline-block text-xl">
          <BiTrendingUp />
        </i>
        <span className="ms-2">트렌딩</span>
      </div>
      <div className="px-4 pb-2 flex items-center text-lg font-normal text-gray-400 cursor-pointer">
        <i className="inline-block text-xl">
          <AiOutlineClockCircle />
        </i>
        <span className="ms-2">최신</span>
      </div>
    </div>
  );
};

export default TabBar;
