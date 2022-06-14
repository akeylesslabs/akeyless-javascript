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
 * The GatewayCreateProducerGkeOutput model module.
 * @module model/GatewayCreateProducerGkeOutput
 * @version 2.16.8
 */
class GatewayCreateProducerGkeOutput {
    /**
     * Constructs a new <code>GatewayCreateProducerGkeOutput</code>.
     * @alias module:model/GatewayCreateProducerGkeOutput
     */
    constructor() { 
        
        GatewayCreateProducerGkeOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayCreateProducerGkeOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerGkeOutput} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerGkeOutput} The populated <code>GatewayCreateProducerGkeOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerGkeOutput();

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
GatewayCreateProducerGkeOutput.prototype['producer_details'] = undefined;






export default GatewayCreateProducerGkeOutput;

