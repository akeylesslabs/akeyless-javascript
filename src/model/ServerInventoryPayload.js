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
 * The ServerInventoryPayload model module.
 * @module model/ServerInventoryPayload
 * @version 3.3.18
 */
class ServerInventoryPayload {
    /**
     * Constructs a new <code>ServerInventoryPayload</code>.
     * @alias module:model/ServerInventoryPayload
     */
    constructor() { 
        
        ServerInventoryPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ServerInventoryPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServerInventoryPayload} obj Optional instance to populate.
     * @return {module:model/ServerInventoryPayload} The populated <code>ServerInventoryPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ServerInventoryPayload();

            if (data.hasOwnProperty('auto_rotate')) {
                obj['auto_rotate'] = ApiClient.convertToType(data['auto_rotate'], 'Boolean');
            }
            if (data.hasOwnProperty('auto_rotate_interval_in_days')) {
                obj['auto_rotate_interval_in_days'] = ApiClient.convertToType(data['auto_rotate_interval_in_days'], 'Number');
            }
            if (data.hasOwnProperty('auto_rotate_rotation_hour')) {
                obj['auto_rotate_rotation_hour'] = ApiClient.convertToType(data['auto_rotate_rotation_hour'], 'Number');
            }
            if (data.hasOwnProperty('enable_rdp_sra')) {
                obj['enable_rdp_sra'] = ApiClient.convertToType(data['enable_rdp_sra'], 'Boolean');
            }
            if (data.hasOwnProperty('migration_target_id')) {
                obj['migration_target_id'] = ApiClient.convertToType(data['migration_target_id'], 'Number');
            }
            if (data.hasOwnProperty('server_targets_path_template')) {
                obj['server_targets_path_template'] = ApiClient.convertToType(data['server_targets_path_template'], 'String');
            }
            if (data.hasOwnProperty('users_ignore_list')) {
                obj['users_ignore_list'] = ApiClient.convertToType(data['users_ignore_list'], {'String': 'Boolean'});
            }
            if (data.hasOwnProperty('users_rotated_secrets_path_template')) {
                obj['users_rotated_secrets_path_template'] = ApiClient.convertToType(data['users_rotated_secrets_path_template'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Boolean} auto_rotate
 */
ServerInventoryPayload.prototype['auto_rotate'] = undefined;

/**
 * @member {Number} auto_rotate_interval_in_days
 */
ServerInventoryPayload.prototype['auto_rotate_interval_in_days'] = undefined;

/**
 * @member {Number} auto_rotate_rotation_hour
 */
ServerInventoryPayload.prototype['auto_rotate_rotation_hour'] = undefined;

/**
 * @member {Boolean} enable_rdp_sra
 */
ServerInventoryPayload.prototype['enable_rdp_sra'] = undefined;

/**
 * @member {Number} migration_target_id
 */
ServerInventoryPayload.prototype['migration_target_id'] = undefined;

/**
 * @member {String} server_targets_path_template
 */
ServerInventoryPayload.prototype['server_targets_path_template'] = undefined;

/**
 * @member {Object.<String, Boolean>} users_ignore_list
 */
ServerInventoryPayload.prototype['users_ignore_list'] = undefined;

/**
 * @member {String} users_rotated_secrets_path_template
 */
ServerInventoryPayload.prototype['users_rotated_secrets_path_template'] = undefined;






export default ServerInventoryPayload;

