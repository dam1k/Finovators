const authenticatedRoot = "/u";

const routes = {
  authenticated: {
    root: authenticatedRoot,
    dashboard: authenticatedRoot + "/dashboard",
  },
  login: "/login",
  register: "/register",
};

export default routes;
