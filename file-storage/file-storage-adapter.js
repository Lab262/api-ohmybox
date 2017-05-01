var GCSAdapter = require('parse-server-gcs-adapter');

var bucketName = "";
 if (process.env.NODE_ENV == "production") {
    bucketName = "ohmynox-production";
 } else if (process.env.NODE_ENV == "test") {
    bucketName = "ohmybox-test";
 } else {
     bucketName = "ohmybox-dev";
 }


var gcsAdapter = new GCSAdapter('52273642793',
								'./file-storage/resources/OhMyBox-6b60aff2a67f.json',
								bucketName , {
									bucketPrefix: '',
									directAccess: true
								});

  module.exports = gcsAdapter
