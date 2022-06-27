# akeyless.GatewayUpdateItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addTag** | **[String]** | List of the new tags that will be attached to this item | [optional] 
**apiId** | **String** |  | [optional] 
**apiKey** | **String** |  | [optional] 
**autoRotate** | **String** | Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation | [optional] 
**customPayload** | **String** |  | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this item | [optional] 
**keepPrevVersion** | **String** |  | [optional] 
**key** | **String** | The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used) | [optional] 
**name** | **String** | Item name | 
**newMetadata** | **String** | New item metadata | [optional] [default to &#39;default_metadata&#39;]
**newName** | **String** | New item name | [optional] 
**newVersion** | **Boolean** | Deprecated | [optional] 
**rmTag** | **[String]** | List of the existent tags that will be removed from this item | [optional] 
**rotatedPassword** | **String** |  | [optional] 
**rotatedUsername** | **String** |  | [optional] 
**rotationHour** | **Number** | The Rotation Hour | [optional] [default to 0]
**rotationInterval** | **String** | The number of days to wait between every automatic key rotation (1-365) | [optional] 
**rotatorCredsType** | **String** | The rotation credentials type | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**type** | **String** | Item type | 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


