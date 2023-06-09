
import Page from './page.js';

class HomePage extends Page {

    public get loginButton () {
        return $('//*[@type="button"]//span[contains(text(), "Log in")]');
    }

    public get accountDropdown () {
        return $('//*[@class="ssls-dropdown ssls-header-user ssls-header-dropdown"]');
    }

    public get accountDropdownList () {
        return $('//*[@class="ssls-header-dropdown-nav ssls-header-user-nav"]');
    }

    public get profilePage () {
        return $('//*[@class="ssls-header-dropdown-nav ssls-header-user-nav"]//*[@href="/user/profile"]');
    }

    public get logout () {
        return $('//*[text()=\' Log out\']');
    }
}

export default new HomePage();
