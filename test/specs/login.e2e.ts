import HomePage from "../pageobjects/home.page.js";
import LoginPage from "../pageobjects/login.page.js";
import data from "../../data/testdata.json" assert {type: 'json'}
import {assert} from "chai";


describe('Authorization page (Welcome back!)', () => {

    let credentials = data.credentials;

    it('Open Home page', async () => {
        await HomePage.open();
        let isHomePageOpened = await HomePage.loginButton.isDisplayed();
        assert.isTrue(isHomePageOpened, 'The home page has to be opened');
    });

    it('Click the "Login" button', async () => {
        await HomePage.loginButton.click();
        await LoginPage.authPage.waitForDisplayed({ timeout: 3000 });
        let isLoginPageOpened = await LoginPage.authPage.isDisplayed();
        assert.isTrue(isLoginPageOpened, 'The authorization page has to be opened');
    });

    it('On the authorization page enter a valid email and password for the previously registered user (to check the entered password, click on the "eye” icon in the password field.)\n', async () => {
        await LoginPage.inputEmail.setValue(credentials.email);
        await LoginPage.inputPassword.setValue(credentials.password);
        await LoginPage.passwordHint.click();

        let enteredPassword = await LoginPage.inputPassword.getValue();
        let expectedPassword = credentials.password;
        assert.equal(enteredPassword, expectedPassword, 'After clicking on the "eye" icon for the password field, the password should be displayed');
    });

    it('Click the "Login" button', async () => {
        await LoginPage.btnSubmit.click();
        await HomePage.accountDropdown.waitForDisplayed({ timeout: 3000 });

        let authorizedEmail = (await HomePage.accountDropdown.getText()).toLowerCase();
        await HomePage.accountDropdown.click();
        await HomePage.accountDropdownList.waitForDisplayed({ timeout: 3000 });
        let isDropDownDisplayed = await HomePage.accountDropdownList.isDisplayed();

        let actualResult = {
            authorizedEmail,
            isDropDownDisplayed
        }
        let expectedResult = {
            authorizedEmail: credentials.email,
            isDropDownDisplayed: true

        }
        assert.deepEqual(actualResult, expectedResult, 'The "Log in" button has to be changed to the "User@email" button (with the dropdown menu) from the right side in the Header of the page');

    });
});