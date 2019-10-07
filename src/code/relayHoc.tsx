export default createFragmentContainer(Post, {
  post: graphql`
    fragment Post_post on Post {
      id
      title
      description
    }
  `,
})
