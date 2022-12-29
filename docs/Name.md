# akeyless.Name

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **[String]** |  | [optional] 
**extraNames** | [**[AttributeTypeAndValue]**](AttributeTypeAndValue.md) | ExtraNames contains attributes to be copied, raw, into any marshaled distinguished names. Values override any attributes with the same OID. The ExtraNames field is not populated when parsing, see Names. | [optional] 
**locality** | **[String]** |  | [optional] 
**names** | [**[AttributeTypeAndValue]**](AttributeTypeAndValue.md) | Names contains all parsed attributes. When parsing distinguished names, this can be used to extract non-standard attributes that are not parsed by this package. When marshaling to RDNSequences, the Names field is ignored, see ExtraNames. | [optional] 
**serialNumber** | **String** |  | [optional] 
**streetAddress** | **[String]** |  | [optional] 


