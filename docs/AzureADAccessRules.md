# akl.AzureADAccessRules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adEndpoint** | **String** | The audience in the JWT. | [optional] 
**boundGroupIds** | **[String]** | The list of group ids that login is restricted to. | [optional] 
**boundResourceGroups** | **[String]** | The list of resource groups that login is restricted to. | [optional] 
**boundResourceIds** | **[String]** | The list of full resource ids that the login is restricted to. | [optional] 
**boundResourceNames** | **[String]** | The list of resource names that the login is restricted to (e.g, a virtual machine name, scale set name, etc). | [optional] 
**boundResourceProviders** | **[String]** | The list of resource providers that login is restricted to (e.g, Microsoft.Compute, Microsoft.ManagedIdentity, etc). | [optional] 
**boundResourceTypes** | **[String]** | The list of resource types that login is restricted to  (e.g, virtualMachines, userAssignedIdentities, etc). | [optional] 
**boundServicePrincipalIds** | **[String]** | The list of service principal IDs that login is restricted to. | [optional] 
**boundSubscriptionIds** | **[String]** | The list of subscription IDs that login is restricted to. | [optional] 
**boundTenantId** | **String** | The tenants id for the Azure Active Directory organization. | [optional] 
**issuer** | **String** | Issuer URL | [optional] 
**jwksUri** | **String** | The URL to the JSON Web Key Set (JWKS) that containing the public keys that should be used to verify any JSON Web Token (JWT) issued by the authorization server. | [optional] 


