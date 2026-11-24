# akeyless.ProvisionCertificateOutput

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failMessage** | **String** |  | [optional] 
**successMessage** | **String** |  | [optional] 
**associationId** | **String** | AssociationID and TargetName identify the row of a Results entry. | [optional] 
**hostNames** | **[String]** |  | [optional] 
**provisionedAt** | **Date** |  | [optional] 
**results** | [**[ProvisionCertificateOutput]**](ProvisionCertificateOutput.md) | Results holds one entry per row. It is set only when several rows were handled; the top-level fields then summarize them. | [optional] 
**targetName** | **String** |  | [optional] 


