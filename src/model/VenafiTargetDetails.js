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
 * The VenafiTargetDetails model module.
 * @module model/VenafiTargetDetails
 * @version 3.4.0
 */
class VenafiTargetDetails {
    /**
     * Constructs a new <code>VenafiTargetDetails</code>.
     * @alias module:model/VenafiTargetDetails
     */
    constructor() { 
        
        VenafiTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>VenafiTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VenafiTargetDetails} obj Optional instance to populate.
     * @return {module:model/VenafiTargetDetails} The populated <code>VenafiTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new VenafiTargetDetails();

            if (data.hasOwnProperty('venafi_api_key')) {
                obj['venafi_api_key'] = ApiClient.convertToType(data['venafi_api_key'], 'String');
            }
            if (data.hasOwnProperty('venafi_base_url')) {
                obj['venafi_base_url'] = ApiClient.convertToType(data['venafi_base_url'], 'String');
            }
            if (data.hasOwnProperty('venafi_tpp_access_token')) {
                obj['venafi_tpp_access_token'] = ApiClient.convertToType(data['venafi_tpp_access_token'], 'String');
            }
            if (data.hasOwnProperty('venafi_tpp_client_id')) {
                obj['venafi_tpp_client_id'] = ApiClient.convertToType(data['venafi_tpp_client_id'], 'String');
            }
            if (data.hasOwnProperty('venafi_tpp_password')) {
                obj['venafi_tpp_password'] = ApiClient.convertToType(data['venafi_tpp_password'], 'String');
            }
            if (data.hasOwnProperty('venafi_tpp_refresh_token')) {
                obj['venafi_tpp_refresh_token'] = ApiClient.convertToType(data['venafi_tpp_refresh_token'], 'String');
            }
            if (data.hasOwnProperty('venafi_tpp_username')) {
                obj['venafi_tpp_username'] = ApiClient.convertToType(data['venafi_tpp_username'], 'String');
            }
            if (data.hasOwnProperty('venafi_use_tpp')) {
                obj['venafi_use_tpp'] = ApiClient.convertToType(data['venafi_use_tpp'], 'Boolean');
            }
            if (data.hasOwnProperty('venafi_zone')) {
                obj['venafi_zone'] = ApiClient.convertToType(data['venafi_zone'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} venafi_api_key
 */
VenafiTargetDetails.prototype['venafi_api_key'] = undefined;

/**
 * @member {String} venafi_base_url
 */
VenafiTargetDetails.prototype['venafi_base_url'] = undefined;

/**
 * @member {String} venafi_tpp_access_token
 */
VenafiTargetDetails.prototype['venafi_tpp_access_token'] = undefined;

/**
 * @member {String} venafi_tpp_client_id
 */
VenafiTargetDetails.prototype['venafi_tpp_client_id'] = undefined;

/**
 * Deprecated: VenafiAccessToken and VenafiRefreshToken should be used instead
 * @member {String} venafi_tpp_password
 */
VenafiTargetDetails.prototype['venafi_tpp_password'] = undefined;

/**
 * @member {String} venafi_tpp_refresh_token
 */
VenafiTargetDetails.prototype['venafi_tpp_refresh_token'] = undefined;

/**
 * Deprecated: VenafiAccessToken and VenafiRefreshToken should be used instead
 * @member {String} venafi_tpp_username
 */
VenafiTargetDetails.prototype['venafi_tpp_username'] = undefined;

/**
 * @member {Boolean} venafi_use_tpp
 */
VenafiTargetDetails.prototype['venafi_use_tpp'] = undefined;

/**
 * @member {String} venafi_zone
 */
VenafiTargetDetails.prototype['venafi_zone'] = undefined;






export default VenafiTargetDetails;

