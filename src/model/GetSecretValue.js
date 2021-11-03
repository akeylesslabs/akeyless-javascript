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
 * @version 2.5.13
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

            if (data.hasOwnProperty('names')) {
                obj['names'] = ApiClient.convertToType(data['names'], ['String']);
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
 * @member {Array.<String>} names
 */
GetSecretValue.prototype['names'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
GetSecretValue.prototype['password'] = undefined;

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
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
GetSecretValue.prototype['username'] = undefined;

/**
 * Secret version
 * @member {Number} version
 */
GetSecretValue.prototype['version'] = undefined;






export default GetSecretValue;

