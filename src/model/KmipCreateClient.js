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
 * @version 3.6.1
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

            if (data.hasOwnProperty('activate-keys-on-creation')) {
                obj['activate-keys-on-creation'] = ApiClient.convertToType(data['activate-keys-on-creation'], 'String');
            }
            if (data.hasOwnProperty('certificate-ttl')) {
                obj['certificate-ttl'] = ApiClient.convertToType(data['certificate-ttl'], 'Number');
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
        }
        return obj;
    }


}

/**
 * If set to 'true', newly created keys on the client will be set to an 'active' state
 * @member {String} activate-keys-on-creation
 * @default 'false'
 */
KmipCreateClient.prototype['activate-keys-on-creation'] = 'false';

/**
 * Client certificate TTL in days
 * @member {Number} certificate-ttl
 * @default 90
 */
KmipCreateClient.prototype['certificate-ttl'] = 90;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
KmipCreateClient.prototype['json'] = false;

/**
 * Client name
 * @member {String} name
 */
KmipCreateClient.prototype['name'] = undefined;

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






export default KmipCreateClient;

