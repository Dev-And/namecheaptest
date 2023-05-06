import LoginPage from "./login.page.js";
import HomePage from "./home.page.js";
import ProfilePage from "./profile.page.js";


export default new class App {
    public get loginPage() {
        return LoginPage;
    }

    public get homePage() {
        return HomePage;
    }

    public get profilePage() {
        return ProfilePage;
    }
}

