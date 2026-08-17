# akeyless.RotatedSecretDetailsInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**awsUserName** | **String** |  | [optional] 
**deletePreviousVersionInDays** | **Number** |  | [optional] 
**enableCustomPasswordPolicy** | **Boolean** |  | [optional] 
**graceRotation** | **Boolean** |  | [optional] 
**graceRotationHour** | **Number** |  | [optional] 
**graceRotationInterval** | **Number** |  | [optional] 
**graceRotationTiming** | **String** |  | [optional] 
**gwClusterId** | **Number** |  | [optional] 
**iisAppsDetails** | [**[WindowsService]**](WindowsService.md) |  | [optional] 
**keyAlgorithm** | **String** | SSHKeyAlgorithm identifies the key algorithm an SSH rotated secret uses. Kept apart from Algorithm, which is an encryption-key enum and has no ECDSA-384 or ECDSA-521. | [optional] 
**lastRotationError** | **String** |  | [optional] 
**managedByAkeyless** | **Boolean** |  | [optional] 
**maxVersions** | **Number** |  | [optional] 
**nextAutoRotateType** | **String** |  | [optional] 
**numberOfVersionsToSave** | **Number** |  | [optional] 
**publicKeyRemotePath** | **String** |  | [optional] 
**rotationHour** | **Number** |  | [optional] 
**rotationIntervalMin** | **Boolean** |  | [optional] 
**rotationStatement** | **String** |  | [optional] 
**rotatorCredsType** | **String** |  | [optional] 
**rotatorStatus** | **String** | RotationStatus defines types of rotation Status | [optional] 
**rotatorType** | **String** |  | [optional] 
**samePassword** | **Boolean** |  | [optional] 
**servicesDetails** | [**[WindowsService]**](WindowsService.md) |  | [optional] 
**skipDryRun** | **Boolean** |  | [optional] 
**timeoutSeconds** | **Number** |  | [optional] 


