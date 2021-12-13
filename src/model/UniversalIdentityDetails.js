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
import UIDTokenDetails from './UIDTokenDetails';

/**
 * The UniversalIdentityDetails model module.
 * @module model/UniversalIdentityDetails
 * @version 2.5.16
 */
class UniversalIdentityDetails {
    /**
     * Constructs a new <code>UniversalIdentityDetails</code>.
     * @alias module:model/UniversalIdentityDetails
     */
    constructor() { 
        
        UniversalIdentityDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UniversalIdentityDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UniversalIdentityDetails} obj Optional instance to populate.
     * @return {module:model/UniversalIdentityDetails} The populated <code>UniversalIdentityDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UniversalIdentityDetails();

            if (data.hasOwnProperty('max_depth')) {
                obj['max_depth'] = ApiClient.convertToType(data['max_depth'], 'Number');
            }
            if (data.hasOwnProperty('number_of_tokens')) {
                obj['number_of_tokens'] = ApiClient.convertToType(data['number_of_tokens'], 'Number');
            }
            if (data.hasOwnProperty('root')) {
                obj['root'] = UIDTokenDetails.constructFromObject(data['root']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} max_depth
 */
UniversalIdentityDetails.prototype['max_depth'] = undefined;

/**
 * @member {Number} number_of_tokens
 */
UniversalIdentityDetails.prototype['number_of_tokens'] = undefined;

/**
 * @member {module:model/UIDTokenDetails} root
 */
UniversalIdentityDetails.prototype['root'] = undefined;






export default UniversalIdentityDetails;

