import { Link } from 'react-router-dom';

import { AiFillHeart } from 'react-icons/ai';

interface PostItemProps {
  title: string;
  content: string;
  imageUrl: string;
  author: string;
  profileUrl: string;
  likes: number;
}

const PostItem = ({
  title,
  content,
  imageUrl,
  author,
  profileUrl,
  likes,
}: PostItemProps) => {
  return (
    <Link
      to="#"
      className="shadow-lg rounded-md overflow-hidden hover:-translate-y-2 duration-300 ease-in-out"
    >
      <div className="aspect-w-16 aspect-h-9 overflow-hidden w-full">
        <img
          className="w-full h-full object-cover object-center"
          src={imageUrl}
          alt="이미지 1"
        />
      </div>
      <div className="p-5">
        <h4 className="font-semibold">{title}</h4>
        <p className="mt-2 text-gray-600 text-sm line-clamp-3">{content}</p>
        <div className="mt-2 text-gray-400 text-xs">
          <span>2023년 9월 13일</span>﹒<span>5개의 댓글</span>
        </div>
      </div>
      <div className="px-5 py-3 border-t border-gray-100 flex justify-between items-center">
        <div>
          <img
            className="inline-block w-6 h-6 rounded-full"
            src={profileUrl}
            alt="프로필 1"
          />
          <span className="ms-2 text-xs text-gray-400">
            by <b className="font-bold text-gray-800">{author}</b>
          </span>
        </div>
        <div className="flex flex-row items-center gap-1 text-sm text-gray-800">
          <i>
            <AiFillHeart />
          </i>
          <span>{likes}</span>
        </div>
      </div>
    </Link>
  );
};

export default PostItem;
