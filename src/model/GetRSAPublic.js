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
 * The GetRSAPublic model module.
 * @module model/GetRSAPublic
 * @version 2.16.4
 */
class GetRSAPublic {
    /**
     * Constructs a new <code>GetRSAPublic</code>.
     * getRSAPublic is a command that obtains the public key from a specific RSA private key.
     * @alias module:model/GetRSAPublic
     * @param name {String} Name of RSA key to extract the public key from
     */
    constructor(name) { 
        
        GetRSAPublic.initialize(this, name);
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
     * Constructs a <code>GetRSAPublic</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRSAPublic} obj Optional instance to populate.
     * @return {module:model/GetRSAPublic} The populated <code>GetRSAPublic</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRSAPublic();

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
 * Name of RSA key to extract the public key from
 * @member {String} name
 */
GetRSAPublic.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GetRSAPublic.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GetRSAPublic.prototype['uid-token'] = undefined;






export default GetRSAPublic;

