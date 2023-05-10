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
 * The GetSecretValue model module.
 * @module model/GetSecretValue
 * @version 3.3.3
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


}

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
 * Secret version
 * @member {Number} version
 */
GetSecretValue.prototype['version'] = undefined;






export default GetSecretValue;

