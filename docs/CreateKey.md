# akl.CreateKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alg** | **String** | Key type; options: [AES128GCM, AES256GCM, AES128SIV, AES256SIV, RSA1024, RSA2048] | 
**customerFrgId** | **String** | The customer fragment ID that will be used to create the key (if empty, the key will be created independently of a customer fragment) | [optional] 
**metadata** | **String** | Metadata about the key | [optional] 
**name** | **String** | Key name | 
**splitLevel** | **Number** | The number of fragments that the item will be split into (not includes customer fragment) | [optional] [default to 2]
**tag** | **[String]** | List of the tags attached to this key | [optional] 
**token** | **String** | Use a specific profile from your akeyless/profiles/ folder | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


