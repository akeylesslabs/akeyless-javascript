# akeyless.GatewayCreateProducerAws

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessMode** | **String** |  | [optional] 
**adminRotationIntervalDays** | **Number** | Admin credentials rotation interval (days) | [optional] [default to 0]
**awsAccessKeyId** | **String** | Access Key ID | [optional] 
**awsAccessSecretKey** | **String** | Secret Access Key | [optional] 
**awsRoleArns** | **String** | AWS Role ARNs to be used in the Assume Role operation (relevant only for assume_role mode) | [optional] 
**awsUserConsoleAccess** | **Boolean** | AWS User console access | [optional] [default to false]
**awsUserGroups** | **String** | AWS User groups | [optional] 
**awsUserPolicies** | **String** | AWS User policies | [optional] 
**awsUserProgrammaticAccess** | **Boolean** | AWS User programmatic access | [optional] [default to true]
**enableAdminRotation** | **Boolean** | Automatic admin credentials rotation | [optional] [default to false]
**name** | **String** | Producer name | 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**region** | **String** | Region | [optional] [default to &#39;us-east-2&#39;]
**secureAccessAwsAccountId** | **String** |  | [optional] 
**secureAccessAwsNativeCli** | **Boolean** |  | [optional] 
**secureAccessBastionIssuer** | **String** |  | [optional] 
**secureAccessEnable** | **String** |  | [optional] 
**secureAccessWeb** | **Boolean** |  | [optional] 
**secureAccessWebBrowsing** | **Boolean** |  | [optional] 
**secureAccessWebProxy** | **Boolean** |  | [optional] 
**tags** | **[String]** | List of the tags attached to this secret | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


