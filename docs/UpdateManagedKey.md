# akeyless.UpdateManagedKey

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**addTag** | **[String]** | List of the new tags that will be attached to this item | [optional] 
**autoRotate** | **String** | Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation | [optional] 
**name** | **String** | ManagedKey name | 
**newMetadata** | **String** | New item metadata | [optional] [default to &#39;default_metadata&#39;]
**newName** | **String** | New managed key name | [optional] 
**rmTag** | **[String]** | List of the existent tags that will be removed from this item | [optional] 
**rotationInterval** | **String** | The number of days to wait between every automatic key rotation (7-365) | [optional] 
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 
**updateUrl** | **String** | Gateway url | [optional] [default to &#39;http://localhost:8000&#39;]


