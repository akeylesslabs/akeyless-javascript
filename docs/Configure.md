# akeyless.Configure

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessId** | **String** | Access ID | [optional] 
**accessKey** | **String** | Access Key | [optional] 
**accessType** | **String** | Access Type (access_key/password/azure_ad/saml/ldap/aws_iam) | [optional] [default to &#39;access_key&#39;]
**adminEmail** | **String** | Email (relevant only for access-type&#x3D;password) | [optional] 
**adminPassword** | **String** | Password (relevant only for access-type&#x3D;password) | [optional] 
**azureAdObjectId** | **String** | Azure Active Directory ObjectId (relevant only for access-type&#x3D;azure_ad) | [optional] 
**ldapProxyUrl** | **String** | Address URL for ldap proxy (relevant only for access-type&#x3D;ldap) | [optional] 


