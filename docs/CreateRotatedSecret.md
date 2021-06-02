# akeyless.CreateRotatedSecret

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoRotate** | **String** | Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation | [optional] 
**gatewayUrl** | **String** | Gateway url | [optional] [default to &#39;http://localhost:8000&#39;]
**key** | **String** | The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used) | [optional] 
**metadata** | **String** | Metadata about the secret | [optional] 
**name** | **String** | Secret name | 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**rotationHour** | **Number** |  | [optional] 
**rotationInterval** | **String** | The number of days to wait between every automatic key rotation (7-365) | [optional] 
**rotatorCredsType** | **String** |  | [optional] 
**rotatorType** | **String** |  | [optional] 
**sshPassword** | **String** |  | [optional] 
**sshUsername** | **String** |  | [optional] 
**tags** | **[String]** | List of the tags attached to this secret | [optional] 
**targetName** | **String** |  | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 


