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
 * The DynamicSecretUpdateDockerhub model module.
 * @module model/DynamicSecretUpdateDockerhub
 * @version 4.0.0
 */
class DynamicSecretUpdateDockerhub {
    /**
     * Constructs a new <code>DynamicSecretUpdateDockerhub</code>.
     * dynamicSecretUpdateDockerhub is a command that updates a DOCKERHUB dynamic secret
     * @alias module:model/DynamicSecretUpdateDockerhub
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        DynamicSecretUpdateDockerhub.initialize(this, name);
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
     * Constructs a <code>DynamicSecretUpdateDockerhub</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretUpdateDockerhub} obj Optional instance to populate.
     * @return {module:model/DynamicSecretUpdateDockerhub} The populated <code>DynamicSecretUpdateDockerhub</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretUpdateDockerhub();

            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('dockerhub-password')) {
                obj['dockerhub-password'] = ApiClient.convertToType(data['dockerhub-password'], 'String');
            }
            if (data.hasOwnProperty('dockerhub-token-scopes')) {
                obj['dockerhub-token-scopes'] = ApiClient.convertToType(data['dockerhub-token-scopes'], 'String');
            }
            if (data.hasOwnProperty('dockerhub-username')) {
                obj['dockerhub-username'] = ApiClient.convertToType(data['dockerhub-username'], 'String');
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
DynamicSecretUpdateDockerhub.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
DynamicSecretUpdateDockerhub.prototype['description'] = undefined;

/**
 * DockerhubPassword is either the user's password access token to manage the repository
 * @member {String} dockerhub-password
 */
DynamicSecretUpdateDockerhub.prototype['dockerhub-password'] = undefined;

/**
 * Access token scopes list (comma-separated) to give the dynamic secret valid options are in \"repo:admin\", \"repo:write\", \"repo:read\", \"repo:public_read\"
 * @member {String} dockerhub-token-scopes
 */
DynamicSecretUpdateDockerhub.prototype['dockerhub-token-scopes'] = undefined;

/**
 * DockerhubUsername is the name of the user in dockerhub
 * @member {String} dockerhub-username
 */
DynamicSecretUpdateDockerhub.prototype['dockerhub-username'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DynamicSecretUpdateDockerhub.prototype['json'] = false;

/**
 * Dynamic secret name
 * @member {String} name
 */
DynamicSecretUpdateDockerhub.prototype['name'] = undefined;

/**
 * Dynamic secret new name
 * @member {String} new-name
 */
DynamicSecretUpdateDockerhub.prototype['new-name'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
DynamicSecretUpdateDockerhub.prototype['producer-encryption-key-name'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
DynamicSecretUpdateDockerhub.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
DynamicSecretUpdateDockerhub.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DynamicSecretUpdateDockerhub.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DynamicSecretUpdateDockerhub.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
DynamicSecretUpdateDockerhub.prototype['user-ttl'] = '60m';






export default DynamicSecretUpdateDockerhub;

