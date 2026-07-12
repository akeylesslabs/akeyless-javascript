# akeyless.CreateMcpSecretBearerToken

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessibility** | **String** | for personal password manager | [optional] [default to &#39;regular&#39;]
**bearerToken** | **String** | Bearer token value | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Description of the object | [optional] 
**inputRule** | **[String]** | Agentic input rule in name&#x3D;...,rule&#x3D;... format (e.g. name&#x3D;rule1,rule&#x3D;Sanitize input) | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**maxVersions** | **String** | Set the maximum number of versions, limited by the account settings defaults. | [optional] 
**metadata** | **String** | Deprecated - use description | [optional] 
**name** | **String** | Secret name | 
**outputRule** | **[String]** | Agentic output rule in name&#x3D;...,rule&#x3D;... format (e.g. name&#x3D;rule1,rule&#x3D;Mask secrets) | [optional] 
**protectionKey** | **String** |  | [optional] 
**tags** | **[String]** | Add tags attached to this object | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**url** | **String** | URL of the service | [optional] 


