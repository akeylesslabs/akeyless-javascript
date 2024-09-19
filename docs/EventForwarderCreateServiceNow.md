# akeyless.EventForwarderCreateServiceNow

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adminName** | **String** | Workstation Admin Name | [optional] 
**adminPwd** | **String** | Workstation Admin Password | [optional] 
**appPrivateKeyBase64** | **String** | The RSA Private Key to use when connecting with jwt authentication | [optional] 
**authMethodsEventSourceLocations** | **[String]** | Auth Method Event sources | [optional] 
**authType** | **String** | The authentication type to use [user-pass/jwt] | [optional] [default to &#39;user-pass&#39;]
**clientId** | **String** | The client ID to use when connecting with jwt authentication | [optional] 
**clientSecret** | **String** | The client secret to use when connecting with jwt authentication | [optional] 
**description** | **String** | Description of the object | [optional] 
**eventTypes** | **[String]** | List of event types to notify about [request-access, certificate-pending-expiration, certificate-expired, certificate-provisioning-success, certificate-provisioning-failure, auth-method-pending-expiration, auth-method-expired, next-automatic-rotation, rotated-secret-success, rotated-secret-failure, dynamic-secret-failure, multi-auth-failure, uid-rotation-failure, apply-justification, email-auth-method-approved, usage, rotation-usage, gateway-inactive, static-secret-updated] | [optional] 
**every** | **String** | Rate of periodic runner repetition in hours | [optional] 
**gatewaysEventSourceLocations** | **[String]** | Event sources | 
**host** | **String** | Workstation Host | [optional] 
**itemsEventSourceLocations** | **[String]** | Items Event sources | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**key** | **String** | The name of a key that used to encrypt the EventForwarder secret value (if empty, the account default protectionKey key will be used) | [optional] 
**name** | **String** | EventForwarder name | 
**runnerType** | **String** |  | 
**targetsEventSourceLocations** | **[String]** | Targets Event sources | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userEmail** | **String** | The user email to identify with when connecting with jwt authentication | [optional] 


