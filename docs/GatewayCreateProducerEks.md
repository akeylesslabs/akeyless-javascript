# akeyless.GatewayCreateProducerEks

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eksAccessKeyId** | **String** | Access Key ID | 
**eksAssumeRole** | **String** | IAM assume role | [optional] 
**eksClusterCaCert** | **String** | EKS cluster CA certificate | 
**eksClusterEndpoint** | **String** | EKS cluster URL endpoint | 
**eksClusterName** | **String** | EKS cluster name | 
**eksRegion** | **String** | Region | [optional] [default to &#39;us-east-2&#39;]
**eksSecretAccessKey** | **String** | Secret Access Key | 
**name** | **String** | Producer name | 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 


