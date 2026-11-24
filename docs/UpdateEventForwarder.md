# akeyless.UpdateEventForwarder

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adminName** | **String** | Workstation Admin Name | [optional] 
**authType** | **String** | The authentication type to use when connecting to ServiceNow (user-pass / jwt) | [optional] [default to &#39;user-pass&#39;]
**clientId** | **String** | The client ID to use when connecting to ServiceNow with jwt authentication | [optional] 
**description** | **String** | Description of the object | [optional] [default to &#39;default_comment&#39;]
**emailTo** | **String** | A comma seperated list of email addresses to send event to (relevant only for \&quot;email\&quot; Event Forwarder) | [optional] 
**enable** | **String** | Enable/Disable Event Forwarder [true/false] | [optional] [default to &#39;true&#39;]
**eventSourceLocations** | **[String]** | Event sources | [optional] 
**eventTypes** | **[String]** | Event types | [optional] 
**host** | **String** | Workstation Host | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | EventForwarder name | 
**newComment** | **String** | Deprecated - use description | [optional] [default to &#39;default_comment&#39;]
**newName** | **String** | New EventForwarder name | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**userEmail** | **String** | The user email to use when connecting to ServiceNow with jwt authentication | [optional] 


