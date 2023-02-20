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
 * The Unconfigure model module.
 * @module model/Unconfigure
 * @version 3.2.5
 */
class Unconfigure {
    /**
     * Constructs a new <code>Unconfigure</code>.
     * @alias module:model/Unconfigure
     */
    constructor() { 
        
        Unconfigure.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Unconfigure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Unconfigure} obj Optional instance to populate.
     * @return {module:model/Unconfigure} The populated <code>Unconfigure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Unconfigure();

            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('profile')) {
                obj['profile'] = ApiClient.convertToType(data['profile'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
Unconfigure.prototype['json'] = false;

/**
 * The profile name to be removed
 * @member {String} profile
 * @default 'default'
 */
Unconfigure.prototype['profile'] = 'default';






export default Unconfigure;

