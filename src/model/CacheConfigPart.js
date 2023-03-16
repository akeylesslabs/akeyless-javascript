/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 2.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CacheConfigPart model module.
 * @module model/CacheConfigPart
 * @version 3.3.0
 */
class CacheConfigPart {
    /**
     * Constructs a new <code>CacheConfigPart</code>.
     * @alias module:model/CacheConfigPart
     */
    constructor() { 
        
        CacheConfigPart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CacheConfigPart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CacheConfigPart} obj Optional instance to populate.
     * @return {module:model/CacheConfigPart} The populated <code>CacheConfigPart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CacheConfigPart();

            if (data.hasOwnProperty('cache_enable')) {
                obj['cache_enable'] = ApiClient.convertToType(data['cache_enable'], 'Boolean');
            }
            if (data.hasOwnProperty('cache_ttl')) {
                obj['cache_ttl'] = ApiClient.convertToType(data['cache_ttl'], 'String');
            }
            if (data.hasOwnProperty('proactive_cache_dump_interval')) {
                obj['proactive_cache_dump_interval'] = ApiClient.convertToType(data['proactive_cache_dump_interval'], 'String');
            }
            if (data.hasOwnProperty('proactive_cache_enable')) {
                obj['proactive_cache_enable'] = ApiClient.convertToType(data['proactive_cache_enable'], 'Boolean');
            }
            if (data.hasOwnProperty('proactive_cache_minimum_fetching_time')) {
                obj['proactive_cache_minimum_fetching_time'] = ApiClient.convertToType(data['proactive_cache_minimum_fetching_time'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} cache_enable
 */
CacheConfigPart.prototype['cache_enable'] = undefined;

/**
 * @member {String} cache_ttl
 */
CacheConfigPart.prototype['cache_ttl'] = undefined;

/**
 * @member {String} proactive_cache_dump_interval
 */
CacheConfigPart.prototype['proactive_cache_dump_interval'] = undefined;

/**
 * @member {Boolean} proactive_cache_enable
 */
CacheConfigPart.prototype['proactive_cache_enable'] = undefined;

/**
 * @member {String} proactive_cache_minimum_fetching_time
 */
CacheConfigPart.prototype['proactive_cache_minimum_fetching_time'] = undefined;






export default CacheConfigPart;

