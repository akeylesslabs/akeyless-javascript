# akeyless.UpdateSalesforceTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**caCertData** | **String** | Base64 encoded PEM cert to use when uploading a new key to Salesforce | [optional] 
**caCertName** | **String** | name of the certificate in Salesforce tenant to use when uploading new key | [optional] 
**clientId** | **String** | Client ID of the oauth2 app to use for connecting to Salesforce | 
**clientSecret** | **String** | Client secret of the oauth2 app to use for connecting to Salesforce | 
**comment** | **String** | Comment about the target | [optional] 
**email** | **String** | The email of the user attached to the oauth2 app used for connecting to Salesforce | 
**keepPrevVersion** | **String** |  | [optional] 
**key** | **String** | The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used) | [optional] 
**name** | **String** | Target name | 
**newName** | **String** | New target name | [optional] 
**password** | **String** | The password of the user attached to the oauth2 app used for connecting to Salesforce | 
**securityToken** | **String** | The security token of the user attached to the oauth2 app used for connecting to Salesforce | 
**tenantUrl** | **String** | Url of the Salesforce tenant | 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**updateVersion** | **Boolean** | Deprecated | [optional] 

