# akeyless.RotatedSecretCreateGcp

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authenticationCredentials** | **String** | The credentials to connect with use-user-creds/use-target-creds | [optional] [default to &#39;use-user-creds&#39;]
**autoRotate** | **String** | Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation [true/false] | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Description of the object | [optional] 
**gcpKey** | **String** | Base64-encoded service account private key text | [optional] 
**gcpServiceAccountEmail** | **String** | The email of the gcp service account to rotate | [optional] 
**gcpServiceAccountKeyId** | **String** | The key id of the gcp service account to rotate | [optional] 
**graceRotation** | **String** | Create a new access key without deleting the old key from AWS/Azure/GCP for backup (relevant only for AWS/Azure/GCP) [true/false] | [optional] 
**graceRotationHour** | **Number** | The Hour of the grace rotation in UTC | [optional] 
**graceRotationInterval** | **String** | The number of days to wait before deleting the old key (must be bigger than rotation-interval) | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**key** | **String** | The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used) | [optional] 
**maxVersions** | **String** | Set the maximum number of versions, limited by the account settings defaults. | [optional] 
**name** | **String** | Rotated secret name | 
**passwordLength** | **String** | The length of the password to be generated | [optional] 
**rotationEventIn** | **[String]** | How many days before the rotation of the item would you like to be notified | [optional] 
**rotationHour** | **Number** | The Hour of the rotation in UTC | [optional] 
**rotationInterval** | **String** | The number of days to wait between every automatic key rotation (1-365) | [optional] 
**rotatorType** | **String** | The rotator type. options: [target/service-account-rotator] | 
**tags** | **[String]** | Add tags attached to this object | [optional] 
**targetName** | **String** | Target name | 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


