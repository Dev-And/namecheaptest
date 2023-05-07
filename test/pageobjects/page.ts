
export default class Page {
    async open (path: string = '') {
        await browser.url(`https://www.sbzend.ssls.com/${path}`);
    }
}
