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
 * The CreateDockerhubTarget model module.
 * @module model/CreateDockerhubTarget
 * @version 3.0.0
 */
class CreateDockerhubTarget {
    /**
     * Constructs a new <code>CreateDockerhubTarget</code>.
     * @alias module:model/CreateDockerhubTarget
     * @param name {String} Target name
     */
    constructor(name) { 
        
        CreateDockerhubTarget.initialize(this, name);
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
     * Constructs a <code>CreateDockerhubTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateDockerhubTarget} obj Optional instance to populate.
     * @return {module:model/CreateDockerhubTarget} The populated <code>CreateDockerhubTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateDockerhubTarget();

            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('dockerhub-password')) {
                obj['dockerhub-password'] = ApiClient.convertToType(data['dockerhub-password'], 'String');
            }
            if (data.hasOwnProperty('dockerhub-username')) {
                obj['dockerhub-username'] = ApiClient.convertToType(data['dockerhub-username'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('key')) {
                obj['key'] = ApiClient.convertToType(data['key'], 'String');
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
        }
        return obj;
    }


}

/**
 * Comment about the target
 * @member {String} comment
 */
CreateDockerhubTarget.prototype['comment'] = undefined;

/**
 * DockerhubPassword is either the user's password to manage the repository
 * @member {String} dockerhub-password
 */
CreateDockerhubTarget.prototype['dockerhub-password'] = undefined;

/**
 * DockerhubUsername is the name of the user in dockerhub
 * @member {String} dockerhub-username
 */
CreateDockerhubTarget.prototype['dockerhub-username'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
CreateDockerhubTarget.prototype['json'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} key
 */
CreateDockerhubTarget.prototype['key'] = undefined;

/**
 * Target name
 * @member {String} name
 */
CreateDockerhubTarget.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateDockerhubTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateDockerhubTarget.prototype['uid-token'] = undefined;






export default CreateDockerhubTarget;

