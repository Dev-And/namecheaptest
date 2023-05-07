import Page from "./page.js";

class ProfilePage extends Page {

    public get nameInput () {
        return $('//*[@class="text ng-binding"][@ng-hide="activeRow === \'name\'"]');
    }

    public get emailInput () {
        return $('//*[@class="text ng-binding"][@ng-hide="activeRow === \'email\'"]');
    }

    public get passwordInput () {
        return $('//*[@class="text ng-binding"][@ng-hide="activeRow === \'password\'"]');
    }

    public get phoneInput () {
        return $('//*[@class="text ng-binding"][@ng-hide="activeRow === \'password\'"]');
    }

    public get addressInput () {
        return $('//*[@class="text ng-binding"][@ng-hide="activeRow === \'phone\'"]');
    }

    public get pinInput () {
        return $('//*[@name="supportPin"]');
    }

    public get news () {
        return $('//*[@name="newsletterOn"]');
    }

    public get profile () {
        return $('//*[@class="profile-page ng-scope"]');
    }

    public async getProfileFields() {
        const fields: {name: string, email: string, password: string, phone: string, address: string, pin: string, news: boolean} = {
            name: await this.nameInput.getValue(),
            email: await this.emailInput.getValue(),
            password: await this.passwordInput.getValue(),
            phone: await this.phoneInput.getValue(),
            address: await this.addressInput.getValue(),
            pin: await this.pinInput.getValue(),
            news: await this.news.isEnabled(),
        };
        return fields;
    }
}

export default new ProfilePage();