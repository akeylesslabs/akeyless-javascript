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
 * The PasswordPolicyInfo model module.
 * @module model/PasswordPolicyInfo
 * @version 3.3.15
 */
class PasswordPolicyInfo {
    /**
     * Constructs a new <code>PasswordPolicyInfo</code>.
     * @alias module:model/PasswordPolicyInfo
     */
    constructor() { 
        
        PasswordPolicyInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PasswordPolicyInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PasswordPolicyInfo} obj Optional instance to populate.
     * @return {module:model/PasswordPolicyInfo} The populated <code>PasswordPolicyInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PasswordPolicyInfo();

            if (data.hasOwnProperty('password_length')) {
                obj['password_length'] = ApiClient.convertToType(data['password_length'], 'Number');
            }
            if (data.hasOwnProperty('use_capital_letters')) {
                obj['use_capital_letters'] = ApiClient.convertToType(data['use_capital_letters'], 'Boolean');
            }
            if (data.hasOwnProperty('use_lower_letters')) {
                obj['use_lower_letters'] = ApiClient.convertToType(data['use_lower_letters'], 'Boolean');
            }
            if (data.hasOwnProperty('use_numbers')) {
                obj['use_numbers'] = ApiClient.convertToType(data['use_numbers'], 'Boolean');
            }
            if (data.hasOwnProperty('use_special_characters')) {
                obj['use_special_characters'] = ApiClient.convertToType(data['use_special_characters'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} password_length
 */
PasswordPolicyInfo.prototype['password_length'] = undefined;

/**
 * @member {Boolean} use_capital_letters
 */
PasswordPolicyInfo.prototype['use_capital_letters'] = undefined;

/**
 * @member {Boolean} use_lower_letters
 */
PasswordPolicyInfo.prototype['use_lower_letters'] = undefined;

/**
 * @member {Boolean} use_numbers
 */
PasswordPolicyInfo.prototype['use_numbers'] = undefined;

/**
 * @member {Boolean} use_special_characters
 */
PasswordPolicyInfo.prototype['use_special_characters'] = undefined;






export default PasswordPolicyInfo;

