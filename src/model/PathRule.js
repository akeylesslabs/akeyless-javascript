/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 0.0.1
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The PathRule model module.
 * @module model/PathRule
 * @version 0.0.1
 */
class PathRule {
    /**
     * Constructs a new <code>PathRule</code>.
     * @alias module:model/PathRule
     */
    constructor() { 
        
        PathRule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PathRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PathRule} obj Optional instance to populate.
     * @return {module:model/PathRule} The populated <code>PathRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PathRule();

            if (data.hasOwnProperty('capabilities')) {
                obj['capabilities'] = ApiClient.convertToType(data['capabilities'], ['String']);
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * The approved/denied capabilities in the path
 * @member {Array.<String>} capabilities
 */
PathRule.prototype['capabilities'] = undefined;

/**
 * The path the rule refers to
 * @member {String} path
 */
PathRule.prototype['path'] = undefined;

/**
 * @member {String} type
 */
PathRule.prototype['type'] = undefined;






export default PathRule;

