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
 * The CertificateAnalyticAggregation model module.
 * @module model/CertificateAnalyticAggregation
 * @version 4.2.1
 */
class CertificateAnalyticAggregation {
    /**
     * Constructs a new <code>CertificateAnalyticAggregation</code>.
     * @alias module:model/CertificateAnalyticAggregation
     */
    constructor() { 
        
        CertificateAnalyticAggregation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CertificateAnalyticAggregation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CertificateAnalyticAggregation} obj Optional instance to populate.
     * @return {module:model/CertificateAnalyticAggregation} The populated <code>CertificateAnalyticAggregation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CertificateAnalyticAggregation();

            if (data.hasOwnProperty('account_id')) {
                obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
            }
            if (data.hasOwnProperty('ca_counts')) {
                obj['ca_counts'] = ApiClient.convertToType(data['ca_counts'], {'String': 'Number'});
            }
            if (data.hasOwnProperty('risk_counts')) {
                obj['risk_counts'] = ApiClient.convertToType(data['risk_counts'], {'String': 'Number'});
            }
        }
        return obj;
    }


}

/**
 * @member {String} account_id
 */
CertificateAnalyticAggregation.prototype['account_id'] = undefined;

/**
 * @member {Object.<String, Number>} ca_counts
 */
CertificateAnalyticAggregation.prototype['ca_counts'] = undefined;

/**
 * @member {Object.<String, Number>} risk_counts
 */
CertificateAnalyticAggregation.prototype['risk_counts'] = undefined;






export default CertificateAnalyticAggregation;

