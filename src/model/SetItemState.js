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
 * The SetItemState model module.
 * @module model/SetItemState
 * @version 5.0.2
 */
class SetItemState {
    /**
     * Constructs a new <code>SetItemState</code>.
     * @alias module:model/SetItemState
     * @param desiredState {String} Desired item state (Enabled, Disabled)
     * @param name {String} Current item name
     */
    constructor(desiredState, name) { 
        
        SetItemState.initialize(this, desiredState, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, desiredState, name) { 
        obj['desired-state'] = desiredState;
        obj['json'] = false;
        obj['name'] = name;
        obj['version'] = 0;
    }

    /**
     * Constructs a <code>SetItemState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SetItemState} obj Optional instance to populate.
     * @return {module:model/SetItemState} The populated <code>SetItemState</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SetItemState();

            if (data.hasOwnProperty('desired-state')) {
                obj['desired-state'] = ApiClient.convertToType(data['desired-state'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SetItemState</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SetItemState</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of SetItemState.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['desired-state'] && !(typeof data['desired-state'] === 'string' || data['desired-state'] instanceof String)) {
            throw new Error("Expected the field `desired-state` to be a primitive type in the JSON string but got " + data['desired-state']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
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

SetItemState.RequiredProperties = ["desired-state", "name"];

/**
 * Desired item state (Enabled, Disabled)
 * @member {String} desired-state
 */
SetItemState.prototype['desired-state'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
SetItemState.prototype['json'] = false;

/**
 * Current item name
 * @member {String} name
 */
SetItemState.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
SetItemState.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
SetItemState.prototype['uid-token'] = undefined;

/**
 * The specific version you want to update: 0=item level state (default) (relevant only for keys)
 * @member {Number} version
 * @default 0
 */
SetItemState.prototype['version'] = 0;






export default SetItemState;

