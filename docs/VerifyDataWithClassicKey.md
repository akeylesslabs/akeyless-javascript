# akeyless.VerifyDataWithClassicKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **String** | Data | 
**displayId** | **String** | The display id of the key to use in the verification process | [optional] 
**hashed** | **Boolean** | Defines whether the data should be hashed as part of the signing. If true, the data will not be hashed | [optional] [default to false]
**hashingMethod** | **String** | HashingMethod | [optional] [default to &#39;SHA256&#39;]
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | The name of the key to use in the verification process | 
**signature** | **String** | The data&#39;s signature in a Base64 format. | 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**version** | **Number** | classic key version | 


