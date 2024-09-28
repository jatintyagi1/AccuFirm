import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN_NAME } from "../config/serverApiConfig";

const useLogout = () => {
    const navigate = useNavigate();

    const logout = (userData, setUserData) => {
        // Check if userData and userData.user exist before accessing name
        if (userData && userData.user) {
            console.log(`before logout: ${userData.user.name}`);
        }

        // Clear user data from context
        setUserData({
            token: undefined,
            user: undefined,
        });

        // Remove token from localStorage
        localStorage.removeItem(ACCESS_TOKEN_NAME);

        if (userData && userData.user) {
            console.log(`after logout: ${userData.user.name}`);
        }

        // Redirect to the login page
        navigate("/login");
    };

    return logout;
};

export default useLogout;
