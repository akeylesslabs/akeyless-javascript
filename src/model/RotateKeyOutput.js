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
 * The RotateKeyOutput model module.
 * @module model/RotateKeyOutput
 * @version 2.5.8
 */
class RotateKeyOutput {
    /**
     * Constructs a new <code>RotateKeyOutput</code>.
     * RotateKeyOutput defines output of RotateKey operation
     * @alias module:model/RotateKeyOutput
     */
    constructor() { 
        
        RotateKeyOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RotateKeyOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RotateKeyOutput} obj Optional instance to populate.
     * @return {module:model/RotateKeyOutput} The populated <code>RotateKeyOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RotateKeyOutput();

            if (data.hasOwnProperty('new_item_version')) {
                obj['new_item_version'] = ApiClient.convertToType(data['new_item_version'], 'Number');
            }
            if (data.hasOwnProperty('next_rotation_date')) {
                obj['next_rotation_date'] = ApiClient.convertToType(data['next_rotation_date'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} new_item_version
 */
RotateKeyOutput.prototype['new_item_version'] = undefined;

/**
 * @member {Date} next_rotation_date
 */
RotateKeyOutput.prototype['next_rotation_date'] = undefined;






export default RotateKeyOutput;

