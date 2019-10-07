const fetchProducts = () => {
  return async dispatch => {
    try {
      dispatch({
        type: 'FETCH_POST_PENDING',
      });

      const data = await getPosts();

      dispatch({
        type: 'FETCH_POST_SUCCESS',
        data,
      });
    } catch (err) {
      dispatch({
        type: 'FETCH_POST_ERROR',
        err,
      })
    }
  }
};
