import App from "../../pageobjects/app.js";
import data from "../../../data/testdata.json" assert {type: 'json'}
import {assert} from "chai";


describe('Authorization page. Not registered user', () => {

    let credentials = data.credentials;

    it('Open Home page', async () => {
        await App.homePage.open();
        let isHomePageOpened = await App.homePage.loginButton.isDisplayed();
        assert.isTrue(isHomePageOpened, 'The home page has to be opened');
    });

    it('Click the "Login" button', async () => {
        await App.homePage.loginButton.click();
        await App.loginPage.authPage.waitForDisplayed({ timeout: 3000 });
        let isLoginPageOpened = await App.loginPage.authPage.isDisplayed();
        assert.isTrue(isLoginPageOpened, 'The authorization page has to be opened');
    });

    it('On the authorization page enter not registered email and any password (to check the entered password, click on the "eye” icon in the password field.)\n', async () => {
        await App.loginPage.inputEmail.setValue(credentials.notRegisteredEmail);
        await App.loginPage.inputPassword.setValue(credentials.password);
        await App.loginPage.passwordHint.click();

        let enteredPassword = await App.loginPage.inputPassword.getValue();
        let expectedPassword = credentials.password;
        assert.equal(enteredPassword, expectedPassword, 'After clicking on the "eye" icon for the password field, the password should be displayed');
    });

    it('Click the "Login" button', async () => {
        await App.loginPage.btnSubmit.click();
        await App.loginPage.notificiation.waitForDisplayed({ timeout: 3000 });
        await browser.pause();
        let actualMessage = await App.loginPage.notificiation.getText();
        let expectedMessage = 'Uh oh! Email or password is incorrect';
        assert.equal(actualMessage, expectedMessage, `Error message such as: ${expectedMessage} should be displayed\n`)
    });
});