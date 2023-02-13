# akeyless.SetRoleRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capability** | **[String]** | List of the approved/denied capabilities in the path options: [read, create, update, delete, list, deny] | 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**path** | **String** | The path the rule refers to | 
**roleName** | **String** | The role name to be updated | 
**ruleType** | **String** | item-rule, target-rule, role-rule, auth-method-rule, search-rule, reports-rule, gw-reports-rule or sra-reports-rule | [optional] [default to &#39;item-rule&#39;]
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**ttl** | **Number** | RoleRule ttl | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


