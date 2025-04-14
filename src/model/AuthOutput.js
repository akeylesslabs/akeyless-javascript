/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import SystemAccessCredentialsReplyObj from './SystemAccessCredentialsReplyObj';

/**
 * The AuthOutput model module.
 * @module model/AuthOutput
 * @version 5.0.3
 */
class AuthOutput {
    /**
     * Constructs a new <code>AuthOutput</code>.
     * @alias module:model/AuthOutput
     */
    constructor() { 
        
        AuthOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthOutput} obj Optional instance to populate.
     * @return {module:model/AuthOutput} The populated <code>AuthOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthOutput();

            if (data.hasOwnProperty('complete_auth_link')) {
                obj['complete_auth_link'] = ApiClient.convertToType(data['complete_auth_link'], 'String');
            }
            if (data.hasOwnProperty('creds')) {
                obj['creds'] = SystemAccessCredentialsReplyObj.constructFromObject(data['creds']);
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>AuthOutput</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>AuthOutput</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['complete_auth_link'] && !(typeof data['complete_auth_link'] === 'string' || data['complete_auth_link'] instanceof String)) {
            throw new Error("Expected the field `complete_auth_link` to be a primitive type in the JSON string but got " + data['complete_auth_link']);
        }
        // validate the optional field `creds`
        if (data['creds']) { // data not null
          SystemAccessCredentialsReplyObj.validateJSON(data['creds']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }

        return true;
    }


}



/**
 * @member {String} complete_auth_link
 */
AuthOutput.prototype['complete_auth_link'] = undefined;

/**
 * @member {module:model/SystemAccessCredentialsReplyObj} creds
 */
AuthOutput.prototype['creds'] = undefined;

/**
 * @member {String} token
 */
AuthOutput.prototype['token'] = undefined;






export default AuthOutput;

