useEffect(() => {
  const fetchData = async () => {
    try {
      const data = await getPosts();

      setData(data);
      setIsLoading(false);
    } catch (err) {
      console.log('err: ', err);
      setError(err);
      setIsLoading(false);
    }
  };

  fetchData();
}, []);
