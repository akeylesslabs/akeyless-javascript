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
 * The SshBastionSessionTermination model module.
 * @module model/SshBastionSessionTermination
 * @version 5.0.2
 */
class SshBastionSessionTermination {
    /**
     * Constructs a new <code>SshBastionSessionTermination</code>.
     * @alias module:model/SshBastionSessionTermination
     */
    constructor() { 
        
        SshBastionSessionTermination.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SshBastionSessionTermination</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SshBastionSessionTermination} obj Optional instance to populate.
     * @return {module:model/SshBastionSessionTermination} The populated <code>SshBastionSessionTermination</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SshBastionSessionTermination();

            if (data.hasOwnProperty('api_password')) {
                obj['api_password'] = ApiClient.convertToType(data['api_password'], 'String');
            }
            if (data.hasOwnProperty('api_token')) {
                obj['api_token'] = ApiClient.convertToType(data['api_token'], 'String');
            }
            if (data.hasOwnProperty('api_url')) {
                obj['api_url'] = ApiClient.convertToType(data['api_url'], 'String');
            }
            if (data.hasOwnProperty('api_username')) {
                obj['api_username'] = ApiClient.convertToType(data['api_username'], 'String');
            }
            if (data.hasOwnProperty('enabled')) {
                obj['enabled'] = ApiClient.convertToType(data['enabled'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SshBastionSessionTermination</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SshBastionSessionTermination</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['api_password'] && !(typeof data['api_password'] === 'string' || data['api_password'] instanceof String)) {
            throw new Error("Expected the field `api_password` to be a primitive type in the JSON string but got " + data['api_password']);
        }
        // ensure the json data is a string
        if (data['api_token'] && !(typeof data['api_token'] === 'string' || data['api_token'] instanceof String)) {
            throw new Error("Expected the field `api_token` to be a primitive type in the JSON string but got " + data['api_token']);
        }
        // ensure the json data is a string
        if (data['api_url'] && !(typeof data['api_url'] === 'string' || data['api_url'] instanceof String)) {
            throw new Error("Expected the field `api_url` to be a primitive type in the JSON string but got " + data['api_url']);
        }
        // ensure the json data is a string
        if (data['api_username'] && !(typeof data['api_username'] === 'string' || data['api_username'] instanceof String)) {
            throw new Error("Expected the field `api_username` to be a primitive type in the JSON string but got " + data['api_username']);
        }

        return true;
    }


}



/**
 * @member {String} api_password
 */
SshBastionSessionTermination.prototype['api_password'] = undefined;

/**
 * @member {String} api_token
 */
SshBastionSessionTermination.prototype['api_token'] = undefined;

/**
 * @member {String} api_url
 */
SshBastionSessionTermination.prototype['api_url'] = undefined;

/**
 * @member {String} api_username
 */
SshBastionSessionTermination.prototype['api_username'] = undefined;

/**
 * @member {Boolean} enabled
 */
SshBastionSessionTermination.prototype['enabled'] = undefined;






export default SshBastionSessionTermination;

