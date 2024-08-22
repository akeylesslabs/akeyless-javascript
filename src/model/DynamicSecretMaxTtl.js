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
 * The DynamicSecretMaxTtl model module.
 * @module model/DynamicSecretMaxTtl
 * @version 4.2.3
 */
class DynamicSecretMaxTtl {
    /**
     * Constructs a new <code>DynamicSecretMaxTtl</code>.
     * @alias module:model/DynamicSecretMaxTtl
     */
    constructor() { 
        
        DynamicSecretMaxTtl.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DynamicSecretMaxTtl</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretMaxTtl} obj Optional instance to populate.
     * @return {module:model/DynamicSecretMaxTtl} The populated <code>DynamicSecretMaxTtl</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretMaxTtl();

            if (data.hasOwnProperty('enable')) {
                obj['enable'] = ApiClient.convertToType(data['enable'], 'Boolean');
            }
            if (data.hasOwnProperty('max_ttl_by_minutes')) {
                obj['max_ttl_by_minutes'] = ApiClient.convertToType(data['max_ttl_by_minutes'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} enable
 */
DynamicSecretMaxTtl.prototype['enable'] = undefined;

/**
 * @member {Number} max_ttl_by_minutes
 */
DynamicSecretMaxTtl.prototype['max_ttl_by_minutes'] = undefined;






export default DynamicSecretMaxTtl;

