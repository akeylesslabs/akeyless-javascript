# akeyless.TargetUpdateK8s

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **String** | Description of the object | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**k8sAuthType** | **String** | K8S auth type [token/certificate] | [optional] [default to &#39;token&#39;]
**k8sClientCertificate** | **String** | Content of the k8 client certificate (PEM format) in a Base64 format | [optional] 
**k8sClientKey** | **String** | Content of the k8 client private key (PEM format) in a Base64 format | [optional] 
**k8sClusterCaCert** | **String** | K8S cluster CA certificate | [optional] 
**k8sClusterEndpoint** | **String** | K8S cluster URL endpoint | [optional] 
**k8sClusterName** | **String** | K8S cluster name | [optional] 
**k8sClusterToken** | **String** | K8S cluster Bearer token | [optional] 
**keepPrevVersion** | **String** | Whether to keep previous version [true/false]. If not set, use default according to account settings | [optional] 
**key** | **String** | The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used) | [optional] 
**maxVersions** | **String** | Set the maximum number of versions, limited by the account settings defaults. | [optional] 
**name** | **String** | Target name | 
**newName** | **String** | New target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**useGwServiceAccount** | **Boolean** | Use the GW&#39;s service account | [optional] 


