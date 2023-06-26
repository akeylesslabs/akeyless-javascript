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
 * @version 3.3.10
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
        }
        return obj;
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






export default EmailPassAccessRules;

