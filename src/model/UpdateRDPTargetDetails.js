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
 * The UpdateRDPTargetDetails model module.
 * @module model/UpdateRDPTargetDetails
 * @version 2.5.20
 */
class UpdateRDPTargetDetails {
    /**
     * Constructs a new <code>UpdateRDPTargetDetails</code>.
     * @alias module:model/UpdateRDPTargetDetails
     * @param name {String} Target name
     */
    constructor(name) { 
        
        UpdateRDPTargetDetails.initialize(this, name);
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
     * Constructs a <code>UpdateRDPTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateRDPTargetDetails} obj Optional instance to populate.
     * @return {module:model/UpdateRDPTargetDetails} The populated <code>UpdateRDPTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateRDPTargetDetails();

            if (data.hasOwnProperty('admin_name')) {
                obj['admin_name'] = ApiClient.convertToType(data['admin_name'], 'String');
            }
            if (data.hasOwnProperty('admin_pwd')) {
                obj['admin_pwd'] = ApiClient.convertToType(data['admin_pwd'], 'String');
            }
            if (data.hasOwnProperty('host_name')) {
                obj['host_name'] = ApiClient.convertToType(data['host_name'], 'String');
            }
            if (data.hasOwnProperty('host_port')) {
                obj['host_port'] = ApiClient.convertToType(data['host_port'], 'String');
            }
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
            if (data.hasOwnProperty('username')) {
                obj['username'] = ApiClient.convertToType(data['username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} admin_name
 */
UpdateRDPTargetDetails.prototype['admin_name'] = undefined;

/**
 * @member {String} admin_pwd
 */
UpdateRDPTargetDetails.prototype['admin_pwd'] = undefined;

/**
 * @member {String} host_name
 */
UpdateRDPTargetDetails.prototype['host_name'] = undefined;

/**
 * @member {String} host_port
 */
UpdateRDPTargetDetails.prototype['host_port'] = undefined;

/**
 * Target name
 * @member {String} name
 */
UpdateRDPTargetDetails.prototype['name'] = undefined;

/**
 * Whether to create a new version of not
 * @member {Boolean} new-version
 * @default false
 */
UpdateRDPTargetDetails.prototype['new-version'] = false;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} password
 */
UpdateRDPTargetDetails.prototype['password'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} protection_key
 */
UpdateRDPTargetDetails.prototype['protection_key'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateRDPTargetDetails.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateRDPTargetDetails.prototype['uid-token'] = undefined;

/**
 * Required only when the authentication process requires a username and password
 * @member {String} username
 */
UpdateRDPTargetDetails.prototype['username'] = undefined;






export default UpdateRDPTargetDetails;

