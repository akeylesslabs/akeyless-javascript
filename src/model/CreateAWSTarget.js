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
 * The CreateAWSTarget model module.
 * @module model/CreateAWSTarget
 * @version 4.2.0
 */
class CreateAWSTarget {
    /**
     * Constructs a new <code>CreateAWSTarget</code>.
     * createAWSTarget is a command that creates a new target. [Deprecated: Use target-create-aws command]
     * @alias module:model/CreateAWSTarget
     * @param accessKey {String} AWS secret access key
     * @param accessKeyId {String} AWS access key ID
     * @param name {String} Target name
     */
    constructor(accessKey, accessKeyId, name) { 
        
        CreateAWSTarget.initialize(this, accessKey, accessKeyId, name);
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
     * Constructs a <code>CreateAWSTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAWSTarget} obj Optional instance to populate.
     * @return {module:model/CreateAWSTarget} The populated <code>CreateAWSTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAWSTarget();

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
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('max-versions')) {
                obj['max-versions'] = ApiClient.convertToType(data['max-versions'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
CreateAWSTarget.prototype['access-key'] = undefined;

/**
 * AWS access key ID
 * @member {String} access-key-id
 */
CreateAWSTarget.prototype['access-key-id'] = undefined;

/**
 * Deprecated - use description
 * @member {String} comment
 */
CreateAWSTarget.prototype['comment'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
CreateAWSTarget.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateAWSTarget.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
CreateAWSTarget.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
CreateAWSTarget.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
CreateAWSTarget.prototype['name'] = undefined;

/**
 * AWS region
 * @member {String} region
 * @default 'us-east-2'
 */
CreateAWSTarget.prototype['region'] = 'us-east-2';

/**
 * Required only for temporary security credentials retrieved using STS
 * @member {String} session-token
 */
CreateAWSTarget.prototype['session-token'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateAWSTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateAWSTarget.prototype['uid-token'] = undefined;

/**
 * Use the GW's Cloud IAM
 * @member {Boolean} use-gw-cloud-identity
 */
CreateAWSTarget.prototype['use-gw-cloud-identity'] = undefined;






export default CreateAWSTarget;

