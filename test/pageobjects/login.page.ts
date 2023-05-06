
import Page from './page.js';

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
        return $('//*[@class="icon icon-eye"]')
    }

    public async login (username: string, password: string) {
    }

    public open () {
        return super.open('login');
    }
}

export default new LoginPage();
