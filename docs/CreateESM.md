# akeyless.CreateESM

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**azureKvName** | **String** | Azure Key Vault name (Relevant only for Azure targets) | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Description of the External Secrets Manager | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**k8sNamespace** | **String** | K8s namespace (Relevant to Kubernetes targets) | [optional] 
**name** | **String** | External Secrets Manager name | 
**tags** | **[String]** | List of the tags attached to this External Secrets Manager | [optional] 
**targetToAssociate** | **String** | Target External Secrets Manager to connect | 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


