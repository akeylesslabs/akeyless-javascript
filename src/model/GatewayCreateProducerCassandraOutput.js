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
 * The GatewayCreateProducerCassandraOutput model module.
 * @module model/GatewayCreateProducerCassandraOutput
 * @version 5.0.2
 */
class GatewayCreateProducerCassandraOutput {
    /**
     * Constructs a new <code>GatewayCreateProducerCassandraOutput</code>.
     * @alias module:model/GatewayCreateProducerCassandraOutput
     */
    constructor() { 
        
        GatewayCreateProducerCassandraOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayCreateProducerCassandraOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerCassandraOutput} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerCassandraOutput} The populated <code>GatewayCreateProducerCassandraOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerCassandraOutput();

            if (data.hasOwnProperty('producer_details')) {
                obj['producer_details'] = DSProducerDetails.constructFromObject(data['producer_details']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GatewayCreateProducerCassandraOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayCreateProducerCassandraOutput</code>.
     */
    static validateJSON(data) {
        // validate the optional field `producer_details`
        if (data['producer_details']) { // data not null
          DSProducerDetails.validateJSON(data['producer_details']);
        }

        return true;
    }


}



/**
 * @member {module:model/DSProducerDetails} producer_details
 */
GatewayCreateProducerCassandraOutput.prototype['producer_details'] = undefined;






export default GatewayCreateProducerCassandraOutput;

