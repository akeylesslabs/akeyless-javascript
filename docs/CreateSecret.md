# akl.CreateSecret

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | **String** | Metadata about the secret | [optional] 
**multilineValue** | **Boolean** | The provided value is a multiline value (separated by &#39;\\n&#39;) | [optional] 
**name** | **String** | Secret name | 
**protectionKey** | **String** | The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used) | [optional] 
**tags** | **[String]** | List of the tags attached to this secret | [optional] 
**token** | **String** | Use a specific profile from your akeyless/profiles/ folder | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**value** | **String** | The secret value | 


