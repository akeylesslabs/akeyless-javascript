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
 * The UscGet model module.
 * @module model/UscGet
 * @version 5.0.6
 */
class UscGet {
    /**
     * Constructs a new <code>UscGet</code>.
     * uscGet is a command that gets the value and internal details of a secret from a Universal Secrets Connector
     * @alias module:model/UscGet
     * @param secretId {String} The secret id (or name, for AWS, Azure, K8s or Hashi vault targets) to get from the Universal Secrets Connector
     * @param uscName {String} Name of the Universal Secrets Connector item
     */
    constructor(secretId, uscName) { 
        
        UscGet.initialize(this, secretId, uscName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, secretId, uscName) { 
        obj['json'] = false;
        obj['secret-id'] = secretId;
        obj['usc-name'] = uscName;
    }

    /**
     * Constructs a <code>UscGet</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UscGet} obj Optional instance to populate.
     * @return {module:model/UscGet} The populated <code>UscGet</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UscGet();

            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('namespace')) {
                obj['namespace'] = ApiClient.convertToType(data['namespace'], 'String');
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
            if (data.hasOwnProperty('usc-name')) {
                obj['usc-name'] = ApiClient.convertToType(data['usc-name'], 'String');
            }
            if (data.hasOwnProperty('version-id')) {
                obj['version-id'] = ApiClient.convertToType(data['version-id'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UscGet</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UscGet</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UscGet.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['namespace'] && !(typeof data['namespace'] === 'string' || data['namespace'] instanceof String)) {
            throw new Error("Expected the field `namespace` to be a primitive type in the JSON string but got " + data['namespace']);
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
        // ensure the json data is a string
        if (data['usc-name'] && !(typeof data['usc-name'] === 'string' || data['usc-name'] instanceof String)) {
            throw new Error("Expected the field `usc-name` to be a primitive type in the JSON string but got " + data['usc-name']);
        }
        // ensure the json data is a string
        if (data['version-id'] && !(typeof data['version-id'] === 'string' || data['version-id'] instanceof String)) {
            throw new Error("Expected the field `version-id` to be a primitive type in the JSON string but got " + data['version-id']);
        }

        return true;
    }


}

UscGet.RequiredProperties = ["secret-id", "usc-name"];

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UscGet.prototype['json'] = false;

/**
 * The namespace (relevant for Hashi vault target)
 * @member {String} namespace
 */
UscGet.prototype['namespace'] = undefined;

/**
 * The secret id (or name, for AWS, Azure, K8s or Hashi vault targets) to get from the Universal Secrets Connector
 * @member {String} secret-id
 */
UscGet.prototype['secret-id'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UscGet.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UscGet.prototype['uid-token'] = undefined;

/**
 * Name of the Universal Secrets Connector item
 * @member {String} usc-name
 */
UscGet.prototype['usc-name'] = undefined;

/**
 * The version id (if not specified, will retrieve the last version)
 * @member {String} version-id
 */
UscGet.prototype['version-id'] = undefined;






export default UscGet;

