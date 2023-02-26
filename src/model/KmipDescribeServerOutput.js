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
 * The KmipDescribeServerOutput model module.
 * @module model/KmipDescribeServerOutput
 * @version 3.2.6
 */
class KmipDescribeServerOutput {
    /**
     * Constructs a new <code>KmipDescribeServerOutput</code>.
     * @alias module:model/KmipDescribeServerOutput
     */
    constructor() { 
        
        KmipDescribeServerOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KmipDescribeServerOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KmipDescribeServerOutput} obj Optional instance to populate.
     * @return {module:model/KmipDescribeServerOutput} The populated <code>KmipDescribeServerOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KmipDescribeServerOutput();

            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('ca_cert')) {
                obj['ca_cert'] = ApiClient.convertToType(data['ca_cert'], ['Number']);
            }
            if (data.hasOwnProperty('certificate_issue_date')) {
                obj['certificate_issue_date'] = ApiClient.convertToType(data['certificate_issue_date'], 'Date');
            }
            if (data.hasOwnProperty('certificate_ttl_in_seconds')) {
                obj['certificate_ttl_in_seconds'] = ApiClient.convertToType(data['certificate_ttl_in_seconds'], 'Number');
            }
            if (data.hasOwnProperty('hostname')) {
                obj['hostname'] = ApiClient.convertToType(data['hostname'], 'String');
            }
            if (data.hasOwnProperty('root')) {
                obj['root'] = ApiClient.convertToType(data['root'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} active
 */
KmipDescribeServerOutput.prototype['active'] = undefined;

/**
 * @member {Array.<Number>} ca_cert
 */
KmipDescribeServerOutput.prototype['ca_cert'] = undefined;

/**
 * @member {Date} certificate_issue_date
 */
KmipDescribeServerOutput.prototype['certificate_issue_date'] = undefined;

/**
 * @member {Number} certificate_ttl_in_seconds
 */
KmipDescribeServerOutput.prototype['certificate_ttl_in_seconds'] = undefined;

/**
 * @member {String} hostname
 */
KmipDescribeServerOutput.prototype['hostname'] = undefined;

/**
 * @member {String} root
 */
KmipDescribeServerOutput.prototype['root'] = undefined;






export default KmipDescribeServerOutput;

