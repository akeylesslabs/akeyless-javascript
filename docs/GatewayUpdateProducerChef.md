# akeyless.GatewayUpdateProducerChef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chefOrgs** | **String** | Organizations | [optional] 
**chefServerKey** | **String** | Server key | [optional] 
**chefServerUrl** | **String** | Server URL | [optional] 
**chefServerUsername** | **String** | Server username | [optional] 
**name** | **String** | Producer name | 
**newName** | **String** | Producer name | [optional] 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**skipSsl** | **Boolean** | Skip SSL | [optional] [default to true]
**tags** | **[String]** | List of the tags attached to this secret | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 

