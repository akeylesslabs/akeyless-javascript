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
 * The GatewayCreateProducerEksOutput model module.
 * @module model/GatewayCreateProducerEksOutput
 * @version 1.57.0
 */
class GatewayCreateProducerEksOutput {
    /**
     * Constructs a new <code>GatewayCreateProducerEksOutput</code>.
     * @alias module:model/GatewayCreateProducerEksOutput
     */
    constructor() { 
        
        GatewayCreateProducerEksOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayCreateProducerEksOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerEksOutput} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerEksOutput} The populated <code>GatewayCreateProducerEksOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerEksOutput();

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
GatewayCreateProducerEksOutput.prototype['producer_details'] = undefined;






export default GatewayCreateProducerEksOutput;

