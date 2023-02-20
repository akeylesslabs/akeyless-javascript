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
 * The GatewayUpdateProducerMongoOutput model module.
 * @module model/GatewayUpdateProducerMongoOutput
 * @version 3.2.5
 */
class GatewayUpdateProducerMongoOutput {
    /**
     * Constructs a new <code>GatewayUpdateProducerMongoOutput</code>.
     * @alias module:model/GatewayUpdateProducerMongoOutput
     */
    constructor() { 
        
        GatewayUpdateProducerMongoOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayUpdateProducerMongoOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerMongoOutput} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerMongoOutput} The populated <code>GatewayUpdateProducerMongoOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerMongoOutput();

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
GatewayUpdateProducerMongoOutput.prototype['producer_details'] = undefined;






export default GatewayUpdateProducerMongoOutput;

