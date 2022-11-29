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
 * The UpdateItem model module.
 * @module model/UpdateItem
 * @version 2.20.3
 */
class UpdateItem {
    /**
     * Constructs a new <code>UpdateItem</code>.
     * @alias module:model/UpdateItem
     * @param name {String} Current item name
     */
    constructor(name) { 
        
        UpdateItem.initialize(this, name);
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
     * Constructs a <code>UpdateItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateItem} obj Optional instance to populate.
     * @return {module:model/UpdateItem} The populated <code>UpdateItem</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateItem();

            if (data.hasOwnProperty('accessibility')) {
                obj['accessibility'] = ApiClient.convertToType(data['accessibility'], 'String');
            }
            if (data.hasOwnProperty('add-tag')) {
                obj['add-tag'] = ApiClient.convertToType(data['add-tag'], ['String']);
            }
            if (data.hasOwnProperty('cert-file-data')) {
                obj['cert-file-data'] = ApiClient.convertToType(data['cert-file-data'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
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
            if (data.hasOwnProperty('rm-tag')) {
                obj['rm-tag'] = ApiClient.convertToType(data['rm-tag'], ['String']);
            }
            if (data.hasOwnProperty('secure-access-add-host')) {
                obj['secure-access-add-host'] = ApiClient.convertToType(data['secure-access-add-host'], ['String']);
            }
            if (data.hasOwnProperty('secure-access-allow-external-user')) {
                obj['secure-access-allow-external-user'] = ApiClient.convertToType(data['secure-access-allow-external-user'], 'String');
            }
            if (data.hasOwnProperty('secure-access-allow-port-forwading')) {
                obj['secure-access-allow-port-forwading'] = ApiClient.convertToType(data['secure-access-allow-port-forwading'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-aws-account-id')) {
                obj['secure-access-aws-account-id'] = ApiClient.convertToType(data['secure-access-aws-account-id'], 'String');
            }
            if (data.hasOwnProperty('secure-access-aws-native-cli')) {
                obj['secure-access-aws-native-cli'] = ApiClient.convertToType(data['secure-access-aws-native-cli'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-aws-region')) {
                obj['secure-access-aws-region'] = ApiClient.convertToType(data['secure-access-aws-region'], 'String');
            }
            if (data.hasOwnProperty('secure-access-bastion-api')) {
                obj['secure-access-bastion-api'] = ApiClient.convertToType(data['secure-access-bastion-api'], 'String');
            }
            if (data.hasOwnProperty('secure-access-bastion-issuer')) {
                obj['secure-access-bastion-issuer'] = ApiClient.convertToType(data['secure-access-bastion-issuer'], 'String');
            }
            if (data.hasOwnProperty('secure-access-bastion-ssh')) {
                obj['secure-access-bastion-ssh'] = ApiClient.convertToType(data['secure-access-bastion-ssh'], 'String');
            }
            if (data.hasOwnProperty('secure-access-cluster-endpoint')) {
                obj['secure-access-cluster-endpoint'] = ApiClient.convertToType(data['secure-access-cluster-endpoint'], 'String');
            }
            if (data.hasOwnProperty('secure-access-dashboard-url')) {
                obj['secure-access-dashboard-url'] = ApiClient.convertToType(data['secure-access-dashboard-url'], 'String');
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
            if (data.hasOwnProperty('secure-access-rm-host')) {
                obj['secure-access-rm-host'] = ApiClient.convertToType(data['secure-access-rm-host'], ['String']);
            }
            if (data.hasOwnProperty('secure-access-ssh-creds')) {
                obj['secure-access-ssh-creds'] = ApiClient.convertToType(data['secure-access-ssh-creds'], 'String');
            }
            if (data.hasOwnProperty('secure-access-ssh-creds-user')) {
                obj['secure-access-ssh-creds-user'] = ApiClient.convertToType(data['secure-access-ssh-creds-user'], 'String');
            }
            if (data.hasOwnProperty('secure-access-url')) {
                obj['secure-access-url'] = ApiClient.convertToType(data['secure-access-url'], 'String');
            }
            if (data.hasOwnProperty('secure-access-use-internal-bastion')) {
                obj['secure-access-use-internal-bastion'] = ApiClient.convertToType(data['secure-access-use-internal-bastion'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-browsing')) {
                obj['secure-access-web-browsing'] = ApiClient.convertToType(data['secure-access-web-browsing'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-proxy')) {
                obj['secure-access-web-proxy'] = ApiClient.convertToType(data['secure-access-web-proxy'], 'Boolean');
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
 * for personal password manager
 * @member {String} accessibility
 * @default 'regular'
 */
UpdateItem.prototype['accessibility'] = 'regular';

/**
 * List of the new tags that will be attached to this item
 * @member {Array.<String>} add-tag
 */
UpdateItem.prototype['add-tag'] = undefined;

/**
 * PEM Certificate in a Base64 format. Used for updating RSA keys' certificates.
 * @member {String} cert-file-data
 */
UpdateItem.prototype['cert-file-data'] = undefined;

/**
 * @member {String} delete_protection
 */
UpdateItem.prototype['delete_protection'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
UpdateItem.prototype['json'] = undefined;

/**
 * Current item name
 * @member {String} name
 */
UpdateItem.prototype['name'] = undefined;

/**
 * New item metadata
 * @member {String} new-metadata
 * @default 'default_metadata'
 */
UpdateItem.prototype['new-metadata'] = 'default_metadata';

/**
 * New item name
 * @member {String} new-name
 */
UpdateItem.prototype['new-name'] = undefined;

/**
 * List of the existent tags that will be removed from this item
 * @member {Array.<String>} rm-tag
 */
UpdateItem.prototype['rm-tag'] = undefined;

/**
 * @member {Array.<String>} secure-access-add-host
 */
UpdateItem.prototype['secure-access-add-host'] = undefined;

/**
 * @member {String} secure-access-allow-external-user
 */
UpdateItem.prototype['secure-access-allow-external-user'] = undefined;

/**
 * @member {Boolean} secure-access-allow-port-forwading
 */
UpdateItem.prototype['secure-access-allow-port-forwading'] = undefined;

/**
 * @member {String} secure-access-aws-account-id
 */
UpdateItem.prototype['secure-access-aws-account-id'] = undefined;

/**
 * @member {Boolean} secure-access-aws-native-cli
 */
UpdateItem.prototype['secure-access-aws-native-cli'] = undefined;

/**
 * @member {String} secure-access-aws-region
 */
UpdateItem.prototype['secure-access-aws-region'] = undefined;

/**
 * @member {String} secure-access-bastion-api
 */
UpdateItem.prototype['secure-access-bastion-api'] = undefined;

/**
 * @member {String} secure-access-bastion-issuer
 */
UpdateItem.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * @member {String} secure-access-bastion-ssh
 */
UpdateItem.prototype['secure-access-bastion-ssh'] = undefined;

/**
 * @member {String} secure-access-cluster-endpoint
 */
UpdateItem.prototype['secure-access-cluster-endpoint'] = undefined;

/**
 * @member {String} secure-access-dashboard-url
 */
UpdateItem.prototype['secure-access-dashboard-url'] = undefined;

/**
 * @member {String} secure-access-db-name
 */
UpdateItem.prototype['secure-access-db-name'] = undefined;

/**
 * @member {String} secure-access-db-schema
 */
UpdateItem.prototype['secure-access-db-schema'] = undefined;

/**
 * @member {String} secure-access-enable
 */
UpdateItem.prototype['secure-access-enable'] = undefined;

/**
 * @member {Array.<String>} secure-access-host
 */
UpdateItem.prototype['secure-access-host'] = undefined;

/**
 * @member {String} secure-access-rdp-domain
 */
UpdateItem.prototype['secure-access-rdp-domain'] = undefined;

/**
 * @member {String} secure-access-rdp-user
 */
UpdateItem.prototype['secure-access-rdp-user'] = undefined;

/**
 * @member {Array.<String>} secure-access-rm-host
 */
UpdateItem.prototype['secure-access-rm-host'] = undefined;

/**
 * @member {String} secure-access-ssh-creds
 */
UpdateItem.prototype['secure-access-ssh-creds'] = undefined;

/**
 * @member {String} secure-access-ssh-creds-user
 */
UpdateItem.prototype['secure-access-ssh-creds-user'] = undefined;

/**
 * @member {String} secure-access-url
 */
UpdateItem.prototype['secure-access-url'] = undefined;

/**
 * @member {Boolean} secure-access-use-internal-bastion
 */
UpdateItem.prototype['secure-access-use-internal-bastion'] = undefined;

/**
 * @member {Boolean} secure-access-web-browsing
 */
UpdateItem.prototype['secure-access-web-browsing'] = undefined;

/**
 * @member {Boolean} secure-access-web-proxy
 */
UpdateItem.prototype['secure-access-web-proxy'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateItem.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateItem.prototype['uid-token'] = undefined;






export default UpdateItem;

