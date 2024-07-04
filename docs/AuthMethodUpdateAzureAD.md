# akeyless.AuthMethodUpdateAzureAD

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessExpires** | **Number** | Access expiration date in Unix timestamp (select 0 for access without expiry date) | [optional] [default to 0]
**audience** | **String** | Deprecated (Deprecated) The audience in the JWT | [optional] [default to &#39;https://management.azure.com/&#39;]
**auditLogsClaims** | **[String]** | Subclaims to include in audit logs, e.g \&quot;--audit-logs-claims email --audit-logs-claims username\&quot; | [optional] 
**boundGroupId** | **[String]** | A list of group ids that the access is restricted to | [optional] 
**boundIps** | **[String]** | A CIDR whitelist with the IPs that the access is restricted to | [optional] 
**boundProviders** | **[String]** | A list of resource providers that the access is restricted to (e.g, Microsoft.Compute, Microsoft.ManagedIdentity, etc) | [optional] 
**boundResourceId** | **[String]** | A list of full resource ids that the access is restricted to | [optional] 
**boundResourceNames** | **[String]** | A list of resource names that the access is restricted to (e.g, a virtual machine name, scale set name, etc). | [optional] 
**boundResourceTypes** | **[String]** | A list of resource types that the access is restricted to (e.g, virtualMachines, userAssignedIdentities, etc) | [optional] 
**boundRgId** | **[String]** | A list of resource groups that the access is restricted to | [optional] 
**boundSpid** | **[String]** | A list of service principal IDs that the access is restricted to | [optional] 
**boundSubId** | **[String]** | A list of subscription ids that the access is restricted to | [optional] 
**boundTenantId** | **String** | The Azure tenant id that the access is restricted to | 
**description** | **String** | Auth Method description | [optional] 
**forceSubClaims** | **Boolean** | if true: enforce role-association must include sub claims | [optional] 
**gwBoundIps** | **[String]** | A CIDR whitelist with the GW IPs that the access is restricted to | [optional] 
**issuer** | **String** | Issuer URL | [optional] [default to &#39;https://sts.windows.net/---bound_tenant_id---&#39;]
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**jwksUri** | **String** | The URL to the JSON Web Key Set (JWKS) that containing the public keys that should be used to verify any JSON Web Token (JWT) issued by the authorization server. | [optional] [default to &#39;https://login.microsoftonline.com/common/discovery/keys&#39;]
**jwtTtl** | **Number** | Jwt TTL | [optional] [default to 0]
**name** | **String** | Auth Method name | 
**newName** | **String** | Auth Method new name | [optional] 
**productType** | **[String]** | Choose the relevant product type for the auth method [sm, sra, pm, dp, ca] | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


