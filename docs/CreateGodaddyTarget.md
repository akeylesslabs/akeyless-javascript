# akeyless.CreateGodaddyTarget

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiKey** | **String** | Key of the api credentials to the Godaddy account | 
**customerId** | **String** | Customer ID (ShopperId) required for renewal of imported certificates | [optional] 
**description** | **String** | Description of the object | [optional] 
**imapFqdn** | **String** | ImapFQDN of the IMAP service, FQDN or IPv4 address. Must be FQDN if the IMAP is using TLS | 
**imapPassword** | **String** | ImapPassword to access the IMAP service | 
**imapPort** | **String** | ImapPort of the IMAP service | [optional] [default to &#39;993&#39;]
**imapUsername** | **String** | ImapUsername to access the IMAP service | 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**key** | **String** | The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used) | [optional] 
**maxVersions** | **String** | Set the maximum number of versions, limited by the account settings defaults. | [optional] 
**name** | **String** | Target name | 
**secret** | **String** | Secret of the api credentials to the Godaddy account | 
**timeout** | **String** | Timeout waiting for certificate validation in Duration format (1h - 1 Hour, 20m - 20 Minutes, 33m3s - 33 Minutes and 3 Seconds), maximum 1h. | [optional] [default to &#39;5m&#39;]
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


