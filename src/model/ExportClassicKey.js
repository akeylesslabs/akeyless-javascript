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
 * The ExportClassicKey model module.
 * @module model/ExportClassicKey
 * @version 3.6.0
 */
class ExportClassicKey {
    /**
     * Constructs a new <code>ExportClassicKey</code>.
     * ExportClassicKey is a command that returns the classic key material
     * @alias module:model/ExportClassicKey
     * @param name {String} ClassicKey name
     */
    constructor(name) { 
        
        ExportClassicKey.initialize(this, name);
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
     * Constructs a <code>ExportClassicKey</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExportClassicKey} obj Optional instance to populate.
     * @return {module:model/ExportClassicKey} The populated <code>ExportClassicKey</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ExportClassicKey();

            if (data.hasOwnProperty('export-public-key')) {
                obj['export-public-key'] = ApiClient.convertToType(data['export-public-key'], 'Boolean');
            }
            if (data.hasOwnProperty('ignore-cache')) {
                obj['ignore-cache'] = ApiClient.convertToType(data['ignore-cache'], 'String');
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
 * Use this option to output only public key
 * @member {Boolean} export-public-key
 * @default false
 */
ExportClassicKey.prototype['export-public-key'] = false;

/**
 * Retrieve the Secret value without checking the Gateway's cache [true/false]. This flag is only relevant when using the RestAPI
 * @member {String} ignore-cache
 * @default 'false'
 */
ExportClassicKey.prototype['ignore-cache'] = 'false';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
ExportClassicKey.prototype['json'] = false;

/**
 * ClassicKey name
 * @member {String} name
 */
ExportClassicKey.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
ExportClassicKey.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
ExportClassicKey.prototype['uid-token'] = undefined;

/**
 * Classic key version
 * @member {Number} version
 */
ExportClassicKey.prototype['version'] = undefined;






export default ExportClassicKey;

