# akeyless.CertificateChainInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoRenewCertificate** | **Boolean** |  | [optional] 
**certificateChain** | [**[CertificateInfo]**](CertificateInfo.md) |  | [optional] 
**certificateFormat** | **String** |  | [optional] 
**certificateHasPrivateKey** | **Boolean** |  | [optional] 
**certificateIssuerGwClusterId** | **Number** |  | [optional] 
**certificateIssuerGwClusterUrl** | **String** |  | [optional] 
**certificateIssuerItemId** | **Number** |  | [optional] 
**certificateIssuerName** | **String** |  | [optional] 
**certificatePem** | **String** |  | [optional] 
**certificateStatus** | **String** |  | [optional] 
**commonName** | **String** |  | [optional] 
**csrPem** | **String** | CSRPEM contains the PEM-encoded CSR for pending certificates (HTTP-01 challenge) | [optional] 
**errorMessage** | **String** |  | [optional] 
**expirationDate** | **Date** |  | [optional] 
**expirationEvents** | [**[CertificateExpirationEvent]**](CertificateExpirationEvent.md) |  | [optional] 
**externalCaId** | [**NullString**](NullString.md) |  | [optional] 
**issuanceStatus** | **String** |  | [optional] 
**leafCertificatePem** | **String** | LeafCertificatePem contains only the leaf certificate, derived from CertificatePem. Populated only when the certificate was issued with SplitCertificateChain enabled. | [optional] 
**notBefore** | **Date** |  | [optional] 
**renewBeforeExpirationInDays** | **Number** |  | [optional] 
**splitCertificateChain** | **Boolean** | SplitCertificateChain reflects whether this certificate was issued while its PKI Cert Issuer had split-certificate-chain enabled. When true, LeafCertificatePem is populated in addition to CertificatePem (which always holds the full chain). | [optional] 


