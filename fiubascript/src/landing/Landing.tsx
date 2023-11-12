import { UserNotLoggedInPage } from "../auth/UserNotLoggedInPage";
import { isUserLoggedIn } from "../auth/authFunctions"
import { Navbar } from "../navbar/Navbar";

export const Landing = () => {
    const userLoggedIn = isUserLoggedIn();

    return(
        userLoggedIn ?

        <Navbar/>
        :
        <UserNotLoggedInPage />
    )
}