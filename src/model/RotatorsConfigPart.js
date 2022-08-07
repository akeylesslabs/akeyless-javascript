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
import Rotator from './Rotator';

/**
 * The RotatorsConfigPart model module.
 * @module model/RotatorsConfigPart
 * @version 2.17.0
 */
class RotatorsConfigPart {
    /**
     * Constructs a new <code>RotatorsConfigPart</code>.
     * @alias module:model/RotatorsConfigPart
     */
    constructor() { 
        
        RotatorsConfigPart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RotatorsConfigPart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RotatorsConfigPart} obj Optional instance to populate.
     * @return {module:model/RotatorsConfigPart} The populated <code>RotatorsConfigPart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RotatorsConfigPart();

            if (data.hasOwnProperty('rotators')) {
                obj['rotators'] = ApiClient.convertToType(data['rotators'], [Rotator]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/Rotator>} rotators
 */
RotatorsConfigPart.prototype['rotators'] = undefined;






export default RotatorsConfigPart;

