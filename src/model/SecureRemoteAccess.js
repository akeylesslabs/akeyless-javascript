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
 * The SecureRemoteAccess model module.
 * @module model/SecureRemoteAccess
 * @version 2.16.8
 */
class SecureRemoteAccess {
    /**
     * Constructs a new <code>SecureRemoteAccess</code>.
     * @alias module:model/SecureRemoteAccess
     */
    constructor() { 
        
        SecureRemoteAccess.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SecureRemoteAccess</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecureRemoteAccess} obj Optional instance to populate.
     * @return {module:model/SecureRemoteAccess} The populated <code>SecureRemoteAccess</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SecureRemoteAccess();

            if (data.hasOwnProperty('account_id')) {
                obj['account_id'] = ApiClient.convertToType(data['account_id'], 'String');
            }
            if (data.hasOwnProperty('allow_port_forwarding')) {
                obj['allow_port_forwarding'] = ApiClient.convertToType(data['allow_port_forwarding'], 'Boolean');
            }
            if (data.hasOwnProperty('allow_providing_external_username')) {
                obj['allow_providing_external_username'] = ApiClient.convertToType(data['allow_providing_external_username'], 'Boolean');
            }
            if (data.hasOwnProperty('bastion_api')) {
                obj['bastion_api'] = ApiClient.convertToType(data['bastion_api'], 'String');
            }
            if (data.hasOwnProperty('bastion_issuer')) {
                obj['bastion_issuer'] = ApiClient.convertToType(data['bastion_issuer'], 'String');
            }
            if (data.hasOwnProperty('bastion_issuer_id')) {
                obj['bastion_issuer_id'] = ApiClient.convertToType(data['bastion_issuer_id'], 'Number');
            }
            if (data.hasOwnProperty('bastion_ssh')) {
                obj['bastion_ssh'] = ApiClient.convertToType(data['bastion_ssh'], 'String');
            }
            if (data.hasOwnProperty('category')) {
                obj['category'] = ApiClient.convertToType(data['category'], 'String');
            }
            if (data.hasOwnProperty('dashboard_url')) {
                obj['dashboard_url'] = ApiClient.convertToType(data['dashboard_url'], 'String');
            }
            if (data.hasOwnProperty('db_name')) {
                obj['db_name'] = ApiClient.convertToType(data['db_name'], 'String');
            }
            if (data.hasOwnProperty('domain')) {
                obj['domain'] = ApiClient.convertToType(data['domain'], 'String');
            }
            if (data.hasOwnProperty('enable')) {
                obj['enable'] = ApiClient.convertToType(data['enable'], 'Boolean');
            }
            if (data.hasOwnProperty('endpoint')) {
                obj['endpoint'] = ApiClient.convertToType(data['endpoint'], 'String');
            }
            if (data.hasOwnProperty('host')) {
                obj['host'] = ApiClient.convertToType(data['host'], ['String']);
            }
            if (data.hasOwnProperty('is_cli')) {
                obj['is_cli'] = ApiClient.convertToType(data['is_cli'], 'Boolean');
            }
            if (data.hasOwnProperty('is_web')) {
                obj['is_web'] = ApiClient.convertToType(data['is_web'], 'Boolean');
            }
            if (data.hasOwnProperty('isolated')) {
                obj['isolated'] = ApiClient.convertToType(data['isolated'], 'Boolean');
            }
            if (data.hasOwnProperty('native')) {
                obj['native'] = ApiClient.convertToType(data['native'], 'Boolean');
            }
            if (data.hasOwnProperty('rdp_user')) {
                obj['rdp_user'] = ApiClient.convertToType(data['rdp_user'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('schema')) {
                obj['schema'] = ApiClient.convertToType(data['schema'], 'String');
            }
            if (data.hasOwnProperty('ssh_password')) {
                obj['ssh_password'] = ApiClient.convertToType(data['ssh_password'], 'Boolean');
            }
            if (data.hasOwnProperty('ssh_private_key')) {
                obj['ssh_private_key'] = ApiClient.convertToType(data['ssh_private_key'], 'Boolean');
            }
            if (data.hasOwnProperty('ssh_user')) {
                obj['ssh_user'] = ApiClient.convertToType(data['ssh_user'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('use_internal_bastion')) {
                obj['use_internal_bastion'] = ApiClient.convertToType(data['use_internal_bastion'], 'Boolean');
            }
            if (data.hasOwnProperty('web_proxy')) {
                obj['web_proxy'] = ApiClient.convertToType(data['web_proxy'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} account_id
 */
SecureRemoteAccess.prototype['account_id'] = undefined;

/**
 * @member {Boolean} allow_port_forwarding
 */
SecureRemoteAccess.prototype['allow_port_forwarding'] = undefined;

/**
 * @member {Boolean} allow_providing_external_username
 */
SecureRemoteAccess.prototype['allow_providing_external_username'] = undefined;

/**
 * @member {String} bastion_api
 */
SecureRemoteAccess.prototype['bastion_api'] = undefined;

/**
 * @member {String} bastion_issuer
 */
SecureRemoteAccess.prototype['bastion_issuer'] = undefined;

/**
 * @member {Number} bastion_issuer_id
 */
SecureRemoteAccess.prototype['bastion_issuer_id'] = undefined;

/**
 * @member {String} bastion_ssh
 */
SecureRemoteAccess.prototype['bastion_ssh'] = undefined;

/**
 * @member {String} category
 */
SecureRemoteAccess.prototype['category'] = undefined;

/**
 * @member {String} dashboard_url
 */
SecureRemoteAccess.prototype['dashboard_url'] = undefined;

/**
 * @member {String} db_name
 */
SecureRemoteAccess.prototype['db_name'] = undefined;

/**
 * @member {String} domain
 */
SecureRemoteAccess.prototype['domain'] = undefined;

/**
 * @member {Boolean} enable
 */
SecureRemoteAccess.prototype['enable'] = undefined;

/**
 * @member {String} endpoint
 */
SecureRemoteAccess.prototype['endpoint'] = undefined;

/**
 * @member {Array.<String>} host
 */
SecureRemoteAccess.prototype['host'] = undefined;

/**
 * @member {Boolean} is_cli
 */
SecureRemoteAccess.prototype['is_cli'] = undefined;

/**
 * @member {Boolean} is_web
 */
SecureRemoteAccess.prototype['is_web'] = undefined;

/**
 * @member {Boolean} isolated
 */
SecureRemoteAccess.prototype['isolated'] = undefined;

/**
 * @member {Boolean} native
 */
SecureRemoteAccess.prototype['native'] = undefined;

/**
 * @member {String} rdp_user
 */
SecureRemoteAccess.prototype['rdp_user'] = undefined;

/**
 * @member {String} region
 */
SecureRemoteAccess.prototype['region'] = undefined;

/**
 * @member {String} schema
 */
SecureRemoteAccess.prototype['schema'] = undefined;

/**
 * @member {Boolean} ssh_password
 */
SecureRemoteAccess.prototype['ssh_password'] = undefined;

/**
 * @member {Boolean} ssh_private_key
 */
SecureRemoteAccess.prototype['ssh_private_key'] = undefined;

/**
 * @member {String} ssh_user
 */
SecureRemoteAccess.prototype['ssh_user'] = undefined;

/**
 * @member {String} url
 */
SecureRemoteAccess.prototype['url'] = undefined;

/**
 * @member {Boolean} use_internal_bastion
 */
SecureRemoteAccess.prototype['use_internal_bastion'] = undefined;

/**
 * @member {Boolean} web_proxy
 */
SecureRemoteAccess.prototype['web_proxy'] = undefined;






export default SecureRemoteAccess;

