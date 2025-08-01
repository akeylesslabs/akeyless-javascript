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
 * The TargetCreateGlobalSignAtlas model module.
 * @module model/TargetCreateGlobalSignAtlas
 * @version 5.0.6
 */
class TargetCreateGlobalSignAtlas {
    /**
     * Constructs a new <code>TargetCreateGlobalSignAtlas</code>.
     * @alias module:model/TargetCreateGlobalSignAtlas
     * @param apiKey {String} API Key of the GlobalSign Atlas account
     * @param apiSecret {String} API Secret of the GlobalSign Atlas account
     * @param name {String} Target name
     */
    constructor(apiKey, apiSecret, name) { 
        
        TargetCreateGlobalSignAtlas.initialize(this, apiKey, apiSecret, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, apiKey, apiSecret, name) { 
        obj['api-key'] = apiKey;
        obj['api-secret'] = apiSecret;
        obj['json'] = false;
        obj['name'] = name;
        obj['timeout'] = '5m';
    }

    /**
     * Constructs a <code>TargetCreateGlobalSignAtlas</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetCreateGlobalSignAtlas} obj Optional instance to populate.
     * @return {module:model/TargetCreateGlobalSignAtlas} The populated <code>TargetCreateGlobalSignAtlas</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetCreateGlobalSignAtlas();

            if (data.hasOwnProperty('api-key')) {
                obj['api-key'] = ApiClient.convertToType(data['api-key'], 'String');
            }
            if (data.hasOwnProperty('api-secret')) {
                obj['api-secret'] = ApiClient.convertToType(data['api-secret'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
            }
            if (data.hasOwnProperty('mtls-cert-data-base64')) {
                obj['mtls-cert-data-base64'] = ApiClient.convertToType(data['mtls-cert-data-base64'], 'String');
            }
            if (data.hasOwnProperty('mtls-key-data-base64')) {
                obj['mtls-key-data-base64'] = ApiClient.convertToType(data['mtls-key-data-base64'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('timeout')) {
                obj['timeout'] = ApiClient.convertToType(data['timeout'], 'String');
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
     * Validates the JSON data with respect to <code>TargetCreateGlobalSignAtlas</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TargetCreateGlobalSignAtlas</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TargetCreateGlobalSignAtlas.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['api-key'] && !(typeof data['api-key'] === 'string' || data['api-key'] instanceof String)) {
            throw new Error("Expected the field `api-key` to be a primitive type in the JSON string but got " + data['api-key']);
        }
        // ensure the json data is a string
        if (data['api-secret'] && !(typeof data['api-secret'] === 'string' || data['api-secret'] instanceof String)) {
            throw new Error("Expected the field `api-secret` to be a primitive type in the JSON string but got " + data['api-secret']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['max-versions'] && !(typeof data['max-versions'] === 'string' || data['max-versions'] instanceof String)) {
            throw new Error("Expected the field `max-versions` to be a primitive type in the JSON string but got " + data['max-versions']);
        }
        // ensure the json data is a string
        if (data['mtls-cert-data-base64'] && !(typeof data['mtls-cert-data-base64'] === 'string' || data['mtls-cert-data-base64'] instanceof String)) {
            throw new Error("Expected the field `mtls-cert-data-base64` to be a primitive type in the JSON string but got " + data['mtls-cert-data-base64']);
        }
        // ensure the json data is a string
        if (data['mtls-key-data-base64'] && !(typeof data['mtls-key-data-base64'] === 'string' || data['mtls-key-data-base64'] instanceof String)) {
            throw new Error("Expected the field `mtls-key-data-base64` to be a primitive type in the JSON string but got " + data['mtls-key-data-base64']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['timeout'] && !(typeof data['timeout'] === 'string' || data['timeout'] instanceof String)) {
            throw new Error("Expected the field `timeout` to be a primitive type in the JSON string but got " + data['timeout']);
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

TargetCreateGlobalSignAtlas.RequiredProperties = ["api-key", "api-secret", "name"];

/**
 * API Key of the GlobalSign Atlas account
 * @member {String} api-key
 */
TargetCreateGlobalSignAtlas.prototype['api-key'] = undefined;

/**
 * API Secret of the GlobalSign Atlas account
 * @member {String} api-secret
 */
TargetCreateGlobalSignAtlas.prototype['api-secret'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
TargetCreateGlobalSignAtlas.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
TargetCreateGlobalSignAtlas.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
TargetCreateGlobalSignAtlas.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
TargetCreateGlobalSignAtlas.prototype['max-versions'] = undefined;

/**
 * Mutual TLS Certificate contents of the GlobalSign Atlas account encoded in base64, either mtls-cert-file-path or mtls-cert-data-base64 must be supplied
 * @member {String} mtls-cert-data-base64
 */
TargetCreateGlobalSignAtlas.prototype['mtls-cert-data-base64'] = undefined;

/**
 * Mutual TLS Key contents of the GlobalSign Atlas account encoded in base64, either mtls-key-file-path or mtls-data-base64 must be supplied
 * @member {String} mtls-key-data-base64
 */
TargetCreateGlobalSignAtlas.prototype['mtls-key-data-base64'] = undefined;

/**
 * Target name
 * @member {String} name
 */
TargetCreateGlobalSignAtlas.prototype['name'] = undefined;

/**
 * Timeout waiting for certificate validation in Duration format (1h - 1 Hour, 20m - 20 Minutes, 33m3s - 33 Minutes and 3 Seconds), maximum 1h.
 * @member {String} timeout
 * @default '5m'
 */
TargetCreateGlobalSignAtlas.prototype['timeout'] = '5m';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
TargetCreateGlobalSignAtlas.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
TargetCreateGlobalSignAtlas.prototype['uid-token'] = undefined;






export default TargetCreateGlobalSignAtlas;

