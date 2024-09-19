# akeyless.RotatedSecretCreateCustom

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authenticationCredentials** | **String** | The credentials to connect with use-user-creds/use-target-creds | [optional] [default to &#39;use-user-creds&#39;]
**autoRotate** | **String** | Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation [true/false] | [optional] 
**customPayload** | **String** | Secret payload to be sent with rotation request | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Description of the object | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**key** | **String** | The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used) | [optional] 
**maxVersions** | **String** | Set the maximum number of versions, limited by the account settings defaults. | [optional] 
**name** | **String** | Rotated secret name | 
**passwordLength** | **String** | The length of the password to be generated | [optional] 
**rotateAfterDisconnect** | **String** | Rotate the value of the secret after SRA session ends [true/false] | [optional] [default to &#39;false&#39;]
**rotationEventIn** | **[String]** | How many days before the rotation of the item would you like to be notified | [optional] 
**rotationHour** | **Number** | The Hour of the rotation in UTC | [optional] 
**rotationInterval** | **String** | The number of days to wait between every automatic key rotation (1-365) | [optional] 
**secureAccessAllowExternalUser** | **Boolean** | Allow providing external user for a domain users | [optional] [default to false]
**secureAccessBastionIssuer** | **String** | Path to the SSH Certificate Issuer for your Akeyless Bastion | [optional] 
**secureAccessEnable** | **String** | Enable/Disable secure remote access [true/false] | [optional] 
**secureAccessHost** | **[String]** | Target servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts - Relevant only for Dynamic Secrets/producers) | [optional] 
**secureAccessRdpDomain** | **String** | Default domain name server. i.e. microsoft.com | [optional] 
**secureAccessRdpUser** | **String** | Override the RDP Domain username | [optional] 
**secureAccessSshUser** | **String** | Override the SSH username as indicated in SSH Certificate Issuer | [optional] 
**secureAccessUrl** | **String** | Destination URL to inject secrets | [optional] 
**secureAccessWeb** | **Boolean** | Enable Web Secure Remote Access | [optional] [default to false]
**secureAccessWebBrowsing** | **Boolean** | Secure browser via Akeyless Web Access Bastion | [optional] [default to false]
**secureAccessWebProxy** | **Boolean** | Web-Proxy via Akeyless Web Access Bastion | [optional] [default to false]
**tags** | **[String]** | Add tags attached to this object | [optional] 
**targetName** | **String** | Target name | 
**timeoutSec** | **Number** | Maximum allowed time in seconds for the custom rotator to return the results | [optional] [default to 40]
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


