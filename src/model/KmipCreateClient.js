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
 * The KmipCreateClient model module.
 * @module model/KmipCreateClient
 * @version 2.5.7
 */
class KmipCreateClient {
    /**
     * Constructs a new <code>KmipCreateClient</code>.
     * @alias module:model/KmipCreateClient
     * @param name {String} Client name
     */
    constructor(name) { 
        
        KmipCreateClient.initialize(this, name);
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
     * Constructs a <code>KmipCreateClient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KmipCreateClient} obj Optional instance to populate.
     * @return {module:model/KmipCreateClient} The populated <code>KmipCreateClient</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KmipCreateClient();

            if (data.hasOwnProperty('certificate-ttl')) {
                obj['certificate-ttl'] = ApiClient.convertToType(data['certificate-ttl'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
        }
        return obj;
    }


}

/**
 * @member {Number} certificate-ttl
 */
KmipCreateClient.prototype['certificate-ttl'] = undefined;

/**
 * Client name
 * @member {String} name
 */
KmipCreateClient.prototype['name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
KmipCreateClient.prototype['password'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
KmipCreateClient.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
KmipCreateClient.prototype['uid-token'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
KmipCreateClient.prototype['username'] = undefined;






export default KmipCreateClient;

