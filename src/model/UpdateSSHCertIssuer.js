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
 * The UpdateSSHCertIssuer model module.
 * @module model/UpdateSSHCertIssuer
 * @version 4.2.4
 */
class UpdateSSHCertIssuer {
    /**
     * Constructs a new <code>UpdateSSHCertIssuer</code>.
     * @alias module:model/UpdateSSHCertIssuer
     * @param allowedUsers {String} Users allowed to fetch the certificate, e.g root,ubuntu
     * @param name {String} SSH certificate issuer name
     * @param signerKeyName {String} A key to sign the certificate with
     * @param ttl {Number} The requested Time To Live for the certificate, in seconds
     */
    constructor(allowedUsers, name, signerKeyName, ttl) { 
        
        UpdateSSHCertIssuer.initialize(this, allowedUsers, name, signerKeyName, ttl);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, allowedUsers, name, signerKeyName, ttl) { 
        obj['allowed-users'] = allowedUsers;
        obj['name'] = name;
        obj['signer-key-name'] = signerKeyName;
        obj['ttl'] = ttl;
    }

    /**
     * Constructs a <code>UpdateSSHCertIssuer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateSSHCertIssuer} obj Optional instance to populate.
     * @return {module:model/UpdateSSHCertIssuer} The populated <code>UpdateSSHCertIssuer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateSSHCertIssuer();

            if (data.hasOwnProperty('ProviderType')) {
                obj['ProviderType'] = ApiClient.convertToType(data['ProviderType'], 'String');
            }
            if (data.hasOwnProperty('add-tag')) {
                obj['add-tag'] = ApiClient.convertToType(data['add-tag'], ['String']);
            }
            if (data.hasOwnProperty('allowed-users')) {
                obj['allowed-users'] = ApiClient.convertToType(data['allowed-users'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('extensions')) {
                obj['extensions'] = ApiClient.convertToType(data['extensions'], {'String': 'String'});
            }
            if (data.hasOwnProperty('host-provider')) {
                obj['host-provider'] = ApiClient.convertToType(data['host-provider'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('principals')) {
                obj['principals'] = ApiClient.convertToType(data['principals'], 'String');
            }
            if (data.hasOwnProperty('rm-tag')) {
                obj['rm-tag'] = ApiClient.convertToType(data['rm-tag'], ['String']);
            }
            if (data.hasOwnProperty('secure-access-bastion-api')) {
                obj['secure-access-bastion-api'] = ApiClient.convertToType(data['secure-access-bastion-api'], 'String');
            }
            if (data.hasOwnProperty('secure-access-bastion-ssh')) {
                obj['secure-access-bastion-ssh'] = ApiClient.convertToType(data['secure-access-bastion-ssh'], 'String');
            }
            if (data.hasOwnProperty('secure-access-enable')) {
                obj['secure-access-enable'] = ApiClient.convertToType(data['secure-access-enable'], 'String');
            }
            if (data.hasOwnProperty('secure-access-enforce-hosts-restriction')) {
                obj['secure-access-enforce-hosts-restriction'] = ApiClient.convertToType(data['secure-access-enforce-hosts-restriction'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-host')) {
                obj['secure-access-host'] = ApiClient.convertToType(data['secure-access-host'], ['String']);
            }
            if (data.hasOwnProperty('secure-access-ssh-creds-user')) {
                obj['secure-access-ssh-creds-user'] = ApiClient.convertToType(data['secure-access-ssh-creds-user'], 'String');
            }
            if (data.hasOwnProperty('secure-access-use-internal-bastion')) {
                obj['secure-access-use-internal-bastion'] = ApiClient.convertToType(data['secure-access-use-internal-bastion'], 'Boolean');
            }
            if (data.hasOwnProperty('signer-key-name')) {
                obj['signer-key-name'] = ApiClient.convertToType(data['signer-key-name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'Number');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} ProviderType
 */
UpdateSSHCertIssuer.prototype['ProviderType'] = undefined;

/**
 * List of the new tags that will be attached to this item
 * @member {Array.<String>} add-tag
 */
UpdateSSHCertIssuer.prototype['add-tag'] = undefined;

/**
 * Users allowed to fetch the certificate, e.g root,ubuntu
 * @member {String} allowed-users
 */
UpdateSSHCertIssuer.prototype['allowed-users'] = undefined;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
UpdateSSHCertIssuer.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
UpdateSSHCertIssuer.prototype['description'] = undefined;

/**
 * Signed certificates with extensions, e.g permit-port-forwarding=\\\"\\\"
 * @member {Object.<String, String>} extensions
 */
UpdateSSHCertIssuer.prototype['extensions'] = undefined;

/**
 * Host provider type [explicit/target], Default Host provider is explicit, Relevant only for Secure Remote Access of ssh cert issuer, ldap rotated secret and ldap dynamic secret
 * @member {String} host-provider
 */
UpdateSSHCertIssuer.prototype['host-provider'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateSSHCertIssuer.prototype['json'] = false;

/**
 * Deprecated - use description
 * @member {String} metadata
 */
UpdateSSHCertIssuer.prototype['metadata'] = undefined;

/**
 * SSH certificate issuer name
 * @member {String} name
 */
UpdateSSHCertIssuer.prototype['name'] = undefined;

/**
 * New item name
 * @member {String} new-name
 */
UpdateSSHCertIssuer.prototype['new-name'] = undefined;

/**
 * Signed certificates with principal, e.g example_role1,example_role2
 * @member {String} principals
 */
UpdateSSHCertIssuer.prototype['principals'] = undefined;

/**
 * List of the existent tags that will be removed from this item
 * @member {Array.<String>} rm-tag
 */
UpdateSSHCertIssuer.prototype['rm-tag'] = undefined;

/**
 * Bastion's SSH control API endpoint. E.g. https://my.bastion:9900
 * @member {String} secure-access-bastion-api
 */
UpdateSSHCertIssuer.prototype['secure-access-bastion-api'] = undefined;

/**
 * Bastion's SSH server. E.g. my.bastion:22
 * @member {String} secure-access-bastion-ssh
 */
UpdateSSHCertIssuer.prototype['secure-access-bastion-ssh'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
UpdateSSHCertIssuer.prototype['secure-access-enable'] = undefined;

/**
 * Enable this flag to enforce connections only to the hosts listed in --secure-access-host
 * @member {Boolean} secure-access-enforce-hosts-restriction
 */
UpdateSSHCertIssuer.prototype['secure-access-enforce-hosts-restriction'] = undefined;

/**
 * Target servers for connections (In case of Linked Target association, host(s) will inherit Linked Target hosts - Relevant only for Dynamic Secrets/producers)
 * @member {Array.<String>} secure-access-host
 */
UpdateSSHCertIssuer.prototype['secure-access-host'] = undefined;

/**
 * SSH username to connect to target server, must be in 'Allowed Users' list
 * @member {String} secure-access-ssh-creds-user
 */
UpdateSSHCertIssuer.prototype['secure-access-ssh-creds-user'] = undefined;

/**
 * Use internal SSH Bastion
 * @member {Boolean} secure-access-use-internal-bastion
 */
UpdateSSHCertIssuer.prototype['secure-access-use-internal-bastion'] = undefined;

/**
 * A key to sign the certificate with
 * @member {String} signer-key-name
 */
UpdateSSHCertIssuer.prototype['signer-key-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateSSHCertIssuer.prototype['token'] = undefined;

/**
 * The requested Time To Live for the certificate, in seconds
 * @member {Number} ttl
 */
UpdateSSHCertIssuer.prototype['ttl'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateSSHCertIssuer.prototype['uid-token'] = undefined;






export default UpdateSSHCertIssuer;

