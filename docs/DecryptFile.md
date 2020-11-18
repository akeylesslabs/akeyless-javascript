# akl.DecryptFile

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encContext** | **{String: String}** | The encryption context. If this was specified in the encrypt command, it must be specified here or the decryption operation will fail | [optional] 
**inputFile** | **String** | Path to the file to be decrypted. If not provided, the content will be taken from stdin | 
**keyName** | **String** | The name of the key to use in the decryption process | 
**outputFilePath** | **String** | Path to the output file. If not provided, the output will be sent to stdout | [optional] 
**token** | **String** | Use a specific profile from your akeyless/profiles/ folder | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


