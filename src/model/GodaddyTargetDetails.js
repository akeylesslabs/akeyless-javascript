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
 * The GodaddyTargetDetails model module.
 * @module model/GodaddyTargetDetails
 * @version 5.0.2
 */
class GodaddyTargetDetails {
    /**
     * Constructs a new <code>GodaddyTargetDetails</code>.
     * GodaddyTargetDetails
     * @alias module:model/GodaddyTargetDetails
     */
    constructor() { 
        
        GodaddyTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GodaddyTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GodaddyTargetDetails} obj Optional instance to populate.
     * @return {module:model/GodaddyTargetDetails} The populated <code>GodaddyTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GodaddyTargetDetails();

            if (data.hasOwnProperty('imap_fqdn')) {
                obj['imap_fqdn'] = ApiClient.convertToType(data['imap_fqdn'], 'String');
            }
            if (data.hasOwnProperty('imap_password')) {
                obj['imap_password'] = ApiClient.convertToType(data['imap_password'], 'String');
            }
            if (data.hasOwnProperty('imap_port')) {
                obj['imap_port'] = ApiClient.convertToType(data['imap_port'], 'String');
            }
            if (data.hasOwnProperty('imap_user')) {
                obj['imap_user'] = ApiClient.convertToType(data['imap_user'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('secret')) {
                obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
            }
            if (data.hasOwnProperty('timeout')) {
                obj['timeout'] = ApiClient.convertToType(data['timeout'], 'Number');
            }
            if (data.hasOwnProperty('validation_email')) {
                obj['validation_email'] = ApiClient.convertToType(data['validation_email'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GodaddyTargetDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GodaddyTargetDetails</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['imap_fqdn'] && !(typeof data['imap_fqdn'] === 'string' || data['imap_fqdn'] instanceof String)) {
            throw new Error("Expected the field `imap_fqdn` to be a primitive type in the JSON string but got " + data['imap_fqdn']);
        }
        // ensure the json data is a string
        if (data['imap_password'] && !(typeof data['imap_password'] === 'string' || data['imap_password'] instanceof String)) {
            throw new Error("Expected the field `imap_password` to be a primitive type in the JSON string but got " + data['imap_password']);
        }
        // ensure the json data is a string
        if (data['imap_port'] && !(typeof data['imap_port'] === 'string' || data['imap_port'] instanceof String)) {
            throw new Error("Expected the field `imap_port` to be a primitive type in the JSON string but got " + data['imap_port']);
        }
        // ensure the json data is a string
        if (data['imap_user'] && !(typeof data['imap_user'] === 'string' || data['imap_user'] instanceof String)) {
            throw new Error("Expected the field `imap_user` to be a primitive type in the JSON string but got " + data['imap_user']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['secret'] && !(typeof data['secret'] === 'string' || data['secret'] instanceof String)) {
            throw new Error("Expected the field `secret` to be a primitive type in the JSON string but got " + data['secret']);
        }
        // ensure the json data is a string
        if (data['validation_email'] && !(typeof data['validation_email'] === 'string' || data['validation_email'] instanceof String)) {
            throw new Error("Expected the field `validation_email` to be a primitive type in the JSON string but got " + data['validation_email']);
        }

        return true;
    }


}



/**
 * @member {String} imap_fqdn
 */
GodaddyTargetDetails.prototype['imap_fqdn'] = undefined;

/**
 * @member {String} imap_password
 */
GodaddyTargetDetails.prototype['imap_password'] = undefined;

/**
 * @member {String} imap_port
 */
GodaddyTargetDetails.prototype['imap_port'] = undefined;

/**
 * @member {String} imap_user
 */
GodaddyTargetDetails.prototype['imap_user'] = undefined;

/**
 * @member {String} key
 */
GodaddyTargetDetails.prototype['key'] = undefined;

/**
 * @member {String} secret
 */
GodaddyTargetDetails.prototype['secret'] = undefined;

/**
 * A Duration represents the elapsed time between two instants as an int64 nanosecond count. The representation limits the largest representable duration to approximately 290 years.
 * @member {Number} timeout
 */
GodaddyTargetDetails.prototype['timeout'] = undefined;

/**
 * @member {String} validation_email
 */
GodaddyTargetDetails.prototype['validation_email'] = undefined;






export default GodaddyTargetDetails;

