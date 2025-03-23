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
 * The GetRotatedSecretValue model module.
 * @module model/GetRotatedSecretValue
 * @version 5.0.1
 */
class GetRotatedSecretValue {
    /**
     * Constructs a new <code>GetRotatedSecretValue</code>.
     * @alias module:model/GetRotatedSecretValue
     * @param names {String} Secret name
     */
    constructor(names) { 
        
        GetRotatedSecretValue.initialize(this, names);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, names) { 
        obj['ignore-cache'] = 'false';
        obj['json'] = false;
        obj['names'] = names;
    }

    /**
     * Constructs a <code>GetRotatedSecretValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRotatedSecretValue} obj Optional instance to populate.
     * @return {module:model/GetRotatedSecretValue} The populated <code>GetRotatedSecretValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRotatedSecretValue();

            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], 'String');
            }
            if (data.hasOwnProperty('ignore-cache')) {
                obj['ignore-cache'] = ApiClient.convertToType(data['ignore-cache'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('names')) {
                obj['names'] = ApiClient.convertToType(data['names'], 'String');
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GetRotatedSecretValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetRotatedSecretValue</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetRotatedSecretValue.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['host'] && !(typeof data['host'] === 'string' || data['host'] instanceof String)) {
            throw new Error("Expected the field `host` to be a primitive type in the JSON string but got " + data['host']);
        }
        // ensure the json data is a string
        if (data['ignore-cache'] && !(typeof data['ignore-cache'] === 'string' || data['ignore-cache'] instanceof String)) {
            throw new Error("Expected the field `ignore-cache` to be a primitive type in the JSON string but got " + data['ignore-cache']);
        }
        // ensure the json data is a string
        if (data['names'] && !(typeof data['names'] === 'string' || data['names'] instanceof String)) {
            throw new Error("Expected the field `names` to be a primitive type in the JSON string but got " + data['names']);
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

GetRotatedSecretValue.RequiredProperties = ["names"];

/**
 * Get rotated secret value of specific Host (relevant only for Linked Target)
 * @member {String} host
 */
GetRotatedSecretValue.prototype['host'] = undefined;

/**
 * Retrieve the Secret value without checking the Gateway's cache [true/false]. This flag is only relevant when using the RestAPI
 * @member {String} ignore-cache
 * @default 'false'
 */
GetRotatedSecretValue.prototype['ignore-cache'] = 'false';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GetRotatedSecretValue.prototype['json'] = false;

/**
 * Secret name
 * @member {String} names
 */
GetRotatedSecretValue.prototype['names'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GetRotatedSecretValue.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GetRotatedSecretValue.prototype['uid-token'] = undefined;

/**
 * Secret version
 * @member {Number} version
 */
GetRotatedSecretValue.prototype['version'] = undefined;






export default GetRotatedSecretValue;

