# akeyless.CreateRotatedSecret

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiId** | **String** |  | [optional] 
**apiKey** | **String** |  | [optional] 
**applicationId** | **String** | ApplicationId (used in azure) | 
**authenticationCredentials** | **String** |  | [optional] 
**autoRotate** | **String** | Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation | [optional] 
**customPayload** | **String** |  | [optional] 
**key** | **String** | The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used) | [optional] 
**metadata** | **String** | Metadata about the secret | [optional] 
**name** | **String** | Secret name | 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**rotatedPassword** | **String** |  | [optional] 
**rotatedUsername** | **String** |  | [optional] 
**rotationHour** | **Number** |  | [optional] 
**rotationInterval** | **String** | The number of days to wait between every automatic key rotation (1-365) | [optional] 
**rotatorCredsType** | **String** |  | [optional] 
**rotatorCustomCmd** | **String** |  | [optional] 
**rotatorType** | **String** | Rotator Type | 
**sshPassword** | **String** | Deprecated: use RotatedPassword | [optional] 
**sshUsername** | **String** | Deprecated: use RotatedUser | [optional] 
**tags** | **[String]** | List of the tags attached to this secret | [optional] 
**targetName** | **String** | Target name | 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userAttribute** | **String** | User Attribute | [optional] 
**userDn** | **String** | User DN | [optional] 
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 


