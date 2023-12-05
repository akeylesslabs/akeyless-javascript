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
 * The RoleAuthMethodAssociation model module.
 * @module model/RoleAuthMethodAssociation
 * @version 3.5.2
 */
class RoleAuthMethodAssociation {
    /**
     * Constructs a new <code>RoleAuthMethodAssociation</code>.
     * RoleAuthMethodAssociation includes details of an association between a role and an auth method.
     * @alias module:model/RoleAuthMethodAssociation
     */
    constructor() { 
        
        RoleAuthMethodAssociation.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RoleAuthMethodAssociation</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RoleAuthMethodAssociation} obj Optional instance to populate.
     * @return {module:model/RoleAuthMethodAssociation} The populated <code>RoleAuthMethodAssociation</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RoleAuthMethodAssociation();

            if (data.hasOwnProperty('assoc_id')) {
                obj['assoc_id'] = ApiClient.convertToType(data['assoc_id'], 'String');
            }
            if (data.hasOwnProperty('auth_method_access_id')) {
                obj['auth_method_access_id'] = ApiClient.convertToType(data['auth_method_access_id'], 'String');
            }
            if (data.hasOwnProperty('auth_method_name')) {
                obj['auth_method_name'] = ApiClient.convertToType(data['auth_method_name'], 'String');
            }
            if (data.hasOwnProperty('auth_method_sub_claims')) {
                obj['auth_method_sub_claims'] = ApiClient.convertToType(data['auth_method_sub_claims'], {'String': ['String']});
            }
            if (data.hasOwnProperty('sub_claims_case_sensitive')) {
                obj['sub_claims_case_sensitive'] = ApiClient.convertToType(data['sub_claims_case_sensitive'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} assoc_id
 */
RoleAuthMethodAssociation.prototype['assoc_id'] = undefined;

/**
 * @member {String} auth_method_access_id
 */
RoleAuthMethodAssociation.prototype['auth_method_access_id'] = undefined;

/**
 * @member {String} auth_method_name
 */
RoleAuthMethodAssociation.prototype['auth_method_name'] = undefined;

/**
 * @member {Object.<String, Array.<String>>} auth_method_sub_claims
 */
RoleAuthMethodAssociation.prototype['auth_method_sub_claims'] = undefined;

/**
 * @member {Boolean} sub_claims_case_sensitive
 */
RoleAuthMethodAssociation.prototype['sub_claims_case_sensitive'] = undefined;






export default RoleAuthMethodAssociation;

