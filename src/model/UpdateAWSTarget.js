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
 * The UpdateAWSTarget model module.
 * @module model/UpdateAWSTarget
 * @version 3.2.8
 */
class UpdateAWSTarget {
    /**
     * Constructs a new <code>UpdateAWSTarget</code>.
     * @alias module:model/UpdateAWSTarget
     * @param accessKey {String} AWS secret access key
     * @param accessKeyId {String} AWS access key ID
     * @param name {String} Target name
     */
    constructor(accessKey, accessKeyId, name) { 
        
        UpdateAWSTarget.initialize(this, accessKey, accessKeyId, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accessKey, accessKeyId, name) { 
        obj['access-key'] = accessKey;
        obj['access-key-id'] = accessKeyId;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>UpdateAWSTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAWSTarget} obj Optional instance to populate.
     * @return {module:model/UpdateAWSTarget} The populated <code>UpdateAWSTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAWSTarget();

            if (data.hasOwnProperty('access-key')) {
                obj['access-key'] = ApiClient.convertToType(data['access-key'], 'String');
            }
            if (data.hasOwnProperty('access-key-id')) {
                obj['access-key-id'] = ApiClient.convertToType(data['access-key-id'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('keep-prev-version')) {
                obj['keep-prev-version'] = ApiClient.convertToType(data['keep-prev-version'], 'String');
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
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('session-token')) {
                obj['session-token'] = ApiClient.convertToType(data['session-token'], 'String');
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
        }
        return obj;
    }


}

/**
 * AWS secret access key
 * @member {String} access-key
 */
UpdateAWSTarget.prototype['access-key'] = undefined;

/**
 * AWS access key ID
 * @member {String} access-key-id
 */
UpdateAWSTarget.prototype['access-key-id'] = undefined;

/**
 * Deprecated - use description
 * @member {String} comment
 */
UpdateAWSTarget.prototype['comment'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
UpdateAWSTarget.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateAWSTarget.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
UpdateAWSTarget.prototype['keep-prev-version'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
UpdateAWSTarget.prototype['key'] = undefined;

/**
 * Target name
 * @member {String} name
 */
UpdateAWSTarget.prototype['name'] = undefined;

/**
 * New target name
 * @member {String} new-name
 */
UpdateAWSTarget.prototype['new-name'] = undefined;

/**
 * AWS region
 * @member {String} region
 * @default 'us-east-2'
 */
UpdateAWSTarget.prototype['region'] = 'us-east-2';

/**
 * Required only for temporary security credentials retrieved using STS
 * @member {String} session-token
 */
UpdateAWSTarget.prototype['session-token'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateAWSTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateAWSTarget.prototype['uid-token'] = undefined;

/**
 * Deprecated
 * @member {Boolean} update-version
 */
UpdateAWSTarget.prototype['update-version'] = undefined;

/**
 * Use the GW's Cloud IAM
 * @member {Boolean} use-gw-cloud-identity
 */
UpdateAWSTarget.prototype['use-gw-cloud-identity'] = undefined;






export default UpdateAWSTarget;

