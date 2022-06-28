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
 * The KMIPServer model module.
 * @module model/KMIPServer
 * @version 2.16.10
 */
class KMIPServer {
    /**
     * Constructs a new <code>KMIPServer</code>.
     * @alias module:model/KMIPServer
     */
    constructor() { 
        
        KMIPServer.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KMIPServer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KMIPServer} obj Optional instance to populate.
     * @return {module:model/KMIPServer} The populated <code>KMIPServer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KMIPServer();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('ca')) {
                obj['ca'] = ApiClient.convertToType(data['ca'], ['Number']);
            }
            if (data.hasOwnProperty('certificate')) {
                obj['certificate'] = ApiClient.convertToType(data['certificate'], ['Number']);
            }
            if (data.hasOwnProperty('certificate_issue_date')) {
                obj['certificate_issue_date'] = ApiClient.convertToType(data['certificate_issue_date'], 'Date');
            }
            if (data.hasOwnProperty('certificate_ttl_in_seconds')) {
                obj['certificate_ttl_in_seconds'] = ApiClient.convertToType(data['certificate_ttl_in_seconds'], 'Number');
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('root')) {
                obj['root'] = ApiClient.convertToType(data['root'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} active
 */
KMIPServer.prototype['active'] = undefined;

/**
 * @member {Array.<Number>} ca
 */
KMIPServer.prototype['ca'] = undefined;

/**
 * @member {Array.<Number>} certificate
 */
KMIPServer.prototype['certificate'] = undefined;

/**
 * @member {Date} certificate_issue_date
 */
KMIPServer.prototype['certificate_issue_date'] = undefined;

/**
 * @member {Number} certificate_ttl_in_seconds
 */
KMIPServer.prototype['certificate_ttl_in_seconds'] = undefined;

/**
 * @member {String} hostname
 */
KMIPServer.prototype['hostname'] = undefined;

/**
 * @member {String} root
 */
KMIPServer.prototype['root'] = undefined;






export default KMIPServer;

