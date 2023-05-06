
export default class Page {
    async open (path: string = '') {
        await browser.url(`https://www.sbzend.ssls.com/${path}`);
    }

    async getNotification (cb) {
        let attempts: number = 10;
        let result: string;
        do {
            result = await cb;
            await browser.pause(2000);
        } while (!result && attempts-- > 0);
        return result
    }
}
