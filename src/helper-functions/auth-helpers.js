import axios from "axios";


const loginHandler = async (e, boolFunc, email, pass, navigate) => {
    e.preventDefault();
    try {
        const response = await axios.post(`/api/auth/login`, {
            email: "gkool@neog.camp",
            password: "gkool",
        });
        boolFunc((prev) => !prev);

        // saving the encodedToken in the localStorage
        localStorage.setItem("token", response.data.encodedToken);
        localStorage.setItem("userData", JSON.stringify(response.data.foundUser));
        navigate("/");
    } catch (error) {
        console.log(error);
    }
};

const logoutHandler = (boolFunc) => {
    localStorage.clear();
    boolFunc((prev) => !prev);
};

export { loginHandler, logoutHandler };