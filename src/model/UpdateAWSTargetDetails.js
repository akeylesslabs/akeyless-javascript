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
 * The UpdateAWSTargetDetails model module.
 * @module model/UpdateAWSTargetDetails
 * @version 4.0.0
 */
class UpdateAWSTargetDetails {
    /**
     * Constructs a new <code>UpdateAWSTargetDetails</code>.
     * @alias module:model/UpdateAWSTargetDetails
     * @param name {String} Target name
     */
    constructor(name) { 
        
        UpdateAWSTargetDetails.initialize(this, name);
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
     * Constructs a <code>UpdateAWSTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAWSTargetDetails} obj Optional instance to populate.
     * @return {module:model/UpdateAWSTargetDetails} The populated <code>UpdateAWSTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAWSTargetDetails();

            if (data.hasOwnProperty('access-key')) {
                obj['access-key'] = ApiClient.convertToType(data['access-key'], 'String');
            }
            if (data.hasOwnProperty('access-key-id')) {
                obj['access-key-id'] = ApiClient.convertToType(data['access-key-id'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('keep-prev-version')) {
                obj['keep-prev-version'] = ApiClient.convertToType(data['keep-prev-version'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-version')) {
                obj['new-version'] = ApiClient.convertToType(data['new-version'], 'Boolean');
            }
            if (data.hasOwnProperty('protection_key')) {
                obj['protection_key'] = ApiClient.convertToType(data['protection_key'], 'String');
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
        }
        return obj;
    }


}

/**
 * The aws secret access key
 * @member {String} access-key
 */
UpdateAWSTargetDetails.prototype['access-key'] = undefined;

/**
 * The aws access key id
 * @member {String} access-key-id
 */
UpdateAWSTargetDetails.prototype['access-key-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateAWSTargetDetails.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
UpdateAWSTargetDetails.prototype['keep-prev-version'] = undefined;

/**
 * Target name
 * @member {String} name
 */
UpdateAWSTargetDetails.prototype['name'] = undefined;

/**
 * Deprecated
 * @member {Boolean} new-version
 */
UpdateAWSTargetDetails.prototype['new-version'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} protection_key
 */
UpdateAWSTargetDetails.prototype['protection_key'] = undefined;

/**
 * The aws region
 * @member {String} region
 * @default 'us-east-2'
 */
UpdateAWSTargetDetails.prototype['region'] = 'us-east-2';

/**
 * Required only for temporary security credentials retrieved via STS, otherwise it can be an empty string
 * @member {String} session-token
 */
UpdateAWSTargetDetails.prototype['session-token'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateAWSTargetDetails.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateAWSTargetDetails.prototype['uid-token'] = undefined;






export default UpdateAWSTargetDetails;

