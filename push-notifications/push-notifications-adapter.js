
function getAdapterForEnvironment() {
    console.log(process.env.NODE_ENV == "production")
    console.log(process.env.NODE_ENV)
    if (process.env.NODE_ENV == "production") {
        return {
            ios: [
                {
                    pfx: './push-notifications/resources/lab262.ohmybox.store.production.p12', // Dev PFX or P12
                    bundleId: 'lab262.ohmybox.store.production',
                    passphrase: 'lab262$$$', // optional password to your p12
                    production: true // Dev
                }
            ]
        }
    } else if (process.env.NODE_ENV == "test") {
        return {
            ios: [
                {
                    pfx: './push-notifications/resources/lab262.ohmybox.store.test.p12', // Dev PFX or P12
                    bundleId: 'lab262.ohmybox.store.test',
                    passphrase: 'lab262$$$', // optional password to your p12
                    production: true // Production
                },
                {
                    pfx: './push-notifications/resources/lab262.ohmybox.store.test-dev.p12', // Dev PFX or P12
                    bundleId: 'lab262.ohmybox.store.test',
                    passphrase: 'lab262$$$', // optional password to your p12
                    production: false // Production
                },
            ]
        }
    } else {
        return {
            ios: [
                {
                    pfx: './push-notifications/resources/lab262.ohmybox.store.dev.p12', // Dev PFX or P12
                    bundleId: 'lab262.ohmybox.store.dev',
                    passphrase: 'lab262$$$', // optional password to your p12
                    production: false // Dev
                }
            ]
        }
    }
}
console.log(getAdapterForEnvironment())
module.exports = getAdapterForEnvironment()