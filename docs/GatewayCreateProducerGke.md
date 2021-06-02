# akeyless.GatewayCreateProducerGke

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gatewayUrl** | **String** | Gateway url | [optional] [default to &#39;http://localhost:8000&#39;]
**gkeClusterCert** | **String** | GKE cluster CA certificate | 
**gkeClusterEndpoint** | **String** | GKE cluster URL endpoint | 
**gkeClusterName** | **String** | GKE cluster name | 
**gkeServiceAccountEmail** | **String** | GKE service account email | 
**name** | **String** | Producer name | 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 


