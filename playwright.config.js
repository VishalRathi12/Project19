const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    use: {
        headless: true,  // Run in headless mode
        screenshot: 'on', // Take screenshots on failure
        video: 'retain-on-failure', // Capture video on failure
    },
    reporter: [['html', { open: 'never' }]] // HTML report generation
});