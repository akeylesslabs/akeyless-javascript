/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
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
 * @version 5.0.0
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
        obj['host-port'] = '22';
        obj['json'] = false;
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

            if (data.hasOwnProperty('admin-name')) {
                obj['admin-name'] = ApiClient.convertToType(data['admin-name'], 'String');
            }
            if (data.hasOwnProperty('admin-pwd')) {
                obj['admin-pwd'] = ApiClient.convertToType(data['admin-pwd'], 'String');
            }
            if (data.hasOwnProperty('host-name')) {
                obj['host-name'] = ApiClient.convertToType(data['host-name'], 'String');
            }
            if (data.hasOwnProperty('host-port')) {
                obj['host-port'] = ApiClient.convertToType(data['host-port'], 'String');
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
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UpdateRDPTargetDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateRDPTargetDetails</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateRDPTargetDetails.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['admin-name'] && !(typeof data['admin-name'] === 'string' || data['admin-name'] instanceof String)) {
            throw new Error("Expected the field `admin-name` to be a primitive type in the JSON string but got " + data['admin-name']);
        }
        // ensure the json data is a string
        if (data['admin-pwd'] && !(typeof data['admin-pwd'] === 'string' || data['admin-pwd'] instanceof String)) {
            throw new Error("Expected the field `admin-pwd` to be a primitive type in the JSON string but got " + data['admin-pwd']);
        }
        // ensure the json data is a string
        if (data['host-name'] && !(typeof data['host-name'] === 'string' || data['host-name'] instanceof String)) {
            throw new Error("Expected the field `host-name` to be a primitive type in the JSON string but got " + data['host-name']);
        }
        // ensure the json data is a string
        if (data['host-port'] && !(typeof data['host-port'] === 'string' || data['host-port'] instanceof String)) {
            throw new Error("Expected the field `host-port` to be a primitive type in the JSON string but got " + data['host-port']);
        }
        // ensure the json data is a string
        if (data['keep-prev-version'] && !(typeof data['keep-prev-version'] === 'string' || data['keep-prev-version'] instanceof String)) {
            throw new Error("Expected the field `keep-prev-version` to be a primitive type in the JSON string but got " + data['keep-prev-version']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['protection_key'] && !(typeof data['protection_key'] === 'string' || data['protection_key'] instanceof String)) {
            throw new Error("Expected the field `protection_key` to be a primitive type in the JSON string but got " + data['protection_key']);
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

UpdateRDPTargetDetails.RequiredProperties = ["name"];

/**
 * The admin name
 * @member {String} admin-name
 */
UpdateRDPTargetDetails.prototype['admin-name'] = undefined;

/**
 * The admin password
 * @member {String} admin-pwd
 */
UpdateRDPTargetDetails.prototype['admin-pwd'] = undefined;

/**
 * The rdp host name
 * @member {String} host-name
 */
UpdateRDPTargetDetails.prototype['host-name'] = undefined;

/**
 * The rdp port
 * @member {String} host-port
 * @default '22'
 */
UpdateRDPTargetDetails.prototype['host-port'] = '22';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateRDPTargetDetails.prototype['json'] = false;

/**
 * Whether to keep previous version [true/false]. If not set, use default according to account settings
 * @member {String} keep-prev-version
 */
UpdateRDPTargetDetails.prototype['keep-prev-version'] = undefined;

/**
 * Target name
 * @member {String} name
 */
UpdateRDPTargetDetails.prototype['name'] = undefined;

/**
 * Deprecated
 * @member {Boolean} new-version
 */
UpdateRDPTargetDetails.prototype['new-version'] = undefined;

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






export default UpdateRDPTargetDetails;

