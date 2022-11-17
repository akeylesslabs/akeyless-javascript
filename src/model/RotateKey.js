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
 * The RotateKey model module.
 * @module model/RotateKey
 * @version 2.20.1
 */
class RotateKey {
    /**
     * Constructs a new <code>RotateKey</code>.
     * of it.
     * @alias module:model/RotateKey
     * @param name {String} Key name
     */
    constructor(name) { 
        
        RotateKey.initialize(this, name);
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
     * Constructs a <code>RotateKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RotateKey} obj Optional instance to populate.
     * @return {module:model/RotateKey} The populated <code>RotateKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RotateKey();

            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-key-data')) {
                obj['new-key-data'] = ApiClient.convertToType(data['new-key-data'], 'String');
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
 * Set output format to JSON
 * @member {Boolean} json
 */
RotateKey.prototype['json'] = undefined;

/**
 * Key name
 * @member {String} name
 */
RotateKey.prototype['name'] = undefined;

/**
 * The new base64 encoded value for the classic key. relevant only for keys provided by user ('bring-your-own-key')
 * @member {String} new-key-data
 */
RotateKey.prototype['new-key-data'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
RotateKey.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
RotateKey.prototype['uid-token'] = undefined;






export default RotateKey;

