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
 * The CreateDynamicSecret model module.
 * @module model/CreateDynamicSecret
 * @version 3.5.2
 */
class CreateDynamicSecret {
    /**
     * Constructs a new <code>CreateDynamicSecret</code>.
     * @alias module:model/CreateDynamicSecret
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        CreateDynamicSecret.initialize(this, name);
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
     * Constructs a <code>CreateDynamicSecret</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateDynamicSecret} obj Optional instance to populate.
     * @return {module:model/CreateDynamicSecret} The populated <code>CreateDynamicSecret</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateDynamicSecret();

            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
            }
            if (data.hasOwnProperty('metadata')) {
                obj['metadata'] = ApiClient.convertToType(data['metadata'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
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
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
CreateDynamicSecret.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
CreateDynamicSecret.prototype['description'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateDynamicSecret.prototype['json'] = false;

/**
 * The name of a key that used to encrypt the dynamic secret values (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
CreateDynamicSecret.prototype['key'] = undefined;

/**
 * Deprecated - use description
 * @member {String} metadata
 */
CreateDynamicSecret.prototype['metadata'] = undefined;

/**
 * Dynamic secret name
 * @member {String} name
 */
CreateDynamicSecret.prototype['name'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
CreateDynamicSecret.prototype['tags'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateDynamicSecret.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateDynamicSecret.prototype['uid-token'] = undefined;






export default CreateDynamicSecret;

