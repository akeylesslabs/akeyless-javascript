# akeyless.RotatedSecretUpdateAzure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addTag** | **[String]** | List of the new tags that will be attached to this item | [optional] 
**apiId** | **String** | API ID to rotate (relevant only for rotator-type&#x3D;api-key) | [optional] 
**apiKey** | **String** | API key to rotate (relevant only for rotator-type&#x3D;api-key) | [optional] 
**applicationId** | **String** | Id of the azure app that hold the serect to be rotated (relevant only for rotator-type&#x3D;api-key &amp; authentication-credentials&#x3D;use-target-creds) | [optional] 
**authenticationCredentials** | **String** | The credentials to connect with use-user-creds/use-target-creds | [optional] [default to &#39;use-user-creds&#39;]
**autoRotate** | **String** | Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation [true/false] | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Description of the object | [optional] [default to &#39;default_metadata&#39;]
**explicitlySetSa** | **String** | If set, explicitly provide the storage account details [true/false] | [optional] [default to &#39;false&#39;]
**graceRotation** | **String** | Create a new access key without deleting the old key from AWS/Azure/GCP for backup (relevant only for AWS/Azure/GCP) [true/false] | [optional] 
**graceRotationHour** | **Number** | The Hour of the grace rotation in UTC | [optional] 
**graceRotationInterval** | **String** | The number of days to wait before deleting the old key (must be bigger than rotation-interval) | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**keepPrevVersion** | **String** | Whether to keep previous version [true/false]. If not set, use default according to account settings | [optional] 
**key** | **String** | The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used) | [optional] 
**maxVersions** | **String** | Set the maximum number of versions, limited by the account settings defaults. | [optional] 
**name** | **String** | Rotated secret name | 
**newName** | **String** | New item name | [optional] 
**passwordLength** | **String** | The length of the password to be generated | [optional] 
**resourceGroupName** | **String** | The resource group name (only relevant when explicitly-set-sa&#x3D;true) | [optional] 
**resourceName** | **String** | The name of the storage account (only relevant when explicitly-set-sa&#x3D;true) | [optional] 
**rmTag** | **[String]** | List of the existent tags that will be removed from this item | [optional] 
**rotateAfterDisconnect** | **String** | Rotate the value of the secret after SRA session ends [true/false] | [optional] [default to &#39;false&#39;]
**rotationEventIn** | **[String]** | How many days before the rotation of the item would you like to be notified | [optional] 
**rotationHour** | **Number** | The Hour of the rotation in UTC | [optional] 
**rotationInterval** | **String** | The number of days to wait between every automatic key rotation (1-365) | [optional] 
**secureAccessDisableConcurrentConnections** | **Boolean** | Enable this flag to prevent simultaneous use of the same secret | [optional] 
**secureAccessEnable** | **String** | Enable/Disable secure remote access [true/false] | [optional] 
**secureAccessUrl** | **String** | Destination URL to inject secrets | [optional] 
**secureAccessWeb** | **Boolean** | Enable Web Secure Remote Access | [optional] [default to false]
**secureAccessWebBrowsing** | **Boolean** | Secure browser via Akeyless&#39;s Secure Remote Access (SRA) | [optional] [default to false]
**secureAccessWebProxy** | **Boolean** | Web-Proxy via Akeyless&#39;s Secure Remote Access (SRA) | [optional] [default to false]
**storageAccountKeyName** | **String** | The name of the storage account key to rotate [key1/key2/kerb1/kerb2] (relevat to azure-storage-account) | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**username** | **String** | The user principal name to rotate his password (relevant only for rotator-type&#x3D;password) | [optional] 


