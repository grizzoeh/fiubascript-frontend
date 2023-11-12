import { UserNotLoggedInPage } from "../auth/UserNotLoggedInPage";
import { isUserLoggedIn } from "../auth/authFunctions"
import { Navbar } from "../navbar/Navbar";

export const Home = () => {
    const userLoggedIn = isUserLoggedIn();
    if (!userLoggedIn) {
        window.location.href = '/login'
    }

    return(
        userLoggedIn ?

        <Navbar/>

        // pagina de home
        :
        <UserNotLoggedInPage />
    )
}