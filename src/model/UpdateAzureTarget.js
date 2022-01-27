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
 * The UpdateAzureTarget model module.
 * @module model/UpdateAzureTarget
 * @version 2.15.25
 */
class UpdateAzureTarget {
    /**
     * Constructs a new <code>UpdateAzureTarget</code>.
     * @alias module:model/UpdateAzureTarget
     * @param name {String} Target name
     */
    constructor(name) { 
        
        UpdateAzureTarget.initialize(this, name);
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
     * Constructs a <code>UpdateAzureTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAzureTarget} obj Optional instance to populate.
     * @return {module:model/UpdateAzureTarget} The populated <code>UpdateAzureTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAzureTarget();

            if (data.hasOwnProperty('client-id')) {
                obj['client-id'] = ApiClient.convertToType(data['client-id'], 'String');
            }
            if (data.hasOwnProperty('client-secret')) {
                obj['client-secret'] = ApiClient.convertToType(data['client-secret'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('tenant-id')) {
                obj['tenant-id'] = ApiClient.convertToType(data['tenant-id'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('update-version')) {
                obj['update-version'] = ApiClient.convertToType(data['update-version'], 'Boolean');
            }
            if (data.hasOwnProperty('use-gw-cloud-identity')) {
                obj['use-gw-cloud-identity'] = ApiClient.convertToType(data['use-gw-cloud-identity'], 'Boolean');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} client-id
 */
UpdateAzureTarget.prototype['client-id'] = undefined;

/**
 * @member {String} client-secret
 */
UpdateAzureTarget.prototype['client-secret'] = undefined;

/**
 * Comment about the target
 * @member {String} comment
 */
UpdateAzureTarget.prototype['comment'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
UpdateAzureTarget.prototype['key'] = undefined;

/**
 * Target name
 * @member {String} name
 */
UpdateAzureTarget.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
UpdateAzureTarget.prototype['new-name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
UpdateAzureTarget.prototype['password'] = undefined;

/**
 * @member {String} tenant-id
 */
UpdateAzureTarget.prototype['tenant-id'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateAzureTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateAzureTarget.prototype['uid-token'] = undefined;

/**
 * Create new version for the target
 * @member {Boolean} update-version
 * @default false
 */
UpdateAzureTarget.prototype['update-version'] = false;

/**
 * @member {Boolean} use-gw-cloud-identity
 */
UpdateAzureTarget.prototype['use-gw-cloud-identity'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
UpdateAzureTarget.prototype['username'] = undefined;






export default UpdateAzureTarget;

