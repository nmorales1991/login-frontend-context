
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

export const routes = [
    {
      path:"/login",
      exact:true,
      component: Login,
      authenticated:false
    },
    {
      path:"/",
      exact:true,
      component: Dashboard,
      authenticated:true
    }
  ]