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
import KubeconfigUserExec from './KubeconfigUserExec';

/**
 * The KubeconfigUser model module.
 * @module model/KubeconfigUser
 * @version 5.0.1
 */
class KubeconfigUser {
    /**
     * Constructs a new <code>KubeconfigUser</code>.
     * @alias module:model/KubeconfigUser
     */
    constructor() { 
        
        KubeconfigUser.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KubeconfigUser</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KubeconfigUser} obj Optional instance to populate.
     * @return {module:model/KubeconfigUser} The populated <code>KubeconfigUser</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KubeconfigUser();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('user')) {
                obj['user'] = KubeconfigUserExec.constructFromObject(data['user']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>KubeconfigUser</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>KubeconfigUser</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // validate the optional field `user`
        if (data['user']) { // data not null
          KubeconfigUserExec.validateJSON(data['user']);
        }

        return true;
    }


}



/**
 * @member {String} name
 */
KubeconfigUser.prototype['name'] = undefined;

/**
 * @member {module:model/KubeconfigUserExec} user
 */
KubeconfigUser.prototype['user'] = undefined;






export default KubeconfigUser;

