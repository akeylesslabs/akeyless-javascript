# akeyless.DeriveKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessibility** | **String** | for personal password manager | [optional] [default to &#39;regular&#39;]
**alg** | **String** | Kdf algorithm | [default to &#39;pbkdf2&#39;]
**hashFunction** | **String** | HashFunction the hash function to use (relevant for pbkdf2) | [optional] [default to &#39;sha256&#39;]
**iter** | **Number** | IterationCount the number of iterations | 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**keyLen** | **Number** | KeyLength the byte length of the generated key | 
**mem** | **Number** | MemorySizeInKb the memory paramter in kb (relevant for argon2id) | [optional] [default to 16384]
**name** | **String** | Static Secret full name | 
**parallelism** | **Number** | Parallelism the number of threads to use (relevant for argon2id) | [optional] [default to 1]
**salt** | **String** | Salt Base64 encoded salt value. If not provided, the salt will be generated as part of the operation. The salt should be securely-generated random bytes, minimum 64 bits, 128 bits is recommended | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


