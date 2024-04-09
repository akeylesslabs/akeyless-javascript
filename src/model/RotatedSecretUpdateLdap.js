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
 * The RotatedSecretUpdateLdap model module.
 * @module model/RotatedSecretUpdateLdap
 * @version 3.6.3
 */
class RotatedSecretUpdateLdap {
    /**
     * Constructs a new <code>RotatedSecretUpdateLdap</code>.
     * @alias module:model/RotatedSecretUpdateLdap
     * @param name {String} Rotated secret name
     */
    constructor(name) { 
        
        RotatedSecretUpdateLdap.initialize(this, name);
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
     * Constructs a <code>RotatedSecretUpdateLdap</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RotatedSecretUpdateLdap} obj Optional instance to populate.
     * @return {module:model/RotatedSecretUpdateLdap} The populated <code>RotatedSecretUpdateLdap</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RotatedSecretUpdateLdap();

            if (data.hasOwnProperty('ProviderType')) {
                obj['ProviderType'] = ApiClient.convertToType(data['ProviderType'], 'String');
            }
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
            if (data.hasOwnProperty('host-provider')) {
                obj['host-provider'] = ApiClient.convertToType(data['host-provider'], 'String');
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
            if (data.hasOwnProperty('target')) {
                obj['target'] = ApiClient.convertToType(data['target'], ['String']);
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
 * @member {String} ProviderType
 */
RotatedSecretUpdateLdap.prototype['ProviderType'] = undefined;

/**
 * List of the new tags that will be attached to this item
 * @member {Array.<String>} add-tag
 */
RotatedSecretUpdateLdap.prototype['add-tag'] = undefined;

/**
 * The credentials to connect with use-user-creds/use-target-creds
 * @member {String} authentication-credentials
 * @default 'use-user-creds'
 */
RotatedSecretUpdateLdap.prototype['authentication-credentials'] = 'use-user-creds';

/**
 * Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation [true/false]
 * @member {String} auto-rotate
 */
RotatedSecretUpdateLdap.prototype['auto-rotate'] = undefined;

/**
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
RotatedSecretUpdateLdap.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 * @default 'default_metadata'
 */
RotatedSecretUpdateLdap.prototype['description'] = 'default_metadata';

/**
 * Host provider type [explicit/target], Relevant only for Secure Remote Access of ssh cert issuer and ldap rotated secret
 * @member {String} host-provider
 * @default 'explicit'
 */
RotatedSecretUpdateLdap.prototype['host-provider'] = 'explicit';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
RotatedSecretUpdateLdap.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
RotatedSecretUpdateLdap.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
RotatedSecretUpdateLdap.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
RotatedSecretUpdateLdap.prototype['max-versions'] = undefined;

/**
 * Rotated secret name
 * @member {String} name
 */
RotatedSecretUpdateLdap.prototype['name'] = undefined;

/**
 * New item name
 * @member {String} new-name
 */
RotatedSecretUpdateLdap.prototype['new-name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
RotatedSecretUpdateLdap.prototype['password-length'] = undefined;

/**
 * List of the existent tags that will be removed from this item
 * @member {Array.<String>} rm-tag
 */
RotatedSecretUpdateLdap.prototype['rm-tag'] = undefined;

/**
 * Rotate the value of the secret after SRA session ends [true/false]
 * @member {String} rotate-after-disconnect
 * @default 'false'
 */
RotatedSecretUpdateLdap.prototype['rotate-after-disconnect'] = 'false';

/**
 * rotated-username password (relevant only for rotator-type=ldap)
 * @member {String} rotated-password
 */
RotatedSecretUpdateLdap.prototype['rotated-password'] = undefined;

/**
 * username to be rotated, if selected use-self-creds at rotator-creds-type, this username will try to rotate it's own password, if use-target-creds is selected, target credentials will be use to rotate the rotated-password (relevant only for rotator-type=ldap)
 * @member {String} rotated-username
 */
RotatedSecretUpdateLdap.prototype['rotated-username'] = undefined;

/**
 * The Hour of the rotation in UTC
 * @member {Number} rotation-hour
 */
RotatedSecretUpdateLdap.prototype['rotation-hour'] = undefined;

/**
 * The number of days to wait between every automatic key rotation (1-365)
 * @member {String} rotation-interval
 */
RotatedSecretUpdateLdap.prototype['rotation-interval'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
RotatedSecretUpdateLdap.prototype['secure-access-enable'] = undefined;

/**
 * Target servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts - Relevant only for Dynamic Secrets/producers)
 * @member {Array.<String>} secure-access-host
 */
RotatedSecretUpdateLdap.prototype['secure-access-host'] = undefined;

/**
 * Default domain name server. i.e. microsoft.com
 * @member {String} secure-access-rdp-domain
 */
RotatedSecretUpdateLdap.prototype['secure-access-rdp-domain'] = undefined;

/**
 * Destination URL to inject secrets
 * @member {String} secure-access-url
 */
RotatedSecretUpdateLdap.prototype['secure-access-url'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default false
 */
RotatedSecretUpdateLdap.prototype['secure-access-web'] = false;

/**
 * Secure browser via Akeyless Web Access Bastion
 * @member {Boolean} secure-access-web-browsing
 * @default false
 */
RotatedSecretUpdateLdap.prototype['secure-access-web-browsing'] = false;

/**
 * Web-Proxy via Akeyless Web Access Bastion
 * @member {Boolean} secure-access-web-proxy
 * @default false
 */
RotatedSecretUpdateLdap.prototype['secure-access-web-proxy'] = false;

/**
 * A list of linked targets to be associated, Relevant only for Secure Remote Access for ssh cert issuer and ldap rotated secret, To specify multiple targets use argument multiple times
 * @member {Array.<String>} target
 */
RotatedSecretUpdateLdap.prototype['target'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
RotatedSecretUpdateLdap.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
RotatedSecretUpdateLdap.prototype['uid-token'] = undefined;

/**
 * LDAP User Attribute, Default value \"cn\"
 * @member {String} user-attribute
 * @default 'cn'
 */
RotatedSecretUpdateLdap.prototype['user-attribute'] = 'cn';

/**
 * Base DN to Perform User Search
 * @member {String} user-dn
 */
RotatedSecretUpdateLdap.prototype['user-dn'] = undefined;






export default RotatedSecretUpdateLdap;

