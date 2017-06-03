
Parse.Cloud.define('moipManager', function (req, res) {

  Parse.Cloud.httpRequest({
    method: req.params.requestMethod,
    url: 'https://sandbox.moip.com.br/v2/' + req.params.pathPlusParams,
    body: req.params.requestBody,
    params: req.params.requestParams,
    headers: {
      "Authorization": "Basic UkhSSUlTQk9XT1AyV1dHV0gwR0FGUzg1TFhVQlVGTzQgOlFNUUZJUlo3V0tCRFc1SEo2WU1ZN0M3TlFBQzlVTk9BWVpFN0ZZUkw=",
      "Content-Type": "application/json; charset=UTF-8"
    }
  }).then(function(httpResponse) {
    return res.success(httpResponse.data)

  }, function(httpResponse) {
    return res.error(httpResponse)
    // console.error('Request failed with response code ' + httpResponse.status);
  });
});

function performMoipRequest(requestMethod, pathPlusParams, requestBody, requestParams) {
    return Parse.Cloud.httpRequest({
      method: requestMethod,
      url: 'https://app.vindi.com.br:443/api/v1/' + pathPlusParams,
      body: requestBody,
      params: requestParams,
      headers: {
        "Authorization": "Basic UkhSSUlTQk9XT1AyV1dHV0gwR0FGUzg1TFhVQlVGTzQgOlFNUUZJUlo3V0tCRFc1SEo2WU1ZN0M3TlFBQzlVTk9BWVpFN0ZZUkw=",
        "Content-Type": "application/json; charset=UTF-8"
      }
    })
}

exports.performMoipRequest = performMoipRequest;
