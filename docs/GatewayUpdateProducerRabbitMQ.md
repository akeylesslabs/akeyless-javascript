# akeyless.GatewayUpdateProducerRabbitMQ

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Producer name | 
**newName** | **String** | Producer name | [optional] 
**password** | **String** | Required only when the authentication process requires a username and password | [optional] 
**producerEncryptionKeyName** | **String** | Dynamic producer encryption key | [optional] 
**rabbitmqAdminPwd** | **String** | RabbitMQ Admin password | [optional] 
**rabbitmqAdminUser** | **String** | RabbitMQ Admin User | [optional] 
**rabbitmqServerUri** | **String** | Server URI | [optional] 
**rabbitmqUserConfPermission** | **String** | User configuration permission | [optional] 
**rabbitmqUserReadPermission** | **String** | User read permission | [optional] 
**rabbitmqUserTags** | **String** | User Tags | [optional] 
**rabbitmqUserVhost** | **String** | User Virtual Host | [optional] 
**rabbitmqUserWritePermission** | **String** | User write permission | [optional] 
**secureAccessEnable** | **String** |  | [optional] 
**secureAccessUrl** | **String** |  | [optional] 
**secureAccessWebBrowsing** | **Boolean** |  | [optional] 
**tags** | **[String]** | List of the tags attached to this secret | [optional] 
**targetName** | **String** | Target name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userTtl** | **String** | User TTL | [optional] [default to &#39;60m&#39;]
**username** | **String** | Required only when the authentication process requires a username and password | [optional] 


