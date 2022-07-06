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
 * The GatewayUpdateLdapAuthConfig model module.
 * @module model/GatewayUpdateLdapAuthConfig
 * @version 2.16.11
 */
class GatewayUpdateLdapAuthConfig {
    /**
     * Constructs a new <code>GatewayUpdateLdapAuthConfig</code>.
     * gatewayUpdateLdapAuth is a command that updates ldap auth config
     * @alias module:model/GatewayUpdateLdapAuthConfig
     */
    constructor() { 
        
        GatewayUpdateLdapAuthConfig.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayUpdateLdapAuthConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateLdapAuthConfig} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateLdapAuthConfig} The populated <code>GatewayUpdateLdapAuthConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateLdapAuthConfig();

            if (data.hasOwnProperty('access-id')) {
                obj['access-id'] = ApiClient.convertToType(data['access-id'], 'String');
            }
            if (data.hasOwnProperty('bind-dn')) {
                obj['bind-dn'] = ApiClient.convertToType(data['bind-dn'], 'String');
            }
            if (data.hasOwnProperty('bind-dn-password')) {
                obj['bind-dn-password'] = ApiClient.convertToType(data['bind-dn-password'], 'String');
            }
            if (data.hasOwnProperty('group-attr')) {
                obj['group-attr'] = ApiClient.convertToType(data['group-attr'], 'String');
            }
            if (data.hasOwnProperty('group-dn')) {
                obj['group-dn'] = ApiClient.convertToType(data['group-dn'], 'String');
            }
            if (data.hasOwnProperty('group-filter')) {
                obj['group-filter'] = ApiClient.convertToType(data['group-filter'], 'String');
            }
            if (data.hasOwnProperty('ldap-ca-cert')) {
                obj['ldap-ca-cert'] = ApiClient.convertToType(data['ldap-ca-cert'], 'String');
            }
            if (data.hasOwnProperty('ldap-enable')) {
                obj['ldap-enable'] = ApiClient.convertToType(data['ldap-enable'], 'String');
            }
            if (data.hasOwnProperty('ldap-url')) {
                obj['ldap-url'] = ApiClient.convertToType(data['ldap-url'], 'String');
            }
            if (data.hasOwnProperty('ldap_anonymous_search')) {
                obj['ldap_anonymous_search'] = ApiClient.convertToType(data['ldap_anonymous_search'], 'Boolean');
            }
            if (data.hasOwnProperty('signing-key-data')) {
                obj['signing-key-data'] = ApiClient.convertToType(data['signing-key-data'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
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
        }
        return obj;
    }


}

/**
 * The access ID of the Ldap auth method
 * @member {String} access-id
 */
GatewayUpdateLdapAuthConfig.prototype['access-id'] = undefined;

/**
 * Bind DN
 * @member {String} bind-dn
 */
GatewayUpdateLdapAuthConfig.prototype['bind-dn'] = undefined;

/**
 * Bind DN Password
 * @member {String} bind-dn-password
 */
GatewayUpdateLdapAuthConfig.prototype['bind-dn-password'] = undefined;

/**
 * Group Attr
 * @member {String} group-attr
 */
GatewayUpdateLdapAuthConfig.prototype['group-attr'] = undefined;

/**
 * Group Dn
 * @member {String} group-dn
 */
GatewayUpdateLdapAuthConfig.prototype['group-dn'] = undefined;

/**
 * Group Filter
 * @member {String} group-filter
 */
GatewayUpdateLdapAuthConfig.prototype['group-filter'] = undefined;

/**
 * The CA Cert (in PEM format) to use to call into the ldap API server
 * @member {String} ldap-ca-cert
 */
GatewayUpdateLdapAuthConfig.prototype['ldap-ca-cert'] = undefined;

/**
 * Enable Ldap
 * @member {String} ldap-enable
 */
GatewayUpdateLdapAuthConfig.prototype['ldap-enable'] = undefined;

/**
 * LDAP Server URL, e.g. ldap://planetexpress.com:389
 * @member {String} ldap-url
 */
GatewayUpdateLdapAuthConfig.prototype['ldap-url'] = undefined;

/**
 * Ldap Anonymous Search
 * @member {Boolean} ldap_anonymous_search
 */
GatewayUpdateLdapAuthConfig.prototype['ldap_anonymous_search'] = undefined;

/**
 * The private key (in PEM format) associated with the public key defined in the Ldap auth
 * @member {String} signing-key-data
 */
GatewayUpdateLdapAuthConfig.prototype['signing-key-data'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateLdapAuthConfig.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateLdapAuthConfig.prototype['uid-token'] = undefined;

/**
 * User Attribute
 * @member {String} user-attribute
 */
GatewayUpdateLdapAuthConfig.prototype['user-attribute'] = undefined;

/**
 * User DN
 * @member {String} user-dn
 */
GatewayUpdateLdapAuthConfig.prototype['user-dn'] = undefined;






export default GatewayUpdateLdapAuthConfig;
