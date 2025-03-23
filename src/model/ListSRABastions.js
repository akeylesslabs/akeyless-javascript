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
 * The ListSRABastions model module.
 * @module model/ListSRABastions
 * @version 5.0.1
 */
class ListSRABastions {
    /**
     * Constructs a new <code>ListSRABastions</code>.
     * @alias module:model/ListSRABastions
     */
    constructor() { 
        
        ListSRABastions.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['allowed-urls-only'] = false;
        obj['json'] = false;
    }

    /**
     * Constructs a <code>ListSRABastions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListSRABastions} obj Optional instance to populate.
     * @return {module:model/ListSRABastions} The populated <code>ListSRABastions</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListSRABastions();

            if (data.hasOwnProperty('allowed-urls-only')) {
                obj['allowed-urls-only'] = ApiClient.convertToType(data['allowed-urls-only'], 'Boolean');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
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
     * Validates the JSON data with respect to <code>ListSRABastions</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListSRABastions</code>.
     */
    static validateJSON(data) {
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



/**
 * Filter the response to show only bastions allowed URLs
 * @member {Boolean} allowed-urls-only
 * @default false
 */
ListSRABastions.prototype['allowed-urls-only'] = false;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
ListSRABastions.prototype['json'] = false;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
ListSRABastions.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
ListSRABastions.prototype['uid-token'] = undefined;






export default ListSRABastions;

