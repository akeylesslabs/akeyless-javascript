# akeyless.DynamicSecretUpdateLdap

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providerType** | **String** |  | [optional] 
**bindDn** | **String** | Bind DN | [optional] 
**bindDnPassword** | **String** | Bind DN Password | [optional] 
**customUsernameTemplate** | **String** | Customize how temporary usernames are generated using go template | [optional] 
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Description of the object | [optional] 
**externalUsername** | **String** | Externally provided username [true/false] | [optional] [default to &#39;false&#39;]
**fixedUserClaimKeyname** | **String** | For externally provided users, denotes the key-name of IdP claim to extract the username from (relevant only for external-username&#x3D;true) | [optional] [default to &#39;ext_username&#39;]
**groupDn** | **String** | Group DN which the temporary user should be added | [optional] 
**hostProvider** | **String** | Host provider type [explicit/target], Default Host provider is explicit, Relevant only for Secure Remote Access of ssh cert issuer, ldap rotated secret and ldap dynamic secret | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**ldapCaCert** | **String** | CA Certificate File Content | [optional] 
**ldapUrl** | **String** | LDAP Server URL | [optional] 
**name** | **String** | Dynamic secret name | 
**newName** | **String** | Dynamic secret name | [optional] 
**passwordLength** | **String** | The length of the password to be generated | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**secureAccessBastionIssuer** | **String** | Deprecated. use secure-access-certificate-issuer | [optional] 
**secureAccessCertificateIssuer** | **String** | Path to the SSH Certificate Issuer for your Akeyless Secure Access | [optional] 
**secureAccessDelay** | **Number** | The delay duration, in seconds, to wait after generating just-in-time credentials. Accepted range: 0-120 seconds | [optional] 
**secureAccessEnable** | **String** | Enable/Disable secure remote access [true/false] | [optional] 
**secureAccessHost** | **[String]** | Target servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts - Relevant only for Dynamic Secrets/producers) | [optional] 
**secureAccessRdGatewayServer** | **String** | RD Gateway server | [optional] 
**secureAccessRdpDomain** | **String** | Required when the Dynamic Secret is used for a domain user | [optional] 
**tags** | **[String]** | Add tags attached to this object | [optional] 
**target** | **[String]** | A list of linked targets to be associated, Relevant only for Secure Remote Access for ssh cert issuer, ldap rotated secret and ldap dynamic secret, To specify multiple targets use argument multiple times | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**tokenExpiration** | **String** | Token expiration | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userAttribute** | **String** | User Attribute | [optional] 
**userDn** | **String** | User DN | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]


