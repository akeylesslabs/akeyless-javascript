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
 * The EsmGet model module.
 * @module model/EsmGet
 * @version 5.0.0
 */
class EsmGet {
    /**
     * Constructs a new <code>EsmGet</code>.
     * esmGet is a command that gets the value and interal details of a secret from an External Secrets Manager
     * @alias module:model/EsmGet
     * @param esmName {String} Name of the External Secrets Manager item
     * @param secretId {String} The secret id (or name, for AWS, Azure or K8s targets) to get from the External Secrets Manager
     */
    constructor(esmName, secretId) { 
        
        EsmGet.initialize(this, esmName, secretId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, esmName, secretId) { 
        obj['esm-name'] = esmName;
        obj['json'] = false;
        obj['secret-id'] = secretId;
    }

    /**
     * Constructs a <code>EsmGet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EsmGet} obj Optional instance to populate.
     * @return {module:model/EsmGet} The populated <code>EsmGet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new EsmGet();

            if (data.hasOwnProperty('esm-name')) {
                obj['esm-name'] = ApiClient.convertToType(data['esm-name'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('secret-id')) {
                obj['secret-id'] = ApiClient.convertToType(data['secret-id'], 'String');
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
     * Validates the JSON data with respect to <code>EsmGet</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>EsmGet</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of EsmGet.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['esm-name'] && !(typeof data['esm-name'] === 'string' || data['esm-name'] instanceof String)) {
            throw new Error("Expected the field `esm-name` to be a primitive type in the JSON string but got " + data['esm-name']);
        }
        // ensure the json data is a string
        if (data['secret-id'] && !(typeof data['secret-id'] === 'string' || data['secret-id'] instanceof String)) {
            throw new Error("Expected the field `secret-id` to be a primitive type in the JSON string but got " + data['secret-id']);
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

EsmGet.RequiredProperties = ["esm-name", "secret-id"];

/**
 * Name of the External Secrets Manager item
 * @member {String} esm-name
 */
EsmGet.prototype['esm-name'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
EsmGet.prototype['json'] = false;

/**
 * The secret id (or name, for AWS, Azure or K8s targets) to get from the External Secrets Manager
 * @member {String} secret-id
 */
EsmGet.prototype['secret-id'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
EsmGet.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
EsmGet.prototype['uid-token'] = undefined;






export default EsmGet;

