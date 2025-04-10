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
 * The LDAPAccessRules model module.
 * @module model/LDAPAccessRules
 * @version 5.0.2
 */
class LDAPAccessRules {
    /**
     * Constructs a new <code>LDAPAccessRules</code>.
     * @alias module:model/LDAPAccessRules
     */
    constructor() { 
        
        LDAPAccessRules.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LDAPAccessRules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LDAPAccessRules} obj Optional instance to populate.
     * @return {module:model/LDAPAccessRules} The populated <code>LDAPAccessRules</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LDAPAccessRules();

            if (data.hasOwnProperty('alg')) {
                obj['alg'] = ApiClient.convertToType(data['alg'], 'String');
            }
            if (data.hasOwnProperty('gen_key_pair')) {
                obj['gen_key_pair'] = ApiClient.convertToType(data['gen_key_pair'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('unique_identifier')) {
                obj['unique_identifier'] = ApiClient.convertToType(data['unique_identifier'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LDAPAccessRules</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LDAPAccessRules</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['alg'] && !(typeof data['alg'] === 'string' || data['alg'] instanceof String)) {
            throw new Error("Expected the field `alg` to be a primitive type in the JSON string but got " + data['alg']);
        }
        // ensure the json data is a string
        if (data['gen_key_pair'] && !(typeof data['gen_key_pair'] === 'string' || data['gen_key_pair'] instanceof String)) {
            throw new Error("Expected the field `gen_key_pair` to be a primitive type in the JSON string but got " + data['gen_key_pair']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['unique_identifier'] && !(typeof data['unique_identifier'] === 'string' || data['unique_identifier'] instanceof String)) {
            throw new Error("Expected the field `unique_identifier` to be a primitive type in the JSON string but got " + data['unique_identifier']);
        }

        return true;
    }


}



/**
 * @member {String} alg
 */
LDAPAccessRules.prototype['alg'] = undefined;

/**
 * Generate public/private key (the private key is required for the LDAP Auth Config in the Akeyless Gateway)
 * @member {String} gen_key_pair
 */
LDAPAccessRules.prototype['gen_key_pair'] = undefined;

/**
 * The public key value of LDAP.
 * @member {String} key
 */
LDAPAccessRules.prototype['key'] = undefined;

/**
 * A unique identifier to distinguish different users
 * @member {String} unique_identifier
 */
LDAPAccessRules.prototype['unique_identifier'] = undefined;






export default LDAPAccessRules;

