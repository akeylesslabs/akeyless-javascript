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
 * The DynamicSecretCreateGcp model module.
 * @module model/DynamicSecretCreateGcp
 * @version 4.3.0
 */
class DynamicSecretCreateGcp {
    /**
     * Constructs a new <code>DynamicSecretCreateGcp</code>.
     * dynamicSecretCreateGcp is a command that creates a GCP dynamic secret
     * @alias module:model/DynamicSecretCreateGcp
     * @param name {String} Dynamic secret name
     * @param serviceAccountType {String} The type of the gcp dynamic secret. Options[fixed, dynamic]
     */
    constructor(name, serviceAccountType) { 
        
        DynamicSecretCreateGcp.initialize(this, name, serviceAccountType);
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
     * Constructs a <code>DynamicSecretCreateGcp</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretCreateGcp} obj Optional instance to populate.
     * @return {module:model/DynamicSecretCreateGcp} The populated <code>DynamicSecretCreateGcp</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretCreateGcp();

            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
DynamicSecretCreateGcp.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
DynamicSecretCreateGcp.prototype['description'] = undefined;

/**
 * @member {String} gcp-cred-type
 */
DynamicSecretCreateGcp.prototype['gcp-cred-type'] = undefined;

/**
 * Base64-encoded service account private key text
 * @member {String} gcp-key
 */
DynamicSecretCreateGcp.prototype['gcp-key'] = undefined;

/**
 * Service account key algorithm, e.g. KEY_ALG_RSA_1024
 * @member {String} gcp-key-algo
 */
DynamicSecretCreateGcp.prototype['gcp-key-algo'] = undefined;

/**
 * The email of the fixed service acocunt to generate keys or tokens for. (revelant for service-account-type=fixed)
 * @member {String} gcp-sa-email
 */
DynamicSecretCreateGcp.prototype['gcp-sa-email'] = undefined;

/**
 * Access token scopes list, e.g. scope1,scope2
 * @member {String} gcp-token-scopes
 */
DynamicSecretCreateGcp.prototype['gcp-token-scopes'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DynamicSecretCreateGcp.prototype['json'] = false;

/**
 * Dynamic secret name
 * @member {String} name
 */
DynamicSecretCreateGcp.prototype['name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
DynamicSecretCreateGcp.prototype['producer-encryption-key-name'] = undefined;

/**
 * Role binding definitions in json format
 * @member {String} role-binding
 */
DynamicSecretCreateGcp.prototype['role-binding'] = undefined;

/**
 * The type of the gcp dynamic secret. Options[fixed, dynamic]
 * @member {String} service-account-type
 * @default 'fixed'
 */
DynamicSecretCreateGcp.prototype['service-account-type'] = 'fixed';

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
DynamicSecretCreateGcp.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
DynamicSecretCreateGcp.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DynamicSecretCreateGcp.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DynamicSecretCreateGcp.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
DynamicSecretCreateGcp.prototype['user-ttl'] = '60m';






export default DynamicSecretCreateGcp;

