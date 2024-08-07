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
 * The StaticCredsAuthOutput model module.
 * @module model/StaticCredsAuthOutput
 * @version 4.2.2
 */
class StaticCredsAuthOutput {
    /**
     * Constructs a new <code>StaticCredsAuthOutput</code>.
     * @alias module:model/StaticCredsAuthOutput
     */
    constructor() { 
        
        StaticCredsAuthOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StaticCredsAuthOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StaticCredsAuthOutput} obj Optional instance to populate.
     * @return {module:model/StaticCredsAuthOutput} The populated <code>StaticCredsAuthOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StaticCredsAuthOutput();

            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} token
 */
StaticCredsAuthOutput.prototype['token'] = undefined;






export default StaticCredsAuthOutput;

