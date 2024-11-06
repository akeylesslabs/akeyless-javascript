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
 * The SraSessionEntryOut model module.
 * @module model/SraSessionEntryOut
 * @version 4.3.0
 */
class SraSessionEntryOut {
    /**
     * Constructs a new <code>SraSessionEntryOut</code>.
     * @alias module:model/SraSessionEntryOut
     */
    constructor() { 
        
        SraSessionEntryOut.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SraSessionEntryOut</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SraSessionEntryOut} obj Optional instance to populate.
     * @return {module:model/SraSessionEntryOut} The populated <code>SraSessionEntryOut</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SraSessionEntryOut();

            if (data.hasOwnProperty('access_id')) {
                obj['access_id'] = ApiClient.convertToType(data['access_id'], 'String');
            }
            if (data.hasOwnProperty('client_type')) {
                obj['client_type'] = ApiClient.convertToType(data['client_type'], 'String');
            }
            if (data.hasOwnProperty('cluster_unique_id')) {
                obj['cluster_unique_id'] = ApiClient.convertToType(data['cluster_unique_id'], 'Number');
            }
            if (data.hasOwnProperty('connection_type')) {
                obj['connection_type'] = ApiClient.convertToType(data['connection_type'], 'String');
            }
            if (data.hasOwnProperty('end_time')) {
                obj['end_time'] = ApiClient.convertToType(data['end_time'], 'Date');
            }
            if (data.hasOwnProperty('error_msg')) {
                obj['error_msg'] = ApiClient.convertToType(data['error_msg'], 'String');
            }
            if (data.hasOwnProperty('gateway_name')) {
                obj['gateway_name'] = ApiClient.convertToType(data['gateway_name'], 'String');
            }
            if (data.hasOwnProperty('instance_id')) {
                obj['instance_id'] = ApiClient.convertToType(data['instance_id'], 'String');
            }
            if (data.hasOwnProperty('secret_name')) {
                obj['secret_name'] = ApiClient.convertToType(data['secret_name'], 'String');
            }
            if (data.hasOwnProperty('session_id')) {
                obj['session_id'] = ApiClient.convertToType(data['session_id'], 'String');
            }
            if (data.hasOwnProperty('start_time')) {
                obj['start_time'] = ApiClient.convertToType(data['start_time'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('target_host')) {
                obj['target_host'] = ApiClient.convertToType(data['target_host'], 'String');
            }
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'String');
            }
            if (data.hasOwnProperty('user_identifier')) {
                obj['user_identifier'] = ApiClient.convertToType(data['user_identifier'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} access_id
 */
SraSessionEntryOut.prototype['access_id'] = undefined;

/**
 * @member {String} client_type
 */
SraSessionEntryOut.prototype['client_type'] = undefined;

/**
 * @member {Number} cluster_unique_id
 */
SraSessionEntryOut.prototype['cluster_unique_id'] = undefined;

/**
 * @member {String} connection_type
 */
SraSessionEntryOut.prototype['connection_type'] = undefined;

/**
 * @member {Date} end_time
 */
SraSessionEntryOut.prototype['end_time'] = undefined;

/**
 * @member {String} error_msg
 */
SraSessionEntryOut.prototype['error_msg'] = undefined;

/**
 * @member {String} gateway_name
 */
SraSessionEntryOut.prototype['gateway_name'] = undefined;

/**
 * @member {String} instance_id
 */
SraSessionEntryOut.prototype['instance_id'] = undefined;

/**
 * @member {String} secret_name
 */
SraSessionEntryOut.prototype['secret_name'] = undefined;

/**
 * @member {String} session_id
 */
SraSessionEntryOut.prototype['session_id'] = undefined;

/**
 * @member {Date} start_time
 */
SraSessionEntryOut.prototype['start_time'] = undefined;

/**
 * @member {String} status
 */
SraSessionEntryOut.prototype['status'] = undefined;

/**
 * @member {String} target_host
 */
SraSessionEntryOut.prototype['target_host'] = undefined;

/**
 * @member {String} ttl
 */
SraSessionEntryOut.prototype['ttl'] = undefined;

/**
 * @member {String} user_identifier
 */
SraSessionEntryOut.prototype['user_identifier'] = undefined;






export default SraSessionEntryOut;
