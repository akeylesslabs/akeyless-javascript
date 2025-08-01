# akeyless.RotatedSecretUpdateAws

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addTag** | **[String]** | List of the new tags that will be attached to this item | [optional] 
**apiId** | **String** | API ID to rotate (relevant only for rotator-type&#x3D;api-key) | [optional] 
**apiKey** | **String** | API key to rotate (relevant only for rotator-type&#x3D;api-key) | [optional] 
**authenticationCredentials** | **String** | The credentials to connect with use-user-creds/use-target-creds | [optional] [default to &#39;use-user-creds&#39;]
**autoRotate** | **String** | Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation [true/false] | [optional] 
**awsRegion** | **String** | Aws Region | [optional] [default to &#39;us-east-2&#39;]
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Description of the object | [optional] [default to &#39;default_metadata&#39;]
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
**rmTag** | **[String]** | List of the existent tags that will be removed from this item | [optional] 
**rotateAfterDisconnect** | **String** | Rotate the value of the secret after SRA session ends [true/false] | [optional] [default to &#39;false&#39;]
**rotationEventIn** | **[String]** | How many days before the rotation of the item would you like to be notified | [optional] 
**rotationHour** | **Number** | The Hour of the rotation in UTC | [optional] 
**rotationInterval** | **String** | The number of days to wait between every automatic key rotation (1-365) | [optional] 
**secureAccessAwsAccountId** | **String** | The AWS account id | [optional] 
**secureAccessAwsNativeCli** | **Boolean** | The AWS native cli | [optional] 
**secureAccessBastionIssuer** | **String** | Deprecated. use secure-access-certificate-issuer | [optional] 
**secureAccessCertificateIssuer** | **String** | Path to the SSH Certificate Issuer for your Akeyless Secure Access | [optional] 
**secureAccessEnable** | **String** | Enable/Disable secure remote access [true/false] | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


