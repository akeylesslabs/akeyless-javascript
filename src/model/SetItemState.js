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
 * @version 2.20.3
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
        obj['name'] = name;
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


}

/**
 * Desired item state (Enabled, Disabled)
 * @member {String} desired-state
 */
SetItemState.prototype['desired-state'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
SetItemState.prototype['json'] = undefined;

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
 * The specific version you want to update: 0=item level state (default)
 * @member {Number} version
 * @default 0
 */
SetItemState.prototype['version'] = 0;






export default SetItemState;

