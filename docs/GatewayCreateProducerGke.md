# akeyless.GatewayCreateProducerGke

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gkeAccountKey** | **String** | GKE Service Account key file path | [optional] 
**gkeClusterCert** | **String** | GKE cluster CA certificate | [optional] 
**gkeClusterEndpoint** | **String** | GKE cluster URL endpoint | [optional] 
**gkeClusterName** | **String** | GKE cluster name | [optional] 
**gkeServiceAccountEmail** | **String** | GKE service account email | [optional] 
**name** | **String** | Producer name | 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**secureAccessAllowPortForwading** | **Boolean** |  | [optional] 
**secureAccessBastionIssuer** | **String** |  | [optional] 
**secureAccessClusterEndpoint** | **String** |  | [optional] 
**secureAccessEnable** | **String** |  | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 


