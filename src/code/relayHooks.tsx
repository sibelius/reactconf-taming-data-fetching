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
    <PostApp post={data.post} />
  );
};

const PostApp = (props) => {
  const post = useFragment(graphql`
    fragment PostAdd_post on Post {
      title
      description
    }
  `, props.post);

  return <span>{post.title}</span>
};

const [user, refetch] = useRefetchableFragment(graphql`
    fragment PostList_user on User 
    @refetchable(queryName: "PostListRefetchQuery")
    @argumentDefinitions(
      first: { type: Int, defaultValue: 3 }
      after: { type: String }
    ) {
      id
      posts(
        first: $first, after: $after
      ) @connection(key: "PostList_post") {
        edges {
          node {
            id
            title
          }
        }
      }     
    }
  `, props.user);
