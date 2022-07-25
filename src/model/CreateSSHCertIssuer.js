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
 * The CreateSSHCertIssuer model module.
 * @module model/CreateSSHCertIssuer
 * @version 2.16.12
 */
class CreateSSHCertIssuer {
    /**
     * Constructs a new <code>CreateSSHCertIssuer</code>.
     * @alias module:model/CreateSSHCertIssuer
     * @param allowedUsers {String} Users allowed to fetch the certificate, e.g root,ubuntu
     * @param name {String} SSH certificate issuer name
     * @param signerKeyName {String} A key to sign the certificate with
     * @param ttl {Number} he requested Time To Live for the certificate, in seconds
     */
    constructor(allowedUsers, name, signerKeyName, ttl) { 
        
        CreateSSHCertIssuer.initialize(this, allowedUsers, name, signerKeyName, ttl);
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
     * Constructs a <code>CreateSSHCertIssuer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateSSHCertIssuer} obj Optional instance to populate.
     * @return {module:model/CreateSSHCertIssuer} The populated <code>CreateSSHCertIssuer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateSSHCertIssuer();

            if (data.hasOwnProperty('allowed-users')) {
                obj['allowed-users'] = ApiClient.convertToType(data['allowed-users'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('extensions')) {
                obj['extensions'] = ApiClient.convertToType(data['extensions'], {'String': 'String'});
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('principals')) {
                obj['principals'] = ApiClient.convertToType(data['principals'], 'String');
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
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], ['String']);
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
 * Users allowed to fetch the certificate, e.g root,ubuntu
 * @member {String} allowed-users
 */
CreateSSHCertIssuer.prototype['allowed-users'] = undefined;

/**
 * Protection from accidental deletion of this item
 * @member {String} delete_protection
 */
CreateSSHCertIssuer.prototype['delete_protection'] = undefined;

/**
 * Signed certificates with extensions, e.g permit-port-forwarding=\\\"\\\"
 * @member {Object.<String, String>} extensions
 */
CreateSSHCertIssuer.prototype['extensions'] = undefined;

/**
 * A metadata about the issuer
 * @member {String} metadata
 */
CreateSSHCertIssuer.prototype['metadata'] = undefined;

/**
 * SSH certificate issuer name
 * @member {String} name
 */
CreateSSHCertIssuer.prototype['name'] = undefined;

/**
 * Signed certificates with principal, e.g example_role1,example_role2
 * @member {String} principals
 */
CreateSSHCertIssuer.prototype['principals'] = undefined;

/**
 * @member {String} secure-access-bastion-api
 */
CreateSSHCertIssuer.prototype['secure-access-bastion-api'] = undefined;

/**
 * @member {String} secure-access-bastion-ssh
 */
CreateSSHCertIssuer.prototype['secure-access-bastion-ssh'] = undefined;

/**
 * @member {String} secure-access-enable
 */
CreateSSHCertIssuer.prototype['secure-access-enable'] = undefined;

/**
 * @member {Array.<String>} secure-access-host
 */
CreateSSHCertIssuer.prototype['secure-access-host'] = undefined;

/**
 * @member {String} secure-access-ssh-creds-user
 */
CreateSSHCertIssuer.prototype['secure-access-ssh-creds-user'] = undefined;

/**
 * @member {Boolean} secure-access-use-internal-bastion
 */
CreateSSHCertIssuer.prototype['secure-access-use-internal-bastion'] = undefined;

/**
 * A key to sign the certificate with
 * @member {String} signer-key-name
 */
CreateSSHCertIssuer.prototype['signer-key-name'] = undefined;

/**
 * List of the tags attached to this key
 * @member {Array.<String>} tag
 */
CreateSSHCertIssuer.prototype['tag'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateSSHCertIssuer.prototype['token'] = undefined;

/**
 * he requested Time To Live for the certificate, in seconds
 * @member {Number} ttl
 */
CreateSSHCertIssuer.prototype['ttl'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateSSHCertIssuer.prototype['uid-token'] = undefined;






export default CreateSSHCertIssuer;

