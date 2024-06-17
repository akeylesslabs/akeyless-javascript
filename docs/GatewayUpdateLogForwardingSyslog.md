# akeyless.GatewayUpdateLogForwardingSyslog

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable** | **String** | Enable Log Forwarding [true/false] | [optional] [default to &#39;true&#39;]
**enableTls** | **Boolean** | Enable tls relevant only for network type TCP | [optional] 
**formatter** | **String** | Syslog formatter [text/cef] | [optional] [default to &#39;text&#39;]
**host** | **String** | Syslog host | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**network** | **String** | Syslog network [tcp/udp] | [optional] [default to &#39;tcp&#39;]
**outputFormat** | **String** | Logs format [text/json] | [optional] [default to &#39;text&#39;]
**pullInterval** | **String** | Pull interval in seconds | [optional] [default to &#39;10&#39;]
**targetTag** | **String** | Syslog target tag | [optional] [default to &#39;use-existing&#39;]
**tlsCertificate** | **String** | Syslog tls certificate | [optional] [default to &#39;use-existing&#39;]
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


