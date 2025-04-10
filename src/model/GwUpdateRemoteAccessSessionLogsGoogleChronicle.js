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
 * The GwUpdateRemoteAccessSessionLogsGoogleChronicle model module.
 * @module model/GwUpdateRemoteAccessSessionLogsGoogleChronicle
 * @version 5.0.2
 */
class GwUpdateRemoteAccessSessionLogsGoogleChronicle {
    /**
     * Constructs a new <code>GwUpdateRemoteAccessSessionLogsGoogleChronicle</code>.
     * gwUpdateRemoteAccessSessionLogsGoogleChronicle is a command that updates session log forwarding config (google-chronicle target)
     * @alias module:model/GwUpdateRemoteAccessSessionLogsGoogleChronicle
     */
    constructor() { 
        
        GwUpdateRemoteAccessSessionLogsGoogleChronicle.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['enable'] = 'true';
        obj['json'] = false;
        obj['output-format'] = 'text';
        obj['pull-interval'] = '10';
    }

    /**
     * Constructs a <code>GwUpdateRemoteAccessSessionLogsGoogleChronicle</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GwUpdateRemoteAccessSessionLogsGoogleChronicle} obj Optional instance to populate.
     * @return {module:model/GwUpdateRemoteAccessSessionLogsGoogleChronicle} The populated <code>GwUpdateRemoteAccessSessionLogsGoogleChronicle</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GwUpdateRemoteAccessSessionLogsGoogleChronicle();

            if (data.hasOwnProperty('customer-id')) {
                obj['customer-id'] = ApiClient.convertToType(data['customer-id'], 'String');
            }
            if (data.hasOwnProperty('enable')) {
                obj['enable'] = ApiClient.convertToType(data['enable'], 'String');
            }
            if (data.hasOwnProperty('gcp-key')) {
                obj['gcp-key'] = ApiClient.convertToType(data['gcp-key'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('log-type')) {
                obj['log-type'] = ApiClient.convertToType(data['log-type'], 'String');
            }
            if (data.hasOwnProperty('output-format')) {
                obj['output-format'] = ApiClient.convertToType(data['output-format'], 'String');
            }
            if (data.hasOwnProperty('pull-interval')) {
                obj['pull-interval'] = ApiClient.convertToType(data['pull-interval'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GwUpdateRemoteAccessSessionLogsGoogleChronicle</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GwUpdateRemoteAccessSessionLogsGoogleChronicle</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['customer-id'] && !(typeof data['customer-id'] === 'string' || data['customer-id'] instanceof String)) {
            throw new Error("Expected the field `customer-id` to be a primitive type in the JSON string but got " + data['customer-id']);
        }
        // ensure the json data is a string
        if (data['enable'] && !(typeof data['enable'] === 'string' || data['enable'] instanceof String)) {
            throw new Error("Expected the field `enable` to be a primitive type in the JSON string but got " + data['enable']);
        }
        // ensure the json data is a string
        if (data['gcp-key'] && !(typeof data['gcp-key'] === 'string' || data['gcp-key'] instanceof String)) {
            throw new Error("Expected the field `gcp-key` to be a primitive type in the JSON string but got " + data['gcp-key']);
        }
        // ensure the json data is a string
        if (data['log-type'] && !(typeof data['log-type'] === 'string' || data['log-type'] instanceof String)) {
            throw new Error("Expected the field `log-type` to be a primitive type in the JSON string but got " + data['log-type']);
        }
        // ensure the json data is a string
        if (data['output-format'] && !(typeof data['output-format'] === 'string' || data['output-format'] instanceof String)) {
            throw new Error("Expected the field `output-format` to be a primitive type in the JSON string but got " + data['output-format']);
        }
        // ensure the json data is a string
        if (data['pull-interval'] && !(typeof data['pull-interval'] === 'string' || data['pull-interval'] instanceof String)) {
            throw new Error("Expected the field `pull-interval` to be a primitive type in the JSON string but got " + data['pull-interval']);
        }
        // ensure the json data is a string
        if (data['region'] && !(typeof data['region'] === 'string' || data['region'] instanceof String)) {
            throw new Error("Expected the field `region` to be a primitive type in the JSON string but got " + data['region']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
    }


}



/**
 * Google chronicle customer id
 * @member {String} customer-id
 */
GwUpdateRemoteAccessSessionLogsGoogleChronicle.prototype['customer-id'] = undefined;

/**
 * Enable Log Forwarding [true/false]
 * @member {String} enable
 * @default 'true'
 */
GwUpdateRemoteAccessSessionLogsGoogleChronicle.prototype['enable'] = 'true';

/**
 * Base64-encoded service account private key text
 * @member {String} gcp-key
 */
GwUpdateRemoteAccessSessionLogsGoogleChronicle.prototype['gcp-key'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GwUpdateRemoteAccessSessionLogsGoogleChronicle.prototype['json'] = false;

/**
 * Google chronicle log type
 * @member {String} log-type
 */
GwUpdateRemoteAccessSessionLogsGoogleChronicle.prototype['log-type'] = undefined;

/**
 * Logs format [text/json]
 * @member {String} output-format
 * @default 'text'
 */
GwUpdateRemoteAccessSessionLogsGoogleChronicle.prototype['output-format'] = 'text';

/**
 * Pull interval in seconds
 * @member {String} pull-interval
 * @default '10'
 */
GwUpdateRemoteAccessSessionLogsGoogleChronicle.prototype['pull-interval'] = '10';

/**
 * Google chronicle region [eu_multi_region/london/us_multi_region/singapore/tel_aviv]
 * @member {String} region
 */
GwUpdateRemoteAccessSessionLogsGoogleChronicle.prototype['region'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GwUpdateRemoteAccessSessionLogsGoogleChronicle.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GwUpdateRemoteAccessSessionLogsGoogleChronicle.prototype['uid-token'] = undefined;






export default GwUpdateRemoteAccessSessionLogsGoogleChronicle;

