const PostRoot = () => {
  const data = useLazyLoadQuery(graphql`
    query PostRootQuery($userId: String) {
      post(id: $postId) {
        ...PostApp_post
      }
    }
  `, {
    postId: 'postId',
  });

  return (
    <PostApp post={data.post />
  );
};
