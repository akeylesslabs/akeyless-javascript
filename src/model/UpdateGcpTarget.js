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
 * The UpdateGcpTarget model module.
 * @module model/UpdateGcpTarget
 * @version 2.5.21
 */
class UpdateGcpTarget {
    /**
     * Constructs a new <code>UpdateGcpTarget</code>.
     * @alias module:model/UpdateGcpTarget
     * @param gcpSaEmail {String} GCP service account email
     * @param name {String} Target name
     */
    constructor(gcpSaEmail, name) { 
        
        UpdateGcpTarget.initialize(this, gcpSaEmail, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, gcpSaEmail, name) { 
        obj['gcp-sa-email'] = gcpSaEmail;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>UpdateGcpTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateGcpTarget} obj Optional instance to populate.
     * @return {module:model/UpdateGcpTarget} The populated <code>UpdateGcpTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateGcpTarget();

            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('gcp-key')) {
                obj['gcp-key'] = ApiClient.convertToType(data['gcp-key'], 'String');
            }
            if (data.hasOwnProperty('gcp-sa-email')) {
                obj['gcp-sa-email'] = ApiClient.convertToType(data['gcp-sa-email'], 'String');
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
 * Comment about the target
 * @member {String} comment
 */
UpdateGcpTarget.prototype['comment'] = undefined;

/**
 * Base64-encoded service account private key text
 * @member {String} gcp-key
 */
UpdateGcpTarget.prototype['gcp-key'] = undefined;

/**
 * GCP service account email
 * @member {String} gcp-sa-email
 */
UpdateGcpTarget.prototype['gcp-sa-email'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
UpdateGcpTarget.prototype['key'] = undefined;

/**
 * Target name
 * @member {String} name
 */
UpdateGcpTarget.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
UpdateGcpTarget.prototype['new-name'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
UpdateGcpTarget.prototype['password'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateGcpTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateGcpTarget.prototype['uid-token'] = undefined;

/**
 * Create new version for the target
 * @member {Boolean} update-version
 * @default false
 */
UpdateGcpTarget.prototype['update-version'] = false;

/**
 * @member {Boolean} use-gw-cloud-identity
 */
UpdateGcpTarget.prototype['use-gw-cloud-identity'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
UpdateGcpTarget.prototype['username'] = undefined;






export default UpdateGcpTarget;

