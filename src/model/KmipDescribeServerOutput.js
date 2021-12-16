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
 * @version 2.5.21
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
 * @member {String} hostname
 */
KmipDescribeServerOutput.prototype['hostname'] = undefined;

/**
 * @member {String} root
 */
KmipDescribeServerOutput.prototype['root'] = undefined;






export default KmipDescribeServerOutput;

