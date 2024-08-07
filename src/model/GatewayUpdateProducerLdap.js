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
 * The GatewayUpdateProducerLdap model module.
 * @module model/GatewayUpdateProducerLdap
 * @version 4.2.2
 */
class GatewayUpdateProducerLdap {
    /**
     * Constructs a new <code>GatewayUpdateProducerLdap</code>.
     * gatewayUpdateProducerLdap is a command that updates ldap producer [Deprecated: Use dynamic-secret-update-ldap command]
     * @alias module:model/GatewayUpdateProducerLdap
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        GatewayUpdateProducerLdap.initialize(this, name);
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
     * Constructs a <code>GatewayUpdateProducerLdap</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerLdap} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerLdap} The populated <code>GatewayUpdateProducerLdap</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerLdap();

            if (data.hasOwnProperty('ProviderType')) {
                obj['ProviderType'] = ApiClient.convertToType(data['ProviderType'], 'String');
            }
            if (data.hasOwnProperty('bind-dn')) {
                obj['bind-dn'] = ApiClient.convertToType(data['bind-dn'], 'String');
            }
            if (data.hasOwnProperty('bind-dn-password')) {
                obj['bind-dn-password'] = ApiClient.convertToType(data['bind-dn-password'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('external-username')) {
                obj['external-username'] = ApiClient.convertToType(data['external-username'], 'String');
            }
            if (data.hasOwnProperty('group-dn')) {
                obj['group-dn'] = ApiClient.convertToType(data['group-dn'], 'String');
            }
            if (data.hasOwnProperty('host-provider')) {
                obj['host-provider'] = ApiClient.convertToType(data['host-provider'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('ldap-ca-cert')) {
                obj['ldap-ca-cert'] = ApiClient.convertToType(data['ldap-ca-cert'], 'String');
            }
            if (data.hasOwnProperty('ldap-url')) {
                obj['ldap-url'] = ApiClient.convertToType(data['ldap-url'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('password-length')) {
                obj['password-length'] = ApiClient.convertToType(data['password-length'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
            }
            if (data.hasOwnProperty('secure-access-enable')) {
                obj['secure-access-enable'] = ApiClient.convertToType(data['secure-access-enable'], 'String');
            }
            if (data.hasOwnProperty('secure-access-host')) {
                obj['secure-access-host'] = ApiClient.convertToType(data['secure-access-host'], ['String']);
            }
            if (data.hasOwnProperty('secure-access-rd-gateway-server')) {
                obj['secure-access-rd-gateway-server'] = ApiClient.convertToType(data['secure-access-rd-gateway-server'], 'String');
            }
            if (data.hasOwnProperty('secure-access-rdp-domain')) {
                obj['secure-access-rdp-domain'] = ApiClient.convertToType(data['secure-access-rdp-domain'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], ['String']);
            }
            if (data.hasOwnProperty('target-name')) {
                obj['target-name'] = ApiClient.convertToType(data['target-name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('token-expiration')) {
                obj['token-expiration'] = ApiClient.convertToType(data['token-expiration'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('user-attribute')) {
                obj['user-attribute'] = ApiClient.convertToType(data['user-attribute'], 'String');
            }
            if (data.hasOwnProperty('user-dn')) {
                obj['user-dn'] = ApiClient.convertToType(data['user-dn'], 'String');
            }
            if (data.hasOwnProperty('user-ttl')) {
                obj['user-ttl'] = ApiClient.convertToType(data['user-ttl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} ProviderType
 */
GatewayUpdateProducerLdap.prototype['ProviderType'] = undefined;

/**
 * Bind DN
 * @member {String} bind-dn
 */
GatewayUpdateProducerLdap.prototype['bind-dn'] = undefined;

/**
 * Bind DN Password
 * @member {String} bind-dn-password
 */
GatewayUpdateProducerLdap.prototype['bind-dn-password'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
GatewayUpdateProducerLdap.prototype['delete_protection'] = undefined;

/**
 * Externally provided username [true/false]
 * @member {String} external-username
 * @default 'false'
 */
GatewayUpdateProducerLdap.prototype['external-username'] = 'false';

/**
 * Group DN which the temporary user should be added
 * @member {String} group-dn
 */
GatewayUpdateProducerLdap.prototype['group-dn'] = undefined;

/**
 * Host provider type [explicit/target], Default Host provider is explicit, Relevant only for Secure Remote Access of ssh cert issuer, ldap rotated secret and ldap dynamic secret
 * @member {String} host-provider
 */
GatewayUpdateProducerLdap.prototype['host-provider'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateProducerLdap.prototype['json'] = false;

/**
 * CA Certificate File Content
 * @member {String} ldap-ca-cert
 */
GatewayUpdateProducerLdap.prototype['ldap-ca-cert'] = undefined;

/**
 * LDAP Server URL
 * @member {String} ldap-url
 */
GatewayUpdateProducerLdap.prototype['ldap-url'] = undefined;

/**
 * Dynamic secret name
 * @member {String} name
 */
GatewayUpdateProducerLdap.prototype['name'] = undefined;

/**
 * Dynamic secret name
 * @member {String} new-name
 */
GatewayUpdateProducerLdap.prototype['new-name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
GatewayUpdateProducerLdap.prototype['password-length'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayUpdateProducerLdap.prototype['producer-encryption-key-name'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
GatewayUpdateProducerLdap.prototype['secure-access-enable'] = undefined;

/**
 * Target servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts - Relevant only for Dynamic Secrets/producers)
 * @member {Array.<String>} secure-access-host
 */
GatewayUpdateProducerLdap.prototype['secure-access-host'] = undefined;

/**
 * RD Gateway server
 * @member {String} secure-access-rd-gateway-server
 */
GatewayUpdateProducerLdap.prototype['secure-access-rd-gateway-server'] = undefined;

/**
 * Required when the Dynamic Secret is used for a domain user
 * @member {String} secure-access-rdp-domain
 */
GatewayUpdateProducerLdap.prototype['secure-access-rdp-domain'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
GatewayUpdateProducerLdap.prototype['tags'] = undefined;

/**
 * A list of linked targets to be associated, Relevant only for Secure Remote Access for ssh cert issuer, ldap rotated secret and ldap dynamic secret, To specify multiple targets use argument multiple times
 * @member {Array.<String>} target
 */
GatewayUpdateProducerLdap.prototype['target'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayUpdateProducerLdap.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateProducerLdap.prototype['token'] = undefined;

/**
 * Token expiration
 * @member {String} token-expiration
 */
GatewayUpdateProducerLdap.prototype['token-expiration'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateProducerLdap.prototype['uid-token'] = undefined;

/**
 * User Attribute
 * @member {String} user-attribute
 */
GatewayUpdateProducerLdap.prototype['user-attribute'] = undefined;

/**
 * User DN
 * @member {String} user-dn
 */
GatewayUpdateProducerLdap.prototype['user-dn'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayUpdateProducerLdap.prototype['user-ttl'] = '60m';






export default GatewayUpdateProducerLdap;

