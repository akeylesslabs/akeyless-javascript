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
import PathRule from './PathRule';

/**
 * The Rules model module.
 * @module model/Rules
 * @version 2.15.17
 */
class Rules {
    /**
     * Constructs a new <code>Rules</code>.
     * @alias module:model/Rules
     */
    constructor() { 
        
        Rules.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Rules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Rules} obj Optional instance to populate.
     * @return {module:model/Rules} The populated <code>Rules</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Rules();

            if (data.hasOwnProperty('admin')) {
                obj['admin'] = ApiClient.convertToType(data['admin'], 'Boolean');
            }
            if (data.hasOwnProperty('path_rules')) {
                obj['path_rules'] = ApiClient.convertToType(data['path_rules'], [PathRule]);
            }
        }
        return obj;
    }


}

/**
 * Is admin
 * @member {Boolean} admin
 */
Rules.prototype['admin'] = undefined;

/**
 * The path the rules refers to
 * @member {Array.<module:model/PathRule>} path_rules
 */
Rules.prototype['path_rules'] = undefined;






export default Rules;

