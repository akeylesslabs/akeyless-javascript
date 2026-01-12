# akeyless.CertificateDiscovery

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debug** | **Boolean** | Debug mode | [optional] [default to false]
**expirationEventIn** | **[String]** | How many days before the expiration of the certificate would you like to be notified. | [optional] 
**hosts** | **String** | A comma separated list of IPs, CIDR ranges, or DNS names to discovery | 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**portRanges** | **String** | A comma separated list of port ranges Examples: \&quot;80,443\&quot; or \&quot;80,443,8080-8090\&quot; or \&quot;443\&quot; | [optional] [default to &#39;443&#39;]
**protectionKey** | **String** | The name of the key that protects the certificate value | [optional] 
**targetLocation** | **String** | The folder where the results will be saved | 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


