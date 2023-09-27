import Header from '../components/base/Header';
import PostList from '../components/posts/PostList';
import TabBar from '../components/posts/TabBar';

const PostListPage = () => {
  return (
    <>
      <Header />
      <TabBar />
      <PostList />
    </>
  );
};

export default PostListPage;
