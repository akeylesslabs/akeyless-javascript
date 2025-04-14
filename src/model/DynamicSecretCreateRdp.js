/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The DynamicSecretCreateRdp model module.
 * @module model/DynamicSecretCreateRdp
 * @version 5.0.3
 */
class DynamicSecretCreateRdp {
    /**
     * Constructs a new <code>DynamicSecretCreateRdp</code>.
     * dynamicSecretCreateRdp is a command that creates rdp dynamic secret
     * @alias module:model/DynamicSecretCreateRdp
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        DynamicSecretCreateRdp.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['fixed-user-claim-keyname'] = 'ext_username';
        obj['fixed-user-only'] = 'false';
        obj['json'] = false;
        obj['name'] = name;
        obj['rdp-host-port'] = '22';
        obj['secure-access-allow-external-user'] = false;
        obj['user-ttl'] = '60m';
    }

    /**
     * Constructs a <code>DynamicSecretCreateRdp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretCreateRdp} obj Optional instance to populate.
     * @return {module:model/DynamicSecretCreateRdp} The populated <code>DynamicSecretCreateRdp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretCreateRdp();

            if (data.hasOwnProperty('allow-user-extend-session')) {
                obj['allow-user-extend-session'] = ApiClient.convertToType(data['allow-user-extend-session'], 'Number');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('fixed-user-claim-keyname')) {
                obj['fixed-user-claim-keyname'] = ApiClient.convertToType(data['fixed-user-claim-keyname'], 'String');
            }
            if (data.hasOwnProperty('fixed-user-only')) {
                obj['fixed-user-only'] = ApiClient.convertToType(data['fixed-user-only'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
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
            if (data.hasOwnProperty('secure-access-bastion-issuer')) {
                obj['secure-access-bastion-issuer'] = ApiClient.convertToType(data['secure-access-bastion-issuer'], 'String');
            }
            if (data.hasOwnProperty('secure-access-certificate-issuer')) {
                obj['secure-access-certificate-issuer'] = ApiClient.convertToType(data['secure-access-certificate-issuer'], 'String');
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

    /**
     * Validates the JSON data with respect to <code>DynamicSecretCreateRdp</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>DynamicSecretCreateRdp</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of DynamicSecretCreateRdp.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['delete_protection'] && !(typeof data['delete_protection'] === 'string' || data['delete_protection'] instanceof String)) {
            throw new Error("Expected the field `delete_protection` to be a primitive type in the JSON string but got " + data['delete_protection']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['fixed-user-claim-keyname'] && !(typeof data['fixed-user-claim-keyname'] === 'string' || data['fixed-user-claim-keyname'] instanceof String)) {
            throw new Error("Expected the field `fixed-user-claim-keyname` to be a primitive type in the JSON string but got " + data['fixed-user-claim-keyname']);
        }
        // ensure the json data is a string
        if (data['fixed-user-only'] && !(typeof data['fixed-user-only'] === 'string' || data['fixed-user-only'] instanceof String)) {
            throw new Error("Expected the field `fixed-user-only` to be a primitive type in the JSON string but got " + data['fixed-user-only']);
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
        if (data['rdp-admin-name'] && !(typeof data['rdp-admin-name'] === 'string' || data['rdp-admin-name'] instanceof String)) {
            throw new Error("Expected the field `rdp-admin-name` to be a primitive type in the JSON string but got " + data['rdp-admin-name']);
        }
        // ensure the json data is a string
        if (data['rdp-admin-pwd'] && !(typeof data['rdp-admin-pwd'] === 'string' || data['rdp-admin-pwd'] instanceof String)) {
            throw new Error("Expected the field `rdp-admin-pwd` to be a primitive type in the JSON string but got " + data['rdp-admin-pwd']);
        }
        // ensure the json data is a string
        if (data['rdp-host-name'] && !(typeof data['rdp-host-name'] === 'string' || data['rdp-host-name'] instanceof String)) {
            throw new Error("Expected the field `rdp-host-name` to be a primitive type in the JSON string but got " + data['rdp-host-name']);
        }
        // ensure the json data is a string
        if (data['rdp-host-port'] && !(typeof data['rdp-host-port'] === 'string' || data['rdp-host-port'] instanceof String)) {
            throw new Error("Expected the field `rdp-host-port` to be a primitive type in the JSON string but got " + data['rdp-host-port']);
        }
        // ensure the json data is a string
        if (data['rdp-user-groups'] && !(typeof data['rdp-user-groups'] === 'string' || data['rdp-user-groups'] instanceof String)) {
            throw new Error("Expected the field `rdp-user-groups` to be a primitive type in the JSON string but got " + data['rdp-user-groups']);
        }
        // ensure the json data is a string
        if (data['secure-access-bastion-issuer'] && !(typeof data['secure-access-bastion-issuer'] === 'string' || data['secure-access-bastion-issuer'] instanceof String)) {
            throw new Error("Expected the field `secure-access-bastion-issuer` to be a primitive type in the JSON string but got " + data['secure-access-bastion-issuer']);
        }
        // ensure the json data is a string
        if (data['secure-access-certificate-issuer'] && !(typeof data['secure-access-certificate-issuer'] === 'string' || data['secure-access-certificate-issuer'] instanceof String)) {
            throw new Error("Expected the field `secure-access-certificate-issuer` to be a primitive type in the JSON string but got " + data['secure-access-certificate-issuer']);
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
        // ensure the json data is a string
        if (data['secure-access-rdp-user'] && !(typeof data['secure-access-rdp-user'] === 'string' || data['secure-access-rdp-user'] instanceof String)) {
            throw new Error("Expected the field `secure-access-rdp-user` to be a primitive type in the JSON string but got " + data['secure-access-rdp-user']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
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
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }
        // ensure the json data is a string
        if (data['user-ttl'] && !(typeof data['user-ttl'] === 'string' || data['user-ttl'] instanceof String)) {
            throw new Error("Expected the field `user-ttl` to be a primitive type in the JSON string but got " + data['user-ttl']);
        }

        return true;
    }


}

DynamicSecretCreateRdp.RequiredProperties = ["name"];

/**
 * AllowUserExtendSession
 * @member {Number} allow-user-extend-session
 */
DynamicSecretCreateRdp.prototype['allow-user-extend-session'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
DynamicSecretCreateRdp.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
DynamicSecretCreateRdp.prototype['description'] = undefined;

/**
 * For externally provided users, denotes the key-name of IdP claim to extract the username from (relevant only for fixed-user-only=true)
 * @member {String} fixed-user-claim-keyname
 * @default 'ext_username'
 */
DynamicSecretCreateRdp.prototype['fixed-user-claim-keyname'] = 'ext_username';

/**
 * Allow access using externally (IdP) provided username [true/false]
 * @member {String} fixed-user-only
 * @default 'false'
 */
DynamicSecretCreateRdp.prototype['fixed-user-only'] = 'false';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DynamicSecretCreateRdp.prototype['json'] = false;

/**
 * Dynamic secret name
 * @member {String} name
 */
DynamicSecretCreateRdp.prototype['name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
DynamicSecretCreateRdp.prototype['password-length'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
DynamicSecretCreateRdp.prototype['producer-encryption-key-name'] = undefined;

/**
 * RDP Admin Name
 * @member {String} rdp-admin-name
 */
DynamicSecretCreateRdp.prototype['rdp-admin-name'] = undefined;

/**
 * RDP Admin password
 * @member {String} rdp-admin-pwd
 */
DynamicSecretCreateRdp.prototype['rdp-admin-pwd'] = undefined;

/**
 * Hostname
 * @member {String} rdp-host-name
 */
DynamicSecretCreateRdp.prototype['rdp-host-name'] = undefined;

/**
 * Port
 * @member {String} rdp-host-port
 * @default '22'
 */
DynamicSecretCreateRdp.prototype['rdp-host-port'] = '22';

/**
 * Groups
 * @member {String} rdp-user-groups
 */
DynamicSecretCreateRdp.prototype['rdp-user-groups'] = undefined;

/**
 * Allow providing external user for a domain users
 * @member {Boolean} secure-access-allow-external-user
 * @default false
 */
DynamicSecretCreateRdp.prototype['secure-access-allow-external-user'] = false;

/**
 * Deprecated. use secure-access-certificate-issuer
 * @member {String} secure-access-bastion-issuer
 */
DynamicSecretCreateRdp.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Secure Access
 * @member {String} secure-access-certificate-issuer
 */
DynamicSecretCreateRdp.prototype['secure-access-certificate-issuer'] = undefined;

/**
 * The delay duration, in seconds, to wait after generating just-in-time credentials. Accepted range: 0-120 seconds
 * @member {Number} secure-access-delay
 */
DynamicSecretCreateRdp.prototype['secure-access-delay'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
DynamicSecretCreateRdp.prototype['secure-access-enable'] = undefined;

/**
 * Target servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts - Relevant only for Dynamic Secrets/producers)
 * @member {Array.<String>} secure-access-host
 */
DynamicSecretCreateRdp.prototype['secure-access-host'] = undefined;

/**
 * RD Gateway server
 * @member {String} secure-access-rd-gateway-server
 */
DynamicSecretCreateRdp.prototype['secure-access-rd-gateway-server'] = undefined;

/**
 * Required when the Dynamic Secret is used for a domain user
 * @member {String} secure-access-rdp-domain
 */
DynamicSecretCreateRdp.prototype['secure-access-rdp-domain'] = undefined;

/**
 * Override the RDP Domain username
 * @member {String} secure-access-rdp-user
 */
DynamicSecretCreateRdp.prototype['secure-access-rdp-user'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
DynamicSecretCreateRdp.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
DynamicSecretCreateRdp.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DynamicSecretCreateRdp.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DynamicSecretCreateRdp.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
DynamicSecretCreateRdp.prototype['user-ttl'] = '60m';

/**
 * WarnBeforeUserExpiration
 * @member {Number} warn-user-before-expiration
 */
DynamicSecretCreateRdp.prototype['warn-user-before-expiration'] = undefined;






export default DynamicSecretCreateRdp;

