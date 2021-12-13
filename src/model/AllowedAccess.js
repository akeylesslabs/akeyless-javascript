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
 * The AllowedAccess model module.
 * @module model/AllowedAccess
 * @version 2.15.17
 */
class AllowedAccess {
    /**
     * Constructs a new <code>AllowedAccess</code>.
     * @alias module:model/AllowedAccess
     */
    constructor() { 
        
        AllowedAccess.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AllowedAccess</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AllowedAccess} obj Optional instance to populate.
     * @return {module:model/AllowedAccess} The populated <code>AllowedAccess</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AllowedAccess();

            if (data.hasOwnProperty('acc_id')) {
                obj['acc_id'] = ApiClient.convertToType(data['acc_id'], 'String');
            }
            if (data.hasOwnProperty('access_rules_type')) {
                obj['access_rules_type'] = ApiClient.convertToType(data['access_rules_type'], 'String');
            }
            if (data.hasOwnProperty('allowed_api')) {
                obj['allowed_api'] = ApiClient.convertToType(data['allowed_api'], 'Boolean');
            }
            if (data.hasOwnProperty('alloweds_login')) {
                obj['alloweds_login'] = ApiClient.convertToType(data['alloweds_login'], 'Boolean');
            }
            if (data.hasOwnProperty('err_msg')) {
                obj['err_msg'] = ApiClient.convertToType(data['err_msg'], 'String');
            }
            if (data.hasOwnProperty('hash')) {
                obj['hash'] = ApiClient.convertToType(data['hash'], 'String');
            }
            if (data.hasOwnProperty('is_valid')) {
                obj['is_valid'] = ApiClient.convertToType(data['is_valid'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('sub_claims')) {
                obj['sub_claims'] = ApiClient.convertToType(data['sub_claims'], {'String': ['String']});
            }
        }
        return obj;
    }


}

/**
 * @member {String} acc_id
 */
AllowedAccess.prototype['acc_id'] = undefined;

/**
 * @member {String} access_rules_type
 */
AllowedAccess.prototype['access_rules_type'] = undefined;

/**
 * @member {Boolean} allowed_api
 */
AllowedAccess.prototype['allowed_api'] = undefined;

/**
 * @member {Boolean} alloweds_login
 */
AllowedAccess.prototype['alloweds_login'] = undefined;

/**
 * @member {String} err_msg
 */
AllowedAccess.prototype['err_msg'] = undefined;

/**
 * @member {String} hash
 */
AllowedAccess.prototype['hash'] = undefined;

/**
 * @member {Boolean} is_valid
 */
AllowedAccess.prototype['is_valid'] = undefined;

/**
 * @member {String} name
 */
AllowedAccess.prototype['name'] = undefined;

/**
 * @member {Object.<String, Array.<String>>} sub_claims
 */
AllowedAccess.prototype['sub_claims'] = undefined;






export default AllowedAccess;

