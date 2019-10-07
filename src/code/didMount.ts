const App extends React.Component {
  async componentDidMount() {
    const data = await getPosts();

    this.setState({ data });
  }
}
