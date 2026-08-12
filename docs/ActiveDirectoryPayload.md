# akeyless.ActiveDirectoryPayload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activeDirectoryTargetId** | **Number** |  | [optional] 
**aiCertificateDiscovery** | **Boolean** |  | [optional] 
**autoRotate** | **Boolean** |  | [optional] 
**autoRotateIntervalInDays** | **Number** |  | [optional] 
**autoRotateRotationHour** | **Number** |  | [optional] 
**certificatesExpirationEvents** | [**[CertificateExpirationEvent]**](CertificateExpirationEvent.md) |  | [optional] 
**certificatesPathTemplate** | **String** |  | [optional] 
**computerBaseDn** | **String** |  | [optional] 
**discoverIisApps** | **Boolean** |  | [optional] 
**discoverLocalUsers** | **Boolean** | Deprecated | [optional] 
**discoverServices** | **Boolean** |  | [optional] 
**discoveryTypes** | **[String]** |  | [optional] 
**domainName** | **String** |  | [optional] 
**domainServerTargetsPathTemplate** | **String** |  | [optional] 
**domainUsersRotatedSecretsPathTemplate** | **String** |  | [optional] 
**enablePasswordPolicy** | **Boolean** | EnablePasswordPolicy enables applying PasswordPolicy to newly created domain/local user rotated secrets. Pointer so omitted values are preserved on partial update (nil &#x3D; not provided). | [optional] 
**enableRdpSra** | **Boolean** |  | [optional] 
**localUsersIgnoreList** | **{String: Boolean}** |  | [optional] 
**localUsersRotatedSecretsPathTemplate** | **String** |  | [optional] 
**osFilter** | **String** |  | [optional] 
**passwordPolicy** | [**PasswordPolicyInfo**](PasswordPolicyInfo.md) |  | [optional] 
**skipDryRun** | **Boolean** | SkipDryRun enables skip_dry_run on newly created domain/local user rotated secrets. Pointer so omitted values are preserved on partial update (nil &#x3D; not provided). When false/unset, existing rotated-secret SkipDryRun values are left unchanged on sync. | [optional] 
**sshPort** | **String** |  | [optional] 
**targetFormat** | **String** |  | [optional] 
**targetsType** | **String** |  | [optional] 
**userBaseDn** | **String** |  | [optional] 
**userGroups** | **[String]** |  | [optional] 
**winrmOverHttp** | **Boolean** |  | [optional] 
**winrmPort** | **String** |  | [optional] 


