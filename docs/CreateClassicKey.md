# akeyless.CreateClassicKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alg** | **String** | Classic Key type; options: [AES256GCM, RSA2048] | 
**key** | **String** | The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used) | [optional] 
**keyData** | **String** | Base64-encoded classic key value | [optional] 
**metadata** | **String** | Metadata about the classic key | [optional] 
**name** | **String** | ClassicKey name | 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**tags** | **[String]** | List of the tags attached to this classic key | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 


