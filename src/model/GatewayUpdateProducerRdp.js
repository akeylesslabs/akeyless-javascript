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
 * The GatewayUpdateProducerRdp model module.
 * @module model/GatewayUpdateProducerRdp
 * @version 2.17.0
 */
class GatewayUpdateProducerRdp {
    /**
     * Constructs a new <code>GatewayUpdateProducerRdp</code>.
     * gatewayUpdateProducerRdp is a command that updates rdp producer
     * @alias module:model/GatewayUpdateProducerRdp
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayUpdateProducerRdp.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>GatewayUpdateProducerRdp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerRdp} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerRdp} The populated <code>GatewayUpdateProducerRdp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerRdp();

            if (data.hasOwnProperty('allow-user-extend-session')) {
                obj['allow-user-extend-session'] = ApiClient.convertToType(data['allow-user-extend-session'], 'Number');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('fixed-user-only')) {
                obj['fixed-user-only'] = ApiClient.convertToType(data['fixed-user-only'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
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
            if (data.hasOwnProperty('secure-access-allow-external-user')) {
                obj['secure-access-allow-external-user'] = ApiClient.convertToType(data['secure-access-allow-external-user'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-enable')) {
                obj['secure-access-enable'] = ApiClient.convertToType(data['secure-access-enable'], 'String');
            }
            if (data.hasOwnProperty('secure-access-host')) {
                obj['secure-access-host'] = ApiClient.convertToType(data['secure-access-host'], ['String']);
            }
            if (data.hasOwnProperty('secure-access-rdp-domain')) {
                obj['secure-access-rdp-domain'] = ApiClient.convertToType(data['secure-access-rdp-domain'], 'String');
            }
            if (data.hasOwnProperty('secure-access-rdp-user')) {
                obj['secure-access-rdp-user'] = ApiClient.convertToType(data['secure-access-rdp-user'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('target-name')) {
                obj['target-name'] = ApiClient.convertToType(data['target-name'], 'String');
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
            if (data.hasOwnProperty('warn-user-before-expiration')) {
                obj['warn-user-before-expiration'] = ApiClient.convertToType(data['warn-user-before-expiration'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * AllowUserExtendSession
 * @member {Number} allow-user-extend-session
 */
GatewayUpdateProducerRdp.prototype['allow-user-extend-session'] = undefined;

/**
 * Protection from accidental deletion of this item
 * @member {String} delete_protection
 */
GatewayUpdateProducerRdp.prototype['delete_protection'] = undefined;

/**
 * Fixed user
 * @member {String} fixed-user-only
 * @default 'false'
 */
GatewayUpdateProducerRdp.prototype['fixed-user-only'] = 'false';

/**
 * Producer name
 * @member {String} name
 */
GatewayUpdateProducerRdp.prototype['name'] = undefined;

/**
 * Producer name
 * @member {String} new-name
 */
GatewayUpdateProducerRdp.prototype['new-name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayUpdateProducerRdp.prototype['producer-encryption-key-name'] = undefined;

/**
 * RDP Admin Name
 * @member {String} rdp-admin-name
 */
GatewayUpdateProducerRdp.prototype['rdp-admin-name'] = undefined;

/**
 * RDP Admin password
 * @member {String} rdp-admin-pwd
 */
GatewayUpdateProducerRdp.prototype['rdp-admin-pwd'] = undefined;

/**
 * Hostname
 * @member {String} rdp-host-name
 */
GatewayUpdateProducerRdp.prototype['rdp-host-name'] = undefined;

/**
 * Port
 * @member {String} rdp-host-port
 * @default '22'
 */
GatewayUpdateProducerRdp.prototype['rdp-host-port'] = '22';

/**
 * Groups
 * @member {String} rdp-user-groups
 */
GatewayUpdateProducerRdp.prototype['rdp-user-groups'] = undefined;

/**
 * @member {Boolean} secure-access-allow-external-user
 */
GatewayUpdateProducerRdp.prototype['secure-access-allow-external-user'] = undefined;

/**
 * @member {String} secure-access-enable
 */
GatewayUpdateProducerRdp.prototype['secure-access-enable'] = undefined;

/**
 * @member {Array.<String>} secure-access-host
 */
GatewayUpdateProducerRdp.prototype['secure-access-host'] = undefined;

/**
 * @member {String} secure-access-rdp-domain
 */
GatewayUpdateProducerRdp.prototype['secure-access-rdp-domain'] = undefined;

/**
 * @member {String} secure-access-rdp-user
 */
GatewayUpdateProducerRdp.prototype['secure-access-rdp-user'] = undefined;

/**
 * List of the tags attached to this secret
 * @member {Array.<String>} tags
 */
GatewayUpdateProducerRdp.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayUpdateProducerRdp.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateProducerRdp.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateProducerRdp.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayUpdateProducerRdp.prototype['user-ttl'] = '60m';

/**
 * WarnBeforeUserExpiration
 * @member {Number} warn-user-before-expiration
 */
GatewayUpdateProducerRdp.prototype['warn-user-before-expiration'] = undefined;






export default GatewayUpdateProducerRdp;

