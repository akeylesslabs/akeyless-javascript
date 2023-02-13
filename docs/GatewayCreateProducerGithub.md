# akeyless.GatewayCreateProducerGithub

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deleteProtection** | **String** | Protection from accidental deletion of this item [true/false] | [optional] 
**githubAppId** | **Number** | Github app id | [optional] 
**githubAppPrivateKey** | **String** | App private key | [optional] 
**githubBaseUrl** | **String** | Base URL | [optional] [default to &#39;https://api.github.com/&#39;]
**installationId** | **Number** | Github app installation id | [optional] 
**installationRepository** | **String** | Repository that the app installation has access to | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | Producer name | 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**tokenPermissions** | **[String]** | Optional - installation token&#39;s allowed permissions | [optional] 
**tokenRepositories** | **[String]** | Optional - installation token&#39;s allowed repositories | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


