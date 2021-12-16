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
import AllowedAccess from './AllowedAccess';

/**
 * The AdminsConfigPart model module.
 * @module model/AdminsConfigPart
 * @version 2.5.22
 */
class AdminsConfigPart {
    /**
     * Constructs a new <code>AdminsConfigPart</code>.
     * @alias module:model/AdminsConfigPart
     */
    constructor() { 
        
        AdminsConfigPart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AdminsConfigPart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AdminsConfigPart} obj Optional instance to populate.
     * @return {module:model/AdminsConfigPart} The populated <code>AdminsConfigPart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AdminsConfigPart();

            if (data.hasOwnProperty('allowed_access')) {
                obj['allowed_access'] = ApiClient.convertToType(data['allowed_access'], {'String': AllowedAccess});
            }
        }
        return obj;
    }


}

/**
 * @member {Object.<String, module:model/AllowedAccess>} allowed_access
 */
AdminsConfigPart.prototype['allowed_access'] = undefined;






export default AdminsConfigPart;

