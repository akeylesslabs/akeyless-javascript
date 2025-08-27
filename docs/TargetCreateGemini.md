# akeyless.TargetCreateGemini

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiKey** | **String** | API key for Gemini | [optional] 
**description** | **String** | Description of the object | [optional] 
**geminiUrl** | **String** | Base URL of the Gemini API | [optional] [default to &#39;https://generativelanguage.googleapis.com&#39;]
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**key** | **String** | The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used) | [optional] 
**maxVersions** | **String** | Set the maximum number of versions, limited by the account settings defaults. | [optional] 
**model** | **String** | Default model to use with Gemini | [optional] 
**name** | **String** | Target name | 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


