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
import RuleAssigner from './RuleAssigner';

/**
 * The PathRule model module.
 * @module model/PathRule
 * @version 4.3.0
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

            if (data.hasOwnProperty('assigners')) {
                obj['assigners'] = ApiClient.convertToType(data['assigners'], [RuleAssigner]);
            }
            if (data.hasOwnProperty('capabilities')) {
                obj['capabilities'] = ApiClient.convertToType(data['capabilities'], ['String']);
            }
            if (data.hasOwnProperty('cb')) {
                obj['cb'] = ApiClient.convertToType(data['cb'], 'Number');
            }
            if (data.hasOwnProperty('is_limit_access')) {
                obj['is_limit_access'] = ApiClient.convertToType(data['is_limit_access'], 'Boolean');
            }
            if (data.hasOwnProperty('number_of_access_used')) {
                obj['number_of_access_used'] = ApiClient.convertToType(data['number_of_access_used'], 'Number');
            }
            if (data.hasOwnProperty('number_of_allowed_access')) {
                obj['number_of_allowed_access'] = ApiClient.convertToType(data['number_of_allowed_access'], 'Number');
            }
            if (data.hasOwnProperty('path')) {
                obj['path'] = ApiClient.convertToType(data['path'], 'String');
            }
            if (data.hasOwnProperty('start_time')) {
                obj['start_time'] = ApiClient.convertToType(data['start_time'], 'Number');
            }
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/RuleAssigner>} assigners
 */
PathRule.prototype['assigners'] = undefined;

/**
 * The approved/denied capabilities in the path
 * @member {Array.<String>} capabilities
 */
PathRule.prototype['capabilities'] = undefined;

/**
 * @member {Number} cb
 */
PathRule.prototype['cb'] = undefined;

/**
 * flag that indicate that this rule is allowed to be access RemainingAccess of times.
 * @member {Boolean} is_limit_access
 */
PathRule.prototype['is_limit_access'] = undefined;

/**
 * @member {Number} number_of_access_used
 */
PathRule.prototype['number_of_access_used'] = undefined;

/**
 * @member {Number} number_of_allowed_access
 */
PathRule.prototype['number_of_allowed_access'] = undefined;

/**
 * The path the rule refers to
 * @member {String} path
 */
PathRule.prototype['path'] = undefined;

/**
 * @member {Number} start_time
 */
PathRule.prototype['start_time'] = undefined;

/**
 * @member {Number} ttl
 */
PathRule.prototype['ttl'] = undefined;

/**
 * @member {String} type
 */
PathRule.prototype['type'] = undefined;






export default PathRule;

