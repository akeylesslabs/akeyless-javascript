# akeyless.ExportClassicKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessibility** | **String** | for personal password manager | [optional] [default to &#39;regular&#39;]
**exportPublicKey** | **Boolean** | Use this option to output only public key | [optional] [default to false]
**ignoreCache** | **String** | Retrieve the Secret value without checking the Gateway&#39;s cache [true/false]. This flag is only relevant when using the RestAPI | [optional] [default to &#39;false&#39;]
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | ClassicKey name | 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**version** | **Number** | Classic key version | [optional] 
**wrappingKeyName** | **String** | Classic key name to wrap the key material with | [optional] 


