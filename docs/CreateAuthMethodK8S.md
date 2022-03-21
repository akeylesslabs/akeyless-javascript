# akeyless.CreateAuthMethodK8S

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessExpires** | **Number** | Access expiration date in Unix timestamp (select 0 for access without expiry date) | [optional] [default to 0]
**audience** | **String** | The audience in the Kubernetes JWT that the access is restricted to | [optional] 
**boundIps** | **[String]** | A CIDR whitelist with the IPs that the access is restricted to | [optional] 
**boundNamespaces** | **[String]** | A list of namespaces that the access is restricted to | [optional] 
**boundPodNames** | **[String]** | A list of pod names that the access is restricted to | [optional] 
**boundSaNames** | **[String]** | A list of service account names that the access is restricted to | [optional] 
**forceSubClaims** | **Boolean** | if true: enforce role-association must include sub claims | [optional] 
**genKey** | **String** | If this flag is set to true, there is no need to manually provide a public key for the Kubernetes Auth Method, and instead, a key pair, will be generated as part of the command and the private part of the key will be returned (the private key is required for the K8S Auth Config in the Akeyless Gateway) | [optional] [default to &#39;true&#39;]
**jwtTtl** | **Number** | Jwt TTL | [optional] [default to 0]
**name** | **String** | Auth Method name | 
**publicKey** | **String** | Base64-encoded public key text for K8S authentication method is required [RSA2048] | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


