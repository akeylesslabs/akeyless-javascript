# akeyless.Connect

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rcFileOverride** | **String** | used to override .akeyless-connect.rc in tests | [optional] 
**bastionCtrlPath** | **String** | The Bastion API path | [optional] 
**bastionCtrlPort** | **String** | The Bastion API Port | [optional] [default to &#39;9900&#39;]
**bastionCtrlProto** | **String** | The Bastion API protocol | [optional] [default to &#39;http&#39;]
**bastionCtrlSubdomain** | **String** | The Bastion API prefix | [optional] 
**certIssuerName** | **String** | The Akeyless certificate issuer name | [optional] 
**identityFile** | **String** | The file from which the identity (private key) for public key authentication is read | [optional] 
**name** | **String** | The Secret name (for database and AWS producers - producer name) | [optional] 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**sshExtraArgs** | **String** | The Use to add offical SSH arguments (except -i) | [optional] 
**target** | **String** | The target | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 
**viaBastion** | **String** | The jump box server | [optional] 


