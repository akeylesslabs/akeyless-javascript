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
 * The GetSecretValue model module.
 * @module model/GetSecretValue
 * @version 5.0.0
 */
class GetSecretValue {
    /**
     * Constructs a new <code>GetSecretValue</code>.
     * @alias module:model/GetSecretValue
     * @param names {Array.<String>} Secret name
     */
    constructor(names) { 
        
        GetSecretValue.initialize(this, names);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, names) { 
        obj['accessibility'] = 'regular';
        obj['ignore-cache'] = 'false';
        obj['json'] = false;
        obj['names'] = names;
    }

    /**
     * Constructs a <code>GetSecretValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSecretValue} obj Optional instance to populate.
     * @return {module:model/GetSecretValue} The populated <code>GetSecretValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSecretValue();

            if (data.hasOwnProperty('accessibility')) {
                obj['accessibility'] = ApiClient.convertToType(data['accessibility'], 'String');
            }
            if (data.hasOwnProperty('ignore-cache')) {
                obj['ignore-cache'] = ApiClient.convertToType(data['ignore-cache'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('names')) {
                obj['names'] = ApiClient.convertToType(data['names'], ['String']);
            }
            if (data.hasOwnProperty('pretty-print')) {
                obj['pretty-print'] = ApiClient.convertToType(data['pretty-print'], 'Boolean');
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
     * Validates the JSON data with respect to <code>GetSecretValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GetSecretValue</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GetSecretValue.RequiredProperties) {
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
        // ensure the json data is an array
        if (!Array.isArray(data['names'])) {
            throw new Error("Expected the field `names` to be an array in the JSON data but got " + data['names']);
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

GetSecretValue.RequiredProperties = ["names"];

/**
 * for personal password manager
 * @member {String} accessibility
 * @default 'regular'
 */
GetSecretValue.prototype['accessibility'] = 'regular';

/**
 * Retrieve the Secret value without checking the Gateway's cache [true/false]. This flag is only relevant when using the RestAPI
 * @member {String} ignore-cache
 * @default 'false'
 */
GetSecretValue.prototype['ignore-cache'] = 'false';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GetSecretValue.prototype['json'] = false;

/**
 * Secret name
 * @member {Array.<String>} names
 */
GetSecretValue.prototype['names'] = undefined;

/**
 * Print the secret value with json-pretty-print (not relevent to SDK)
 * @member {Boolean} pretty-print
 */
GetSecretValue.prototype['pretty-print'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GetSecretValue.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GetSecretValue.prototype['uid-token'] = undefined;

/**
 * Secret version, if negative value N is provided the last N versions will return (maximum 20)
 * @member {Number} version
 */
GetSecretValue.prototype['version'] = undefined;






export default GetSecretValue;

