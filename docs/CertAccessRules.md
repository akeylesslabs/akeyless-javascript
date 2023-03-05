# akeyless.CertAccessRules

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowedCors** | **[String]** | a list of allowed cors domains if used for browser authentication | [optional] 
**boundCommonNames** | **[String]** | A list of names. At least one must exist in the Common Name. Supports globbing. | [optional] 
**boundDnsSans** | **[String]** | A list of DNS names. At least one must exist in the SANs. Supports globbing. | [optional] 
**boundEmailSans** | **[String]** | A list of Email Addresses. At least one must exist in the SANs. Supports globbing. | [optional] 
**boundExtensions** | **[String]** | A list of extensions formatted as \&quot;oid:value\&quot;. Expects the extension value to be some type of ASN1 encoded string. All values must match. Supports globbing on \&quot;value\&quot;. | [optional] 
**boundOrganizationalUnits** | **[String]** | A list of Organizational Units names. At least one must exist in the OU field. | [optional] 
**boundUriSans** | **[String]** | A list of URIs. At least one must exist in the SANs. Supports globbing. | [optional] 
**certificate** | **String** | Base64 encdoed PEM certificate | [optional] 
**revokedCertIds** | **[String]** | A list of revoked cert ids | [optional] 
**uniqueIdentifier** | **String** | A unique identifier to distinguish different users | [optional] 


