# akeyless.UpdateRotationSettings

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**autoRotate** | **Boolean** | Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation | 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**name** | **String** | Key name | 
**rotationEventIn** | **[String]** | How many days before the rotation of the item would you like to be notified | [optional] 
**rotationInterval** | **Number** | The number of days to wait between every automatic key rotation (7-365) | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


