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
 * The GatewayUpdateProducerAzure model module.
 * @module model/GatewayUpdateProducerAzure
 * @version 2.20.1
 */
class GatewayUpdateProducerAzure {
    /**
     * Constructs a new <code>GatewayUpdateProducerAzure</code>.
     * gatewayUpdateProducerAzure is a command that updates azure producer
     * @alias module:model/GatewayUpdateProducerAzure
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayUpdateProducerAzure.initialize(this, name);
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
     * Constructs a <code>GatewayUpdateProducerAzure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerAzure} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerAzure} The populated <code>GatewayUpdateProducerAzure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerAzure();

            if (data.hasOwnProperty('app-obj-id')) {
                obj['app-obj-id'] = ApiClient.convertToType(data['app-obj-id'], 'String');
            }
            if (data.hasOwnProperty('azure-client-id')) {
                obj['azure-client-id'] = ApiClient.convertToType(data['azure-client-id'], 'String');
            }
            if (data.hasOwnProperty('azure-client-secret')) {
                obj['azure-client-secret'] = ApiClient.convertToType(data['azure-client-secret'], 'String');
            }
            if (data.hasOwnProperty('azure-tenant-id')) {
                obj['azure-tenant-id'] = ApiClient.convertToType(data['azure-tenant-id'], 'String');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('fixed-user-claim-keyname')) {
                obj['fixed-user-claim-keyname'] = ApiClient.convertToType(data['fixed-user-claim-keyname'], 'String');
            }
            if (data.hasOwnProperty('fixed-user-only')) {
                obj['fixed-user-only'] = ApiClient.convertToType(data['fixed-user-only'], 'Boolean');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
            }
            if (data.hasOwnProperty('secure-access-enable')) {
                obj['secure-access-enable'] = ApiClient.convertToType(data['secure-access-enable'], 'String');
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
            if (data.hasOwnProperty('target-name')) {
                obj['target-name'] = ApiClient.convertToType(data['target-name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('user-group-obj-id')) {
                obj['user-group-obj-id'] = ApiClient.convertToType(data['user-group-obj-id'], 'String');
            }
            if (data.hasOwnProperty('user-portal-access')) {
                obj['user-portal-access'] = ApiClient.convertToType(data['user-portal-access'], 'Boolean');
            }
            if (data.hasOwnProperty('user-principal-name')) {
                obj['user-principal-name'] = ApiClient.convertToType(data['user-principal-name'], 'String');
            }
            if (data.hasOwnProperty('user-programmatic-access')) {
                obj['user-programmatic-access'] = ApiClient.convertToType(data['user-programmatic-access'], 'Boolean');
            }
            if (data.hasOwnProperty('user-role-template-id')) {
                obj['user-role-template-id'] = ApiClient.convertToType(data['user-role-template-id'], 'String');
            }
            if (data.hasOwnProperty('user-ttl')) {
                obj['user-ttl'] = ApiClient.convertToType(data['user-ttl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Azure App Object Id
 * @member {String} app-obj-id
 */
GatewayUpdateProducerAzure.prototype['app-obj-id'] = undefined;

/**
 * Azure Client ID
 * @member {String} azure-client-id
 */
GatewayUpdateProducerAzure.prototype['azure-client-id'] = undefined;

/**
 * Azure Client Secret
 * @member {String} azure-client-secret
 */
GatewayUpdateProducerAzure.prototype['azure-client-secret'] = undefined;

/**
 * Azure Tenant ID
 * @member {String} azure-tenant-id
 */
GatewayUpdateProducerAzure.prototype['azure-tenant-id'] = undefined;

/**
 * Protection from accidental deletion of this item
 * @member {String} delete_protection
 */
GatewayUpdateProducerAzure.prototype['delete_protection'] = undefined;

/**
 * FixedUserClaimKeyname
 * @member {String} fixed-user-claim-keyname
 * @default 'false'
 */
GatewayUpdateProducerAzure.prototype['fixed-user-claim-keyname'] = 'false';

/**
 * Fixed user
 * @member {Boolean} fixed-user-only
 * @default false
 */
GatewayUpdateProducerAzure.prototype['fixed-user-only'] = false;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
GatewayUpdateProducerAzure.prototype['json'] = undefined;

/**
 * Producer name
 * @member {String} name
 */
GatewayUpdateProducerAzure.prototype['name'] = undefined;

/**
 * Producer name
 * @member {String} new-name
 */
GatewayUpdateProducerAzure.prototype['new-name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayUpdateProducerAzure.prototype['producer-encryption-key-name'] = undefined;

/**
 * @member {String} secure-access-enable
 */
GatewayUpdateProducerAzure.prototype['secure-access-enable'] = undefined;

/**
 * @member {Boolean} secure-access-web
 */
GatewayUpdateProducerAzure.prototype['secure-access-web'] = undefined;

/**
 * @member {Boolean} secure-access-web-browsing
 */
GatewayUpdateProducerAzure.prototype['secure-access-web-browsing'] = undefined;

/**
 * @member {Boolean} secure-access-web-proxy
 */
GatewayUpdateProducerAzure.prototype['secure-access-web-proxy'] = undefined;

/**
 * List of the tags attached to this secret
 * @member {Array.<String>} tags
 */
GatewayUpdateProducerAzure.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayUpdateProducerAzure.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateProducerAzure.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateProducerAzure.prototype['uid-token'] = undefined;

/**
 * User Group Object Id
 * @member {String} user-group-obj-id
 */
GatewayUpdateProducerAzure.prototype['user-group-obj-id'] = undefined;

/**
 * Azure User portal access
 * @member {Boolean} user-portal-access
 * @default false
 */
GatewayUpdateProducerAzure.prototype['user-portal-access'] = false;

/**
 * User Principal Name
 * @member {String} user-principal-name
 */
GatewayUpdateProducerAzure.prototype['user-principal-name'] = undefined;

/**
 * Azure User programmatic access
 * @member {Boolean} user-programmatic-access
 * @default false
 */
GatewayUpdateProducerAzure.prototype['user-programmatic-access'] = false;

/**
 * User Role Template Id
 * @member {String} user-role-template-id
 */
GatewayUpdateProducerAzure.prototype['user-role-template-id'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayUpdateProducerAzure.prototype['user-ttl'] = '60m';






export default GatewayUpdateProducerAzure;

