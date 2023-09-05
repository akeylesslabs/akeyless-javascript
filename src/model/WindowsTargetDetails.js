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
 * The WindowsTargetDetails model module.
 * @module model/WindowsTargetDetails
 * @version 3.3.18
 */
class WindowsTargetDetails {
    /**
     * Constructs a new <code>WindowsTargetDetails</code>.
     * WindowsTargetDetails
     * @alias module:model/WindowsTargetDetails
     */
    constructor() { 
        
        WindowsTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WindowsTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WindowsTargetDetails} obj Optional instance to populate.
     * @return {module:model/WindowsTargetDetails} The populated <code>WindowsTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WindowsTargetDetails();

            if (data.hasOwnProperty('certificate')) {
                obj['certificate'] = ApiClient.convertToType(data['certificate'], 'String');
            }
            if (data.hasOwnProperty('domain_name')) {
                obj['domain_name'] = ApiClient.convertToType(data['domain_name'], 'String');
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'String');
            }
            if (data.hasOwnProperty('use_tls')) {
                obj['use_tls'] = ApiClient.convertToType(data['use_tls'], 'Boolean');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} certificate
 */
WindowsTargetDetails.prototype['certificate'] = undefined;

/**
 * @member {String} domain_name
 */
WindowsTargetDetails.prototype['domain_name'] = undefined;

/**
 * @member {String} hostname
 */
WindowsTargetDetails.prototype['hostname'] = undefined;

/**
 * @member {String} password
 */
WindowsTargetDetails.prototype['password'] = undefined;

/**
 * @member {String} port
 */
WindowsTargetDetails.prototype['port'] = undefined;

/**
 * @member {Boolean} use_tls
 */
WindowsTargetDetails.prototype['use_tls'] = undefined;

/**
 * @member {String} username
 */
WindowsTargetDetails.prototype['username'] = undefined;






export default WindowsTargetDetails;

