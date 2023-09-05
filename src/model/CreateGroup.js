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
 * The CreateGroup model module.
 * @module model/CreateGroup
 * @version 3.3.17
 */
class CreateGroup {
    /**
     * Constructs a new <code>CreateGroup</code>.
     * @alias module:model/CreateGroup
     * @param groupAlias {String} A short group alias
     * @param name {String} Group name
     */
    constructor(groupAlias, name) { 
        
        CreateGroup.initialize(this, groupAlias, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, groupAlias, name) { 
        obj['group-alias'] = groupAlias;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateGroup</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateGroup} obj Optional instance to populate.
     * @return {module:model/CreateGroup} The populated <code>CreateGroup</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateGroup();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('group-alias')) {
                obj['group-alias'] = ApiClient.convertToType(data['group-alias'], 'String');
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
            if (data.hasOwnProperty('user-assignment')) {
                obj['user-assignment'] = ApiClient.convertToType(data['user-assignment'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Description of the object
 * @member {String} description
 */
CreateGroup.prototype['description'] = undefined;

/**
 * A short group alias
 * @member {String} group-alias
 */
CreateGroup.prototype['group-alias'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
CreateGroup.prototype['json'] = false;

/**
 * Group name
 * @member {String} name
 */
CreateGroup.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateGroup.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateGroup.prototype['uid-token'] = undefined;

/**
 * A json string defining the access permission assignment for this client
 * @member {String} user-assignment
 */
CreateGroup.prototype['user-assignment'] = undefined;






export default CreateGroup;

