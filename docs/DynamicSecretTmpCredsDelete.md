# akeyless.DynamicSecretTmpCredsDelete

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**araEnabled** | **Boolean** | Enable or disable Agentic Runtime Authority rule enforcement for this item. Mirrors commands.AgenticRulesParams.AraEnabled. | [optional] 
**host** | **String** | Host | [optional] 
**inputRule** | **[String]** | Agentic input rule in name&#x3D;...,rule&#x3D;... format (e.g. name&#x3D;rule1,rule&#x3D;Sanitize input) Mirrors commands.AgenticRulesParams — kept separate because ResourceDS cannot embed it (different package, different struct layout). | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | Dynamic secret name | 
**outputRule** | **[String]** | Agentic output rule in name&#x3D;...,rule&#x3D;... format (e.g. name&#x3D;rule1,rule&#x3D;Mask secrets) | [optional] 
**revokeAll** | **Boolean** | Revoke All Temp Creds | [optional] 
**skipDryRun** | **String** | If set, dry-run will be skipped | [optional] 
**softDelete** | **Boolean** | Soft Delete | [optional] 
**tmpCredsId** | **String** | Tmp Creds ID | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


