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
 * The GcpTargetDetails model module.
 * @module model/GcpTargetDetails
 * @version 3.5.1
 */
class GcpTargetDetails {
    /**
     * Constructs a new <code>GcpTargetDetails</code>.
     * @alias module:model/GcpTargetDetails
     */
    constructor() { 
        
        GcpTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GcpTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GcpTargetDetails} obj Optional instance to populate.
     * @return {module:model/GcpTargetDetails} The populated <code>GcpTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GcpTargetDetails();

            if (data.hasOwnProperty('gcp_service_account_email')) {
                obj['gcp_service_account_email'] = ApiClient.convertToType(data['gcp_service_account_email'], 'String');
            }
            if (data.hasOwnProperty('gcp_service_account_key')) {
                obj['gcp_service_account_key'] = ApiClient.convertToType(data['gcp_service_account_key'], 'String');
            }
            if (data.hasOwnProperty('gcp_service_account_key_base64')) {
                obj['gcp_service_account_key_base64'] = ApiClient.convertToType(data['gcp_service_account_key_base64'], 'String');
            }
            if (data.hasOwnProperty('gcp_service_account_key_id')) {
                obj['gcp_service_account_key_id'] = ApiClient.convertToType(data['gcp_service_account_key_id'], 'String');
            }
            if (data.hasOwnProperty('use_gw_cloud_identity')) {
                obj['use_gw_cloud_identity'] = ApiClient.convertToType(data['use_gw_cloud_identity'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} gcp_service_account_email
 */
GcpTargetDetails.prototype['gcp_service_account_email'] = undefined;

/**
 * @member {String} gcp_service_account_key
 */
GcpTargetDetails.prototype['gcp_service_account_key'] = undefined;

/**
 * @member {String} gcp_service_account_key_base64
 */
GcpTargetDetails.prototype['gcp_service_account_key_base64'] = undefined;

/**
 * @member {String} gcp_service_account_key_id
 */
GcpTargetDetails.prototype['gcp_service_account_key_id'] = undefined;

/**
 * @member {Boolean} use_gw_cloud_identity
 */
GcpTargetDetails.prototype['use_gw_cloud_identity'] = undefined;






export default GcpTargetDetails;

