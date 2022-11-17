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
 * The GetAuthMethod model module.
 * @module model/GetAuthMethod
 * @version 2.20.1
 */
class GetAuthMethod {
    /**
     * Constructs a new <code>GetAuthMethod</code>.
     * @alias module:model/GetAuthMethod
     * @param name {String} Auth Method name
     */
    constructor(name) { 
        
        GetAuthMethod.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>GetAuthMethod</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetAuthMethod} obj Optional instance to populate.
     * @return {module:model/GetAuthMethod} The populated <code>GetAuthMethod</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetAuthMethod();

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
        }
        return obj;
    }


}

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
GetAuthMethod.prototype['json'] = undefined;

/**
 * Auth Method name
 * @member {String} name
 */
GetAuthMethod.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GetAuthMethod.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GetAuthMethod.prototype['uid-token'] = undefined;






export default GetAuthMethod;

