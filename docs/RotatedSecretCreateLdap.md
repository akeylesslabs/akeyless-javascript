# akeyless.RotatedSecretCreateLdap

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providerType** | **String** |  | [optional] 
**authenticationCredentials** | **String** | The credentials to connect with use-user-creds/use-target-creds | [optional] [default to &#39;use-user-creds&#39;]
**autoRotate** | **String** | Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation [true/false] | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Description of the object | [optional] 
**hostProvider** | **String** | Host provider type [explicit/target], Default Host provider is explicit, Relevant only for Secure Remote Access of ssh cert issuer, ldap rotated secret and ldap dynamic secret | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**key** | **String** | The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used) | [optional] 
**maxVersions** | **String** | Set the maximum number of versions, limited by the account settings defaults. | [optional] 
**name** | **String** | Rotated secret name | 
**passwordLength** | **String** | The length of the password to be generated | [optional] 
**rotateAfterDisconnect** | **String** | Rotate the value of the secret after SRA session ends [true/false] | [optional] [default to &#39;false&#39;]
**rotatedPassword** | **String** | rotated-username password (relevant only for rotator-type&#x3D;ldap) | [optional] 
**rotatedUsername** | **String** | username to be rotated, if selected use-self-creds at rotator-creds-type, this username will try to rotate it&#39;s own password, if use-target-creds is selected, target credentials will be use to rotate the rotated-password (relevant only for rotator-type&#x3D;ldap) | [optional] 
**rotationEventIn** | **[String]** | How many days before the rotation of the item would you like to be notified | [optional] 
**rotationHour** | **Number** | The Hour of the rotation in UTC | [optional] 
**rotationInterval** | **String** | The number of days to wait between every automatic key rotation (1-365) | [optional] 
**rotatorType** | **String** | The rotator type. options: [target/ldap] | 
**secureAccessBastionIssuer** | **String** | Deprecated. use secure-access-certificate-issuer | [optional] 
**secureAccessCertificateIssuer** | **String** | Path to the SSH Certificate Issuer for your Akeyless Secure Access | [optional] 
**secureAccessEnable** | **String** | Enable/Disable secure remote access [true/false] | [optional] 
**secureAccessHost** | **[String]** | Target servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts - Relevant only for Dynamic Secrets/producers) | [optional] 
**secureAccessRdpDomain** | **String** | Default domain name server. i.e. microsoft.com | [optional] 
**secureAccessUrl** | **String** | Destination URL to inject secrets | [optional] 
**secureAccessWeb** | **Boolean** | Enable Web Secure Remote Access | [optional] [default to false]
**secureAccessWebBrowsing** | **Boolean** | Secure browser via Akeyless&#39;s Secure Remote Access (SRA) | [optional] [default to false]
**secureAccessWebProxy** | **Boolean** | Web-Proxy via Akeyless&#39;s Secure Remote Access (SRA) | [optional] [default to false]
**tags** | **[String]** | Add tags attached to this object | [optional] 
**target** | **[String]** | A list of linked targets to be associated, Relevant only for Secure Remote Access for ssh cert issuer, ldap rotated secret and ldap dynamic secret, To specify multiple targets use argument multiple times | [optional] 
**targetName** | **String** | Target name | 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userAttribute** | **String** | LDAP User Attribute, Default value \&quot;cn\&quot; | [optional] [default to &#39;cn&#39;]
**userDn** | **String** | Base DN to Perform User Search | [optional] 


