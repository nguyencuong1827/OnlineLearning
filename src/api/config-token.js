const configToken = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export default configToken;
