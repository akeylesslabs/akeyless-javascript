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
 * The CreateRdpTarget model module.
 * @module model/CreateRdpTarget
 * @version 2.0.13
 */
class CreateRdpTarget {
    /**
     * Constructs a new <code>CreateRdpTarget</code>.
     * @alias module:model/CreateRdpTarget
     * @param name {String} Target name
     */
    constructor(name) { 
        
        CreateRdpTarget.initialize(this, name);
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
     * Constructs a <code>CreateRdpTarget</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRdpTarget} obj Optional instance to populate.
     * @return {module:model/CreateRdpTarget} The populated <code>CreateRdpTarget</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRdpTarget();

            if (data.hasOwnProperty('admin_name')) {
                obj['admin_name'] = ApiClient.convertToType(data['admin_name'], 'String');
            }
            if (data.hasOwnProperty('admin_pwd')) {
                obj['admin_pwd'] = ApiClient.convertToType(data['admin_pwd'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('host_name')) {
                obj['host_name'] = ApiClient.convertToType(data['host_name'], 'String');
            }
            if (data.hasOwnProperty('host_port')) {
                obj['host_port'] = ApiClient.convertToType(data['host_port'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('protection_key')) {
                obj['protection_key'] = ApiClient.convertToType(data['protection_key'], 'String');
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
 * @member {String} admin_name
 */
CreateRdpTarget.prototype['admin_name'] = undefined;

/**
 * @member {String} admin_pwd
 */
CreateRdpTarget.prototype['admin_pwd'] = undefined;

/**
 * Comment about the target
 * @member {String} comment
 */
CreateRdpTarget.prototype['comment'] = undefined;

/**
 * @member {String} host_name
 */
CreateRdpTarget.prototype['host_name'] = undefined;

/**
 * @member {String} host_port
 */
CreateRdpTarget.prototype['host_port'] = undefined;

/**
 * Target name
 * @member {String} name
 */
CreateRdpTarget.prototype['name'] = undefined;

/**
 * The name of a key that used to encrypt the target secret value (if empty, the account default protectionKey key will be used)
 * @member {String} protection_key
 */
CreateRdpTarget.prototype['protection_key'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateRdpTarget.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateRdpTarget.prototype['uid-token'] = undefined;






export default CreateRdpTarget;

