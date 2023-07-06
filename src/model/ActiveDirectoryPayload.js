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
 * The ActiveDirectoryPayload model module.
 * @module model/ActiveDirectoryPayload
 * @version 3.3.13
 */
class ActiveDirectoryPayload {
    /**
     * Constructs a new <code>ActiveDirectoryPayload</code>.
     * @alias module:model/ActiveDirectoryPayload
     */
    constructor() { 
        
        ActiveDirectoryPayload.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ActiveDirectoryPayload</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ActiveDirectoryPayload} obj Optional instance to populate.
     * @return {module:model/ActiveDirectoryPayload} The populated <code>ActiveDirectoryPayload</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ActiveDirectoryPayload();

            if (data.hasOwnProperty('active_directory_target_id')) {
                obj['active_directory_target_id'] = ApiClient.convertToType(data['active_directory_target_id'], 'Number');
            }
            if (data.hasOwnProperty('auto_rotate')) {
                obj['auto_rotate'] = ApiClient.convertToType(data['auto_rotate'], 'Boolean');
            }
            if (data.hasOwnProperty('auto_rotate_interval_in_days')) {
                obj['auto_rotate_interval_in_days'] = ApiClient.convertToType(data['auto_rotate_interval_in_days'], 'Number');
            }
            if (data.hasOwnProperty('auto_rotate_rotation_hour')) {
                obj['auto_rotate_rotation_hour'] = ApiClient.convertToType(data['auto_rotate_rotation_hour'], 'Number');
            }
            if (data.hasOwnProperty('computer_base_dn')) {
                obj['computer_base_dn'] = ApiClient.convertToType(data['computer_base_dn'], 'String');
            }
            if (data.hasOwnProperty('discover_local_users')) {
                obj['discover_local_users'] = ApiClient.convertToType(data['discover_local_users'], 'Boolean');
            }
            if (data.hasOwnProperty('domain_name')) {
                obj['domain_name'] = ApiClient.convertToType(data['domain_name'], 'String');
            }
            if (data.hasOwnProperty('domain_server_targets_path_template')) {
                obj['domain_server_targets_path_template'] = ApiClient.convertToType(data['domain_server_targets_path_template'], 'String');
            }
            if (data.hasOwnProperty('domain_users_rotated_secrets_path_template')) {
                obj['domain_users_rotated_secrets_path_template'] = ApiClient.convertToType(data['domain_users_rotated_secrets_path_template'], 'String');
            }
            if (data.hasOwnProperty('enable_rdp_sra')) {
                obj['enable_rdp_sra'] = ApiClient.convertToType(data['enable_rdp_sra'], 'Boolean');
            }
            if (data.hasOwnProperty('local_users_ignore_list')) {
                obj['local_users_ignore_list'] = ApiClient.convertToType(data['local_users_ignore_list'], {'String': 'Boolean'});
            }
            if (data.hasOwnProperty('local_users_rotated_secrets_path_template')) {
                obj['local_users_rotated_secrets_path_template'] = ApiClient.convertToType(data['local_users_rotated_secrets_path_template'], 'String');
            }
            if (data.hasOwnProperty('ssh_port')) {
                obj['ssh_port'] = ApiClient.convertToType(data['ssh_port'], 'String');
            }
            if (data.hasOwnProperty('targets_type')) {
                obj['targets_type'] = ApiClient.convertToType(data['targets_type'], 'String');
            }
            if (data.hasOwnProperty('user_base_dn')) {
                obj['user_base_dn'] = ApiClient.convertToType(data['user_base_dn'], 'String');
            }
            if (data.hasOwnProperty('user_groups')) {
                obj['user_groups'] = ApiClient.convertToType(data['user_groups'], ['String']);
            }
            if (data.hasOwnProperty('winrm_over_http')) {
                obj['winrm_over_http'] = ApiClient.convertToType(data['winrm_over_http'], 'Boolean');
            }
            if (data.hasOwnProperty('winrm_port')) {
                obj['winrm_port'] = ApiClient.convertToType(data['winrm_port'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} active_directory_target_id
 */
ActiveDirectoryPayload.prototype['active_directory_target_id'] = undefined;

/**
 * @member {Boolean} auto_rotate
 */
ActiveDirectoryPayload.prototype['auto_rotate'] = undefined;

/**
 * @member {Number} auto_rotate_interval_in_days
 */
ActiveDirectoryPayload.prototype['auto_rotate_interval_in_days'] = undefined;

/**
 * @member {Number} auto_rotate_rotation_hour
 */
ActiveDirectoryPayload.prototype['auto_rotate_rotation_hour'] = undefined;

/**
 * @member {String} computer_base_dn
 */
ActiveDirectoryPayload.prototype['computer_base_dn'] = undefined;

/**
 * @member {Boolean} discover_local_users
 */
ActiveDirectoryPayload.prototype['discover_local_users'] = undefined;

/**
 * @member {String} domain_name
 */
ActiveDirectoryPayload.prototype['domain_name'] = undefined;

/**
 * @member {String} domain_server_targets_path_template
 */
ActiveDirectoryPayload.prototype['domain_server_targets_path_template'] = undefined;

/**
 * @member {String} domain_users_rotated_secrets_path_template
 */
ActiveDirectoryPayload.prototype['domain_users_rotated_secrets_path_template'] = undefined;

/**
 * @member {Boolean} enable_rdp_sra
 */
ActiveDirectoryPayload.prototype['enable_rdp_sra'] = undefined;

/**
 * @member {Object.<String, Boolean>} local_users_ignore_list
 */
ActiveDirectoryPayload.prototype['local_users_ignore_list'] = undefined;

/**
 * @member {String} local_users_rotated_secrets_path_template
 */
ActiveDirectoryPayload.prototype['local_users_rotated_secrets_path_template'] = undefined;

/**
 * @member {String} ssh_port
 */
ActiveDirectoryPayload.prototype['ssh_port'] = undefined;

/**
 * @member {String} targets_type
 */
ActiveDirectoryPayload.prototype['targets_type'] = undefined;

/**
 * @member {String} user_base_dn
 */
ActiveDirectoryPayload.prototype['user_base_dn'] = undefined;

/**
 * @member {Array.<String>} user_groups
 */
ActiveDirectoryPayload.prototype['user_groups'] = undefined;

/**
 * @member {Boolean} winrm_over_http
 */
ActiveDirectoryPayload.prototype['winrm_over_http'] = undefined;

/**
 * @member {String} winrm_port
 */
ActiveDirectoryPayload.prototype['winrm_port'] = undefined;






export default ActiveDirectoryPayload;

