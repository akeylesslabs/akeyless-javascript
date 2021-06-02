# akeyless.SetRoleRule

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capability** | **[String]** | List of the approved/denied capabilities in the path options: [read, create, update, delete, list, deny] | 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**path** | **String** | The path the rule refers to | 
**roleName** | **String** | The role name to be updated | 
**ruleType** | **String** | item-rule, target-rule, role-rule, auth-method-rule, search-rule or reports-rule | [optional] [default to &#39;item-rule&#39;]
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 


