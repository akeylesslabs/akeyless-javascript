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
 * The RotatedSecretDeleteSync model module.
 * @module model/RotatedSecretDeleteSync
 * @version 5.0.1
 */
class RotatedSecretDeleteSync {
    /**
     * Constructs a new <code>RotatedSecretDeleteSync</code>.
     * @alias module:model/RotatedSecretDeleteSync
     * @param name {String} Rotated secret name
     * @param uscName {String} Universal Secret Connector name
     */
    constructor(name, uscName) { 
        
        RotatedSecretDeleteSync.initialize(this, name, uscName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, uscName) { 
        obj['json'] = false;
        obj['name'] = name;
        obj['usc-name'] = uscName;
    }

    /**
     * Constructs a <code>RotatedSecretDeleteSync</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RotatedSecretDeleteSync} obj Optional instance to populate.
     * @return {module:model/RotatedSecretDeleteSync} The populated <code>RotatedSecretDeleteSync</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RotatedSecretDeleteSync();

            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
     * Validates the JSON data with respect to <code>RotatedSecretDeleteSync</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RotatedSecretDeleteSync</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RotatedSecretDeleteSync.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
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

RotatedSecretDeleteSync.RequiredProperties = ["name", "usc-name"];

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
RotatedSecretDeleteSync.prototype['json'] = false;

/**
 * Rotated secret name
 * @member {String} name
 */
RotatedSecretDeleteSync.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
RotatedSecretDeleteSync.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
RotatedSecretDeleteSync.prototype['uid-token'] = undefined;

/**
 * Universal Secret Connector name
 * @member {String} usc-name
 */
RotatedSecretDeleteSync.prototype['usc-name'] = undefined;






export default RotatedSecretDeleteSync;

