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
import Producer from './Producer';

/**
 * The ProducersConfigPart model module.
 * @module model/ProducersConfigPart
 * @version 2.4.7
 */
class ProducersConfigPart {
    /**
     * Constructs a new <code>ProducersConfigPart</code>.
     * @alias module:model/ProducersConfigPart
     */
    constructor() { 
        
        ProducersConfigPart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProducersConfigPart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProducersConfigPart} obj Optional instance to populate.
     * @return {module:model/ProducersConfigPart} The populated <code>ProducersConfigPart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProducersConfigPart();

            if (data.hasOwnProperty('producers')) {
                obj['producers'] = ApiClient.convertToType(data['producers'], [Producer]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Producer>} producers
 */
ProducersConfigPart.prototype['producers'] = undefined;






export default ProducersConfigPart;

