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
 * The TargetCreateAws model module.
 * @module model/TargetCreateAws
 * @version 5.0.2
 */
class TargetCreateAws {
    /**
     * Constructs a new <code>TargetCreateAws</code>.
     * @alias module:model/TargetCreateAws
     * @param accessKey {String} AWS secret access key
     * @param accessKeyId {String} AWS access key ID
     * @param name {String} Target name
     */
    constructor(accessKey, accessKeyId, name) { 
        
        TargetCreateAws.initialize(this, accessKey, accessKeyId, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accessKey, accessKeyId, name) { 
        obj['access-key'] = accessKey;
        obj['access-key-id'] = accessKeyId;
        obj['json'] = false;
        obj['name'] = name;
        obj['region'] = 'us-east-2';
    }

    /**
     * Constructs a <code>TargetCreateAws</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetCreateAws} obj Optional instance to populate.
     * @return {module:model/TargetCreateAws} The populated <code>TargetCreateAws</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetCreateAws();

            if (data.hasOwnProperty('access-key')) {
                obj['access-key'] = ApiClient.convertToType(data['access-key'], 'String');
            }
            if (data.hasOwnProperty('access-key-id')) {
                obj['access-key-id'] = ApiClient.convertToType(data['access-key-id'], 'String');
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

    /**
     * Validates the JSON data with respect to <code>TargetCreateAws</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>TargetCreateAws</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of TargetCreateAws.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['access-key'] && !(typeof data['access-key'] === 'string' || data['access-key'] instanceof String)) {
            throw new Error("Expected the field `access-key` to be a primitive type in the JSON string but got " + data['access-key']);
        }
        // ensure the json data is a string
        if (data['access-key-id'] && !(typeof data['access-key-id'] === 'string' || data['access-key-id'] instanceof String)) {
            throw new Error("Expected the field `access-key-id` to be a primitive type in the JSON string but got " + data['access-key-id']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['key'] && !(typeof data['key'] === 'string' || data['key'] instanceof String)) {
            throw new Error("Expected the field `key` to be a primitive type in the JSON string but got " + data['key']);
        }
        // ensure the json data is a string
        if (data['max-versions'] && !(typeof data['max-versions'] === 'string' || data['max-versions'] instanceof String)) {
            throw new Error("Expected the field `max-versions` to be a primitive type in the JSON string but got " + data['max-versions']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['region'] && !(typeof data['region'] === 'string' || data['region'] instanceof String)) {
            throw new Error("Expected the field `region` to be a primitive type in the JSON string but got " + data['region']);
        }
        // ensure the json data is a string
        if (data['session-token'] && !(typeof data['session-token'] === 'string' || data['session-token'] instanceof String)) {
            throw new Error("Expected the field `session-token` to be a primitive type in the JSON string but got " + data['session-token']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
    }


}

TargetCreateAws.RequiredProperties = ["access-key", "access-key-id", "name"];

/**
 * AWS secret access key
 * @member {String} access-key
 */
TargetCreateAws.prototype['access-key'] = undefined;

/**
 * AWS access key ID
 * @member {String} access-key-id
 */
TargetCreateAws.prototype['access-key-id'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
TargetCreateAws.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
TargetCreateAws.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
TargetCreateAws.prototype['key'] = undefined;

/**
 * Set the maximum number of versions, limited by the account settings defaults.
 * @member {String} max-versions
 */
TargetCreateAws.prototype['max-versions'] = undefined;

/**
 * Target name
 * @member {String} name
 */
TargetCreateAws.prototype['name'] = undefined;

/**
 * AWS region
 * @member {String} region
 * @default 'us-east-2'
 */
TargetCreateAws.prototype['region'] = 'us-east-2';

/**
 * Required only for temporary security credentials retrieved using STS
 * @member {String} session-token
 */
TargetCreateAws.prototype['session-token'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
TargetCreateAws.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
TargetCreateAws.prototype['uid-token'] = undefined;

/**
 * Use the GW's Cloud IAM
 * @member {Boolean} use-gw-cloud-identity
 */
TargetCreateAws.prototype['use-gw-cloud-identity'] = undefined;






export default TargetCreateAws;

