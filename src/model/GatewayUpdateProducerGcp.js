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
 * The GatewayUpdateProducerGcp model module.
 * @module model/GatewayUpdateProducerGcp
 * @version 3.2.6
 */
class GatewayUpdateProducerGcp {
    /**
     * Constructs a new <code>GatewayUpdateProducerGcp</code>.
     * gatewayUpdateProducerGcp is a command that updates a GCP producer
     * @alias module:model/GatewayUpdateProducerGcp
     * @param name {String} Producer name
     * @param serviceAccountType {String} The type of the gcp dynamic secret. Options[fixed, dynamic]
     */
    constructor(name, serviceAccountType) { 
        
        GatewayUpdateProducerGcp.initialize(this, name, serviceAccountType);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, serviceAccountType) { 
        obj['name'] = name;
        obj['service-account-type'] = serviceAccountType;
    }

    /**
     * Constructs a <code>GatewayUpdateProducerGcp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerGcp} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerGcp} The populated <code>GatewayUpdateProducerGcp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerGcp();

            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('gcp-cred-type')) {
                obj['gcp-cred-type'] = ApiClient.convertToType(data['gcp-cred-type'], 'String');
            }
            if (data.hasOwnProperty('gcp-key')) {
                obj['gcp-key'] = ApiClient.convertToType(data['gcp-key'], 'String');
            }
            if (data.hasOwnProperty('gcp-key-algo')) {
                obj['gcp-key-algo'] = ApiClient.convertToType(data['gcp-key-algo'], 'String');
            }
            if (data.hasOwnProperty('gcp-sa-email')) {
                obj['gcp-sa-email'] = ApiClient.convertToType(data['gcp-sa-email'], 'String');
            }
            if (data.hasOwnProperty('gcp-token-scopes')) {
                obj['gcp-token-scopes'] = ApiClient.convertToType(data['gcp-token-scopes'], 'String');
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
            if (data.hasOwnProperty('role-binding')) {
                obj['role-binding'] = ApiClient.convertToType(data['role-binding'], 'String');
            }
            if (data.hasOwnProperty('service-account-type')) {
                obj['service-account-type'] = ApiClient.convertToType(data['service-account-type'], 'String');
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
            if (data.hasOwnProperty('user-ttl')) {
                obj['user-ttl'] = ApiClient.convertToType(data['user-ttl'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
GatewayUpdateProducerGcp.prototype['delete_protection'] = undefined;

/**
 * @member {String} gcp-cred-type
 */
GatewayUpdateProducerGcp.prototype['gcp-cred-type'] = undefined;

/**
 * Base64-encoded service account private key text
 * @member {String} gcp-key
 */
GatewayUpdateProducerGcp.prototype['gcp-key'] = undefined;

/**
 * Service account key algorithm, e.g. KEY_ALG_RSA_1024
 * @member {String} gcp-key-algo
 */
GatewayUpdateProducerGcp.prototype['gcp-key-algo'] = undefined;

/**
 * The email of the fixed service acocunt to generate keys or tokens for. (revelant for service-account-type=fixed)
 * @member {String} gcp-sa-email
 */
GatewayUpdateProducerGcp.prototype['gcp-sa-email'] = undefined;

/**
 * Access token scopes list, e.g. scope1,scope2
 * @member {String} gcp-token-scopes
 */
GatewayUpdateProducerGcp.prototype['gcp-token-scopes'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateProducerGcp.prototype['json'] = false;

/**
 * Producer name
 * @member {String} name
 */
GatewayUpdateProducerGcp.prototype['name'] = undefined;

/**
 * Producer name
 * @member {String} new-name
 */
GatewayUpdateProducerGcp.prototype['new-name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayUpdateProducerGcp.prototype['producer-encryption-key-name'] = undefined;

/**
 * Role binding definitions in json format
 * @member {String} role-binding
 */
GatewayUpdateProducerGcp.prototype['role-binding'] = undefined;

/**
 * The type of the gcp dynamic secret. Options[fixed, dynamic]
 * @member {String} service-account-type
 * @default 'fixed'
 */
GatewayUpdateProducerGcp.prototype['service-account-type'] = 'fixed';

/**
 * List of the tags attached to this secret
 * @member {Array.<String>} tags
 */
GatewayUpdateProducerGcp.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayUpdateProducerGcp.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateProducerGcp.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateProducerGcp.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayUpdateProducerGcp.prototype['user-ttl'] = '60m';






export default GatewayUpdateProducerGcp;

