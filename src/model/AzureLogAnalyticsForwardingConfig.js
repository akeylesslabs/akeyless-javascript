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
 * The AzureLogAnalyticsForwardingConfig model module.
 * @module model/AzureLogAnalyticsForwardingConfig
 * @version 2.16.2
 */
class AzureLogAnalyticsForwardingConfig {
    /**
     * Constructs a new <code>AzureLogAnalyticsForwardingConfig</code>.
     * @alias module:model/AzureLogAnalyticsForwardingConfig
     */
    constructor() { 
        
        AzureLogAnalyticsForwardingConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AzureLogAnalyticsForwardingConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AzureLogAnalyticsForwardingConfig} obj Optional instance to populate.
     * @return {module:model/AzureLogAnalyticsForwardingConfig} The populated <code>AzureLogAnalyticsForwardingConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AzureLogAnalyticsForwardingConfig();

            if (data.hasOwnProperty('azure_workspace_id')) {
                obj['azure_workspace_id'] = ApiClient.convertToType(data['azure_workspace_id'], 'String');
            }
            if (data.hasOwnProperty('azure_workspace_key')) {
                obj['azure_workspace_key'] = ApiClient.convertToType(data['azure_workspace_key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} azure_workspace_id
 */
AzureLogAnalyticsForwardingConfig.prototype['azure_workspace_id'] = undefined;

/**
 * @member {String} azure_workspace_key
 */
AzureLogAnalyticsForwardingConfig.prototype['azure_workspace_key'] = undefined;






export default AzureLogAnalyticsForwardingConfig;

