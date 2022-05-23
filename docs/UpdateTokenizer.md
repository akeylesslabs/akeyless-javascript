# akeyless.UpdateTokenizer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addTag** | **[String]** | List of the new tags that will be attached to this item | [optional] 
**alphabet** | **String** | Alphabet to use in regexp vaultless tokenization | [optional] 
**decryptionTemplate** | **String** | The Decryption output template to use in regexp vaultless tokenization | [optional] 
**encryptionKeyName** | **String** | AES key name to use in vaultless tokenization | [optional] 
**encryptionTemplate** | **String** | The Encryption output template to use in regexp vaultless tokenization | [optional] 
**name** | **String** | Current item name | 
**newMetadata** | **String** | New item metadata | [optional] [default to &#39;default_metadata&#39;]
**newName** | **String** | New item name | [optional] 
**pattern** | **String** | Pattern to use in regexp vaultless tokenization | [optional] 
**rmTag** | **[String]** | List of the existent tags that will be removed from this item | [optional] 
**templateType** | **String** | Which template type this tokenizer is used for [SSN,CreditCard,USPhoneNumber,Email,Regexp] | 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**tokenizerType** | **String** | Tokenizer type | 
**tweakType** | **String** | The tweak type to use in vaultless tokenization [Supplied, Generated, Internal, Masking] | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


