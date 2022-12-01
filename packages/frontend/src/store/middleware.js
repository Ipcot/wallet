function middleware(getDefaultMiddleware) {
  return getDefaultMiddleware({
    serializableCheck: false,
  });
}

export default middleware;
