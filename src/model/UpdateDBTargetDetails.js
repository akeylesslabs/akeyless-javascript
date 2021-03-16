/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UpdateDBTargetDetails model module.
 * @module model/UpdateDBTargetDetails
 * @version 1.0
 */
class UpdateDBTargetDetails {
    /**
     * Constructs a new <code>UpdateDBTargetDetails</code>.
     * @alias module:model/UpdateDBTargetDetails
     * @param name {String} Target name
     */
    constructor(name) { 
        
        UpdateDBTargetDetails.initialize(this, name);
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
     * Constructs a <code>UpdateDBTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateDBTargetDetails} obj Optional instance to populate.
     * @return {module:model/UpdateDBTargetDetails} The populated <code>UpdateDBTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateDBTargetDetails();

            if (data.hasOwnProperty('db_type')) {
                obj['db_type'] = ApiClient.convertToType(data['db_type'], 'String');
            }
            if (data.hasOwnProperty('host_name')) {
                obj['host_name'] = ApiClient.convertToType(data['host_name'], 'String');
            }
            if (data.hasOwnProperty('mongo_db_name')) {
                obj['mongo_db_name'] = ApiClient.convertToType(data['mongo_db_name'], 'String');
            }
            if (data.hasOwnProperty('mongo_uri')) {
                obj['mongo_uri'] = ApiClient.convertToType(data['mongo_uri'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('port')) {
                obj['port'] = ApiClient.convertToType(data['port'], 'String');
            }
            if (data.hasOwnProperty('protection_key')) {
                obj['protection_key'] = ApiClient.convertToType(data['protection_key'], 'String');
            }
            if (data.hasOwnProperty('pwd')) {
                obj['pwd'] = ApiClient.convertToType(data['pwd'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('user_name')) {
                obj['user_name'] = ApiClient.convertToType(data['user_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} db_type
 */
UpdateDBTargetDetails.prototype['db_type'] = undefined;

/**
 * @member {String} host_name
 */
UpdateDBTargetDetails.prototype['host_name'] = undefined;

/**
 * @member {String} mongo_db_name
 */
UpdateDBTargetDetails.prototype['mongo_db_name'] = undefined;

/**
 * @member {String} mongo_uri
 */
UpdateDBTargetDetails.prototype['mongo_uri'] = undefined;

/**
 * Target name
 * @member {String} name
 */
UpdateDBTargetDetails.prototype['name'] = undefined;

/**
 * @member {String} port
 */
UpdateDBTargetDetails.prototype['port'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} protection_key
 */
UpdateDBTargetDetails.prototype['protection_key'] = undefined;

/**
 * @member {String} pwd
 */
UpdateDBTargetDetails.prototype['pwd'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateDBTargetDetails.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateDBTargetDetails.prototype['uid-token'] = undefined;

/**
 * @member {String} user_name
 */
UpdateDBTargetDetails.prototype['user_name'] = undefined;






export default UpdateDBTargetDetails;

