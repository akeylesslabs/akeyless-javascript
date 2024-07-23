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
 * The AzureTargetDetails model module.
 * @module model/AzureTargetDetails
 * @version 4.2.1
 */
class AzureTargetDetails {
    /**
     * Constructs a new <code>AzureTargetDetails</code>.
     * @alias module:model/AzureTargetDetails
     */
    constructor() { 
        
        AzureTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AzureTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AzureTargetDetails} obj Optional instance to populate.
     * @return {module:model/AzureTargetDetails} The populated <code>AzureTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AzureTargetDetails();

            if (data.hasOwnProperty('azure_client_id')) {
                obj['azure_client_id'] = ApiClient.convertToType(data['azure_client_id'], 'String');
            }
            if (data.hasOwnProperty('azure_client_secret')) {
                obj['azure_client_secret'] = ApiClient.convertToType(data['azure_client_secret'], 'String');
            }
            if (data.hasOwnProperty('azure_resource_group_name')) {
                obj['azure_resource_group_name'] = ApiClient.convertToType(data['azure_resource_group_name'], 'String');
            }
            if (data.hasOwnProperty('azure_resource_name')) {
                obj['azure_resource_name'] = ApiClient.convertToType(data['azure_resource_name'], 'String');
            }
            if (data.hasOwnProperty('azure_subscription_id')) {
                obj['azure_subscription_id'] = ApiClient.convertToType(data['azure_subscription_id'], 'String');
            }
            if (data.hasOwnProperty('azure_tenant_id')) {
                obj['azure_tenant_id'] = ApiClient.convertToType(data['azure_tenant_id'], 'String');
            }
            if (data.hasOwnProperty('azure_username')) {
                obj['azure_username'] = ApiClient.convertToType(data['azure_username'], 'String');
            }
            if (data.hasOwnProperty('use_gw_cloud_identity')) {
                obj['use_gw_cloud_identity'] = ApiClient.convertToType(data['use_gw_cloud_identity'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} azure_client_id
 */
AzureTargetDetails.prototype['azure_client_id'] = undefined;

/**
 * @member {String} azure_client_secret
 */
AzureTargetDetails.prototype['azure_client_secret'] = undefined;

/**
 * @member {String} azure_resource_group_name
 */
AzureTargetDetails.prototype['azure_resource_group_name'] = undefined;

/**
 * @member {String} azure_resource_name
 */
AzureTargetDetails.prototype['azure_resource_name'] = undefined;

/**
 * @member {String} azure_subscription_id
 */
AzureTargetDetails.prototype['azure_subscription_id'] = undefined;

/**
 * @member {String} azure_tenant_id
 */
AzureTargetDetails.prototype['azure_tenant_id'] = undefined;

/**
 * @member {String} azure_username
 */
AzureTargetDetails.prototype['azure_username'] = undefined;

/**
 * @member {Boolean} use_gw_cloud_identity
 */
AzureTargetDetails.prototype['use_gw_cloud_identity'] = undefined;






export default AzureTargetDetails;

