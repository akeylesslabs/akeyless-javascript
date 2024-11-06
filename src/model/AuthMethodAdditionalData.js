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
import KerberosAuthMethodInfo from './KerberosAuthMethodInfo';

/**
 * The AuthMethodAdditionalData model module.
 * @module model/AuthMethodAdditionalData
 * @version 4.3.0
 */
class AuthMethodAdditionalData {
    /**
     * Constructs a new <code>AuthMethodAdditionalData</code>.
     * @alias module:model/AuthMethodAdditionalData
     */
    constructor() { 
        
        AuthMethodAdditionalData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AuthMethodAdditionalData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthMethodAdditionalData} obj Optional instance to populate.
     * @return {module:model/AuthMethodAdditionalData} The populated <code>AuthMethodAdditionalData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AuthMethodAdditionalData();

            if (data.hasOwnProperty('kerberos_data')) {
                obj['kerberos_data'] = KerberosAuthMethodInfo.constructFromObject(data['kerberos_data']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/KerberosAuthMethodInfo} kerberos_data
 */
AuthMethodAdditionalData.prototype['kerberos_data'] = undefined;






export default AuthMethodAdditionalData;

