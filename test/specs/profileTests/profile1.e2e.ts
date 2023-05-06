import data from "../../../data/testdata.json";
import App from "../../pageobjects/app";
import {assert} from "chai";

describe('Authorization page. Not registered user', () => {

    let credentials = data.credentials;
    let expectedFields;
    before(async ()=> {
        await App.loginPage.open();
        await App.loginPage.login(credentials.email, credentials.password);
        await App.homePage.accountDropdown.click();
        await App.homePage.profilePage.click();

        expectedFields = await App.profilePage.getProfileFields();
        await App.homePage.accountDropdown.click();
        await App.homePage.logout.click();
    });

    it('Log in to Account\nClick on the triangle near the "User@email" button\nIn the drop-down menu select "Profile"', async () => {
        await App.loginPage.login(credentials.email, credentials.password);
        await App.homePage.accountDropdown.click();
        await App.homePage.profilePage.click();
        let isProfilePageOpened; // TODO
        let actualFields = await App.profilePage.getProfileFields();
        assert.isTrue(isProfilePageOpened, "After clicking on the \"Profile\" opened page \"Profile\" should be displayed");
        assert.deepEqual(actualFields, expectedFields, 'Check that opened page has to contain values in the next fields and compare them with values from precondition:');
    });
});