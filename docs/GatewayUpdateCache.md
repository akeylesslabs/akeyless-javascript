# akeyless.GatewayUpdateCache

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backupInterval** | **String** | Secure backup interval in minutes. To ensure service continuity in case of power cycle and network outage secrets will be backed up periodically per backup interval | [optional] [default to &#39;1&#39;]
**enableCache** | **String** | Enable cache [true/false] | [optional] 
**enableProactive** | **String** | Enable proactive caching [true/false] | [optional] 
**json** | **Boolean** | Set output format to JSON | [optional] [default to false]
**minimumFetchInterval** | **String** | When using Cache or/and Proactive Cache, additional secrets will be fetched upon requesting a secret, based on the requestor&#39;s access policy. Define minimum fetching interval to avoid over fetching in a given time frame | [optional] [default to &#39;5&#39;]
**staleTimeout** | **String** | Stale timeout in minutes, cache entries which are not accessed within timeout will be removed from cache | [optional] [default to &#39;60&#39;]
**token** | **String** | Authentication token (see &#x60;/auth&#x60; and &#x60;/configure&#x60;) | [optional] 
**uidToken** | **String** | The universal identity token, Required only for universal_identity authentication | [optional] 


