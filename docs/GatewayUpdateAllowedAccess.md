# akeyless.GatewayUpdateAllowedAccess

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessId** | **String** | Access ID The access id to be attached to this allowed access. Auth method with this access id should already exist. | 
**description** | **String** | Allowed access description | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | Allowed access name | 
**newName** | **String** | New allowed access name | [optional] 
**permissions** | **String** | Permissions  Comma-seperated list of permissions for this allowed access. Available permissions: [defaults,targets,classic_keys,automatic_migration,ldap_auth,dynamic_secret,k8s_auth,log_forwarding,zero_knowledge_encryption,rotated_secret,caching,event_forwarding,admin,kmip,general] | [optional] 
**subClaims** | **{String: String}** | Sub claims key/val of sub claims, e.g group&#x3D;admins,developers | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 

