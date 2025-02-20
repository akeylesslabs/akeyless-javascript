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
 * The DynamicSecretTmpCredsUpdate model module.
 * @module model/DynamicSecretTmpCredsUpdate
 * @version 5.0.0
 */
class DynamicSecretTmpCredsUpdate {
    /**
     * Constructs a new <code>DynamicSecretTmpCredsUpdate</code>.
     * dynamicSecretTmpCredsUpdate is a command that updates dynamic secret temp creds
     * @alias module:model/DynamicSecretTmpCredsUpdate
     * @param host {String} Host
     * @param name {String} Dynamic secret name
     * @param newTtlMin {Number} New TTL in Minutes
     * @param tmpCredsId {String} Tmp Creds ID
     */
    constructor(host, name, newTtlMin, tmpCredsId) { 
        
        DynamicSecretTmpCredsUpdate.initialize(this, host, name, newTtlMin, tmpCredsId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, host, name, newTtlMin, tmpCredsId) { 
        obj['host'] = host;
        obj['json'] = false;
        obj['name'] = name;
        obj['new-ttl-min'] = newTtlMin;
        obj['tmp-creds-id'] = tmpCredsId;
    }

    /**
     * Constructs a <code>DynamicSecretTmpCredsUpdate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretTmpCredsUpdate} obj Optional instance to populate.
     * @return {module:model/DynamicSecretTmpCredsUpdate} The populated <code>DynamicSecretTmpCredsUpdate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretTmpCredsUpdate();

            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-ttl-min')) {
                obj['new-ttl-min'] = ApiClient.convertToType(data['new-ttl-min'], 'Number');
            }
            if (data.hasOwnProperty('tmp-creds-id')) {
                obj['tmp-creds-id'] = ApiClient.convertToType(data['tmp-creds-id'], 'String');
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
     * Validates the JSON data with respect to <code>DynamicSecretTmpCredsUpdate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DynamicSecretTmpCredsUpdate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DynamicSecretTmpCredsUpdate.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['host'] && !(typeof data['host'] === 'string' || data['host'] instanceof String)) {
            throw new Error("Expected the field `host` to be a primitive type in the JSON string but got " + data['host']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['tmp-creds-id'] && !(typeof data['tmp-creds-id'] === 'string' || data['tmp-creds-id'] instanceof String)) {
            throw new Error("Expected the field `tmp-creds-id` to be a primitive type in the JSON string but got " + data['tmp-creds-id']);
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

DynamicSecretTmpCredsUpdate.RequiredProperties = ["host", "name", "new-ttl-min", "tmp-creds-id"];

/**
 * Host
 * @member {String} host
 */
DynamicSecretTmpCredsUpdate.prototype['host'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DynamicSecretTmpCredsUpdate.prototype['json'] = false;

/**
 * Dynamic secret name
 * @member {String} name
 */
DynamicSecretTmpCredsUpdate.prototype['name'] = undefined;

/**
 * New TTL in Minutes
 * @member {Number} new-ttl-min
 */
DynamicSecretTmpCredsUpdate.prototype['new-ttl-min'] = undefined;

/**
 * Tmp Creds ID
 * @member {String} tmp-creds-id
 */
DynamicSecretTmpCredsUpdate.prototype['tmp-creds-id'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DynamicSecretTmpCredsUpdate.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DynamicSecretTmpCredsUpdate.prototype['uid-token'] = undefined;






export default DynamicSecretTmpCredsUpdate;

