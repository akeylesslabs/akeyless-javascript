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
 * The ImportPasswords model module.
 * @module model/ImportPasswords
 * @version 3.3.17
 */
class ImportPasswords {
    /**
     * Constructs a new <code>ImportPasswords</code>.
     * importPasswords is a command that import passwords
     * @alias module:model/ImportPasswords
     * @param importPath {String} File path
     */
    constructor(importPath) { 
        
        ImportPasswords.initialize(this, importPath);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, importPath) { 
        obj['import-path'] = importPath;
    }

    /**
     * Constructs a <code>ImportPasswords</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImportPasswords} obj Optional instance to populate.
     * @return {module:model/ImportPasswords} The populated <code>ImportPasswords</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ImportPasswords();

            if (data.hasOwnProperty('accessibility')) {
                obj['accessibility'] = ApiClient.convertToType(data['accessibility'], 'String');
            }
            if (data.hasOwnProperty('format')) {
                obj['format'] = ApiClient.convertToType(data['format'], 'String');
            }
            if (data.hasOwnProperty('import-path')) {
                obj['import-path'] = ApiClient.convertToType(data['import-path'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('protection_key')) {
                obj['protection_key'] = ApiClient.convertToType(data['protection_key'], 'String');
            }
            if (data.hasOwnProperty('target-folder')) {
                obj['target-folder'] = ApiClient.convertToType(data['target-folder'], 'String');
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
 * for personal password manager
 * @member {String} accessibility
 * @default 'personal'
 */
ImportPasswords.prototype['accessibility'] = 'personal';

/**
 * Password format type [LastPass/Chrome/Firefox]
 * @member {String} format
 * @default 'LastPass'
 */
ImportPasswords.prototype['format'] = 'LastPass';

/**
 * File path
 * @member {String} import-path
 */
ImportPasswords.prototype['import-path'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
ImportPasswords.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the secret value (if empty, the account default protectionKey key will be used)
 * @member {String} protection_key
 */
ImportPasswords.prototype['protection_key'] = undefined;

/**
 * Target folder for imported passwords
 * @member {String} target-folder
 * @default '/'
 */
ImportPasswords.prototype['target-folder'] = '/';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
ImportPasswords.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
ImportPasswords.prototype['uid-token'] = undefined;






export default ImportPasswords;

