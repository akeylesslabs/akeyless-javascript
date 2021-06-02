# akeyless.GatewayCreateProducerMySQL

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dbServerCertificates** | **String** | (Optional) DB server certificates | [optional] 
**dbServerName** | **String** | (Optional) Server name for certificate verification | [optional] 
**gatewayUrl** | **String** | Gateway url | [optional] [default to &#39;http://localhost:8000&#39;]
**mysqlDbname** | **String** | MySQL DB Name | 
**mysqlHost** | **String** | MySQL Host | [optional] [default to &#39;127.0.0.1&#39;]
**mysqlPassword** | **String** | MySQL Password | 
**mysqlPort** | **String** | MySQL Port | [optional] [default to &#39;3306&#39;]
**mysqlScreationStatements** | **String** | MySQL Creation statements | [optional] 
**mysqlUsername** | **String** | MySQL Username | 
**name** | **String** | Producer name | 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 


