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

/**
 * The GatewayDownloadCustomerFragmentsOutput model module.
 * @module model/GatewayDownloadCustomerFragmentsOutput
 * @version 5.0.0
 */
class GatewayDownloadCustomerFragmentsOutput {
    /**
     * Constructs a new <code>GatewayDownloadCustomerFragmentsOutput</code>.
     * @alias module:model/GatewayDownloadCustomerFragmentsOutput
     */
    constructor() { 
        
        GatewayDownloadCustomerFragmentsOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayDownloadCustomerFragmentsOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayDownloadCustomerFragmentsOutput} obj Optional instance to populate.
     * @return {module:model/GatewayDownloadCustomerFragmentsOutput} The populated <code>GatewayDownloadCustomerFragmentsOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayDownloadCustomerFragmentsOutput();

            if (data.hasOwnProperty('cf_json')) {
                obj['cf_json'] = ApiClient.convertToType(data['cf_json'], {'String': Object});
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GatewayDownloadCustomerFragmentsOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayDownloadCustomerFragmentsOutput</code>.
     */
    static validateJSON(data) {

        return true;
    }


}



/**
 * @member {Object.<String, Object>} cf_json
 */
GatewayDownloadCustomerFragmentsOutput.prototype['cf_json'] = undefined;






export default GatewayDownloadCustomerFragmentsOutput;

