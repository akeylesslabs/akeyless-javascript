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
 * The GatewayUpdateProducerGkeOutput model module.
 * @module model/GatewayUpdateProducerGkeOutput
 * @version 2.20.3
 */
class GatewayUpdateProducerGkeOutput {
    /**
     * Constructs a new <code>GatewayUpdateProducerGkeOutput</code>.
     * @alias module:model/GatewayUpdateProducerGkeOutput
     */
    constructor() { 
        
        GatewayUpdateProducerGkeOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayUpdateProducerGkeOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerGkeOutput} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerGkeOutput} The populated <code>GatewayUpdateProducerGkeOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerGkeOutput();

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
GatewayUpdateProducerGkeOutput.prototype['producer_details'] = undefined;






export default GatewayUpdateProducerGkeOutput;

