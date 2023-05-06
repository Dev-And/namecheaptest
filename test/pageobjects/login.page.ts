
import Page from './page.js';
import App from "./app";

class LoginPage extends Page {
    public get inputEmail () {
        return $('//*[@type="email"]');
    }

    public get inputPassword () {
        return $('//*[@name="password"]');
    }

    public get btnSubmit () {
        return $('//*[@type="submit"]');
    }

    public get authPage () {
        return $('//*[@class="authorization-page ng-scope"]');
    }

    public get passwordHint () {
        return $('//*[@class="icon icon-eye"]');
    }

    public get notificiation() {
        return $('//*[@class="noty_text"]');
    }

    public get errorTooltip() {
        return $('//*[@class="tooltip-box tooltip-box-error"]')
    }

    public async login (email: string, password: string) {
        await this.inputEmail.setValue(email);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async open () {
        await super.open('authorize');
    }
}

export default new LoginPage();
