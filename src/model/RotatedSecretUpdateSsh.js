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
 * The RotatedSecretUpdateSsh model module.
 * @module model/RotatedSecretUpdateSsh
 * @version 3.6.3
 */
class RotatedSecretUpdateSsh {
    /**
     * Constructs a new <code>RotatedSecretUpdateSsh</code>.
     * @alias module:model/RotatedSecretUpdateSsh
     * @param name {String} Rotated secret name
     * @param rotatorType {String} The rotator type. options: [target/password]
     */
    constructor(name, rotatorType) { 
        
        RotatedSecretUpdateSsh.initialize(this, name, rotatorType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, rotatorType) { 
        obj['name'] = name;
        obj['rotator-type'] = rotatorType;
    }

    /**
     * Constructs a <code>RotatedSecretUpdateSsh</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RotatedSecretUpdateSsh} obj Optional instance to populate.
     * @return {module:model/RotatedSecretUpdateSsh} The populated <code>RotatedSecretUpdateSsh</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RotatedSecretUpdateSsh();

            if (data.hasOwnProperty('add-tag')) {
                obj['add-tag'] = ApiClient.convertToType(data['add-tag'], ['String']);
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
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('keep-prev-version')) {
                obj['keep-prev-version'] = ApiClient.convertToType(data['keep-prev-version'], 'String');
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
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('password-length')) {
                obj['password-length'] = ApiClient.convertToType(data['password-length'], 'String');
            }
            if (data.hasOwnProperty('rm-tag')) {
                obj['rm-tag'] = ApiClient.convertToType(data['rm-tag'], ['String']);
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
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * List of the new tags that will be attached to this item
 * @member {Array.<String>} add-tag
 */
RotatedSecretUpdateSsh.prototype['add-tag'] = undefined;

/**
 * The credentials to connect with use-user-creds/use-target-creds
 * @member {String} authentication-credentials
 * @default 'use-user-creds'
 */
RotatedSecretUpdateSsh.prototype['authentication-credentials'] = 'use-user-creds';

/**
 * Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation [true/false]
 * @member {String} auto-rotate
 */
RotatedSecretUpdateSsh.prototype['auto-rotate'] = undefined;

/**
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
RotatedSecretUpdateSsh.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 * @default 'default_metadata'
 */
RotatedSecretUpdateSsh.prototype['description'] = 'default_metadata';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
RotatedSecretUpdateSsh.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
RotatedSecretUpdateSsh.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
RotatedSecretUpdateSsh.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
RotatedSecretUpdateSsh.prototype['max-versions'] = undefined;

/**
 * Rotated secret name
 * @member {String} name
 */
RotatedSecretUpdateSsh.prototype['name'] = undefined;

/**
 * New item name
 * @member {String} new-name
 */
RotatedSecretUpdateSsh.prototype['new-name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
RotatedSecretUpdateSsh.prototype['password-length'] = undefined;

/**
 * List of the existent tags that will be removed from this item
 * @member {Array.<String>} rm-tag
 */
RotatedSecretUpdateSsh.prototype['rm-tag'] = undefined;

/**
 * Rotate the value of the secret after SRA session ends [true/false]
 * @member {String} rotate-after-disconnect
 * @default 'false'
 */
RotatedSecretUpdateSsh.prototype['rotate-after-disconnect'] = 'false';

/**
 * rotated-username password (relevant only for rotator-type=password)
 * @member {String} rotated-password
 */
RotatedSecretUpdateSsh.prototype['rotated-password'] = undefined;

/**
 * username to be rotated, if selected use-self-creds at rotator-creds-type, this username will try to rotate it's own password, if use-target-creds is selected, target credentials will be use to rotate the rotated-password (relevant only for rotator-type=password)
 * @member {String} rotated-username
 */
RotatedSecretUpdateSsh.prototype['rotated-username'] = undefined;

/**
 * The Hour of the rotation in UTC
 * @member {Number} rotation-hour
 */
RotatedSecretUpdateSsh.prototype['rotation-hour'] = undefined;

/**
 * The number of days to wait between every automatic key rotation (1-365)
 * @member {String} rotation-interval
 */
RotatedSecretUpdateSsh.prototype['rotation-interval'] = undefined;

/**
 * Custom rotation command
 * @member {String} rotator-custom-cmd
 */
RotatedSecretUpdateSsh.prototype['rotator-custom-cmd'] = undefined;

/**
 * The rotator type. options: [target/password]
 * @member {String} rotator-type
 */
RotatedSecretUpdateSsh.prototype['rotator-type'] = undefined;

/**
 * Rotate same password for each host from the Linked Target (relevant only for Linked Target)
 * @member {String} same-password
 */
RotatedSecretUpdateSsh.prototype['same-password'] = undefined;

/**
 * Allow providing external user for a domain users
 * @member {Boolean} secure-access-allow-external-user
 * @default false
 */
RotatedSecretUpdateSsh.prototype['secure-access-allow-external-user'] = false;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Bastion
 * @member {String} secure-access-bastion-issuer
 */
RotatedSecretUpdateSsh.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
RotatedSecretUpdateSsh.prototype['secure-access-enable'] = undefined;

/**
 * Target servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts - Relevant only for Dynamic Secrets/producers)
 * @member {Array.<String>} secure-access-host
 */
RotatedSecretUpdateSsh.prototype['secure-access-host'] = undefined;

/**
 * Default domain name server. i.e. microsoft.com
 * @member {String} secure-access-rdp-domain
 */
RotatedSecretUpdateSsh.prototype['secure-access-rdp-domain'] = undefined;

/**
 * Override the RDP Domain username
 * @member {String} secure-access-rdp-user
 */
RotatedSecretUpdateSsh.prototype['secure-access-rdp-user'] = undefined;

/**
 * Override the SSH username as indicated in SSH Certificate Issuer
 * @member {String} secure-access-ssh-user
 */
RotatedSecretUpdateSsh.prototype['secure-access-ssh-user'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
RotatedSecretUpdateSsh.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
RotatedSecretUpdateSsh.prototype['uid-token'] = undefined;






export default RotatedSecretUpdateSsh;

