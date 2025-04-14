/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GwUpdateRemoteAccessSessionLogsSplunk model module.
 * @module model/GwUpdateRemoteAccessSessionLogsSplunk
 * @version 5.0.3
 */
class GwUpdateRemoteAccessSessionLogsSplunk {
    /**
     * Constructs a new <code>GwUpdateRemoteAccessSessionLogsSplunk</code>.
     * gwUpdateRemoteAccessSessionLogsSplunk is a command that updates session log forwarding config (splunk target)
     * @alias module:model/GwUpdateRemoteAccessSessionLogsSplunk
     */
    constructor() { 
        
        GwUpdateRemoteAccessSessionLogsSplunk.initialize(this);
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
        obj['source'] = 'use-existing';
        obj['source-type'] = 'use-existing';
        obj['tls-certificate'] = 'use-existing';
    }

    /**
     * Constructs a <code>GwUpdateRemoteAccessSessionLogsSplunk</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GwUpdateRemoteAccessSessionLogsSplunk} obj Optional instance to populate.
     * @return {module:model/GwUpdateRemoteAccessSessionLogsSplunk} The populated <code>GwUpdateRemoteAccessSessionLogsSplunk</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GwUpdateRemoteAccessSessionLogsSplunk();

            if (data.hasOwnProperty('enable')) {
                obj['enable'] = ApiClient.convertToType(data['enable'], 'String');
            }
            if (data.hasOwnProperty('enable-tls')) {
                obj['enable-tls'] = ApiClient.convertToType(data['enable-tls'], 'Boolean');
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('output-format')) {
                obj['output-format'] = ApiClient.convertToType(data['output-format'], 'String');
            }
            if (data.hasOwnProperty('pull-interval')) {
                obj['pull-interval'] = ApiClient.convertToType(data['pull-interval'], 'String');
            }
            if (data.hasOwnProperty('source')) {
                obj['source'] = ApiClient.convertToType(data['source'], 'String');
            }
            if (data.hasOwnProperty('source-type')) {
                obj['source-type'] = ApiClient.convertToType(data['source-type'], 'String');
            }
            if (data.hasOwnProperty('splunk-token')) {
                obj['splunk-token'] = ApiClient.convertToType(data['splunk-token'], 'String');
            }
            if (data.hasOwnProperty('splunk-url')) {
                obj['splunk-url'] = ApiClient.convertToType(data['splunk-url'], 'String');
            }
            if (data.hasOwnProperty('tls-certificate')) {
                obj['tls-certificate'] = ApiClient.convertToType(data['tls-certificate'], 'String');
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
     * Validates the JSON data with respect to <code>GwUpdateRemoteAccessSessionLogsSplunk</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GwUpdateRemoteAccessSessionLogsSplunk</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['enable'] && !(typeof data['enable'] === 'string' || data['enable'] instanceof String)) {
            throw new Error("Expected the field `enable` to be a primitive type in the JSON string but got " + data['enable']);
        }
        // ensure the json data is a string
        if (data['index'] && !(typeof data['index'] === 'string' || data['index'] instanceof String)) {
            throw new Error("Expected the field `index` to be a primitive type in the JSON string but got " + data['index']);
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
        if (data['source'] && !(typeof data['source'] === 'string' || data['source'] instanceof String)) {
            throw new Error("Expected the field `source` to be a primitive type in the JSON string but got " + data['source']);
        }
        // ensure the json data is a string
        if (data['source-type'] && !(typeof data['source-type'] === 'string' || data['source-type'] instanceof String)) {
            throw new Error("Expected the field `source-type` to be a primitive type in the JSON string but got " + data['source-type']);
        }
        // ensure the json data is a string
        if (data['splunk-token'] && !(typeof data['splunk-token'] === 'string' || data['splunk-token'] instanceof String)) {
            throw new Error("Expected the field `splunk-token` to be a primitive type in the JSON string but got " + data['splunk-token']);
        }
        // ensure the json data is a string
        if (data['splunk-url'] && !(typeof data['splunk-url'] === 'string' || data['splunk-url'] instanceof String)) {
            throw new Error("Expected the field `splunk-url` to be a primitive type in the JSON string but got " + data['splunk-url']);
        }
        // ensure the json data is a string
        if (data['tls-certificate'] && !(typeof data['tls-certificate'] === 'string' || data['tls-certificate'] instanceof String)) {
            throw new Error("Expected the field `tls-certificate` to be a primitive type in the JSON string but got " + data['tls-certificate']);
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
 * Enable Log Forwarding [true/false]
 * @member {String} enable
 * @default 'true'
 */
GwUpdateRemoteAccessSessionLogsSplunk.prototype['enable'] = 'true';

/**
 * Enable tls
 * @member {Boolean} enable-tls
 */
GwUpdateRemoteAccessSessionLogsSplunk.prototype['enable-tls'] = undefined;

/**
 * Splunk index
 * @member {String} index
 */
GwUpdateRemoteAccessSessionLogsSplunk.prototype['index'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GwUpdateRemoteAccessSessionLogsSplunk.prototype['json'] = false;

/**
 * Logs format [text/json]
 * @member {String} output-format
 * @default 'text'
 */
GwUpdateRemoteAccessSessionLogsSplunk.prototype['output-format'] = 'text';

/**
 * Pull interval in seconds
 * @member {String} pull-interval
 * @default '10'
 */
GwUpdateRemoteAccessSessionLogsSplunk.prototype['pull-interval'] = '10';

/**
 * Splunk source
 * @member {String} source
 * @default 'use-existing'
 */
GwUpdateRemoteAccessSessionLogsSplunk.prototype['source'] = 'use-existing';

/**
 * Splunk source type
 * @member {String} source-type
 * @default 'use-existing'
 */
GwUpdateRemoteAccessSessionLogsSplunk.prototype['source-type'] = 'use-existing';

/**
 * Splunk token
 * @member {String} splunk-token
 */
GwUpdateRemoteAccessSessionLogsSplunk.prototype['splunk-token'] = undefined;

/**
 * Splunk server URL
 * @member {String} splunk-url
 */
GwUpdateRemoteAccessSessionLogsSplunk.prototype['splunk-url'] = undefined;

/**
 * Splunk tls certificate
 * @member {String} tls-certificate
 * @default 'use-existing'
 */
GwUpdateRemoteAccessSessionLogsSplunk.prototype['tls-certificate'] = 'use-existing';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GwUpdateRemoteAccessSessionLogsSplunk.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GwUpdateRemoteAccessSessionLogsSplunk.prototype['uid-token'] = undefined;






export default GwUpdateRemoteAccessSessionLogsSplunk;

