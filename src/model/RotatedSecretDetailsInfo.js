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
 * The RotatedSecretDetailsInfo model module.
 * @module model/RotatedSecretDetailsInfo
 * @version 2.15.26
 */
class RotatedSecretDetailsInfo {
    /**
     * Constructs a new <code>RotatedSecretDetailsInfo</code>.
     * RotatedSecretDetailsInfo The rotated secret rotator info
     * @alias module:model/RotatedSecretDetailsInfo
     */
    constructor() { 
        
        RotatedSecretDetailsInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RotatedSecretDetailsInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RotatedSecretDetailsInfo} obj Optional instance to populate.
     * @return {module:model/RotatedSecretDetailsInfo} The populated <code>RotatedSecretDetailsInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RotatedSecretDetailsInfo();

            if (data.hasOwnProperty('delete_previous_version_in_days')) {
                obj['delete_previous_version_in_days'] = ApiClient.convertToType(data['delete_previous_version_in_days'], 'Number');
            }
            if (data.hasOwnProperty('gw_cluster_id')) {
                obj['gw_cluster_id'] = ApiClient.convertToType(data['gw_cluster_id'], 'Number');
            }
            if (data.hasOwnProperty('last_rotation_error')) {
                obj['last_rotation_error'] = ApiClient.convertToType(data['last_rotation_error'], 'String');
            }
            if (data.hasOwnProperty('number_of_versions_to_save')) {
                obj['number_of_versions_to_save'] = ApiClient.convertToType(data['number_of_versions_to_save'], 'Number');
            }
            if (data.hasOwnProperty('rotation_hour')) {
                obj['rotation_hour'] = ApiClient.convertToType(data['rotation_hour'], 'Number');
            }
            if (data.hasOwnProperty('rotation_interval_min')) {
                obj['rotation_interval_min'] = ApiClient.convertToType(data['rotation_interval_min'], 'Boolean');
            }
            if (data.hasOwnProperty('rotation_statement')) {
                obj['rotation_statement'] = ApiClient.convertToType(data['rotation_statement'], 'String');
            }
            if (data.hasOwnProperty('rotator_creds_type')) {
                obj['rotator_creds_type'] = ApiClient.convertToType(data['rotator_creds_type'], 'String');
            }
            if (data.hasOwnProperty('rotator_status')) {
                obj['rotator_status'] = ApiClient.convertToType(data['rotator_status'], 'String');
            }
            if (data.hasOwnProperty('rotator_type')) {
                obj['rotator_type'] = ApiClient.convertToType(data['rotator_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} delete_previous_version_in_days
 */
RotatedSecretDetailsInfo.prototype['delete_previous_version_in_days'] = undefined;

/**
 * @member {Number} gw_cluster_id
 */
RotatedSecretDetailsInfo.prototype['gw_cluster_id'] = undefined;

/**
 * @member {String} last_rotation_error
 */
RotatedSecretDetailsInfo.prototype['last_rotation_error'] = undefined;

/**
 * @member {Number} number_of_versions_to_save
 */
RotatedSecretDetailsInfo.prototype['number_of_versions_to_save'] = undefined;

/**
 * @member {Number} rotation_hour
 */
RotatedSecretDetailsInfo.prototype['rotation_hour'] = undefined;

/**
 * @member {Boolean} rotation_interval_min
 */
RotatedSecretDetailsInfo.prototype['rotation_interval_min'] = undefined;

/**
 * @member {String} rotation_statement
 */
RotatedSecretDetailsInfo.prototype['rotation_statement'] = undefined;

/**
 * @member {String} rotator_creds_type
 */
RotatedSecretDetailsInfo.prototype['rotator_creds_type'] = undefined;

/**
 * RotationStatus defines types of rotation Status
 * @member {String} rotator_status
 */
RotatedSecretDetailsInfo.prototype['rotator_status'] = undefined;

/**
 * @member {String} rotator_type
 */
RotatedSecretDetailsInfo.prototype['rotator_type'] = undefined;






export default RotatedSecretDetailsInfo;

