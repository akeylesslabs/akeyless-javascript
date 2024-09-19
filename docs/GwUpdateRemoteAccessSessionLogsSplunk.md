# akeyless.GwUpdateRemoteAccessSessionLogsSplunk

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable** | **String** | Enable Log Forwarding [true/false] | [optional] [default to &#39;true&#39;]
**enableTls** | **Boolean** | Enable tls | [optional] 
**index** | **String** | Splunk index | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**outputFormat** | **String** | Logs format [text/json] | [optional] [default to &#39;text&#39;]
**pullInterval** | **String** | Pull interval in seconds | [optional] [default to &#39;10&#39;]
**source** | **String** | Splunk source | [optional] [default to &#39;use-existing&#39;]
**sourceType** | **String** | Splunk source type | [optional] [default to &#39;use-existing&#39;]
**splunkToken** | **String** | Splunk token | [optional] 
**splunkUrl** | **String** | Splunk server URL | [optional] 
**tlsCertificate** | **String** | Splunk tls certificate | [optional] [default to &#39;use-existing&#39;]
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


