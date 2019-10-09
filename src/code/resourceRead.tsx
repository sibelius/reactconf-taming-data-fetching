const resource = {
  read(input) {
    // skip some code
    if (entry !== undefined) {
      // return entry from cache
      return lru.access(entry);
    } else {
      switch (result.status) {
        case Pending: {
          // There is a pending request
          const suspender = result.value;
          throw suspender;
        }
        case Resolved: {
          // Value already resolved
          const value = result.value;
          return value;
        }
        case Rejected: {
          // Request rejected
          const error = result.value;
          throw error;
        }
      }
    }
  },
};
