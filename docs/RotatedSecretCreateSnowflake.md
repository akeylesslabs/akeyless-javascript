# akeyless.RotatedSecretCreateSnowflake

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authenticationCredentials** | **String** | The credentials to connect with use-user-creds/use-target-creds | [optional] [default to &#39;use-user-creds&#39;]
**autoRotate** | **String** | Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation [true/false] | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Description of the object | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**key** | **String** | The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used) | [optional] 
**maxVersions** | **String** | Set the maximum number of versions, limited by the account settings defaults. | [optional] 
**name** | **String** | Rotated secret name | 
**passwordLength** | **String** | The length of the password to be generated | [optional] 
**privateKey** | **String** | RSA Private key (base64 encoded) to rotate (relevant only for rotator-type&#x3D;key) | [optional] 
**privateKeyFileName** | **String** | The path to the file containing the private key (relevant only for rotator-type&#x3D;key) | [optional] 
**rotatedPassword** | **String** | rotated-username password (relevant only for rotator-type&#x3D;password) | [optional] 
**rotatedUsername** | **String** | username to be rotated, if selected use-self-creds at rotator-creds-type, this username will try to rotate it&#39;s own password, if use-target-creds is selected, target credentials will be use to rotate the rotated-password (relevant only for rotator-type&#x3D;password or rotator-type&#x3D;key) | [optional] 
**rotationEventIn** | **[String]** | How many days before the rotation of the item would you like to be notified | [optional] 
**rotationHour** | **Number** | The Hour of the rotation in UTC | [optional] 
**rotationInterval** | **String** | The number of days to wait between every automatic key rotation (1-365) | [optional] 
**rotatorType** | **String** | The rotator type. options: [target/password/key] | 
**tags** | **[String]** | Add tags attached to this object | [optional] 
**targetName** | **String** | Target name | 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


