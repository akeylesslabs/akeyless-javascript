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
 * The AuthMethodUpdateKerberos model module.
 * @module model/AuthMethodUpdateKerberos
 * @version 4.3.0
 */
class AuthMethodUpdateKerberos {
    /**
     * Constructs a new <code>AuthMethodUpdateKerberos</code>.
     * authMethodUpdateKerberos is a command that updates an auth method that will be able to authenticate using Kerberos
     * @alias module:model/AuthMethodUpdateKerberos
     * @param name {String} Auth Method name
     */
    constructor(name) { 
        
        AuthMethodUpdateKerberos.initialize(this, name);
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
     * Constructs a <code>AuthMethodUpdateKerberos</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthMethodUpdateKerberos} obj Optional instance to populate.
     * @return {module:model/AuthMethodUpdateKerberos} The populated <code>AuthMethodUpdateKerberos</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthMethodUpdateKerberos();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('audit-logs-claims')) {
                obj['audit-logs-claims'] = ApiClient.convertToType(data['audit-logs-claims'], ['String']);
            }
            if (data.hasOwnProperty('bind-dn')) {
                obj['bind-dn'] = ApiClient.convertToType(data['bind-dn'], 'String');
            }
            if (data.hasOwnProperty('bind-dn-password')) {
                obj['bind-dn-password'] = ApiClient.convertToType(data['bind-dn-password'], 'String');
            }
            if (data.hasOwnProperty('bound-ips')) {
                obj['bound-ips'] = ApiClient.convertToType(data['bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('force-sub-claims')) {
                obj['force-sub-claims'] = ApiClient.convertToType(data['force-sub-claims'], 'Boolean');
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
            if (data.hasOwnProperty('gw-bound-ips')) {
                obj['gw-bound-ips'] = ApiClient.convertToType(data['gw-bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('jwt-ttl')) {
                obj['jwt-ttl'] = ApiClient.convertToType(data['jwt-ttl'], 'Number');
            }
            if (data.hasOwnProperty('keytab-file-data')) {
                obj['keytab-file-data'] = ApiClient.convertToType(data['keytab-file-data'], 'String');
            }
            if (data.hasOwnProperty('keytab-file-path')) {
                obj['keytab-file-path'] = ApiClient.convertToType(data['keytab-file-path'], 'String');
            }
            if (data.hasOwnProperty('krb5-conf-data')) {
                obj['krb5-conf-data'] = ApiClient.convertToType(data['krb5-conf-data'], 'String');
            }
            if (data.hasOwnProperty('krb5-conf-path')) {
                obj['krb5-conf-path'] = ApiClient.convertToType(data['krb5-conf-path'], 'String');
            }
            if (data.hasOwnProperty('ldap-anonymous-search')) {
                obj['ldap-anonymous-search'] = ApiClient.convertToType(data['ldap-anonymous-search'], 'Boolean');
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
            if (data.hasOwnProperty('product-type')) {
                obj['product-type'] = ApiClient.convertToType(data['product-type'], ['String']);
            }
            if (data.hasOwnProperty('subclaims-delimiters')) {
                obj['subclaims-delimiters'] = ApiClient.convertToType(data['subclaims-delimiters'], ['String']);
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('unique-identifier')) {
                obj['unique-identifier'] = ApiClient.convertToType(data['unique-identifier'], 'String');
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
 * Access expiration date in Unix timestamp (select 0 for access without expiry date)
 * @member {Number} access-expires
 * @default 0
 */
AuthMethodUpdateKerberos.prototype['access-expires'] = 0;

/**
 * Subclaims to include in audit logs, e.g \"--audit-logs-claims email --audit-logs-claims username\"
 * @member {Array.<String>} audit-logs-claims
 */
AuthMethodUpdateKerberos.prototype['audit-logs-claims'] = undefined;

/**
 * @member {String} bind-dn
 */
AuthMethodUpdateKerberos.prototype['bind-dn'] = undefined;

/**
 * @member {String} bind-dn-password
 */
AuthMethodUpdateKerberos.prototype['bind-dn-password'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
AuthMethodUpdateKerberos.prototype['bound-ips'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
AuthMethodUpdateKerberos.prototype['delete_protection'] = undefined;

/**
 * Auth Method description
 * @member {String} description
 */
AuthMethodUpdateKerberos.prototype['description'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
AuthMethodUpdateKerberos.prototype['force-sub-claims'] = undefined;

/**
 * @member {String} group-attr
 */
AuthMethodUpdateKerberos.prototype['group-attr'] = undefined;

/**
 * @member {String} group-dn
 */
AuthMethodUpdateKerberos.prototype['group-dn'] = undefined;

/**
 * @member {String} group-filter
 */
AuthMethodUpdateKerberos.prototype['group-filter'] = undefined;

/**
 * A CIDR whitelist with the GW IPs that the access is restricted to
 * @member {Array.<String>} gw-bound-ips
 */
AuthMethodUpdateKerberos.prototype['gw-bound-ips'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
AuthMethodUpdateKerberos.prototype['json'] = false;

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 * @default 0
 */
AuthMethodUpdateKerberos.prototype['jwt-ttl'] = 0;

/**
 * @member {String} keytab-file-data
 */
AuthMethodUpdateKerberos.prototype['keytab-file-data'] = undefined;

/**
 * @member {String} keytab-file-path
 */
AuthMethodUpdateKerberos.prototype['keytab-file-path'] = undefined;

/**
 * @member {String} krb5-conf-data
 */
AuthMethodUpdateKerberos.prototype['krb5-conf-data'] = undefined;

/**
 * @member {String} krb5-conf-path
 */
AuthMethodUpdateKerberos.prototype['krb5-conf-path'] = undefined;

/**
 * @member {Boolean} ldap-anonymous-search
 */
AuthMethodUpdateKerberos.prototype['ldap-anonymous-search'] = undefined;

/**
 * @member {String} ldap-ca-cert
 */
AuthMethodUpdateKerberos.prototype['ldap-ca-cert'] = undefined;

/**
 * @member {String} ldap-url
 */
AuthMethodUpdateKerberos.prototype['ldap-url'] = undefined;

/**
 * Auth Method name
 * @member {String} name
 */
AuthMethodUpdateKerberos.prototype['name'] = undefined;

/**
 * @member {String} new-name
 */
AuthMethodUpdateKerberos.prototype['new-name'] = undefined;

/**
 * Choose the relevant product type for the auth method [sm, sra, pm, dp, ca]
 * @member {Array.<String>} product-type
 */
AuthMethodUpdateKerberos.prototype['product-type'] = undefined;

/**
 * A list of additional sub claims delimiters (relevant only for SAML, OIDC, OAuth2/JWT)
 * @member {Array.<String>} subclaims-delimiters
 */
AuthMethodUpdateKerberos.prototype['subclaims-delimiters'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
AuthMethodUpdateKerberos.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
AuthMethodUpdateKerberos.prototype['uid-token'] = undefined;

/**
 * A unique identifier (ID) value which is a \"sub claim\" name that contains details uniquely identifying that resource. This \"sub claim\" is used to distinguish between different identities.
 * @member {String} unique-identifier
 */
AuthMethodUpdateKerberos.prototype['unique-identifier'] = undefined;

/**
 * @member {String} user-attribute
 */
AuthMethodUpdateKerberos.prototype['user-attribute'] = undefined;

/**
 * @member {String} user-dn
 */
AuthMethodUpdateKerberos.prototype['user-dn'] = undefined;






export default AuthMethodUpdateKerberos;

