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
import ManagedKeyTargetInfo from './ManagedKeyTargetInfo';

/**
 * The ManagedKeyDetailsInfo model module.
 * @module model/ManagedKeyDetailsInfo
 * @version 2.4.0
 */
class ManagedKeyDetailsInfo {
    /**
     * Constructs a new <code>ManagedKeyDetailsInfo</code>.
     * @alias module:model/ManagedKeyDetailsInfo
     */
    constructor() { 
        
        ManagedKeyDetailsInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ManagedKeyDetailsInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ManagedKeyDetailsInfo} obj Optional instance to populate.
     * @return {module:model/ManagedKeyDetailsInfo} The populated <code>ManagedKeyDetailsInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ManagedKeyDetailsInfo();

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
            if (data.hasOwnProperty('managed_key_id')) {
                obj['managed_key_id'] = ApiClient.convertToType(data['managed_key_id'], 'String');
            }
            if (data.hasOwnProperty('target_alias_helper')) {
                obj['target_alias_helper'] = ApiClient.convertToType(data['target_alias_helper'], 'String');
            }
            if (data.hasOwnProperty('targets')) {
                obj['targets'] = ApiClient.convertToType(data['targets'], [ManagedKeyTargetInfo]);
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} is_provided_by_user
 */
ManagedKeyDetailsInfo.prototype['is_provided_by_user'] = undefined;

/**
 * @member {Boolean} is_unexportable
 */
ManagedKeyDetailsInfo.prototype['is_unexportable'] = undefined;

/**
 * ItemState defines the different states an Item can be in
 * @member {String} key_state
 */
ManagedKeyDetailsInfo.prototype['key_state'] = undefined;

/**
 * @member {String} key_type
 */
ManagedKeyDetailsInfo.prototype['key_type'] = undefined;

/**
 * @member {String} managed_key_id
 */
ManagedKeyDetailsInfo.prototype['managed_key_id'] = undefined;

/**
 * @member {String} target_alias_helper
 */
ManagedKeyDetailsInfo.prototype['target_alias_helper'] = undefined;

/**
 * @member {Array.<module:model/ManagedKeyTargetInfo>} targets
 */
ManagedKeyDetailsInfo.prototype['targets'] = undefined;






export default ManagedKeyDetailsInfo;

