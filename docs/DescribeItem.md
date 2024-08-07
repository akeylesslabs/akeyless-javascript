# akeyless.DescribeItem

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessibility** | **String** | for personal password manager | [optional] [default to &#39;regular&#39;]
**bastionDetails** | **Boolean** | Indicate if the item should return with ztb cluster details (url, etc) | [optional] [default to false]
**derCertificateFormat** | **Boolean** | The certificate will be displayed in DER format | [optional] [default to false]
**displayId** | **String** | The display id of the item | [optional] 
**gatewayDetails** | **Boolean** | Indicate if the item should return with clusters details (url, etc) | [optional] [default to false]
**itemId** | **Number** | Item id of the item | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | Item name | 
**servicesDetails** | **Boolean** | Include all associated services details | [optional] [default to false]
**showVersions** | **Boolean** | Include all item versions in reply | [optional] [default to false]
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


