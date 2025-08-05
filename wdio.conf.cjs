require('dotenv').config();
const { ReportAggregator } = require('wdio-html-nice-reporter');

let reportAggregator;

exports.config = {
    runner: 'local',
    specs: [
        './src/features/**/*.feature'
    ],

    suites: {
        login: [
            './src/features/**/login.feature'
        ],
        language: [
            './src/features/**/language-selection.feature'
        ],
        main: [
            './src/features/**/main-page.feature'
        ],
        search: [
            './src/features/**/search.feature'
        ],
        account: [
            './src/features/**/user-account.feature'
        ],
        pdp: [
            './src/features/**/product-details.feature'
        ],
    },
    exclude: [
    ],
    maxInstances: 2,
    capabilities: [
        {
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: [ 
                    '--headless', 
                    '--disable-gpu', 
                    '--window-size=1920,1080',
                    '--disable-dev-shm-usage'],
            },
        },
        {
            browserName: 'firefox',
            'moz:firefoxOptions': {
                args: ['-headless'],
            },
        }
    ],
    logLevel: 'error',
    bail: 0,
    baseUrl: 'https://practicesoftwaretesting.com/',
    waitforTimeout: 15000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec',
        ['html-nice', {
            outputDir: './reports/html-reports/',
            filename: 'report.html',
            reportTitle: 'Test Report Title',
            showInBrowser: false,
            linkScreenshots: true,
            useOnAfterCommandForScreenshot: false,
            collapseTests: true
        }]
    ],

    cucumberOpts: {
        retry: 2,
        require: ['./src/step-definitions/**/*.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        name: [],
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    },


    onPrepare: function (config, capabilities) {
        reportAggregator = new ReportAggregator({
            outputDir: './reports/html-reports/',
            filename: 'master-report.html',
            reportTitle: 'Master Report',
            browserName: 'Chrome, Firefox',
            collapseTests: true
        });

        reportAggregator.clean()
    },
    before: function () {
        require('./src/utils/expect');
    },
    onComplete: async function(exitCode, config, capabilities, results) {
        await reportAggregator.createReport();
    },
    afterStep: async function (
        step,
        scenario,
        result,
        context
    ) {
        if (!result.passed) {
            const browserName = browser.capabilities.browserName.toLowerCase();
            const stepName = `${step.text.replace(/\s+/g, '_')}`;
            const fileName = `${browserName}_${stepName}.png`;

            await browser.saveScreenshot(`./reports/html-reports/screenshots/${fileName}`);
        }
    },
}
