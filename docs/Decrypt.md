# akl.Decrypt

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ciphertext** | **String** | Ciphertext to be decrypted in base64 encoded format | 
**encryptionContext** | **{String: String}** | The encryption context. If this was specified in the encrypt command, it must be specified here or the decryption operation will fail | [optional] 
**keyName** | **String** | The name of the key to use in the decryption process | 
**token** | **String** | Use a specific profile from your akeyless/profiles/ folder | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


