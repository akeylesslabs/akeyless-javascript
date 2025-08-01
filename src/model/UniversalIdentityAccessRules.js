/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UniversalIdentityAccessRules model module.
 * @module model/UniversalIdentityAccessRules
 * @version 5.0.6
 */
class UniversalIdentityAccessRules {
    /**
     * Constructs a new <code>UniversalIdentityAccessRules</code>.
     * @alias module:model/UniversalIdentityAccessRules
     */
    constructor() { 
        
        UniversalIdentityAccessRules.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UniversalIdentityAccessRules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UniversalIdentityAccessRules} obj Optional instance to populate.
     * @return {module:model/UniversalIdentityAccessRules} The populated <code>UniversalIdentityAccessRules</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UniversalIdentityAccessRules();

            if (data.hasOwnProperty('deny_inheritance')) {
                obj['deny_inheritance'] = ApiClient.convertToType(data['deny_inheritance'], 'Boolean');
            }
            if (data.hasOwnProperty('deny_rotate')) {
                obj['deny_rotate'] = ApiClient.convertToType(data['deny_rotate'], 'Boolean');
            }
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UniversalIdentityAccessRules</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UniversalIdentityAccessRules</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Boolean} deny_inheritance
 */
UniversalIdentityAccessRules.prototype['deny_inheritance'] = undefined;

/**
 * @member {Boolean} deny_rotate
 */
UniversalIdentityAccessRules.prototype['deny_rotate'] = undefined;

/**
 * @member {Number} ttl
 */
UniversalIdentityAccessRules.prototype['ttl'] = undefined;






export default UniversalIdentityAccessRules;

