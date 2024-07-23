# akeyless.DynamicSecretUpdateGithub

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Description of the object | [optional] 
**githubAppId** | **Number** | Github app id | [optional] 
**githubAppPrivateKey** | **String** | App private key | [optional] 
**githubBaseUrl** | **String** | Base URL | [optional] [default to &#39;https://api.github.com/&#39;]
**installationId** | **Number** | GitHub application installation id | [optional] 
**installationOrganization** | **String** | Optional, mutually exclusive with installation id, GitHub organization name | [optional] 
**installationRepository** | **String** | Optional, mutually exclusive with installation id, GitHub repository &#39;&lt;owner&gt;/&lt;repo-name&gt;&#39; | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | Dynamic secret name | 
**newName** | **String** | Dynamic secret new name | [optional] 
**tags** | **[String]** | Add tags attached to this object | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**tokenPermissions** | **[String]** | Optional - installation token&#39;s allowed permissions | [optional] 
**tokenRepositories** | **[String]** | Optional - installation token&#39;s allowed repositories | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


