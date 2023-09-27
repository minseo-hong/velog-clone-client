import PostItem from './PostItem';

const PostList = () => {
  return (
    <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto mt-5 mb-60 px-8">
      {Array.from(Array(12).keys()).map((_, index) => (
        <PostItem
          key={index}
          title="Promise 실전에서 사용해보기"
          content="비동기 작업이란 특정 코드의 로직이 끝날 때까지 기다리지 않고, 나머지 코드를 먼저 실행하는 것이에요. 웹사이트 개발에는 비동기 작업을 자주 사용해요. 서버에서 데이터를 불러올 때 오래 걸릴 수도 있는데, 그동안 다른 코드를 실행하지 않고 가만히 기다리면"
          imageUrl="/images/posts/post1.jpg"
          author="tosspayments"
          profileUrl="/images/posts/profile1.jpg"
          likes={53}
        />
      ))}
    </div>
  );
};

export default PostList;
