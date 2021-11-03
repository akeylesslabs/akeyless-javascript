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
 * @version 2.5.13
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

            if (data.hasOwnProperty('names')) {
                obj['names'] = ApiClient.convertToType(data['names'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * Secret name
 * @member {String} names
 */
GetRotatedSecretValue.prototype['names'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
GetRotatedSecretValue.prototype['password'] = undefined;

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
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
GetRotatedSecretValue.prototype['username'] = undefined;

/**
 * Secret version
 * @member {Number} version
 */
GetRotatedSecretValue.prototype['version'] = undefined;






export default GetRotatedSecretValue;

