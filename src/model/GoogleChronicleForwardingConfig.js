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
 * The GoogleChronicleForwardingConfig model module.
 * @module model/GoogleChronicleForwardingConfig
 * @version 3.6.0
 */
class GoogleChronicleForwardingConfig {
    /**
     * Constructs a new <code>GoogleChronicleForwardingConfig</code>.
     * @alias module:model/GoogleChronicleForwardingConfig
     */
    constructor() { 
        
        GoogleChronicleForwardingConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GoogleChronicleForwardingConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GoogleChronicleForwardingConfig} obj Optional instance to populate.
     * @return {module:model/GoogleChronicleForwardingConfig} The populated <code>GoogleChronicleForwardingConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GoogleChronicleForwardingConfig();

            if (data.hasOwnProperty('customer_id')) {
                obj['customer_id'] = ApiClient.convertToType(data['customer_id'], 'String');
            }
            if (data.hasOwnProperty('log_type')) {
                obj['log_type'] = ApiClient.convertToType(data['log_type'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('service_account_key')) {
                obj['service_account_key'] = ApiClient.convertToType(data['service_account_key'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} customer_id
 */
GoogleChronicleForwardingConfig.prototype['customer_id'] = undefined;

/**
 * @member {String} log_type
 */
GoogleChronicleForwardingConfig.prototype['log_type'] = undefined;

/**
 * @member {String} region
 */
GoogleChronicleForwardingConfig.prototype['region'] = undefined;

/**
 * @member {String} service_account_key
 */
GoogleChronicleForwardingConfig.prototype['service_account_key'] = undefined;






export default GoogleChronicleForwardingConfig;

