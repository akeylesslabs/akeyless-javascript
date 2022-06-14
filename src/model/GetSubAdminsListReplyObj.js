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
 * The GetSubAdminsListReplyObj model module.
 * @module model/GetSubAdminsListReplyObj
 * @version 2.16.8
 */
class GetSubAdminsListReplyObj {
    /**
     * Constructs a new <code>GetSubAdminsListReplyObj</code>.
     * @alias module:model/GetSubAdminsListReplyObj
     */
    constructor() { 
        
        GetSubAdminsListReplyObj.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSubAdminsListReplyObj</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSubAdminsListReplyObj} obj Optional instance to populate.
     * @return {module:model/GetSubAdminsListReplyObj} The populated <code>GetSubAdminsListReplyObj</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSubAdminsListReplyObj();

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
GetSubAdminsListReplyObj.prototype['allowed_access'] = undefined;






export default GetSubAdminsListReplyObj;

