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
 * The TargetUpdateGlobalSignAtlas model module.
 * @module model/TargetUpdateGlobalSignAtlas
 * @version 4.2.1
 */
class TargetUpdateGlobalSignAtlas {
    /**
     * Constructs a new <code>TargetUpdateGlobalSignAtlas</code>.
     * @alias module:model/TargetUpdateGlobalSignAtlas
     * @param apiKey {String} API Key of the GlobalSign Atlas account
     * @param apiSecret {String} API Secret of the GlobalSign Atlas account
     * @param name {String} Target name
     */
    constructor(apiKey, apiSecret, name) { 
        
        TargetUpdateGlobalSignAtlas.initialize(this, apiKey, apiSecret, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, apiKey, apiSecret, name) { 
        obj['api-key'] = apiKey;
        obj['api-secret'] = apiSecret;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>TargetUpdateGlobalSignAtlas</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetUpdateGlobalSignAtlas} obj Optional instance to populate.
     * @return {module:model/TargetUpdateGlobalSignAtlas} The populated <code>TargetUpdateGlobalSignAtlas</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetUpdateGlobalSignAtlas();

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
            if (data.hasOwnProperty('keep-prev-version')) {
                obj['keep-prev-version'] = ApiClient.convertToType(data['keep-prev-version'], 'String');
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
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
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


}

/**
 * API Key of the GlobalSign Atlas account
 * @member {String} api-key
 */
TargetUpdateGlobalSignAtlas.prototype['api-key'] = undefined;

/**
 * API Secret of the GlobalSign Atlas account
 * @member {String} api-secret
 */
TargetUpdateGlobalSignAtlas.prototype['api-secret'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
TargetUpdateGlobalSignAtlas.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
TargetUpdateGlobalSignAtlas.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
TargetUpdateGlobalSignAtlas.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
TargetUpdateGlobalSignAtlas.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
TargetUpdateGlobalSignAtlas.prototype['max-versions'] = undefined;

/**
 * Mutual TLS Certificate contents of the GlobalSign Atlas account encoded in base64, either mtls-cert-file-path or mtls-cert-data-base64 must be supplied
 * @member {String} mtls-cert-data-base64
 */
TargetUpdateGlobalSignAtlas.prototype['mtls-cert-data-base64'] = undefined;

/**
 * Mutual TLS Key contents of the GlobalSign Atlas account encoded in base64, either mtls-key-file-path or mtls-data-base64 must be supplied
 * @member {String} mtls-key-data-base64
 */
TargetUpdateGlobalSignAtlas.prototype['mtls-key-data-base64'] = undefined;

/**
 * Target name
 * @member {String} name
 */
TargetUpdateGlobalSignAtlas.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
TargetUpdateGlobalSignAtlas.prototype['new-name'] = undefined;

/**
 * Timeout waiting for certificate validation in Duration format (1h - 1 Hour, 20m - 20 Minutes, 33m3s - 33 Minutes and 3 Seconds), maximum 1h.
 * @member {String} timeout
 * @default '5m'
 */
TargetUpdateGlobalSignAtlas.prototype['timeout'] = '5m';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
TargetUpdateGlobalSignAtlas.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
TargetUpdateGlobalSignAtlas.prototype['uid-token'] = undefined;






export default TargetUpdateGlobalSignAtlas;

