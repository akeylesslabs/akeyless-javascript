# akeyless.SSHCertificateIssueDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowedDomains** | **[String]** | Relevant for host certificate | [optional] 
**allowedUserKeyLengths** | **{String: Number}** |  | [optional] 
**allowedUsers** | **[String]** | Relevant for user certificate | [optional] 
**certType** | **Number** |  | [optional] 
**criticalOptions** | **{String: String}** |  | [optional] 
**extensions** | **{String: String}** |  | [optional] 
**externallyProvidedUserSubClaimKey** | **String** | ExternallyProvidedUserSubClaimKey is the claim key name where the user name should be taken from | [optional] 
**isExternallyProvidedUser** | **Boolean** | IsExternallyProvidedUser is true if allow users should be taken from claims and not from AllowedUsers | [optional] 
**principals** | **[String]** |  | [optional] 
**staticKeyId** | **String** | In case it is empty, the key ID will be combination of user identifiers and a random string | [optional] 


