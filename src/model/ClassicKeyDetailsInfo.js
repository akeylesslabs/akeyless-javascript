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
import ClassicKeyTargetInfo from './ClassicKeyTargetInfo';

/**
 * The ClassicKeyDetailsInfo model module.
 * @module model/ClassicKeyDetailsInfo
 * @version 2.5.0
 */
class ClassicKeyDetailsInfo {
    /**
     * Constructs a new <code>ClassicKeyDetailsInfo</code>.
     * @alias module:model/ClassicKeyDetailsInfo
     */
    constructor() { 
        
        ClassicKeyDetailsInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClassicKeyDetailsInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClassicKeyDetailsInfo} obj Optional instance to populate.
     * @return {module:model/ClassicKeyDetailsInfo} The populated <code>ClassicKeyDetailsInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClassicKeyDetailsInfo();

            if (data.hasOwnProperty('classic_key_id')) {
                obj['classic_key_id'] = ApiClient.convertToType(data['classic_key_id'], 'String');
            }
            if (data.hasOwnProperty('is_provided_by_user')) {
                obj['is_provided_by_user'] = ApiClient.convertToType(data['is_provided_by_user'], 'Boolean');
            }
            if (data.hasOwnProperty('is_unexportable')) {
                obj['is_unexportable'] = ApiClient.convertToType(data['is_unexportable'], 'Boolean');
            }
            if (data.hasOwnProperty('key_state')) {
                obj['key_state'] = ApiClient.convertToType(data['key_state'], 'String');
            }
            if (data.hasOwnProperty('key_type')) {
                obj['key_type'] = ApiClient.convertToType(data['key_type'], 'String');
            }
            if (data.hasOwnProperty('last_error')) {
                obj['last_error'] = ApiClient.convertToType(data['last_error'], 'String');
            }
            if (data.hasOwnProperty('target_alias_helper')) {
                obj['target_alias_helper'] = ApiClient.convertToType(data['target_alias_helper'], 'String');
            }
            if (data.hasOwnProperty('target_types')) {
                obj['target_types'] = ApiClient.convertToType(data['target_types'], ['String']);
            }
            if (data.hasOwnProperty('targets')) {
                obj['targets'] = ApiClient.convertToType(data['targets'], [ClassicKeyTargetInfo]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} classic_key_id
 */
ClassicKeyDetailsInfo.prototype['classic_key_id'] = undefined;

/**
 * @member {Boolean} is_provided_by_user
 */
ClassicKeyDetailsInfo.prototype['is_provided_by_user'] = undefined;

/**
 * @member {Boolean} is_unexportable
 */
ClassicKeyDetailsInfo.prototype['is_unexportable'] = undefined;

/**
 * ItemState defines the different states an Item can be in
 * @member {String} key_state
 */
ClassicKeyDetailsInfo.prototype['key_state'] = undefined;

/**
 * @member {String} key_type
 */
ClassicKeyDetailsInfo.prototype['key_type'] = undefined;

/**
 * @member {String} last_error
 */
ClassicKeyDetailsInfo.prototype['last_error'] = undefined;

/**
 * @member {String} target_alias_helper
 */
ClassicKeyDetailsInfo.prototype['target_alias_helper'] = undefined;

/**
 * @member {Array.<String>} target_types
 */
ClassicKeyDetailsInfo.prototype['target_types'] = undefined;

/**
 * @member {Array.<module:model/ClassicKeyTargetInfo>} targets
 */
ClassicKeyDetailsInfo.prototype['targets'] = undefined;






export default ClassicKeyDetailsInfo;
