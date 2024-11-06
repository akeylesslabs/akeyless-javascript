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
 * @version 4.3.0
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
