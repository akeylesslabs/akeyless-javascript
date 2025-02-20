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
 * The RotatedSecretCreateLdap model module.
 * @module model/RotatedSecretCreateLdap
 * @version 5.0.0
 */
class RotatedSecretCreateLdap {
    /**
     * Constructs a new <code>RotatedSecretCreateLdap</code>.
     * @alias module:model/RotatedSecretCreateLdap
     * @param name {String} Rotated secret name
     * @param rotatorType {String} The rotator type. options: [target/ldap]
     * @param targetName {String} Target name
     */
    constructor(name, rotatorType, targetName) { 
        
        RotatedSecretCreateLdap.initialize(this, name, rotatorType, targetName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, rotatorType, targetName) { 
        obj['authentication-credentials'] = 'use-user-creds';
        obj['json'] = false;
        obj['name'] = name;
        obj['rotate-after-disconnect'] = 'false';
        obj['rotator-type'] = rotatorType;
        obj['secure-access-web'] = false;
        obj['secure-access-web-browsing'] = false;
        obj['secure-access-web-proxy'] = false;
        obj['target-name'] = targetName;
        obj['user-attribute'] = 'cn';
    }

    /**
     * Constructs a <code>RotatedSecretCreateLdap</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RotatedSecretCreateLdap} obj Optional instance to populate.
     * @return {module:model/RotatedSecretCreateLdap} The populated <code>RotatedSecretCreateLdap</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RotatedSecretCreateLdap();

            if (data.hasOwnProperty('ProviderType')) {
                obj['ProviderType'] = ApiClient.convertToType(data['ProviderType'], 'String');
            }
            if (data.hasOwnProperty('authentication-credentials')) {
                obj['authentication-credentials'] = ApiClient.convertToType(data['authentication-credentials'], 'String');
            }
            if (data.hasOwnProperty('auto-rotate')) {
                obj['auto-rotate'] = ApiClient.convertToType(data['auto-rotate'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('host-provider')) {
                obj['host-provider'] = ApiClient.convertToType(data['host-provider'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('password-length')) {
                obj['password-length'] = ApiClient.convertToType(data['password-length'], 'String');
            }
            if (data.hasOwnProperty('rotate-after-disconnect')) {
                obj['rotate-after-disconnect'] = ApiClient.convertToType(data['rotate-after-disconnect'], 'String');
            }
            if (data.hasOwnProperty('rotated-password')) {
                obj['rotated-password'] = ApiClient.convertToType(data['rotated-password'], 'String');
            }
            if (data.hasOwnProperty('rotated-username')) {
                obj['rotated-username'] = ApiClient.convertToType(data['rotated-username'], 'String');
            }
            if (data.hasOwnProperty('rotation-event-in')) {
                obj['rotation-event-in'] = ApiClient.convertToType(data['rotation-event-in'], ['String']);
            }
            if (data.hasOwnProperty('rotation-hour')) {
                obj['rotation-hour'] = ApiClient.convertToType(data['rotation-hour'], 'Number');
            }
            if (data.hasOwnProperty('rotation-interval')) {
                obj['rotation-interval'] = ApiClient.convertToType(data['rotation-interval'], 'String');
            }
            if (data.hasOwnProperty('rotator-type')) {
                obj['rotator-type'] = ApiClient.convertToType(data['rotator-type'], 'String');
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
            if (data.hasOwnProperty('secure-access-url')) {
                obj['secure-access-url'] = ApiClient.convertToType(data['secure-access-url'], 'String');
            }
            if (data.hasOwnProperty('secure-access-web')) {
                obj['secure-access-web'] = ApiClient.convertToType(data['secure-access-web'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-browsing')) {
                obj['secure-access-web-browsing'] = ApiClient.convertToType(data['secure-access-web-browsing'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-proxy')) {
                obj['secure-access-web-proxy'] = ApiClient.convertToType(data['secure-access-web-proxy'], 'Boolean');
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

    /**
     * Validates the JSON data with respect to <code>RotatedSecretCreateLdap</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RotatedSecretCreateLdap</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RotatedSecretCreateLdap.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['ProviderType'] && !(typeof data['ProviderType'] === 'string' || data['ProviderType'] instanceof String)) {
            throw new Error("Expected the field `ProviderType` to be a primitive type in the JSON string but got " + data['ProviderType']);
        }
        // ensure the json data is a string
        if (data['authentication-credentials'] && !(typeof data['authentication-credentials'] === 'string' || data['authentication-credentials'] instanceof String)) {
            throw new Error("Expected the field `authentication-credentials` to be a primitive type in the JSON string but got " + data['authentication-credentials']);
        }
        // ensure the json data is a string
        if (data['auto-rotate'] && !(typeof data['auto-rotate'] === 'string' || data['auto-rotate'] instanceof String)) {
            throw new Error("Expected the field `auto-rotate` to be a primitive type in the JSON string but got " + data['auto-rotate']);
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
        if (data['host-provider'] && !(typeof data['host-provider'] === 'string' || data['host-provider'] instanceof String)) {
            throw new Error("Expected the field `host-provider` to be a primitive type in the JSON string but got " + data['host-provider']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['max-versions'] && !(typeof data['max-versions'] === 'string' || data['max-versions'] instanceof String)) {
            throw new Error("Expected the field `max-versions` to be a primitive type in the JSON string but got " + data['max-versions']);
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
        if (data['rotate-after-disconnect'] && !(typeof data['rotate-after-disconnect'] === 'string' || data['rotate-after-disconnect'] instanceof String)) {
            throw new Error("Expected the field `rotate-after-disconnect` to be a primitive type in the JSON string but got " + data['rotate-after-disconnect']);
        }
        // ensure the json data is a string
        if (data['rotated-password'] && !(typeof data['rotated-password'] === 'string' || data['rotated-password'] instanceof String)) {
            throw new Error("Expected the field `rotated-password` to be a primitive type in the JSON string but got " + data['rotated-password']);
        }
        // ensure the json data is a string
        if (data['rotated-username'] && !(typeof data['rotated-username'] === 'string' || data['rotated-username'] instanceof String)) {
            throw new Error("Expected the field `rotated-username` to be a primitive type in the JSON string but got " + data['rotated-username']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['rotation-event-in'])) {
            throw new Error("Expected the field `rotation-event-in` to be an array in the JSON data but got " + data['rotation-event-in']);
        }
        // ensure the json data is a string
        if (data['rotation-interval'] && !(typeof data['rotation-interval'] === 'string' || data['rotation-interval'] instanceof String)) {
            throw new Error("Expected the field `rotation-interval` to be a primitive type in the JSON string but got " + data['rotation-interval']);
        }
        // ensure the json data is a string
        if (data['rotator-type'] && !(typeof data['rotator-type'] === 'string' || data['rotator-type'] instanceof String)) {
            throw new Error("Expected the field `rotator-type` to be a primitive type in the JSON string but got " + data['rotator-type']);
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
        if (data['secure-access-rdp-domain'] && !(typeof data['secure-access-rdp-domain'] === 'string' || data['secure-access-rdp-domain'] instanceof String)) {
            throw new Error("Expected the field `secure-access-rdp-domain` to be a primitive type in the JSON string but got " + data['secure-access-rdp-domain']);
        }
        // ensure the json data is a string
        if (data['secure-access-url'] && !(typeof data['secure-access-url'] === 'string' || data['secure-access-url'] instanceof String)) {
            throw new Error("Expected the field `secure-access-url` to be a primitive type in the JSON string but got " + data['secure-access-url']);
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

        return true;
    }


}

RotatedSecretCreateLdap.RequiredProperties = ["name", "rotator-type", "target-name"];

/**
 * @member {String} ProviderType
 */
RotatedSecretCreateLdap.prototype['ProviderType'] = undefined;

/**
 * The credentials to connect with use-user-creds/use-target-creds
 * @member {String} authentication-credentials
 * @default 'use-user-creds'
 */
RotatedSecretCreateLdap.prototype['authentication-credentials'] = 'use-user-creds';

/**
 * Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation [true/false]
 * @member {String} auto-rotate
 */
RotatedSecretCreateLdap.prototype['auto-rotate'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
RotatedSecretCreateLdap.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
RotatedSecretCreateLdap.prototype['description'] = undefined;

/**
 * Host provider type [explicit/target], Default Host provider is explicit, Relevant only for Secure Remote Access of ssh cert issuer, ldap rotated secret and ldap dynamic secret
 * @member {String} host-provider
 */
RotatedSecretCreateLdap.prototype['host-provider'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
RotatedSecretCreateLdap.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
RotatedSecretCreateLdap.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
RotatedSecretCreateLdap.prototype['max-versions'] = undefined;

/**
 * Rotated secret name
 * @member {String} name
 */
RotatedSecretCreateLdap.prototype['name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
RotatedSecretCreateLdap.prototype['password-length'] = undefined;

/**
 * Rotate the value of the secret after SRA session ends [true/false]
 * @member {String} rotate-after-disconnect
 * @default 'false'
 */
RotatedSecretCreateLdap.prototype['rotate-after-disconnect'] = 'false';

/**
 * rotated-username password (relevant only for rotator-type=ldap)
 * @member {String} rotated-password
 */
RotatedSecretCreateLdap.prototype['rotated-password'] = undefined;

/**
 * username to be rotated, if selected use-self-creds at rotator-creds-type, this username will try to rotate it's own password, if use-target-creds is selected, target credentials will be use to rotate the rotated-password (relevant only for rotator-type=ldap)
 * @member {String} rotated-username
 */
RotatedSecretCreateLdap.prototype['rotated-username'] = undefined;

/**
 * How many days before the rotation of the item would you like to be notified
 * @member {Array.<String>} rotation-event-in
 */
RotatedSecretCreateLdap.prototype['rotation-event-in'] = undefined;

/**
 * The Hour of the rotation in UTC
 * @member {Number} rotation-hour
 */
RotatedSecretCreateLdap.prototype['rotation-hour'] = undefined;

/**
 * The number of days to wait between every automatic key rotation (1-365)
 * @member {String} rotation-interval
 */
RotatedSecretCreateLdap.prototype['rotation-interval'] = undefined;

/**
 * The rotator type. options: [target/ldap]
 * @member {String} rotator-type
 */
RotatedSecretCreateLdap.prototype['rotator-type'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
RotatedSecretCreateLdap.prototype['secure-access-enable'] = undefined;

/**
 * Target servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts - Relevant only for Dynamic Secrets/producers)
 * @member {Array.<String>} secure-access-host
 */
RotatedSecretCreateLdap.prototype['secure-access-host'] = undefined;

/**
 * Default domain name server. i.e. microsoft.com
 * @member {String} secure-access-rdp-domain
 */
RotatedSecretCreateLdap.prototype['secure-access-rdp-domain'] = undefined;

/**
 * Destination URL to inject secrets
 * @member {String} secure-access-url
 */
RotatedSecretCreateLdap.prototype['secure-access-url'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default false
 */
RotatedSecretCreateLdap.prototype['secure-access-web'] = false;

/**
 * Secure browser via Akeyless's Secure Remote Access (SRA)
 * @member {Boolean} secure-access-web-browsing
 * @default false
 */
RotatedSecretCreateLdap.prototype['secure-access-web-browsing'] = false;

/**
 * Web-Proxy via Akeyless's Secure Remote Access (SRA)
 * @member {Boolean} secure-access-web-proxy
 * @default false
 */
RotatedSecretCreateLdap.prototype['secure-access-web-proxy'] = false;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
RotatedSecretCreateLdap.prototype['tags'] = undefined;

/**
 * A list of linked targets to be associated, Relevant only for Secure Remote Access for ssh cert issuer, ldap rotated secret and ldap dynamic secret, To specify multiple targets use argument multiple times
 * @member {Array.<String>} target
 */
RotatedSecretCreateLdap.prototype['target'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
RotatedSecretCreateLdap.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
RotatedSecretCreateLdap.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
RotatedSecretCreateLdap.prototype['uid-token'] = undefined;

/**
 * LDAP User Attribute, Default value \"cn\"
 * @member {String} user-attribute
 * @default 'cn'
 */
RotatedSecretCreateLdap.prototype['user-attribute'] = 'cn';

/**
 * Base DN to Perform User Search
 * @member {String} user-dn
 */
RotatedSecretCreateLdap.prototype['user-dn'] = undefined;






export default RotatedSecretCreateLdap;

