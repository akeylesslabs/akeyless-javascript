# akeyless.GwUpdateRemoteAccessSessionLogsSumologic

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable** | **String** | Enable Log Forwarding [true/false] | [optional] [default to &#39;true&#39;]
**endpoint** | **String** | Sumologic endpoint URL | [optional] 
**host** | **String** | Sumologic host | [optional] [default to &#39;use-existing&#39;]
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**outputFormat** | **String** | Logs format [text/json] | [optional] [default to &#39;text&#39;]
**pullInterval** | **String** | Pull interval in seconds | [optional] [default to &#39;10&#39;]
**sumologicTags** | **String** | A comma-separated list of Sumologic tags | [optional] [default to &#39;use-existing&#39;]
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


