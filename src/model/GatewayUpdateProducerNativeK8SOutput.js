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
 * The GatewayUpdateProducerNativeK8SOutput model module.
 * @module model/GatewayUpdateProducerNativeK8SOutput
 * @version 3.2.2
 */
class GatewayUpdateProducerNativeK8SOutput {
    /**
     * Constructs a new <code>GatewayUpdateProducerNativeK8SOutput</code>.
     * @alias module:model/GatewayUpdateProducerNativeK8SOutput
     */
    constructor() { 
        
        GatewayUpdateProducerNativeK8SOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayUpdateProducerNativeK8SOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerNativeK8SOutput} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerNativeK8SOutput} The populated <code>GatewayUpdateProducerNativeK8SOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerNativeK8SOutput();

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
GatewayUpdateProducerNativeK8SOutput.prototype['producer_details'] = undefined;






export default GatewayUpdateProducerNativeK8SOutput;

