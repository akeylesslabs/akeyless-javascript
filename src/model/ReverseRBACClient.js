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
import AuthMethodRoleAssociation from './AuthMethodRoleAssociation';

/**
 * The ReverseRBACClient model module.
 * @module model/ReverseRBACClient
 * @version 3.5.2
 */
class ReverseRBACClient {
    /**
     * Constructs a new <code>ReverseRBACClient</code>.
     * @alias module:model/ReverseRBACClient
     */
    constructor() { 
        
        ReverseRBACClient.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ReverseRBACClient</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReverseRBACClient} obj Optional instance to populate.
     * @return {module:model/ReverseRBACClient} The populated <code>ReverseRBACClient</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReverseRBACClient();

            if (data.hasOwnProperty('assocs')) {
                obj['assocs'] = ApiClient.convertToType(data['assocs'], [AuthMethodRoleAssociation]);
            }
            if (data.hasOwnProperty('auth_method_name')) {
                obj['auth_method_name'] = ApiClient.convertToType(data['auth_method_name'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/AuthMethodRoleAssociation>} assocs
 */
ReverseRBACClient.prototype['assocs'] = undefined;

/**
 * @member {String} auth_method_name
 */
ReverseRBACClient.prototype['auth_method_name'] = undefined;






export default ReverseRBACClient;

