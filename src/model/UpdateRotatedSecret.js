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
 * The UpdateRotatedSecret model module.
 * @module model/UpdateRotatedSecret
 * @version 4.1.0
 */
class UpdateRotatedSecret {
    /**
     * Constructs a new <code>UpdateRotatedSecret</code>.
     * updateRotatedSecret is a command that updates rotated secret. [Deprecated: Use rotated-secret update commands]
     * @alias module:model/UpdateRotatedSecret
     * @param name {String} Secret name
     */
    constructor(name) { 
        
        UpdateRotatedSecret.initialize(this, name);
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
     * Constructs a <code>UpdateRotatedSecret</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateRotatedSecret} obj Optional instance to populate.
     * @return {module:model/UpdateRotatedSecret} The populated <code>UpdateRotatedSecret</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateRotatedSecret();

            if (data.hasOwnProperty('ProviderType')) {
                obj['ProviderType'] = ApiClient.convertToType(data['ProviderType'], 'String');
            }
            if (data.hasOwnProperty('add-tag')) {
                obj['add-tag'] = ApiClient.convertToType(data['add-tag'], ['String']);
            }
            if (data.hasOwnProperty('api-id')) {
                obj['api-id'] = ApiClient.convertToType(data['api-id'], 'String');
            }
            if (data.hasOwnProperty('api-key')) {
                obj['api-key'] = ApiClient.convertToType(data['api-key'], 'String');
            }
            if (data.hasOwnProperty('auto-rotate')) {
                obj['auto-rotate'] = ApiClient.convertToType(data['auto-rotate'], 'String');
            }
            if (data.hasOwnProperty('aws-region')) {
                obj['aws-region'] = ApiClient.convertToType(data['aws-region'], 'String');
            }
            if (data.hasOwnProperty('custom-payload')) {
                obj['custom-payload'] = ApiClient.convertToType(data['custom-payload'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('gcp-key')) {
                obj['gcp-key'] = ApiClient.convertToType(data['gcp-key'], 'String');
            }
            if (data.hasOwnProperty('grace-rotation')) {
                obj['grace-rotation'] = ApiClient.convertToType(data['grace-rotation'], 'String');
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
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-metadata')) {
                obj['new-metadata'] = ApiClient.convertToType(data['new-metadata'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('new-version')) {
                obj['new-version'] = ApiClient.convertToType(data['new-version'], 'Boolean');
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
            if (data.hasOwnProperty('rotator-creds-type')) {
                obj['rotator-creds-type'] = ApiClient.convertToType(data['rotator-creds-type'], 'String');
            }
            if (data.hasOwnProperty('rotator-custom-cmd')) {
                obj['rotator-custom-cmd'] = ApiClient.convertToType(data['rotator-custom-cmd'], 'String');
            }
            if (data.hasOwnProperty('same-password')) {
                obj['same-password'] = ApiClient.convertToType(data['same-password'], 'String');
            }
            if (data.hasOwnProperty('secure-access-allow-external-user')) {
                obj['secure-access-allow-external-user'] = ApiClient.convertToType(data['secure-access-allow-external-user'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-aws-account-id')) {
                obj['secure-access-aws-account-id'] = ApiClient.convertToType(data['secure-access-aws-account-id'], 'String');
            }
            if (data.hasOwnProperty('secure-access-aws-native-cli')) {
                obj['secure-access-aws-native-cli'] = ApiClient.convertToType(data['secure-access-aws-native-cli'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-bastion-issuer')) {
                obj['secure-access-bastion-issuer'] = ApiClient.convertToType(data['secure-access-bastion-issuer'], 'String');
            }
            if (data.hasOwnProperty('secure-access-db-name')) {
                obj['secure-access-db-name'] = ApiClient.convertToType(data['secure-access-db-name'], 'String');
            }
            if (data.hasOwnProperty('secure-access-db-schema')) {
                obj['secure-access-db-schema'] = ApiClient.convertToType(data['secure-access-db-schema'], 'String');
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
            if (data.hasOwnProperty('ssh-password')) {
                obj['ssh-password'] = ApiClient.convertToType(data['ssh-password'], 'String');
            }
            if (data.hasOwnProperty('ssh-username')) {
                obj['ssh-username'] = ApiClient.convertToType(data['ssh-username'], 'String');
            }
            if (data.hasOwnProperty('storage-account-key-name')) {
                obj['storage-account-key-name'] = ApiClient.convertToType(data['storage-account-key-name'], 'String');
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
UpdateRotatedSecret.prototype['ProviderType'] = undefined;

/**
 * List of the new tags that will be attached to this item
 * @member {Array.<String>} add-tag
 */
UpdateRotatedSecret.prototype['add-tag'] = undefined;

/**
 * API ID to rotate
 * @member {String} api-id
 */
UpdateRotatedSecret.prototype['api-id'] = undefined;

/**
 * API key to rotate
 * @member {String} api-key
 */
UpdateRotatedSecret.prototype['api-key'] = undefined;

/**
 * Whether to automatically rotate every --rotation-interval days, or disable existing automatic rotation [true/false]
 * @member {String} auto-rotate
 */
UpdateRotatedSecret.prototype['auto-rotate'] = undefined;

/**
 * Aws Region (relevant only for aws)
 * @member {String} aws-region
 * @default 'us-east-2'
 */
UpdateRotatedSecret.prototype['aws-region'] = 'us-east-2';

/**
 * Secret payload to be sent with rotation request (relevant only for rotator-type=custom)
 * @member {String} custom-payload
 */
UpdateRotatedSecret.prototype['custom-payload'] = undefined;

/**
 * Description of the object
 * @member {String} description
 * @default 'default_metadata'
 */
UpdateRotatedSecret.prototype['description'] = 'default_metadata';

/**
 * Base64-encoded service account private key text
 * @member {String} gcp-key
 */
UpdateRotatedSecret.prototype['gcp-key'] = undefined;

/**
 * Create a new access key without deleting the old key from AWS for backup (relevant only for AWS) [true/false]
 * @member {String} grace-rotation
 */
UpdateRotatedSecret.prototype['grace-rotation'] = undefined;

/**
 * Host provider type [explicit/target], Default Host provider is explicit, Relevant only for Secure Remote Access of ssh cert issuer, ldap rotated secret and ldap dynamic secret
 * @member {String} host-provider
 */
UpdateRotatedSecret.prototype['host-provider'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateRotatedSecret.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
UpdateRotatedSecret.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
UpdateRotatedSecret.prototype['key'] = undefined;

/**
 * Secret name
 * @member {String} name
 */
UpdateRotatedSecret.prototype['name'] = undefined;

/**
 * Deprecated - use description
 * @member {String} new-metadata
 * @default 'default_metadata'
 */
UpdateRotatedSecret.prototype['new-metadata'] = 'default_metadata';

/**
 * New item name
 * @member {String} new-name
 */
UpdateRotatedSecret.prototype['new-name'] = undefined;

/**
 * Deprecated
 * @member {Boolean} new-version
 */
UpdateRotatedSecret.prototype['new-version'] = undefined;

/**
 * List of the existent tags that will be removed from this item
 * @member {Array.<String>} rm-tag
 */
UpdateRotatedSecret.prototype['rm-tag'] = undefined;

/**
 * Rotate the value of the secret after SRA session ends [true/false]
 * @member {String} rotate-after-disconnect
 * @default 'false'
 */
UpdateRotatedSecret.prototype['rotate-after-disconnect'] = 'false';

/**
 * rotated-username password
 * @member {String} rotated-password
 */
UpdateRotatedSecret.prototype['rotated-password'] = undefined;

/**
 * username to be rotated, if selected use-self-creds at rotator-creds-type, this username will try to rotate it's own password, if use-target-creds is selected, target credentials will be use to rotate the rotated-password
 * @member {String} rotated-username
 */
UpdateRotatedSecret.prototype['rotated-username'] = undefined;

/**
 * The Hour of the rotation in UTC
 * @member {Number} rotation-hour
 */
UpdateRotatedSecret.prototype['rotation-hour'] = undefined;

/**
 * The number of days to wait between every automatic key rotation (7-365)
 * @member {String} rotation-interval
 */
UpdateRotatedSecret.prototype['rotation-interval'] = undefined;

/**
 * The credentials to connect with use-self-creds/use-target-creds
 * @member {String} rotator-creds-type
 * @default 'use-self-creds'
 */
UpdateRotatedSecret.prototype['rotator-creds-type'] = 'use-self-creds';

/**
 * \"Custom rotation command (relevant only for ssh target)
 * @member {String} rotator-custom-cmd
 */
UpdateRotatedSecret.prototype['rotator-custom-cmd'] = undefined;

/**
 * Rotate same password for each host from the Linked Target (relevant only for Linked Target)
 * @member {String} same-password
 */
UpdateRotatedSecret.prototype['same-password'] = undefined;

/**
 * Allow providing external user for a domain users (relevant only for rdp)
 * @member {Boolean} secure-access-allow-external-user
 * @default false
 */
UpdateRotatedSecret.prototype['secure-access-allow-external-user'] = false;

/**
 * The AWS account id (relevant only for aws)
 * @member {String} secure-access-aws-account-id
 */
UpdateRotatedSecret.prototype['secure-access-aws-account-id'] = undefined;

/**
 * The AWS native cli
 * @member {Boolean} secure-access-aws-native-cli
 */
UpdateRotatedSecret.prototype['secure-access-aws-native-cli'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Bastion
 * @member {String} secure-access-bastion-issuer
 */
UpdateRotatedSecret.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * The DB name (relevant only for DB Dynamic-Secret)
 * @member {String} secure-access-db-name
 */
UpdateRotatedSecret.prototype['secure-access-db-name'] = undefined;

/**
 * The db schema (relevant only for mssql or postgresql)
 * @member {String} secure-access-db-schema
 */
UpdateRotatedSecret.prototype['secure-access-db-schema'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
UpdateRotatedSecret.prototype['secure-access-enable'] = undefined;

/**
 * Target servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts - Relevant only for Dynamic Secrets/producers)
 * @member {Array.<String>} secure-access-host
 */
UpdateRotatedSecret.prototype['secure-access-host'] = undefined;

/**
 * Required when the Dynamic Secret is used for a domain user (relevant only for RDP Dynamic-Secret)
 * @member {String} secure-access-rdp-domain
 */
UpdateRotatedSecret.prototype['secure-access-rdp-domain'] = undefined;

/**
 * Override the RDP Domain username (relevant only for rdp)
 * @member {String} secure-access-rdp-user
 */
UpdateRotatedSecret.prototype['secure-access-rdp-user'] = undefined;

/**
 * Destination URL to inject secrets
 * @member {String} secure-access-url
 */
UpdateRotatedSecret.prototype['secure-access-url'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default false
 */
UpdateRotatedSecret.prototype['secure-access-web'] = false;

/**
 * Secure browser via Akeyless Web Access Bastion (relevant only for aws or azure)
 * @member {Boolean} secure-access-web-browsing
 * @default false
 */
UpdateRotatedSecret.prototype['secure-access-web-browsing'] = false;

/**
 * Web-Proxy via Akeyless Web Access Bastion (relevant only for aws or azure)
 * @member {Boolean} secure-access-web-proxy
 * @default false
 */
UpdateRotatedSecret.prototype['secure-access-web-proxy'] = false;

/**
 * Deprecated: use RotatedPassword
 * @member {String} ssh-password
 */
UpdateRotatedSecret.prototype['ssh-password'] = undefined;

/**
 * Deprecated: use RotatedUser
 * @member {String} ssh-username
 */
UpdateRotatedSecret.prototype['ssh-username'] = undefined;

/**
 * The name of the storage account key to rotate [key1/key2/kerb1/kerb2]
 * @member {String} storage-account-key-name
 */
UpdateRotatedSecret.prototype['storage-account-key-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateRotatedSecret.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateRotatedSecret.prototype['uid-token'] = undefined;

/**
 * LDAP User Attribute, Default value \"cn\"
 * @member {String} user-attribute
 * @default 'cn'
 */
UpdateRotatedSecret.prototype['user-attribute'] = 'cn';

/**
 * LDAP User Base DN
 * @member {String} user-dn
 */
UpdateRotatedSecret.prototype['user-dn'] = undefined;






export default UpdateRotatedSecret;

