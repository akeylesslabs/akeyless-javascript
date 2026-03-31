# akeyless.UscGet

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**namespace** | **String** | The namespace (relevant for Hashi vault target) | [optional] 
**objectType** | **String** |  | [optional] 
**secretId** | **String** | The secret id (or name, for AWS, Azure, K8s or Hashi vault targets) to get from the Universal Secrets Connector | 
**selectedRepositories** | **String** | GitHub selected repositories. For repository scope: repo name. For repository-environment scope: repo/env (format: repo-name/env-name). Required when multiple repos/envs configured. | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**uscName** | **String** | Name of the Universal Secrets Connector item | 
**versionId** | **String** | The version id (if not specified, will retrieve the last version) | [optional] 


