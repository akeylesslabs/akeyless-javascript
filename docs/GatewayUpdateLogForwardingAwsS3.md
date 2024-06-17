# akeyless.GatewayUpdateLogForwardingAwsS3

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accessId** | **String** | AWS access id relevant for access_key auth-type | [optional] 
**accessKey** | **String** | AWS access key relevant for access_key auth-type | [optional] 
**authType** | **String** | AWS auth type [access_key/cloud_id/assume_role] | [optional] 
**bucketName** | **String** | AWS S3 bucket name | [optional] 
**enable** | **String** | Enable Log Forwarding [true/false] | [optional] [default to &#39;true&#39;]
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**logFolder** | **String** | AWS S3 destination folder for logs | [optional] [default to &#39;use-existing&#39;]
**outputFormat** | **String** | Logs format [text/json] | [optional] [default to &#39;text&#39;]
**pullInterval** | **String** | Pull interval in seconds | [optional] [default to &#39;10&#39;]
**region** | **String** | AWS region | [optional] 
**roleArn** | **String** | AWS role arn relevant for assume_role auth-type | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


