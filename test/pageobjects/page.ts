
export default class Page {
    public open (path: string = '') {
        return browser.url(`https://www.sbzend.ssls.com/${path}`)
    }
}
