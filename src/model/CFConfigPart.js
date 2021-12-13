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

/**
 * The CFConfigPart model module.
 * @module model/CFConfigPart
 * @version 2.5.20
 */
class CFConfigPart {
    /**
     * Constructs a new <code>CFConfigPart</code>.
     * @alias module:model/CFConfigPart
     */
    constructor() { 
        
        CFConfigPart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CFConfigPart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CFConfigPart} obj Optional instance to populate.
     * @return {module:model/CFConfigPart} The populated <code>CFConfigPart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CFConfigPart();

            if (data.hasOwnProperty('customer_fragements')) {
                obj['customer_fragements'] = ApiClient.convertToType(data['customer_fragements'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, String>} customer_fragements
 */
CFConfigPart.prototype['customer_fragements'] = undefined;






export default CFConfigPart;

