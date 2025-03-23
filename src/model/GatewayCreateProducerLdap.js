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
 * The GatewayCreateProducerLdap model module.
 * @module model/GatewayCreateProducerLdap
 * @version 5.0.1
 */
class GatewayCreateProducerLdap {
    /**
     * Constructs a new <code>GatewayCreateProducerLdap</code>.
     * gatewayCreateProducerLdap is a command that creates ldap producer [Deprecated: Use dynamic-secret-create-ldap command]
     * @alias module:model/GatewayCreateProducerLdap
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        GatewayCreateProducerLdap.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['external-username'] = 'false';
        obj['fixed-user-claim-keyname'] = 'ext_username';
        obj['json'] = false;
        obj['name'] = name;
        obj['user-ttl'] = '60m';
    }

    /**
     * Constructs a <code>GatewayCreateProducerLdap</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerLdap} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerLdap} The populated <code>GatewayCreateProducerLdap</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerLdap();

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
            if (data.hasOwnProperty('fixed-user-claim-keyname')) {
                obj['fixed-user-claim-keyname'] = ApiClient.convertToType(data['fixed-user-claim-keyname'], 'String');
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
            if (data.hasOwnProperty('password-length')) {
                obj['password-length'] = ApiClient.convertToType(data['password-length'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
            }
            if (data.hasOwnProperty('secure-access-delay')) {
                obj['secure-access-delay'] = ApiClient.convertToType(data['secure-access-delay'], 'Number');
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

    /**
     * Validates the JSON data with respect to <code>GatewayCreateProducerLdap</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayCreateProducerLdap</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GatewayCreateProducerLdap.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['ProviderType'] && !(typeof data['ProviderType'] === 'string' || data['ProviderType'] instanceof String)) {
            throw new Error("Expected the field `ProviderType` to be a primitive type in the JSON string but got " + data['ProviderType']);
        }
        // ensure the json data is a string
        if (data['bind-dn'] && !(typeof data['bind-dn'] === 'string' || data['bind-dn'] instanceof String)) {
            throw new Error("Expected the field `bind-dn` to be a primitive type in the JSON string but got " + data['bind-dn']);
        }
        // ensure the json data is a string
        if (data['bind-dn-password'] && !(typeof data['bind-dn-password'] === 'string' || data['bind-dn-password'] instanceof String)) {
            throw new Error("Expected the field `bind-dn-password` to be a primitive type in the JSON string but got " + data['bind-dn-password']);
        }
        // ensure the json data is a string
        if (data['delete_protection'] && !(typeof data['delete_protection'] === 'string' || data['delete_protection'] instanceof String)) {
            throw new Error("Expected the field `delete_protection` to be a primitive type in the JSON string but got " + data['delete_protection']);
        }
        // ensure the json data is a string
        if (data['external-username'] && !(typeof data['external-username'] === 'string' || data['external-username'] instanceof String)) {
            throw new Error("Expected the field `external-username` to be a primitive type in the JSON string but got " + data['external-username']);
        }
        // ensure the json data is a string
        if (data['fixed-user-claim-keyname'] && !(typeof data['fixed-user-claim-keyname'] === 'string' || data['fixed-user-claim-keyname'] instanceof String)) {
            throw new Error("Expected the field `fixed-user-claim-keyname` to be a primitive type in the JSON string but got " + data['fixed-user-claim-keyname']);
        }
        // ensure the json data is a string
        if (data['group-dn'] && !(typeof data['group-dn'] === 'string' || data['group-dn'] instanceof String)) {
            throw new Error("Expected the field `group-dn` to be a primitive type in the JSON string but got " + data['group-dn']);
        }
        // ensure the json data is a string
        if (data['host-provider'] && !(typeof data['host-provider'] === 'string' || data['host-provider'] instanceof String)) {
            throw new Error("Expected the field `host-provider` to be a primitive type in the JSON string but got " + data['host-provider']);
        }
        // ensure the json data is a string
        if (data['ldap-ca-cert'] && !(typeof data['ldap-ca-cert'] === 'string' || data['ldap-ca-cert'] instanceof String)) {
            throw new Error("Expected the field `ldap-ca-cert` to be a primitive type in the JSON string but got " + data['ldap-ca-cert']);
        }
        // ensure the json data is a string
        if (data['ldap-url'] && !(typeof data['ldap-url'] === 'string' || data['ldap-url'] instanceof String)) {
            throw new Error("Expected the field `ldap-url` to be a primitive type in the JSON string but got " + data['ldap-url']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['password-length'] && !(typeof data['password-length'] === 'string' || data['password-length'] instanceof String)) {
            throw new Error("Expected the field `password-length` to be a primitive type in the JSON string but got " + data['password-length']);
        }
        // ensure the json data is a string
        if (data['producer-encryption-key-name'] && !(typeof data['producer-encryption-key-name'] === 'string' || data['producer-encryption-key-name'] instanceof String)) {
            throw new Error("Expected the field `producer-encryption-key-name` to be a primitive type in the JSON string but got " + data['producer-encryption-key-name']);
        }
        // ensure the json data is a string
        if (data['secure-access-enable'] && !(typeof data['secure-access-enable'] === 'string' || data['secure-access-enable'] instanceof String)) {
            throw new Error("Expected the field `secure-access-enable` to be a primitive type in the JSON string but got " + data['secure-access-enable']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['secure-access-host'])) {
            throw new Error("Expected the field `secure-access-host` to be an array in the JSON data but got " + data['secure-access-host']);
        }
        // ensure the json data is a string
        if (data['secure-access-rd-gateway-server'] && !(typeof data['secure-access-rd-gateway-server'] === 'string' || data['secure-access-rd-gateway-server'] instanceof String)) {
            throw new Error("Expected the field `secure-access-rd-gateway-server` to be a primitive type in the JSON string but got " + data['secure-access-rd-gateway-server']);
        }
        // ensure the json data is a string
        if (data['secure-access-rdp-domain'] && !(typeof data['secure-access-rdp-domain'] === 'string' || data['secure-access-rdp-domain'] instanceof String)) {
            throw new Error("Expected the field `secure-access-rdp-domain` to be a primitive type in the JSON string but got " + data['secure-access-rdp-domain']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['target'])) {
            throw new Error("Expected the field `target` to be an array in the JSON data but got " + data['target']);
        }
        // ensure the json data is a string
        if (data['target-name'] && !(typeof data['target-name'] === 'string' || data['target-name'] instanceof String)) {
            throw new Error("Expected the field `target-name` to be a primitive type in the JSON string but got " + data['target-name']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['token-expiration'] && !(typeof data['token-expiration'] === 'string' || data['token-expiration'] instanceof String)) {
            throw new Error("Expected the field `token-expiration` to be a primitive type in the JSON string but got " + data['token-expiration']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }
        // ensure the json data is a string
        if (data['user-attribute'] && !(typeof data['user-attribute'] === 'string' || data['user-attribute'] instanceof String)) {
            throw new Error("Expected the field `user-attribute` to be a primitive type in the JSON string but got " + data['user-attribute']);
        }
        // ensure the json data is a string
        if (data['user-dn'] && !(typeof data['user-dn'] === 'string' || data['user-dn'] instanceof String)) {
            throw new Error("Expected the field `user-dn` to be a primitive type in the JSON string but got " + data['user-dn']);
        }
        // ensure the json data is a string
        if (data['user-ttl'] && !(typeof data['user-ttl'] === 'string' || data['user-ttl'] instanceof String)) {
            throw new Error("Expected the field `user-ttl` to be a primitive type in the JSON string but got " + data['user-ttl']);
        }

        return true;
    }


}

GatewayCreateProducerLdap.RequiredProperties = ["name"];

/**
 * @member {String} ProviderType
 */
GatewayCreateProducerLdap.prototype['ProviderType'] = undefined;

/**
 * Bind DN
 * @member {String} bind-dn
 */
GatewayCreateProducerLdap.prototype['bind-dn'] = undefined;

/**
 * Bind DN Password
 * @member {String} bind-dn-password
 */
GatewayCreateProducerLdap.prototype['bind-dn-password'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
GatewayCreateProducerLdap.prototype['delete_protection'] = undefined;

/**
 * Externally provided username [true/false]
 * @member {String} external-username
 * @default 'false'
 */
GatewayCreateProducerLdap.prototype['external-username'] = 'false';

/**
 * For externally provided users, denotes the key-name of IdP claim to extract the username from (relevant only for external-username=true)
 * @member {String} fixed-user-claim-keyname
 * @default 'ext_username'
 */
GatewayCreateProducerLdap.prototype['fixed-user-claim-keyname'] = 'ext_username';

/**
 * Group DN which the temporary user should be added
 * @member {String} group-dn
 */
GatewayCreateProducerLdap.prototype['group-dn'] = undefined;

/**
 * Host provider type [explicit/target], Default Host provider is explicit, Relevant only for Secure Remote Access of ssh cert issuer, ldap rotated secret and ldap dynamic secret
 * @member {String} host-provider
 */
GatewayCreateProducerLdap.prototype['host-provider'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayCreateProducerLdap.prototype['json'] = false;

/**
 * CA Certificate File Content
 * @member {String} ldap-ca-cert
 */
GatewayCreateProducerLdap.prototype['ldap-ca-cert'] = undefined;

/**
 * LDAP Server URL
 * @member {String} ldap-url
 */
GatewayCreateProducerLdap.prototype['ldap-url'] = undefined;

/**
 * Dynamic secret name
 * @member {String} name
 */
GatewayCreateProducerLdap.prototype['name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
GatewayCreateProducerLdap.prototype['password-length'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayCreateProducerLdap.prototype['producer-encryption-key-name'] = undefined;

/**
 * The delay duration, in seconds, to wait after generating just-in-time credentials. Accepted range: 0-120 seconds
 * @member {Number} secure-access-delay
 */
GatewayCreateProducerLdap.prototype['secure-access-delay'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
GatewayCreateProducerLdap.prototype['secure-access-enable'] = undefined;

/**
 * Target servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts - Relevant only for Dynamic Secrets/producers)
 * @member {Array.<String>} secure-access-host
 */
GatewayCreateProducerLdap.prototype['secure-access-host'] = undefined;

/**
 * RD Gateway server
 * @member {String} secure-access-rd-gateway-server
 */
GatewayCreateProducerLdap.prototype['secure-access-rd-gateway-server'] = undefined;

/**
 * Required when the Dynamic Secret is used for a domain user
 * @member {String} secure-access-rdp-domain
 */
GatewayCreateProducerLdap.prototype['secure-access-rdp-domain'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
GatewayCreateProducerLdap.prototype['tags'] = undefined;

/**
 * A list of linked targets to be associated, Relevant only for Secure Remote Access for ssh cert issuer, ldap rotated secret and ldap dynamic secret, To specify multiple targets use argument multiple times
 * @member {Array.<String>} target
 */
GatewayCreateProducerLdap.prototype['target'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayCreateProducerLdap.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateProducerLdap.prototype['token'] = undefined;

/**
 * Token expiration
 * @member {String} token-expiration
 */
GatewayCreateProducerLdap.prototype['token-expiration'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateProducerLdap.prototype['uid-token'] = undefined;

/**
 * User Attribute
 * @member {String} user-attribute
 */
GatewayCreateProducerLdap.prototype['user-attribute'] = undefined;

/**
 * User DN
 * @member {String} user-dn
 */
GatewayCreateProducerLdap.prototype['user-dn'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayCreateProducerLdap.prototype['user-ttl'] = '60m';






export default GatewayCreateProducerLdap;

