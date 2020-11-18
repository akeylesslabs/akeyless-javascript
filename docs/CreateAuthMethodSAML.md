# akl.CreateAuthMethodSAML

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessExpires** | **Number** | Access expiration date in Unix timestamp (select 0 for access without expiry date) | [optional] [default to 0]
**boundIps** | **[String]** | A CIDR whitelist of the IPs that the access is restricted to | [optional] 
**idpMetadataUrl** | **String** | IDP metadata url | [optional] 
**name** | **String** | Auth Method name | 
**token** | **String** | Use a specific profile from your akeyless/profiles/ folder | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


