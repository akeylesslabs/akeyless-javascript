# akeyless.GatewayUpdateLogForwardingLogstash

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dns** | **String** | Logstash dns | [optional] 
**enable** | **String** | Enable Log Forwarding [true/false] | [optional] [default to &#39;true&#39;]
**enableTls** | **Boolean** | Enable tls | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**outputFormat** | **String** | Logs format [text/json] | [optional] [default to &#39;text&#39;]
**protocol** | **String** | Logstash protocol [tcp/udp] | [optional] 
**pullInterval** | **String** | Pull interval in seconds | [optional] [default to &#39;10&#39;]
**tlsCertificate** | **String** | Logstash tls certificate | [optional] [default to &#39;use-existing&#39;]
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


