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
 * The EmailPassAccessRules model module.
 * @module model/EmailPassAccessRules
 * @version 5.0.1
 */
class EmailPassAccessRules {
    /**
     * Constructs a new <code>EmailPassAccessRules</code>.
     * @alias module:model/EmailPassAccessRules
     */
    constructor() { 
        
        EmailPassAccessRules.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>EmailPassAccessRules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EmailPassAccessRules} obj Optional instance to populate.
     * @return {module:model/EmailPassAccessRules} The populated <code>EmailPassAccessRules</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EmailPassAccessRules();

            if (data.hasOwnProperty('alg')) {
                obj['alg'] = ApiClient.convertToType(data['alg'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('enc_email_with_shared_key')) {
                obj['enc_email_with_shared_key'] = ApiClient.convertToType(data['enc_email_with_shared_key'], 'String');
            }
            if (data.hasOwnProperty('hash_pass')) {
                obj['hash_pass'] = ApiClient.convertToType(data['hash_pass'], 'String');
            }
            if (data.hasOwnProperty('last_reset_password')) {
                obj['last_reset_password'] = ApiClient.convertToType(data['last_reset_password'], 'Date');
            }
            if (data.hasOwnProperty('mfa_type')) {
                obj['mfa_type'] = ApiClient.convertToType(data['mfa_type'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>EmailPassAccessRules</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EmailPassAccessRules</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['alg'] && !(typeof data['alg'] === 'string' || data['alg'] instanceof String)) {
            throw new Error("Expected the field `alg` to be a primitive type in the JSON string but got " + data['alg']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['enc_email_with_shared_key'] && !(typeof data['enc_email_with_shared_key'] === 'string' || data['enc_email_with_shared_key'] instanceof String)) {
            throw new Error("Expected the field `enc_email_with_shared_key` to be a primitive type in the JSON string but got " + data['enc_email_with_shared_key']);
        }
        // ensure the json data is a string
        if (data['hash_pass'] && !(typeof data['hash_pass'] === 'string' || data['hash_pass'] instanceof String)) {
            throw new Error("Expected the field `hash_pass` to be a primitive type in the JSON string but got " + data['hash_pass']);
        }
        // ensure the json data is a string
        if (data['mfa_type'] && !(typeof data['mfa_type'] === 'string' || data['mfa_type'] instanceof String)) {
            throw new Error("Expected the field `mfa_type` to be a primitive type in the JSON string but got " + data['mfa_type']);
        }

        return true;
    }


}



/**
 * @member {String} alg
 */
EmailPassAccessRules.prototype['alg'] = undefined;

/**
 * The Email value
 * @member {String} email
 */
EmailPassAccessRules.prototype['email'] = undefined;

/**
 * EncEmailWithSharedKey is the email of this auth method, encrypted with the shared auth/uam key (for use in uam)
 * @member {String} enc_email_with_shared_key
 */
EmailPassAccessRules.prototype['enc_email_with_shared_key'] = undefined;

/**
 * The password value
 * @member {String} hash_pass
 */
EmailPassAccessRules.prototype['hash_pass'] = undefined;

/**
 * The last password change date
 * @member {Date} last_reset_password
 */
EmailPassAccessRules.prototype['last_reset_password'] = undefined;

/**
 * @member {String} mfa_type
 */
EmailPassAccessRules.prototype['mfa_type'] = undefined;






export default EmailPassAccessRules;

