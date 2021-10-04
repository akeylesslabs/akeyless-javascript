# akeyless.GatewayCreateProducerEks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eksAccessKeyId** | **String** | Access Key ID | [optional] 
**eksAssumeRole** | **String** | IAM assume role | [optional] 
**eksClusterCaCert** | **String** | EKS cluster CA certificate | [optional] 
**eksClusterEndpoint** | **String** | EKS cluster URL endpoint | [optional] 
**eksClusterName** | **String** | EKS cluster name | [optional] 
**eksRegion** | **String** | Region | [optional] [default to &#39;us-east-2&#39;]
**eksSecretAccessKey** | **String** | Secret Access Key | [optional] 
**name** | **String** | Producer name | 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**secureAccessAllowPortForwading** | **Boolean** |  | [optional] 
**secureAccessBastionIssuer** | **String** |  | [optional] 
**secureAccessClusterEndpoint** | **String** |  | [optional] 
**secureAccessEnable** | **String** |  | [optional] 
**secureAccessWeb** | **Boolean** |  | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 


