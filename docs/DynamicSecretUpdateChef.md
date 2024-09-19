# akeyless.DynamicSecretUpdateChef

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**chefOrgs** | **String** | Organizations | [optional] 
**chefServerKey** | **String** | Server key | [optional] 
**chefServerUrl** | **String** | Server URL | [optional] 
**chefServerUsername** | **String** | Server username | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Description of the object | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | Dynamic secret name | 
**newName** | **String** | Dynamic secret name | [optional] 
**passwordLength** | **String** | The length of the password to be generated | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**skipSsl** | **Boolean** | Skip SSL | [optional] [default to true]
**tags** | **[String]** | Add tags attached to this object | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


