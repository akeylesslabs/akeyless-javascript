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
 * The GatewayCreateProducerAzure model module.
 * @module model/GatewayCreateProducerAzure
 * @version 2.20.0
 */
class GatewayCreateProducerAzure {
    /**
     * Constructs a new <code>GatewayCreateProducerAzure</code>.
     * gatewayCreateProducerAzure is a command that creates azure producer
     * @alias module:model/GatewayCreateProducerAzure
     * @param name {String} Producer name
     */
    constructor(name) { 
        
        GatewayCreateProducerAzure.initialize(this, name);
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
     * Constructs a <code>GatewayCreateProducerAzure</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayCreateProducerAzure} obj Optional instance to populate.
     * @return {module:model/GatewayCreateProducerAzure} The populated <code>GatewayCreateProducerAzure</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayCreateProducerAzure();

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
GatewayCreateProducerAzure.prototype['app-obj-id'] = undefined;

/**
 * Azure Client ID
 * @member {String} azure-client-id
 */
GatewayCreateProducerAzure.prototype['azure-client-id'] = undefined;

/**
 * Azure Client Secret
 * @member {String} azure-client-secret
 */
GatewayCreateProducerAzure.prototype['azure-client-secret'] = undefined;

/**
 * Azure Tenant ID
 * @member {String} azure-tenant-id
 */
GatewayCreateProducerAzure.prototype['azure-tenant-id'] = undefined;

/**
 * Protection from accidental deletion of this item
 * @member {String} delete_protection
 */
GatewayCreateProducerAzure.prototype['delete_protection'] = undefined;

/**
 * FixedUserClaimKeyname
 * @member {String} fixed-user-claim-keyname
 * @default 'false'
 */
GatewayCreateProducerAzure.prototype['fixed-user-claim-keyname'] = 'false';

/**
 * Fixed user
 * @member {Boolean} fixed-user-only
 * @default false
 */
GatewayCreateProducerAzure.prototype['fixed-user-only'] = false;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
GatewayCreateProducerAzure.prototype['json'] = undefined;

/**
 * Producer name
 * @member {String} name
 */
GatewayCreateProducerAzure.prototype['name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayCreateProducerAzure.prototype['producer-encryption-key-name'] = undefined;

/**
 * @member {String} secure-access-enable
 */
GatewayCreateProducerAzure.prototype['secure-access-enable'] = undefined;

/**
 * @member {Boolean} secure-access-web
 */
GatewayCreateProducerAzure.prototype['secure-access-web'] = undefined;

/**
 * @member {Boolean} secure-access-web-browsing
 */
GatewayCreateProducerAzure.prototype['secure-access-web-browsing'] = undefined;

/**
 * @member {Boolean} secure-access-web-proxy
 */
GatewayCreateProducerAzure.prototype['secure-access-web-proxy'] = undefined;

/**
 * List of the tags attached to this secret
 * @member {Array.<String>} tags
 */
GatewayCreateProducerAzure.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayCreateProducerAzure.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayCreateProducerAzure.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayCreateProducerAzure.prototype['uid-token'] = undefined;

/**
 * User Group Object Id
 * @member {String} user-group-obj-id
 */
GatewayCreateProducerAzure.prototype['user-group-obj-id'] = undefined;

/**
 * Azure User portal access
 * @member {Boolean} user-portal-access
 * @default false
 */
GatewayCreateProducerAzure.prototype['user-portal-access'] = false;

/**
 * User Principal Name
 * @member {String} user-principal-name
 */
GatewayCreateProducerAzure.prototype['user-principal-name'] = undefined;

/**
 * Azure User programmatic access
 * @member {Boolean} user-programmatic-access
 * @default false
 */
GatewayCreateProducerAzure.prototype['user-programmatic-access'] = false;

/**
 * User Role Template Id
 * @member {String} user-role-template-id
 */
GatewayCreateProducerAzure.prototype['user-role-template-id'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayCreateProducerAzure.prototype['user-ttl'] = '60m';






export default GatewayCreateProducerAzure;

