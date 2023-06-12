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
 * The Extension model module.
 * @module model/Extension
 * @version 3.3.8
 */
class Extension {
    /**
     * Constructs a new <code>Extension</code>.
     * @alias module:model/Extension
     */
    constructor() { 
        
        Extension.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Extension</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Extension} obj Optional instance to populate.
     * @return {module:model/Extension} The populated <code>Extension</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Extension();

            if (data.hasOwnProperty('Critical')) {
                obj['Critical'] = ApiClient.convertToType(data['Critical'], 'Boolean');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Value')) {
                obj['Value'] = ApiClient.convertToType(data['Value'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} Critical
 */
Extension.prototype['Critical'] = undefined;

/**
 * @member {String} Name
 */
Extension.prototype['Name'] = undefined;

/**
 * @member {String} Value
 */
Extension.prototype['Value'] = undefined;






export default Extension;

