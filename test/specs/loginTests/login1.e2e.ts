import App from "../../pageobjects/app.js";
import data from "../../../data/testdata.json" assert {type: 'json'}
import allureReporter from '@wdio/allure-reporter';
import {assert} from "chai";


describe('Login', () => {

    let credentials = data.credentials;

    it('Authorization page (Welcome back!)', async () => {
        await App.homePage.open();
        let isHomePageOpened = await App.homePage.loginButton.isDisplayed();
        assert.isTrue(isHomePageOpened, 'The home page has to be opened');
        await allureReporter.addStep('1.Open Home page');

        await App.homePage.loginButton.click();
        await App.loginPage.authPage.waitForDisplayed({ timeout: 3000 });
        let isLoginPageOpened = await App.loginPage.authPage.isDisplayed();
        assert.isTrue(isLoginPageOpened, 'The authorization page has to be opened');
        await allureReporter.addStep('2.Click the "Login" button');

        await App.loginPage.inputEmail.setValue(credentials.email);
        await App.loginPage.inputPassword.setValue(credentials.password);
        await App.loginPage.passwordHint.click();

        let enteredPassword = await App.loginPage.inputPassword.getValue();
        let expectedPassword = credentials.password;
        assert.equal(enteredPassword, expectedPassword, 'After clicking on the "eye" icon for the password field, the password should be displayed');
        await allureReporter.addStep('3.On the authorization page enter a valid email and password for the previously registered user (to check the entered password, click on the "eye” icon in the password field.)\n');


        await App.loginPage.btnSubmit.click();
        await App.homePage.accountDropdown.waitForDisplayed({ timeout: 3000 });

        let authorizedEmail = (await App.homePage.accountDropdown.getText()).toLowerCase();
        await App.homePage.accountDropdown.click();
        await App.homePage.accountDropdownList.waitForDisplayed({ timeout: 3000 });
        let isDropDownDisplayed = await App.homePage.accountDropdownList.isDisplayed();

        let actualResult = {
            authorizedEmail,
            isDropDownDisplayed
        }
        let expectedResult = {
            authorizedEmail: credentials.email,
            isDropDownDisplayed: true

        }
        assert.deepEqual(actualResult, expectedResult, 'The "Log in" button has to be changed to the "User@email" button (with the dropdown menu) from the right side in the Header of the page');
        await allureReporter.addStep('4.Click the "Login" button');

    });
});