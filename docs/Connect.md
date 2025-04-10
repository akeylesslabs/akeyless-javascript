# akeyless.Connect

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**helper** | **Object** |  | [optional] 
**rcFileOverride** | **String** | used to override .akeyless-connect.rc in tests | [optional] 
**bastionCtrlPath** | **String** | Deprecated. use bastion-ctrl-path | [optional] 
**bastionCtrlPort** | **String** | Deprecated. use sra-ctrl-port | [optional] 
**bastionCtrlProto** | **String** | Deprecated. use sra-ctrl-proto | [optional] 
**bastionCtrlSubdomain** | **String** | Deprecated. use sra-ctrl-subdomain | [optional] 
**certIssuerName** | **String** | The Akeyless certificate issuer name | [optional] 
**gatewayUrl** | **String** | The Gateway URL (configuration management) address, e.g. http://localhost:8000 | [optional] 
**identityFile** | **String** | The file from which the identity (private key) for public key authentication is read | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**justification** | **String** |  | [optional] 
**name** | **String** | The Secret name (for database and AWS producers - producer name) | [optional] 
**sraCtrlPath** | **String** | The Bastion API path | [optional] 
**sraCtrlPort** | **String** | The Bastion API Port | [optional] [default to &#39;9900&#39;]
**sraCtrlProto** | **String** | The SRA API protocol | [optional] [default to &#39;http&#39;]
**sraCtrlSubdomain** | **String** | The SRA API prefix | [optional] 
**sshCommand** | **String** | Path to SSH executable. e.g. /usr/bin/ssh | [optional] 
**sshExtraArgs** | **String** | Additional SSH arguments (except -i) | [optional] 
**sshLegacySigningAlg** | **Boolean** | Set this option to output legacy (&#39;ssh-rsa-cert-v01@openssh.com&#39;) signing algorithm name in the ssh certificate. | [optional] [default to false]
**target** | **String** | The target | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**useSshAgent** | **Boolean** | Deprecated | [optional] 
**viaBastion** | **String** | Deprecated. Use via-sra | [optional] 
**viaSra** | **String** | The jump box server | [optional] 


