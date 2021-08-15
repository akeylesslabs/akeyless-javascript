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
import DSProducerDetails from './DSProducerDetails';

/**
 * The GatewayCreateProducerAzureOutput model module.
 * @module model/GatewayCreateProducerAzureOutput
 * @version 2.4.7
 */
class GatewayCreateProducerAzureOutput {
    /**
     * Constructs a new <code>GatewayCreateProducerAzureOutput</code>.
     * @alias module:model/GatewayCreateProducerAzureOutput
     */
    constructor() { 
        
        GatewayCreateProducerAzureOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayCreateProducerAzureOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerAzureOutput} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerAzureOutput} The populated <code>GatewayCreateProducerAzureOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerAzureOutput();

            if (data.hasOwnProperty('producer_details')) {
                obj['producer_details'] = DSProducerDetails.constructFromObject(data['producer_details']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/DSProducerDetails} producer_details
 */
GatewayCreateProducerAzureOutput.prototype['producer_details'] = undefined;






export default GatewayCreateProducerAzureOutput;

