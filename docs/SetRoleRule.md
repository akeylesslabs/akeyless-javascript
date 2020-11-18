# akl.SetRoleRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capability** | **[String]** | List of the approved/denied capabilities in the path options: [read, create, update, delete, list, deny] | 
**path** | **String** | The path the rule refers to | 
**roleName** | **String** | The role name to be updated | 
**ruleType** | **String** | item-rule, role-rule or auth-method-rule | [optional] [default to &#39;item-rule&#39;]
**token** | **String** | Use a specific profile from your akeyless/profiles/ folder | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


