# akeyless.EventForwarderCreateWebhook

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authMethodsEventSourceLocations** | **[String]** | Auth Method Event sources | [optional] 
**authToken** | **String** | Base64 encoded Token string for authentication type Token | [optional] 
**authType** | **String** | The Webhook authentication type [user-pass, bearer-token, certificate] | [optional] [default to &#39;user-pass&#39;]
**clientCertData** | **String** | Base64 encoded PEM certificate, relevant for certificate auth-type | [optional] 
**description** | **String** | Description of the object | [optional] 
**eventTypes** | **[String]** | List of event types to notify about [request-access, certificate-pending-expiration, certificate-expired, certificate-provisioning-success, certificate-provisioning-failure, auth-method-pending-expiration, auth-method-expired, next-automatic-rotation, rotated-secret-success, rotated-secret-failure, dynamic-secret-failure, multi-auth-failure, uid-rotation-failure, apply-justification, email-auth-method-approved, usage, rotation-usage, gateway-inactive, static-secret-updated, rate-limiting, usage-report, secret-sync] | [optional] 
**every** | **String** | Rate of periodic runner repetition in hours | [optional] 
**gatewaysEventSourceLocations** | **[String]** | Event sources | 
**itemsEventSourceLocations** | **[String]** | Items Event sources | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**key** | **String** | The name of a key that used to encrypt the EventForwarder secret value (if empty, the account default protectionKey key will be used) | [optional] 
**name** | **String** | EventForwarder name | 
**password** | **String** | Password for authentication relevant for user-pass auth-type | [optional] 
**privateKeyData** | **String** | Base64 encoded PEM RSA Private Key, relevant for certificate auth-type | [optional] 
**runnerType** | **String** |  | 
**serverCertificates** | **String** | Base64 encoded PEM certificate of the Webhook | [optional] 
**targetsEventSourceLocations** | **[String]** | Targets Event sources | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**url** | **String** | Webhook URL | [optional] 
**username** | **String** | Username for authentication relevant for user-pass auth-type | [optional] 


