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
 * The GatewayCreateProducerRdp model module.
 * @module model/GatewayCreateProducerRdp
 * @version 2.5.1
 */
class GatewayCreateProducerRdp {
    /**
     * Constructs a new <code>GatewayCreateProducerRdp</code>.
     * gatewayCreateProducerRdp is a command that creates rdp producer
     * @alias module:model/GatewayCreateProducerRdp
     * @param name {String} Producer name
     * @param rdpAdminName {String} RDP Admin Name
     * @param rdpAdminPwd {String} RDP Admin password
     * @param rdpHostName {String} Hostname
     * @param rdpUserGroups {String} Groups
     */
    constructor(name, rdpAdminName, rdpAdminPwd, rdpHostName, rdpUserGroups) { 
        
        GatewayCreateProducerRdp.initialize(this, name, rdpAdminName, rdpAdminPwd, rdpHostName, rdpUserGroups);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, rdpAdminName, rdpAdminPwd, rdpHostName, rdpUserGroups) { 
        obj['name'] = name;
        obj['rdp-admin-name'] = rdpAdminName;
        obj['rdp-admin-pwd'] = rdpAdminPwd;
        obj['rdp-host-name'] = rdpHostName;
        obj['rdp-user-groups'] = rdpUserGroups;
    }

    /**
     * Constructs a <code>GatewayCreateProducerRdp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerRdp} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerRdp} The populated <code>GatewayCreateProducerRdp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerRdp();

            if (data.hasOwnProperty('fixed-user-only')) {
                obj['fixed-user-only'] = ApiClient.convertToType(data['fixed-user-only'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
            }
            if (data.hasOwnProperty('rdp-admin-name')) {
                obj['rdp-admin-name'] = ApiClient.convertToType(data['rdp-admin-name'], 'String');
            }
            if (data.hasOwnProperty('rdp-admin-pwd')) {
                obj['rdp-admin-pwd'] = ApiClient.convertToType(data['rdp-admin-pwd'], 'String');
            }
            if (data.hasOwnProperty('rdp-host-name')) {
                obj['rdp-host-name'] = ApiClient.convertToType(data['rdp-host-name'], 'String');
            }
            if (data.hasOwnProperty('rdp-host-port')) {
                obj['rdp-host-port'] = ApiClient.convertToType(data['rdp-host-port'], 'String');
            }
            if (data.hasOwnProperty('rdp-user-groups')) {
                obj['rdp-user-groups'] = ApiClient.convertToType(data['rdp-user-groups'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('user-ttl')) {
                obj['user-ttl'] = ApiClient.convertToType(data['user-ttl'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Fixed user
 * @member {String} fixed-user-only
 * @default 'false'
 */
GatewayCreateProducerRdp.prototype['fixed-user-only'] = 'false';

/**
 * Producer name
 * @member {String} name
 */
GatewayCreateProducerRdp.prototype['name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
GatewayCreateProducerRdp.prototype['password'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayCreateProducerRdp.prototype['producer-encryption-key-name'] = undefined;

/**
 * RDP Admin Name
 * @member {String} rdp-admin-name
 */
GatewayCreateProducerRdp.prototype['rdp-admin-name'] = undefined;

/**
 * RDP Admin password
 * @member {String} rdp-admin-pwd
 */
GatewayCreateProducerRdp.prototype['rdp-admin-pwd'] = undefined;

/**
 * Hostname
 * @member {String} rdp-host-name
 */
GatewayCreateProducerRdp.prototype['rdp-host-name'] = undefined;

/**
 * Port
 * @member {String} rdp-host-port
 * @default '22'
 */
GatewayCreateProducerRdp.prototype['rdp-host-port'] = '22';

/**
 * Groups
 * @member {String} rdp-user-groups
 */
GatewayCreateProducerRdp.prototype['rdp-user-groups'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateProducerRdp.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateProducerRdp.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayCreateProducerRdp.prototype['user-ttl'] = '60m';

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
GatewayCreateProducerRdp.prototype['username'] = undefined;






export default GatewayCreateProducerRdp;

