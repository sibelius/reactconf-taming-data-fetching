const getPostRequest = function* getPostRequest() {
  try {
    const data = yield call(getPosts);

    yield put({
      type: 'FETCH_POST_SUCCESS',
      data,
    })
  } catch (err) {
    yield put({
      type: 'FETCH_POST_ERROR',
      err,
    })
  }
};
