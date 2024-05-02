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
 * The RuleAssigner model module.
 * @module model/RuleAssigner
 * @version 4.0.0
 */
class RuleAssigner {
    /**
     * Constructs a new <code>RuleAssigner</code>.
     * @alias module:model/RuleAssigner
     */
    constructor() { 
        
        RuleAssigner.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RuleAssigner</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RuleAssigner} obj Optional instance to populate.
     * @return {module:model/RuleAssigner} The populated <code>RuleAssigner</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RuleAssigner();

            if (data.hasOwnProperty('access_id')) {
                obj['access_id'] = ApiClient.convertToType(data['access_id'], 'String');
            }
            if (data.hasOwnProperty('unique_id')) {
                obj['unique_id'] = ApiClient.convertToType(data['unique_id'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} access_id
 */
RuleAssigner.prototype['access_id'] = undefined;

/**
 * @member {String} unique_id
 */
RuleAssigner.prototype['unique_id'] = undefined;






export default RuleAssigner;

