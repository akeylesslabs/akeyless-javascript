# akeyless.UpdateSSHCertIssuer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**providerType** | **String** |  | [optional] 
**addTag** | **[String]** | List of the new tags that will be attached to this item | [optional] 
**allowedUsers** | **String** | Users allowed to fetch the certificate, e.g root,ubuntu | [default to &#39;-&#39;]
**deleteProtection** | **String** | Protection from accidental deletion of this object [true/false] | [optional] 
**description** | **String** | Description of the object | [optional] 
**extensions** | **{String: String}** | Signed certificates with extensions, e.g permit-port-forwarding&#x3D;\\\&quot;\\\&quot; | [optional] 
**externalUsername** | **String** | Externally provided username [true/false] | [optional] [default to &#39;false&#39;]
**fixedUserClaimKeyname** | **String** | For externally provided users, denotes the key-name of IdP claim to extract the username from (relevant only for external-username&#x3D;true) | [optional] 
**hostProvider** | **String** | Host provider type [explicit/target], Default Host provider is explicit, Relevant only for Secure Remote Access of ssh cert issuer, ldap rotated secret and ldap dynamic secret | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**metadata** | **String** | Deprecated - use description | [optional] 
**name** | **String** | SSH certificate issuer name | 
**newName** | **String** | New item name | [optional] 
**principals** | **String** | Signed certificates with principal, e.g example_role1,example_role2 | [optional] 
**rmTag** | **[String]** | List of the existent tags that will be removed from this item | [optional] 
**secureAccessApi** | **String** | Secure Access SSH control API endpoint. E.g. https://my.sra-server:9900 | [optional] 
**secureAccessBastionApi** | **String** | Deprecated. use secure-access-api | [optional] 
**secureAccessBastionSsh** | **String** | Deprecated. use secure-access-ssh | [optional] 
**secureAccessEnable** | **String** | Enable/Disable secure remote access [true/false] | [optional] 
**secureAccessEnforceHostsRestriction** | **Boolean** | Enable this flag to enforce connections only to the hosts listed in --secure-access-host | [optional] 
**secureAccessGateway** | **String** |  | [optional] 
**secureAccessHost** | **[String]** | Target servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts - Relevant only for Dynamic Secrets/producers) | [optional] 
**secureAccessSsh** | **String** | Bastion&#39;s SSH server. E.g. my.sra-server:22 | [optional] 
**secureAccessSshCredsUser** | **String** | SSH username to connect to target server, must be in &#39;Allowed Users&#39; list | [optional] 
**secureAccessUseInternalBastion** | **Boolean** | Deprecated. Use secure-access-use-internal-ssh-access | [optional] 
**secureAccessUseInternalSshAccess** | **Boolean** | Use internal SSH Access | [optional] 
**signerKeyName** | **String** | A key to sign the certificate with | 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**ttl** | **Number** | The requested Time To Live for the certificate, in seconds | 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


