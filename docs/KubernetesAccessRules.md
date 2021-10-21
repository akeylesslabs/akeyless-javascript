# akeyless.KubernetesAccessRules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alg** | **String** |  | [optional] 
**audience** | **String** | Audience is an optional Kubernetes jwt claim to verify | [optional] 
**boundNamespaces** | **[String]** | A list of namespaces that the authentication is restricted to. | [optional] 
**boundPodNames** | **[String]** | A list of pods names that the authentication is restricted to. | [optional] 
**boundServiceAccountNames** | **[String]** | A list of service account names that the authentication is restricted to. | [optional] 
**pubKey** | **String** | The public key value of the Kubernetes auth method configuration in the Akeyless Gateway. | [optional] 


