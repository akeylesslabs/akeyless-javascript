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
 * The GatewayUpdateProducerCustomOutput model module.
 * @module model/GatewayUpdateProducerCustomOutput
 * @version 3.3.3
 */
class GatewayUpdateProducerCustomOutput {
    /**
     * Constructs a new <code>GatewayUpdateProducerCustomOutput</code>.
     * @alias module:model/GatewayUpdateProducerCustomOutput
     */
    constructor() { 
        
        GatewayUpdateProducerCustomOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayUpdateProducerCustomOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerCustomOutput} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerCustomOutput} The populated <code>GatewayUpdateProducerCustomOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerCustomOutput();

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
GatewayUpdateProducerCustomOutput.prototype['producer_details'] = undefined;






export default GatewayUpdateProducerCustomOutput;

