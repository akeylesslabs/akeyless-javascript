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
import ClassicKeyStatusInfo from './ClassicKeyStatusInfo';
import ExternalKMSKeyId from './ExternalKMSKeyId';

/**
 * The ClassicKeyTargetInfo model module.
 * @module model/ClassicKeyTargetInfo
 * @version 4.3.0
 */
class ClassicKeyTargetInfo {
    /**
     * Constructs a new <code>ClassicKeyTargetInfo</code>.
     * @alias module:model/ClassicKeyTargetInfo
     */
    constructor() { 
        
        ClassicKeyTargetInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ClassicKeyTargetInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClassicKeyTargetInfo} obj Optional instance to populate.
     * @return {module:model/ClassicKeyTargetInfo} The populated <code>ClassicKeyTargetInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ClassicKeyTargetInfo();

            if (data.hasOwnProperty('external_kms_id')) {
                obj['external_kms_id'] = ExternalKMSKeyId.constructFromObject(data['external_kms_id']);
            }
            if (data.hasOwnProperty('key_purpose')) {
                obj['key_purpose'] = ApiClient.convertToType(data['key_purpose'], ['String']);
            }
            if (data.hasOwnProperty('key_status')) {
                obj['key_status'] = ClassicKeyStatusInfo.constructFromObject(data['key_status']);
            }
            if (data.hasOwnProperty('target_assoc_id')) {
                obj['target_assoc_id'] = ApiClient.convertToType(data['target_assoc_id'], 'String');
            }
            if (data.hasOwnProperty('target_type')) {
                obj['target_type'] = ApiClient.convertToType(data['target_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ExternalKMSKeyId} external_kms_id
 */
ClassicKeyTargetInfo.prototype['external_kms_id'] = undefined;

/**
 * @member {Array.<String>} key_purpose
 */
ClassicKeyTargetInfo.prototype['key_purpose'] = undefined;

/**
 * @member {module:model/ClassicKeyStatusInfo} key_status
 */
ClassicKeyTargetInfo.prototype['key_status'] = undefined;

/**
 * @member {String} target_assoc_id
 */
ClassicKeyTargetInfo.prototype['target_assoc_id'] = undefined;

/**
 * @member {String} target_type
 */
ClassicKeyTargetInfo.prototype['target_type'] = undefined;






export default ClassicKeyTargetInfo;

