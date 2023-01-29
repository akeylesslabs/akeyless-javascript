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
 * @version 3.2.2
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


}

/**
 * @member {Boolean} allowed-urls-only
 */
ListSRABastions.prototype['allowed-urls-only'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
ListSRABastions.prototype['json'] = undefined;

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

