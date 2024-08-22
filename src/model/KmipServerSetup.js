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
 * @version 4.2.3
 */
class KmipServerSetup {
    /**
     * Constructs a new <code>KmipServerSetup</code>.
     * @alias module:model/KmipServerSetup
     * @param hostname {String} Hostname
     * @param root {String} Root path of KMIP Resources
     */
    constructor(hostname, root) { 
        
        KmipServerSetup.initialize(this, hostname, root);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, hostname, root) { 
        obj['hostname'] = hostname;
        obj['root'] = root;
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
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
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
        }
        return obj;
    }


}

/**
 * Server certificate TTL in days
 * @member {Number} certificate-ttl
 * @default 90
 */
KmipServerSetup.prototype['certificate-ttl'] = 90;

/**
 * Hostname
 * @member {String} hostname
 */
KmipServerSetup.prototype['hostname'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
KmipServerSetup.prototype['json'] = false;

/**
 * Root path of KMIP Resources
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






export default KmipServerSetup;

