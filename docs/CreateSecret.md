# akeyless.CreateSecret

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessibility** | **String** | for personal password manager | [optional] [default to &#39;regular&#39;]
**changeEvent** | **String** | Trigger an event when a secret value changed [true/false] (Relevant only for Static Secret) | [optional] 
**customField** | **{String: String}** | For Password Management use, additional fields | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Description of the object | [optional] 
**format** | **String** | Secret format [text/json/key-value] (relevant only for type &#39;generic&#39;) | [optional] [default to &#39;text&#39;]
**injectUrl** | **[String]** | For Password Management use, reflect the website context | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**maxVersions** | **String** | Set the maximum number of versions, limited by the account settings defaults. | [optional] 
**metadata** | **String** | Deprecated - use description | [optional] 
**multilineValue** | **Boolean** | The provided value is a multiline value (separated by &#39;\\n&#39;) | [optional] 
**name** | **String** | Secret name | 
**password** | **String** | For Password Management use, additional fields | [optional] 
**protectionKey** | **String** | The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used) | [optional] 
**secureAccessBastionIssuer** | **String** | Deprecated. use secure-access-certificate-issuer | [optional] 
**secureAccessCertificateIssuer** | **String** | Path to the SSH Certificate Issuer for your Akeyless Secure Access | [optional] 
**secureAccessEnable** | **String** | Enable/Disable secure remote access [true/false] | [optional] 
**secureAccessGateway** | **String** |  | [optional] 
**secureAccessHost** | **[String]** | Target servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts - Relevant only for Dynamic Secrets/producers) | [optional] 
**secureAccessRdpUser** | **String** | Remote Desktop Username | [optional] 
**secureAccessSshCreds** | **String** | Static-Secret values contains SSH Credentials, either Private Key or Password [password/private-key] | [optional] 
**secureAccessSshUser** | **String** | Override the SSH username as indicated in SSH Certificate Issuer | [optional] 
**secureAccessUrl** | **String** | Destination URL to inject secrets | [optional] 
**secureAccessWebBrowsing** | **Boolean** | Secure browser via Akeyless&#39;s Secure Remote Access (SRA) | [optional] [default to false]
**secureAccessWebProxy** | **Boolean** | Web-Proxy via Akeyless&#39;s Secure Remote Access (SRA) | [optional] [default to false]
**tags** | **[String]** | Add tags attached to this object | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**type** | **String** | The secret sub type [generic/password] | [optional] [default to &#39;generic&#39;]
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**username** | **String** | For Password Management use | [optional] 
**value** | **String** | The secret value (relevant only for type &#39;generic&#39;) | 


