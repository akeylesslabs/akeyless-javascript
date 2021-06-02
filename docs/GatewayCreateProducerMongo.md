# akeyless.GatewayCreateProducerMongo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gatewayUrl** | **String** | Gateway url | [optional] [default to &#39;http://localhost:8000&#39;]
**mongodbAtlasApiPrivateKey** | **String** | MongoDB Atlas private key | [optional] 
**mongodbAtlasApiPublicKey** | **String** | MongoDB Atlas public key | [optional] 
**mongodbAtlasProjectId** | **String** | MongoDB Atlas project ID | [optional] 
**mongodbDefaultAuthDb** | **String** | MongoDB server default authentication database | [optional] 
**mongodbHostPort** | **String** | MongoDB server host and port | [optional] 
**mongodbName** | **String** | MongoDB Name | 
**mongodbPassword** | **String** | MongoDB server password. You will prompted to provide a password if it will not appear in CLI parameters | [optional] 
**mongodbRoles** | **String** | MongoDB Roles | [optional] [default to &#39;[]&#39;]
**mongodbServerUri** | **String** | MongoDB server URI | [optional] 
**mongodbUriOptions** | **String** | MongoDB server URI options | [optional] 
**mongodbUsername** | **String** | MongoDB server username | [optional] 
**name** | **String** | Producer name | 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**producerEncryptionKeyName** | **String** | Encrypt producer with following key | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 


