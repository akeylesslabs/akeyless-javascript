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
 * The GatewayDownloadCustomerFragments model module.
 * @module model/GatewayDownloadCustomerFragments
 * @version 3.5.0
 */
class GatewayDownloadCustomerFragments {
    /**
     * Constructs a new <code>GatewayDownloadCustomerFragments</code>.
     * gatewayDownloadCustomerFragments is a command that downloads customer fragments
     * @alias module:model/GatewayDownloadCustomerFragments
     */
    constructor() { 
        
        GatewayDownloadCustomerFragments.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayDownloadCustomerFragments</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayDownloadCustomerFragments} obj Optional instance to populate.
     * @return {module:model/GatewayDownloadCustomerFragments} The populated <code>GatewayDownloadCustomerFragments</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayDownloadCustomerFragments();

            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
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
 * @default false
 */
GatewayDownloadCustomerFragments.prototype['json'] = false;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayDownloadCustomerFragments.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayDownloadCustomerFragments.prototype['uid-token'] = undefined;






export default GatewayDownloadCustomerFragments;

