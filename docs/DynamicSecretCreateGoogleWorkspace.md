# akeyless.DynamicSecretCreateGoogleWorkspace

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessMode** | **String** |  | 
**adminEmail** | **String** | Admin user email | 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Description of the object | [optional] 
**fixedUserClaimKeyname** | **String** | For externally provided users, denotes the key-name of IdP claim to extract the username from | [optional] [default to &#39;ext_email&#39;]
**gcpKey** | **String** | Base64-encoded service account private key text | [optional] 
**groupEmail** | **String** | A group email, relevant only for group access-mode | [optional] 
**groupRole** | **String** |  | [optional] 
**itemCustomFields** | **{String: String}** | Additional custom fields to associate with the item | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | Dynamic secret name | 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**roleName** | **String** | Name of the admin role to assign to the user, relevant only for role access-mode | [optional] 
**roleScope** | **String** |  | [optional] 
**secureAccessDelay** | **Number** | The delay duration, in seconds, to wait after generating just-in-time credentials. Accepted range: 0-120 seconds | [optional] 
**secureAccessEnable** | **String** | Enable/Disable secure remote access [true/false] | [optional] 
**secureAccessUrl** | **String** | Destination URL to inject secrets | [optional] 
**secureAccessWeb** | **Boolean** | Enable Web Secure Remote Access | [optional] [default to true]
**secureAccessWebBrowsing** | **Boolean** | Secure browser via Akeyless&#39;s Secure Remote Access (SRA) | [optional] [default to false]
**secureAccessWebProxy** | **Boolean** | Web-Proxy via Akeyless&#39;s Secure Remote Access (SRA) | [optional] [default to false]
**tags** | **[String]** | Add tags attached to this object | [optional] 
**targetName** | **String** | Name of existing target to use in dynamic secret creation | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


