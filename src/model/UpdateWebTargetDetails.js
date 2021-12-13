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
 * The UpdateWebTargetDetails model module.
 * @module model/UpdateWebTargetDetails
 * @version 2.15.17
 */
class UpdateWebTargetDetails {
    /**
     * Constructs a new <code>UpdateWebTargetDetails</code>.
     * @alias module:model/UpdateWebTargetDetails
     * @param name {String} Target name
     */
    constructor(name) { 
        
        UpdateWebTargetDetails.initialize(this, name);
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
     * Constructs a <code>UpdateWebTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateWebTargetDetails} obj Optional instance to populate.
     * @return {module:model/UpdateWebTargetDetails} The populated <code>UpdateWebTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateWebTargetDetails();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-version')) {
                obj['new-version'] = ApiClient.convertToType(data['new-version'], 'Boolean');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('protection_key')) {
                obj['protection_key'] = ApiClient.convertToType(data['protection_key'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Target name
 * @member {String} name
 */
UpdateWebTargetDetails.prototype['name'] = undefined;

/**
 * Whether to create a new version of not
 * @member {Boolean} new-version
 * @default false
 */
UpdateWebTargetDetails.prototype['new-version'] = false;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
UpdateWebTargetDetails.prototype['password'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} protection_key
 */
UpdateWebTargetDetails.prototype['protection_key'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateWebTargetDetails.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateWebTargetDetails.prototype['uid-token'] = undefined;

/**
 * @member {String} url
 */
UpdateWebTargetDetails.prototype['url'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
UpdateWebTargetDetails.prototype['username'] = undefined;






export default UpdateWebTargetDetails;

