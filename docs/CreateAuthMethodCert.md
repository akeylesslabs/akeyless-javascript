# akeyless.CreateAuthMethodCert

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessExpires** | **Number** | Access expiration date in Unix timestamp (select 0 for access without expiry date) | [optional] [default to 0]
**boundCommonNames** | **[String]** | A list of names. At least one must exist in the Common Name. Supports globbing. | [optional] 
**boundDnsSans** | **[String]** | A list of DNS names. At least one must exist in the SANs. Supports globbing. | [optional] 
**boundEmailSans** | **[String]** | A list of Email Addresses. At least one must exist in the SANs. Supports globbing. | [optional] 
**boundExtensions** | **[String]** | A list of extensions formatted as \&quot;oid:value\&quot;. Expects the extension value to be some type of ASN1 encoded string. All values much match. Supports globbing on \&quot;value\&quot;. | [optional] 
**boundIps** | **[String]** | A CIDR whitelist with the IPs that the access is restricted to | [optional] 
**boundOrganizationalUnits** | **[String]** | A list of Organizational Units names. At least one must exist in the OU field. | [optional] 
**boundUriSans** | **[String]** | A list of URIs. At least one must exist in the SANs. Supports globbing. | [optional] 
**certificateData** | **String** | The certificate data in base64, if no file was provided | [optional] 
**forceSubClaims** | **Boolean** | if true: enforce role-association must include sub claims | [optional] 
**gwBoundIps** | **[String]** | A CIDR whitelist with the GW IPs that the access is restricted to | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**jwtTtl** | **Number** | Jwt TTL | [optional] [default to 0]
**name** | **String** | Auth Method name | 
**revokedCertIds** | **[String]** | A list of revoked cert ids | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**uniqueIdentifier** | **String** | A unique identifier (ID) value should be configured, such as common_name or organizational_unit Whenever a user logs in with a token, these authentication types issue a \&quot;sub claim\&quot; that contains details uniquely identifying that user. This sub claim includes a key containing the ID value that you configured, and is used to distinguish between different users from within the same organization. | 


