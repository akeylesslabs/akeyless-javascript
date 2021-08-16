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
 * The KmipServerSetup model module.
 * @module model/KmipServerSetup
 * @version 2.5.8
 */
class KmipServerSetup {
    /**
     * Constructs a new <code>KmipServerSetup</code>.
     * @alias module:model/KmipServerSetup
     * @param hostname {String} Hostname
     */
    constructor(hostname) { 
        
        KmipServerSetup.initialize(this, hostname);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, hostname) { 
        obj['hostname'] = hostname;
    }

    /**
     * Constructs a <code>KmipServerSetup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KmipServerSetup} obj Optional instance to populate.
     * @return {module:model/KmipServerSetup} The populated <code>KmipServerSetup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KmipServerSetup();

            if (data.hasOwnProperty('certificate-ttl')) {
                obj['certificate-ttl'] = ApiClient.convertToType(data['certificate-ttl'], 'Number');
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('root')) {
                obj['root'] = ApiClient.convertToType(data['root'], 'String');
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
KmipServerSetup.prototype['certificate-ttl'] = undefined;

/**
 * Hostname
 * @member {String} hostname
 */
KmipServerSetup.prototype['hostname'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
KmipServerSetup.prototype['password'] = undefined;

/**
 * @member {String} root
 */
KmipServerSetup.prototype['root'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
KmipServerSetup.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
KmipServerSetup.prototype['uid-token'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
KmipServerSetup.prototype['username'] = undefined;






export default KmipServerSetup;

