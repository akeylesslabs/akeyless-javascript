# akeyless.GwUpdateRemoteAccessSessionLogsGoogleChronicle

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customerId** | **String** | Google chronicle customer id | [optional] 
**enable** | **String** | Enable Log Forwarding [true/false] | [optional] [default to &#39;true&#39;]
**gcpKey** | **String** | Base64-encoded service account private key text | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**logType** | **String** | Google chronicle log type | [optional] 
**outputFormat** | **String** | Logs format [text/json] | [optional] [default to &#39;text&#39;]
**pullInterval** | **String** | Pull interval in seconds | [optional] [default to &#39;10&#39;]
**region** | **String** | Google chronicle region [eu_multi_region/london/us_multi_region/singapore/tel_aviv] | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


