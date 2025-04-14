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
 * The RotatedSecretSync model module.
 * @module model/RotatedSecretSync
 * @version 5.0.3
 */
class RotatedSecretSync {
    /**
     * Constructs a new <code>RotatedSecretSync</code>.
     * @alias module:model/RotatedSecretSync
     * @param name {String} Rotated secret name
     */
    constructor(name) { 
        
        RotatedSecretSync.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['json'] = false;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>RotatedSecretSync</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RotatedSecretSync} obj Optional instance to populate.
     * @return {module:model/RotatedSecretSync} The populated <code>RotatedSecretSync</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RotatedSecretSync();

            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
            }
            if (data.hasOwnProperty('remote-secret-name')) {
                obj['remote-secret-name'] = ApiClient.convertToType(data['remote-secret-name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('usc-name')) {
                obj['usc-name'] = ApiClient.convertToType(data['usc-name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RotatedSecretSync</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RotatedSecretSync</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RotatedSecretSync.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['namespace'] && !(typeof data['namespace'] === 'string' || data['namespace'] instanceof String)) {
            throw new Error("Expected the field `namespace` to be a primitive type in the JSON string but got " + data['namespace']);
        }
        // ensure the json data is a string
        if (data['remote-secret-name'] && !(typeof data['remote-secret-name'] === 'string' || data['remote-secret-name'] instanceof String)) {
            throw new Error("Expected the field `remote-secret-name` to be a primitive type in the JSON string but got " + data['remote-secret-name']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }
        // ensure the json data is a string
        if (data['usc-name'] && !(typeof data['usc-name'] === 'string' || data['usc-name'] instanceof String)) {
            throw new Error("Expected the field `usc-name` to be a primitive type in the JSON string but got " + data['usc-name']);
        }

        return true;
    }


}

RotatedSecretSync.RequiredProperties = ["name"];

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
RotatedSecretSync.prototype['json'] = false;

/**
 * Rotated secret name
 * @member {String} name
 */
RotatedSecretSync.prototype['name'] = undefined;

/**
 * Vault namespace, releavnt only for Hashicorp Vault Target
 * @member {String} namespace
 */
RotatedSecretSync.prototype['namespace'] = undefined;

/**
 * Remote Secret Name that will be synced on the remote endpoint
 * @member {String} remote-secret-name
 */
RotatedSecretSync.prototype['remote-secret-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
RotatedSecretSync.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
RotatedSecretSync.prototype['uid-token'] = undefined;

/**
 * Universal Secret Connector name, If not provided all attached USC's will be synced
 * @member {String} usc-name
 */
RotatedSecretSync.prototype['usc-name'] = undefined;






export default RotatedSecretSync;

