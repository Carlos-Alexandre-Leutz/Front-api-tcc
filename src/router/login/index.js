import { RouterView } from "vue-router";
const Login = () =>
    import ("../../views/login");


const LoginViews = {
    path: "login",
    name: "Login",
    component: RouterView,
    children: [{
            path: "/login",
            name: "Login",
            component: Login
        },

    ]
};


export default LoginViews;