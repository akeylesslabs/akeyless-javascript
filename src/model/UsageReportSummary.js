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
 * The UsageReportSummary model module.
 * @module model/UsageReportSummary
 * @version 4.0.0
 */
class UsageReportSummary {
    /**
     * Constructs a new <code>UsageReportSummary</code>.
     * @alias module:model/UsageReportSummary
     */
    constructor() { 
        
        UsageReportSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UsageReportSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UsageReportSummary} obj Optional instance to populate.
     * @return {module:model/UsageReportSummary} The populated <code>UsageReportSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UsageReportSummary();

            if (data.hasOwnProperty('clients_by_auth_method_types')) {
                obj['clients_by_auth_method_types'] = ApiClient.convertToType(data['clients_by_auth_method_types'], {'String': 'Number'});
            }
            if (data.hasOwnProperty('product')) {
                obj['product'] = ApiClient.convertToType(data['product'], 'String');
            }
            if (data.hasOwnProperty('secrets_by_types')) {
                obj['secrets_by_types'] = ApiClient.convertToType(data['secrets_by_types'], {'String': 'Number'});
            }
            if (data.hasOwnProperty('time')) {
                obj['time'] = ApiClient.convertToType(data['time'], 'Number');
            }
            if (data.hasOwnProperty('total_clients')) {
                obj['total_clients'] = ApiClient.convertToType(data['total_clients'], 'Number');
            }
            if (data.hasOwnProperty('total_secrets')) {
                obj['total_secrets'] = ApiClient.convertToType(data['total_secrets'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, Number>} clients_by_auth_method_types
 */
UsageReportSummary.prototype['clients_by_auth_method_types'] = undefined;

/**
 * @member {String} product
 */
UsageReportSummary.prototype['product'] = undefined;

/**
 * @member {Object.<String, Number>} secrets_by_types
 */
UsageReportSummary.prototype['secrets_by_types'] = undefined;

/**
 * @member {Number} time
 */
UsageReportSummary.prototype['time'] = undefined;

/**
 * @member {Number} total_clients
 */
UsageReportSummary.prototype['total_clients'] = undefined;

/**
 * @member {Number} total_secrets
 */
UsageReportSummary.prototype['total_secrets'] = undefined;






export default UsageReportSummary;

