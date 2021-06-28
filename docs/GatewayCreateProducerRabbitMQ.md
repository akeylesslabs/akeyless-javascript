# akeyless.GatewayCreateProducerRabbitMQ

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Producer name | 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**rabbitmqAdminPwd** | **String** | RabbitMQ Admin password | 
**rabbitmqAdminUser** | **String** | RabbitMQ Admin User | 
**rabbitmqServerUri** | **String** | Server URI | 
**rabbitmqUserConfPermission** | **String** | User configuration permission | 
**rabbitmqUserReadPermission** | **String** | User read permission | 
**rabbitmqUserTags** | **String** | User Tags | [optional] 
**rabbitmqUserVhost** | **String** | User Virtual Host | [optional] 
**rabbitmqUserWritePermission** | **String** | User write permission | 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 


