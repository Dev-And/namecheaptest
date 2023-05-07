import App from "../../pageobjects/app.js";
import data from "../../../data/testdata.json" assert {type: 'json'}
import {assert} from "chai";
import allureReporter from "@wdio/allure-reporter";


describe('Login3', () => {

    let credentials = data.credentials;

    it('Authorization page. Invalid email', async () => {
        await App.homePage.open();
        let isHomePageOpened = await App.homePage.loginButton.isDisplayed();
        assert.isTrue(isHomePageOpened, 'The home page has to be opened');
        await allureReporter.addStep('1.Open Home page');

        await App.homePage.loginButton.click();
        await App.loginPage.authPage.waitForDisplayed({ timeout: 3000 });
        let isLoginPageOpened = await App.loginPage.authPage.isDisplayed();
        assert.isTrue(isLoginPageOpened, 'The authorization page has to be opened');
        await allureReporter.addStep('2.Click the "Login" button');

        await App.loginPage.inputEmail.setValue(credentials.invalidEmail);
        await App.loginPage.inputPassword.setValue(credentials.password);
        await App.loginPage.passwordHint.click();
        let enteredPassword = await App.loginPage.inputPassword.getValue();
        let expectedPassword = credentials.password;
        assert.equal(enteredPassword, expectedPassword, 'After clicking on the "eye" icon for the password field, the password should be displayed');
        await allureReporter.addStep('3.On the authorization page enter not registered email and any password (to check the entered password, click on the "eye” icon in the password field.)\n');

        await App.loginPage.btnSubmit.click();
        await App.loginPage.errorTooltip.waitForDisplayed({ timeout: 3000 });
        await browser.pause(3000);
        let actualMessage = await App.loginPage.errorTooltip.getText();
        let expectedMessage = 'Uh oh! This\nisn’t an email';
        assert.equal(actualMessage, expectedMessage, `Error message such as: ${expectedMessage} should be displayed\n`);
        await allureReporter.addStep('4.Click the "Login" button');
    });
});