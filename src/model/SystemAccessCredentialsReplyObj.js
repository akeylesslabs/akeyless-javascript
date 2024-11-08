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
 * The SystemAccessCredentialsReplyObj model module.
 * @module model/SystemAccessCredentialsReplyObj
 * @version 4.3.0
 */
class SystemAccessCredentialsReplyObj {
    /**
     * Constructs a new <code>SystemAccessCredentialsReplyObj</code>.
     * @alias module:model/SystemAccessCredentialsReplyObj
     */
    constructor() { 
        
        SystemAccessCredentialsReplyObj.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SystemAccessCredentialsReplyObj</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SystemAccessCredentialsReplyObj} obj Optional instance to populate.
     * @return {module:model/SystemAccessCredentialsReplyObj} The populated <code>SystemAccessCredentialsReplyObj</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SystemAccessCredentialsReplyObj();

            if (data.hasOwnProperty('auth_creds')) {
                obj['auth_creds'] = ApiClient.convertToType(data['auth_creds'], 'String');
            }
            if (data.hasOwnProperty('expiry')) {
                obj['expiry'] = ApiClient.convertToType(data['expiry'], 'Number');
            }
            if (data.hasOwnProperty('kfm_creds')) {
                obj['kfm_creds'] = ApiClient.convertToType(data['kfm_creds'], 'String');
            }
            if (data.hasOwnProperty('required_mfa')) {
                obj['required_mfa'] = ApiClient.convertToType(data['required_mfa'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uam_creds')) {
                obj['uam_creds'] = ApiClient.convertToType(data['uam_creds'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Temporary credentials for accessing Auth
 * @member {String} auth_creds
 */
SystemAccessCredentialsReplyObj.prototype['auth_creds'] = undefined;

/**
 * Credentials expiration date
 * @member {Number} expiry
 */
SystemAccessCredentialsReplyObj.prototype['expiry'] = undefined;

/**
 * Temporary credentials for accessing the KFMs instances
 * @member {String} kfm_creds
 */
SystemAccessCredentialsReplyObj.prototype['kfm_creds'] = undefined;

/**
 * @member {String} required_mfa
 */
SystemAccessCredentialsReplyObj.prototype['required_mfa'] = undefined;

/**
 * Credentials tmp token
 * @member {String} token
 */
SystemAccessCredentialsReplyObj.prototype['token'] = undefined;

/**
 * Temporary credentials for accessing the UAM service
 * @member {String} uam_creds
 */
SystemAccessCredentialsReplyObj.prototype['uam_creds'] = undefined;






export default SystemAccessCredentialsReplyObj;

