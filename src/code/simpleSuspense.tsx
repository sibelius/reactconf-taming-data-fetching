const resource = unstable_createResource(
  async (id) => {
    return await getPostById(id);
  },
);

const App = (props) => {
  const input = props.resource.read(fixedID);

  return <span>{JSON.stringify(input)}</span>;
};

const AppWrapper = () => {
  return (
    <ErrorBoundaryWithRetry fallback={(error) => <div>{error.message}</div>}>
      <React.Suspense fallback={<Loading />}>
        <App resource={resource} />
      </React.Suspense>
    </ErrorBoundaryWithRetry>
  )
};
