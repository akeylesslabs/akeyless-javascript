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
 * The RotatedSecretCreateSsh model module.
 * @module model/RotatedSecretCreateSsh
 * @version 5.0.3
 */
class RotatedSecretCreateSsh {
    /**
     * Constructs a new <code>RotatedSecretCreateSsh</code>.
     * @alias module:model/RotatedSecretCreateSsh
     * @param name {String} Rotated secret name
     * @param rotatorType {String} The rotator type. options: [target/password]
     * @param targetName {String} Target name
     */
    constructor(name, rotatorType, targetName) { 
        
        RotatedSecretCreateSsh.initialize(this, name, rotatorType, targetName);
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
        obj['secure-access-allow-external-user'] = false;
        obj['secure-access-target-type'] = 'false';
        obj['target-name'] = targetName;
    }

    /**
     * Constructs a <code>RotatedSecretCreateSsh</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RotatedSecretCreateSsh} obj Optional instance to populate.
     * @return {module:model/RotatedSecretCreateSsh} The populated <code>RotatedSecretCreateSsh</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RotatedSecretCreateSsh();

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
            if (data.hasOwnProperty('rotator-custom-cmd')) {
                obj['rotator-custom-cmd'] = ApiClient.convertToType(data['rotator-custom-cmd'], 'String');
            }
            if (data.hasOwnProperty('rotator-type')) {
                obj['rotator-type'] = ApiClient.convertToType(data['rotator-type'], 'String');
            }
            if (data.hasOwnProperty('same-password')) {
                obj['same-password'] = ApiClient.convertToType(data['same-password'], 'String');
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
            if (data.hasOwnProperty('secure-access-ssh-user')) {
                obj['secure-access-ssh-user'] = ApiClient.convertToType(data['secure-access-ssh-user'], 'String');
            }
            if (data.hasOwnProperty('secure-access-target-type')) {
                obj['secure-access-target-type'] = ApiClient.convertToType(data['secure-access-target-type'], 'String');
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
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>RotatedSecretCreateSsh</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>RotatedSecretCreateSsh</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of RotatedSecretCreateSsh.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
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
        if (data['rotator-custom-cmd'] && !(typeof data['rotator-custom-cmd'] === 'string' || data['rotator-custom-cmd'] instanceof String)) {
            throw new Error("Expected the field `rotator-custom-cmd` to be a primitive type in the JSON string but got " + data['rotator-custom-cmd']);
        }
        // ensure the json data is a string
        if (data['rotator-type'] && !(typeof data['rotator-type'] === 'string' || data['rotator-type'] instanceof String)) {
            throw new Error("Expected the field `rotator-type` to be a primitive type in the JSON string but got " + data['rotator-type']);
        }
        // ensure the json data is a string
        if (data['same-password'] && !(typeof data['same-password'] === 'string' || data['same-password'] instanceof String)) {
            throw new Error("Expected the field `same-password` to be a primitive type in the JSON string but got " + data['same-password']);
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
        if (data['secure-access-rdp-domain'] && !(typeof data['secure-access-rdp-domain'] === 'string' || data['secure-access-rdp-domain'] instanceof String)) {
            throw new Error("Expected the field `secure-access-rdp-domain` to be a primitive type in the JSON string but got " + data['secure-access-rdp-domain']);
        }
        // ensure the json data is a string
        if (data['secure-access-rdp-user'] && !(typeof data['secure-access-rdp-user'] === 'string' || data['secure-access-rdp-user'] instanceof String)) {
            throw new Error("Expected the field `secure-access-rdp-user` to be a primitive type in the JSON string but got " + data['secure-access-rdp-user']);
        }
        // ensure the json data is a string
        if (data['secure-access-ssh-user'] && !(typeof data['secure-access-ssh-user'] === 'string' || data['secure-access-ssh-user'] instanceof String)) {
            throw new Error("Expected the field `secure-access-ssh-user` to be a primitive type in the JSON string but got " + data['secure-access-ssh-user']);
        }
        // ensure the json data is a string
        if (data['secure-access-target-type'] && !(typeof data['secure-access-target-type'] === 'string' || data['secure-access-target-type'] instanceof String)) {
            throw new Error("Expected the field `secure-access-target-type` to be a primitive type in the JSON string but got " + data['secure-access-target-type']);
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

        return true;
    }


}

RotatedSecretCreateSsh.RequiredProperties = ["name", "rotator-type", "target-name"];

/**
 * The credentials to connect with use-user-creds/use-target-creds
 * @member {String} authentication-credentials
 * @default 'use-user-creds'
 */
RotatedSecretCreateSsh.prototype['authentication-credentials'] = 'use-user-creds';

/**
 * Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation [true/false]
 * @member {String} auto-rotate
 */
RotatedSecretCreateSsh.prototype['auto-rotate'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
RotatedSecretCreateSsh.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
RotatedSecretCreateSsh.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
RotatedSecretCreateSsh.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
RotatedSecretCreateSsh.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
RotatedSecretCreateSsh.prototype['max-versions'] = undefined;

/**
 * Rotated secret name
 * @member {String} name
 */
RotatedSecretCreateSsh.prototype['name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
RotatedSecretCreateSsh.prototype['password-length'] = undefined;

/**
 * Rotate the value of the secret after SRA session ends [true/false]
 * @member {String} rotate-after-disconnect
 * @default 'false'
 */
RotatedSecretCreateSsh.prototype['rotate-after-disconnect'] = 'false';

/**
 * rotated-username password (relevant only for rotator-type=password)
 * @member {String} rotated-password
 */
RotatedSecretCreateSsh.prototype['rotated-password'] = undefined;

/**
 * username to be rotated, if selected use-self-creds at rotator-creds-type, this username will try to rotate it's own password, if use-target-creds is selected, target credentials will be use to rotate the rotated-password (relevant only for rotator-type=password)
 * @member {String} rotated-username
 */
RotatedSecretCreateSsh.prototype['rotated-username'] = undefined;

/**
 * How many days before the rotation of the item would you like to be notified
 * @member {Array.<String>} rotation-event-in
 */
RotatedSecretCreateSsh.prototype['rotation-event-in'] = undefined;

/**
 * The Hour of the rotation in UTC
 * @member {Number} rotation-hour
 */
RotatedSecretCreateSsh.prototype['rotation-hour'] = undefined;

/**
 * The number of days to wait between every automatic key rotation (1-365)
 * @member {String} rotation-interval
 */
RotatedSecretCreateSsh.prototype['rotation-interval'] = undefined;

/**
 * Custom rotation command
 * @member {String} rotator-custom-cmd
 */
RotatedSecretCreateSsh.prototype['rotator-custom-cmd'] = undefined;

/**
 * The rotator type. options: [target/password]
 * @member {String} rotator-type
 */
RotatedSecretCreateSsh.prototype['rotator-type'] = undefined;

/**
 * Rotate same password for each host from the Linked Target (relevant only for Linked Target)
 * @member {String} same-password
 */
RotatedSecretCreateSsh.prototype['same-password'] = undefined;

/**
 * Allow providing external user for a domain users
 * @member {Boolean} secure-access-allow-external-user
 * @default false
 */
RotatedSecretCreateSsh.prototype['secure-access-allow-external-user'] = false;

/**
 * Deprecated. use secure-access-certificate-issuer
 * @member {String} secure-access-bastion-issuer
 */
RotatedSecretCreateSsh.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Secure Access
 * @member {String} secure-access-certificate-issuer
 */
RotatedSecretCreateSsh.prototype['secure-access-certificate-issuer'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
RotatedSecretCreateSsh.prototype['secure-access-enable'] = undefined;

/**
 * Target servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts - Relevant only for Dynamic Secrets/producers)
 * @member {Array.<String>} secure-access-host
 */
RotatedSecretCreateSsh.prototype['secure-access-host'] = undefined;

/**
 * Default domain name server. i.e. microsoft.com
 * @member {String} secure-access-rdp-domain
 */
RotatedSecretCreateSsh.prototype['secure-access-rdp-domain'] = undefined;

/**
 * Override the RDP Domain username
 * @member {String} secure-access-rdp-user
 */
RotatedSecretCreateSsh.prototype['secure-access-rdp-user'] = undefined;

/**
 * Override the SSH username as indicated in SSH Certificate Issuer
 * @member {String} secure-access-ssh-user
 */
RotatedSecretCreateSsh.prototype['secure-access-ssh-user'] = undefined;

/**
 * Specify target type. Options are ssh or rdp
 * @member {String} secure-access-target-type
 * @default 'false'
 */
RotatedSecretCreateSsh.prototype['secure-access-target-type'] = 'false';

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
RotatedSecretCreateSsh.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
RotatedSecretCreateSsh.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
RotatedSecretCreateSsh.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
RotatedSecretCreateSsh.prototype['uid-token'] = undefined;






export default RotatedSecretCreateSsh;

