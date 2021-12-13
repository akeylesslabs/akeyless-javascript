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
 * The AWSIAMAccessRules model module.
 * @module model/AWSIAMAccessRules
 * @version 2.5.19
 */
class AWSIAMAccessRules {
    /**
     * Constructs a new <code>AWSIAMAccessRules</code>.
     * @alias module:model/AWSIAMAccessRules
     */
    constructor() { 
        
        AWSIAMAccessRules.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AWSIAMAccessRules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AWSIAMAccessRules} obj Optional instance to populate.
     * @return {module:model/AWSIAMAccessRules} The populated <code>AWSIAMAccessRules</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AWSIAMAccessRules();

            if (data.hasOwnProperty('account_id')) {
                obj['account_id'] = ApiClient.convertToType(data['account_id'], ['String']);
            }
            if (data.hasOwnProperty('arn')) {
                obj['arn'] = ApiClient.convertToType(data['arn'], ['String']);
            }
            if (data.hasOwnProperty('resource_id')) {
                obj['resource_id'] = ApiClient.convertToType(data['resource_id'], ['String']);
            }
            if (data.hasOwnProperty('role_id')) {
                obj['role_id'] = ApiClient.convertToType(data['role_id'], ['String']);
            }
            if (data.hasOwnProperty('role_name')) {
                obj['role_name'] = ApiClient.convertToType(data['role_name'], ['String']);
            }
            if (data.hasOwnProperty('sts_endpoint')) {
                obj['sts_endpoint'] = ApiClient.convertToType(data['sts_endpoint'], 'String');
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
 * The list of account ids that the login is restricted to.
 * @member {Array.<String>} account_id
 */
AWSIAMAccessRules.prototype['account_id'] = undefined;

/**
 * The list of ARNs that the login is restricted to.
 * @member {Array.<String>} arn
 */
AWSIAMAccessRules.prototype['arn'] = undefined;

/**
 * The list of resource ids that the login is restricted to.
 * @member {Array.<String>} resource_id
 */
AWSIAMAccessRules.prototype['resource_id'] = undefined;

/**
 * The list of role ids that the login is restricted to.
 * @member {Array.<String>} role_id
 */
AWSIAMAccessRules.prototype['role_id'] = undefined;

/**
 * The list of role names that the login is restricted to.
 * @member {Array.<String>} role_name
 */
AWSIAMAccessRules.prototype['role_name'] = undefined;

/**
 * The sts URL.
 * @member {String} sts_endpoint
 */
AWSIAMAccessRules.prototype['sts_endpoint'] = undefined;

/**
 * The list of user ids that the login is restricted to.
 * @member {Array.<String>} user_id
 */
AWSIAMAccessRules.prototype['user_id'] = undefined;

/**
 * The list of user names that the login is restricted to.
 * @member {Array.<String>} user_name
 */
AWSIAMAccessRules.prototype['user_name'] = undefined;






export default AWSIAMAccessRules;

