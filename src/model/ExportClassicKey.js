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
 * The ExportClassicKey model module.
 * @module model/ExportClassicKey
 * @version 5.0.3
 */
class ExportClassicKey {
    /**
     * Constructs a new <code>ExportClassicKey</code>.
     * ExportClassicKey is a command that returns the classic key material
     * @alias module:model/ExportClassicKey
     * @param name {String} ClassicKey name
     */
    constructor(name) { 
        
        ExportClassicKey.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['accessibility'] = 'regular';
        obj['export-public-key'] = false;
        obj['ignore-cache'] = 'false';
        obj['json'] = false;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>ExportClassicKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExportClassicKey} obj Optional instance to populate.
     * @return {module:model/ExportClassicKey} The populated <code>ExportClassicKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExportClassicKey();

            if (data.hasOwnProperty('accessibility')) {
                obj['accessibility'] = ApiClient.convertToType(data['accessibility'], 'String');
            }
            if (data.hasOwnProperty('export-public-key')) {
                obj['export-public-key'] = ApiClient.convertToType(data['export-public-key'], 'Boolean');
            }
            if (data.hasOwnProperty('ignore-cache')) {
                obj['ignore-cache'] = ApiClient.convertToType(data['ignore-cache'], 'String');
            }
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
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
            if (data.hasOwnProperty('wrapping-key-name')) {
                obj['wrapping-key-name'] = ApiClient.convertToType(data['wrapping-key-name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ExportClassicKey</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ExportClassicKey</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ExportClassicKey.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['accessibility'] && !(typeof data['accessibility'] === 'string' || data['accessibility'] instanceof String)) {
            throw new Error("Expected the field `accessibility` to be a primitive type in the JSON string but got " + data['accessibility']);
        }
        // ensure the json data is a string
        if (data['ignore-cache'] && !(typeof data['ignore-cache'] === 'string' || data['ignore-cache'] instanceof String)) {
            throw new Error("Expected the field `ignore-cache` to be a primitive type in the JSON string but got " + data['ignore-cache']);
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
        if (data['wrapping-key-name'] && !(typeof data['wrapping-key-name'] === 'string' || data['wrapping-key-name'] instanceof String)) {
            throw new Error("Expected the field `wrapping-key-name` to be a primitive type in the JSON string but got " + data['wrapping-key-name']);
        }

        return true;
    }


}

ExportClassicKey.RequiredProperties = ["name"];

/**
 * for personal password manager
 * @member {String} accessibility
 * @default 'regular'
 */
ExportClassicKey.prototype['accessibility'] = 'regular';

/**
 * Use this option to output only public key
 * @member {Boolean} export-public-key
 * @default false
 */
ExportClassicKey.prototype['export-public-key'] = false;

/**
 * Retrieve the Secret value without checking the Gateway's cache [true/false]. This flag is only relevant when using the RestAPI
 * @member {String} ignore-cache
 * @default 'false'
 */
ExportClassicKey.prototype['ignore-cache'] = 'false';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
ExportClassicKey.prototype['json'] = false;

/**
 * ClassicKey name
 * @member {String} name
 */
ExportClassicKey.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
ExportClassicKey.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
ExportClassicKey.prototype['uid-token'] = undefined;

/**
 * Classic key version
 * @member {Number} version
 */
ExportClassicKey.prototype['version'] = undefined;

/**
 * Classic key name to wrap the key material with
 * @member {String} wrapping-key-name
 */
ExportClassicKey.prototype['wrapping-key-name'] = undefined;






export default ExportClassicKey;

