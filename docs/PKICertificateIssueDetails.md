# akeyless.PKICertificateIssueDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowAnyName** | **Boolean** |  | [optional] 
**allowCopyExtFromCsr** | **Boolean** |  | [optional] 
**allowSubdomains** | **Boolean** |  | [optional] 
**allowedDomainsList** | **[String]** |  | [optional] 
**allowedExtraExtensions** | **{String: [String]}** |  | [optional] 
**allowedUriSans** | **[String]** |  | [optional] 
**basicConstraintsValidForNonCa** | **Boolean** |  | [optional] 
**certificateAuthorityMode** | **String** |  | [optional] 
**clientFlag** | **Boolean** |  | [optional] 
**codeSigningFlag** | **Boolean** |  | [optional] 
**country** | **[String]** |  | [optional] 
**createPrivateCrl** | **Boolean** |  | [optional] 
**createPublicCrl** | **Boolean** |  | [optional] 
**destinationPath** | **String** | DestinationPath is the destination to save generated certificates | [optional] 
**enforceHostnames** | **Boolean** |  | [optional] 
**expirationEvents** | [**[CertificateExpirationEvent]**](CertificateExpirationEvent.md) | ExpirationNotification holds a list of expiration notices that should be sent in case a certificate is about to expire, this value is being propagated to the Certificate resources that are created | [optional] 
**gwClusterId** | **Number** |  | [optional] 
**gwClusterUrl** | **String** | GWClusterURL is required when CAMode is \&quot;public\&quot; and it defines the cluster URL the PKI should be issued from. The GW cluster must have permissions to read associated target&#39;s details | [optional] 
**isCa** | **Boolean** |  | [optional] 
**keyBits** | **Number** |  | [optional] 
**keyType** | **String** |  | [optional] 
**keyUsageList** | **[String]** |  | [optional] 
**locality** | **[String]** |  | [optional] 
**notBeforeDuration** | **Number** | A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years. | [optional] 
**organizationList** | **[String]** |  | [optional] 
**organizationUnitList** | **[String]** |  | [optional] 
**postalCode** | **[String]** |  | [optional] 
**protectGeneratedCertificates** | **Boolean** | ProtectGeneratedCertificates dictates whether the created certificates should be protected from deletion | [optional] 
**province** | **[String]** |  | [optional] 
**requireCn** | **Boolean** |  | [optional] 
**serverFlag** | **Boolean** |  | [optional] 
**streetAddress** | **[String]** |  | [optional] 


