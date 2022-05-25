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
 * The GatewayCreateProducerRdpOutput model module.
 * @module model/GatewayCreateProducerRdpOutput
 * @version 2.16.7
 */
class GatewayCreateProducerRdpOutput {
    /**
     * Constructs a new <code>GatewayCreateProducerRdpOutput</code>.
     * @alias module:model/GatewayCreateProducerRdpOutput
     */
    constructor() { 
        
        GatewayCreateProducerRdpOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayCreateProducerRdpOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerRdpOutput} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerRdpOutput} The populated <code>GatewayCreateProducerRdpOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerRdpOutput();

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
GatewayCreateProducerRdpOutput.prototype['producer_details'] = undefined;






export default GatewayCreateProducerRdpOutput;

