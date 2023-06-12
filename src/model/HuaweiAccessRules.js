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
 * The HuaweiAccessRules model module.
 * @module model/HuaweiAccessRules
 * @version 3.3.8
 */
class HuaweiAccessRules {
    /**
     * Constructs a new <code>HuaweiAccessRules</code>.
     * @alias module:model/HuaweiAccessRules
     */
    constructor() { 
        
        HuaweiAccessRules.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>HuaweiAccessRules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HuaweiAccessRules} obj Optional instance to populate.
     * @return {module:model/HuaweiAccessRules} The populated <code>HuaweiAccessRules</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new HuaweiAccessRules();

            if (data.hasOwnProperty('auth_endpoint')) {
                obj['auth_endpoint'] = ApiClient.convertToType(data['auth_endpoint'], 'String');
            }
            if (data.hasOwnProperty('domain_id')) {
                obj['domain_id'] = ApiClient.convertToType(data['domain_id'], ['String']);
            }
            if (data.hasOwnProperty('domain_name')) {
                obj['domain_name'] = ApiClient.convertToType(data['domain_name'], ['String']);
            }
            if (data.hasOwnProperty('tenant_id')) {
                obj['tenant_id'] = ApiClient.convertToType(data['tenant_id'], ['String']);
            }
            if (data.hasOwnProperty('tenant_name')) {
                obj['tenant_name'] = ApiClient.convertToType(data['tenant_name'], ['String']);
            }
            if (data.hasOwnProperty('user_id')) {
                obj['user_id'] = ApiClient.convertToType(data['user_id'], ['String']);
            }
            if (data.hasOwnProperty('user_name')) {
                obj['user_name'] = ApiClient.convertToType(data['user_name'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * The auth URL.
 * @member {String} auth_endpoint
 */
HuaweiAccessRules.prototype['auth_endpoint'] = undefined;

/**
 * The list of domain ids that the login is restricted to.
 * @member {Array.<String>} domain_id
 */
HuaweiAccessRules.prototype['domain_id'] = undefined;

/**
 * The list of domainNames that the login is restricted to.
 * @member {Array.<String>} domain_name
 */
HuaweiAccessRules.prototype['domain_name'] = undefined;

/**
 * The list of tenantIDs  that the login is restricted to.
 * @member {Array.<String>} tenant_id
 */
HuaweiAccessRules.prototype['tenant_id'] = undefined;

/**
 * The list of tenantNames  that the login is restricted to.
 * @member {Array.<String>} tenant_name
 */
HuaweiAccessRules.prototype['tenant_name'] = undefined;

/**
 * The list of user ids that the login is restricted to.
 * @member {Array.<String>} user_id
 */
HuaweiAccessRules.prototype['user_id'] = undefined;

/**
 * The list of user names that the login is restricted to.
 * @member {Array.<String>} user_name
 */
HuaweiAccessRules.prototype['user_name'] = undefined;






export default HuaweiAccessRules;

