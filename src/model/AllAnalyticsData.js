/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import CertificateAnalyticAggregation from './CertificateAnalyticAggregation';
import ClientsUsageReport from './ClientsUsageReport';
import UsageReportSummary from './UsageReportSummary';

/**
 * The AllAnalyticsData model module.
 * @module model/AllAnalyticsData
 * @version 5.0.6
 */
class AllAnalyticsData {
    /**
     * Constructs a new <code>AllAnalyticsData</code>.
     * @alias module:model/AllAnalyticsData
     */
    constructor() { 
        
        AllAnalyticsData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AllAnalyticsData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AllAnalyticsData} obj Optional instance to populate.
     * @return {module:model/AllAnalyticsData} The populated <code>AllAnalyticsData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AllAnalyticsData();

            if (data.hasOwnProperty('analytics_data')) {
                obj['analytics_data'] = ApiClient.convertToType(data['analytics_data'], {'String': [['String']]});
            }
            if (data.hasOwnProperty('certificates_expiry_data')) {
                obj['certificates_expiry_data'] = CertificateAnalyticAggregation.constructFromObject(data['certificates_expiry_data']);
            }
            if (data.hasOwnProperty('clients_usage_reports')) {
                obj['clients_usage_reports'] = ApiClient.convertToType(data['clients_usage_reports'], {'String': ClientsUsageReport});
            }
            if (data.hasOwnProperty('date_updated')) {
                obj['date_updated'] = ApiClient.convertToType(data['date_updated'], 'Number');
            }
            if (data.hasOwnProperty('usage_reports')) {
                obj['usage_reports'] = ApiClient.convertToType(data['usage_reports'], {'String': UsageReportSummary});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AllAnalyticsData</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AllAnalyticsData</code>.
     */
    static validateJSON(data) {
        // validate the optional field `certificates_expiry_data`
        if (data['certificates_expiry_data']) { // data not null
          CertificateAnalyticAggregation.validateJSON(data['certificates_expiry_data']);
        }

        return true;
    }


}



/**
 * @member {Object.<String, Array.<Array.<String>>>} analytics_data
 */
AllAnalyticsData.prototype['analytics_data'] = undefined;

/**
 * @member {module:model/CertificateAnalyticAggregation} certificates_expiry_data
 */
AllAnalyticsData.prototype['certificates_expiry_data'] = undefined;

/**
 * @member {Object.<String, module:model/ClientsUsageReport>} clients_usage_reports
 */
AllAnalyticsData.prototype['clients_usage_reports'] = undefined;

/**
 * @member {Number} date_updated
 */
AllAnalyticsData.prototype['date_updated'] = undefined;

/**
 * @member {Object.<String, module:model/UsageReportSummary>} usage_reports
 */
AllAnalyticsData.prototype['usage_reports'] = undefined;






export default AllAnalyticsData;

