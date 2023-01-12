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
 * The DecryptFile model module.
 * @module model/DecryptFile
 * @version 3.1.1
 */
class DecryptFile {
    /**
     * Constructs a new <code>DecryptFile</code>.
     * @alias module:model/DecryptFile
     * @param keyName {String} The name of the key to use in the decryption process
     */
    constructor(keyName) { 
        
        DecryptFile.initialize(this, keyName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, keyName) { 
        obj['key-name'] = keyName;
    }

    /**
     * Constructs a <code>DecryptFile</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DecryptFile} obj Optional instance to populate.
     * @return {module:model/DecryptFile} The populated <code>DecryptFile</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DecryptFile();

            if (data.hasOwnProperty('display-id')) {
                obj['display-id'] = ApiClient.convertToType(data['display-id'], 'String');
            }
            if (data.hasOwnProperty('item-id')) {
                obj['item-id'] = ApiClient.convertToType(data['item-id'], 'Number');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('key-name')) {
                obj['key-name'] = ApiClient.convertToType(data['key-name'], 'String');
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
 * The display id of the key to use in the decryption process
 * @member {String} display-id
 */
DecryptFile.prototype['display-id'] = undefined;

/**
 * The item id of the key to use in the decryption process
 * @member {Number} item-id
 */
DecryptFile.prototype['item-id'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
DecryptFile.prototype['json'] = undefined;

/**
 * The name of the key to use in the decryption process
 * @member {String} key-name
 */
DecryptFile.prototype['key-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DecryptFile.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DecryptFile.prototype['uid-token'] = undefined;






export default DecryptFile;

