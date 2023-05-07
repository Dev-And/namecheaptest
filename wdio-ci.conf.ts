import * as wdioConf from './wdio.conf.js'


export const config = {
    ...wdioConf.config,
    capabilities: [ {
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['headless', 'disable-gpu']
        }
    }
    ],
}