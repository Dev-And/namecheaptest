import data from "../../../data/testdata.json" assert {type: 'json'};
import App from "../../pageobjects/app.js";
import {assert} from "chai";
import allureReporter from "@wdio/allure-reporter";

describe('Profile1',  () => {

    let credentials = data.credentials;
    let expectedFields;

    before(async ()=> {
        await App.loginPage.open();
        await App.loginPage.login(credentials.email, credentials.password);
        await allureReporter.addStep('1.Log in to the user’s account');

        await App.homePage.accountDropdown.click();
        await App.homePage.profilePage.click();
        await allureReporter.addStep('2.Open the “Profile” page');

        expectedFields = await App.profilePage.getProfileFields();
        await allureReporter.addStep('3.Save values(Do not change saved values) of such fields in Profile - Name, Email, Phone, Address, Support Pin, Newsletter');

        await App.homePage.accountDropdown.click();
        await App.homePage.logout.click();
        await allureReporter.addStep('4.Logout');
    });

    it('My profile page. Client area', async () => {
        await App.loginPage.authPage.waitForDisplayed();
        await App.loginPage.login(credentials.email, credentials.password);
        await allureReporter.addStep('1.Log in to Account');

        await App.homePage.accountDropdown.click();
        await allureReporter.addStep('2.Click on the triangle near the "User@email" button');

        await App.homePage.profilePage.click();
        await App.profilePage.profile.waitForDisplayed();
        let isProfilePageOpened = await App.profilePage.profile.isDisplayed();
        assert.isTrue(isProfilePageOpened, "After clicking on the \"Profile\" opened page \"Profile\" should be displayed");
        await allureReporter.addStep('3.In the drop-down menu select "Profile"');

        let actualFields = await App.profilePage.getProfileFields();
        assert.deepEqual(actualFields, expectedFields, 'Check that opened page has to contain values in the next fields and compare them with values from precondition:');
        await allureReporter.addStep('4.Check profile fields');
    });
});