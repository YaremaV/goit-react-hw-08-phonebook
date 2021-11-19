const getIsLoggedIn = state => state.auth.isLoggedIn;

const getUsername = state => state.auth.user.name;
const getIsLoading = state => state.auth.isLoading;

const authSelectors = {
  getIsLoggedIn,
  getUsername,
  getIsLoading,
};
export default authSelectors;
