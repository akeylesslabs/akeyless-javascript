# akeyless.GatewayCreateProducerAws

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessMode** | **String** |  | [optional] 
**adminRotationIntervalDays** | **Number** | Admin credentials rotation interval (days) | [optional] [default to 0]
**awsAccessKeyId** | **String** | Access Key ID | [optional] 
**awsAccessSecretKey** | **String** | Secret Access Key | [optional] 
**awsExternalId** | **String** | The AWS External ID associated with the AWS role (relevant only for assume_role mode) | [optional] 
**awsRoleArns** | **String** | AWS Role ARNs to be used in the Assume Role operation (relevant only for assume_role mode) | [optional] 
**awsUserConsoleAccess** | **Boolean** | AWS User console access | [optional] [default to false]
**awsUserGroups** | **String** | AWS User groups | [optional] 
**awsUserPolicies** | **String** | AWS User policies | [optional] 
**awsUserProgrammaticAccess** | **Boolean** | Enable AWS User programmatic access | [optional] [default to true]
**customUsernameTemplate** | **String** | Customize how temporary usernames are generated using go template | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**enableAdminRotation** | **Boolean** | Automatic admin credentials rotation | [optional] [default to false]
**itemCustomFields** | **{String: String}** | Additional custom fields to associate with the item | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | Dynamic secret name | 
**passwordLength** | **String** | The length of the password to be generated | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**region** | **String** | Region | [optional] [default to &#39;us-east-2&#39;]
**secureAccessAwsAccountId** | **String** | The AWS account id | [optional] 
**secureAccessAwsNativeCli** | **Boolean** | The AWS native cli | [optional] 
**secureAccessBastionIssuer** | **String** | Deprecated. use secure-access-certificate-issuer | [optional] 
**secureAccessCertificateIssuer** | **String** | Path to the SSH Certificate Issuer for your Akeyless Secure Access | [optional] 
**secureAccessDelay** | **Number** | The delay duration, in seconds, to wait after generating just-in-time credentials. Accepted range: 0-120 seconds | [optional] 
**secureAccessEnable** | **String** | Enable/Disable secure remote access [true/false] | [optional] 
**secureAccessWeb** | **Boolean** | Enable Web Secure Remote Access | [optional] [default to true]
**secureAccessWebBrowsing** | **Boolean** | Secure browser via Akeyless&#39;s Secure Remote Access (SRA) | [optional] [default to false]
**secureAccessWebProxy** | **Boolean** | Web-Proxy via Akeyless&#39;s Secure Remote Access (SRA) | [optional] [default to false]
**sessionTags** | **String** | String of Key value session tags comma separated, relevant only for Assumed Role | [optional] 
**tags** | **[String]** | Add tags attached to this object | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**transitiveTagKeys** | **String** | String of transitive tag keys space separated, relevant only for Assumed Role | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


