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
 * The CreateRole model module.
 * @module model/CreateRole
 * @version 3.1.0
 */
class CreateRole {
    /**
     * Constructs a new <code>CreateRole</code>.
     * @alias module:model/CreateRole
     * @param name {String} Role name
     */
    constructor(name) { 
        
        CreateRole.initialize(this, name);
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
     * Constructs a <code>CreateRole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateRole} obj Optional instance to populate.
     * @return {module:model/CreateRole} The populated <code>CreateRole</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateRole();

            if (data.hasOwnProperty('analytics-access')) {
                obj['analytics-access'] = ApiClient.convertToType(data['analytics-access'], 'String');
            }
            if (data.hasOwnProperty('audit-access')) {
                obj['audit-access'] = ApiClient.convertToType(data['audit-access'], 'String');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('gw-analytics-access')) {
                obj['gw-analytics-access'] = ApiClient.convertToType(data['gw-analytics-access'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('sra-reports-access')) {
                obj['sra-reports-access'] = ApiClient.convertToType(data['sra-reports-access'], 'String');
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
 * Allow this role to view analytics. Currently only 'none', 'own', 'all' values are supported, allowing associated auth methods to view reports produced by the same auth methods.
 * @member {String} analytics-access
 */
CreateRole.prototype['analytics-access'] = undefined;

/**
 * Allow this role to view audit logs. Currently only 'none', 'own' and 'all' values are supported, allowing associated auth methods to view audit logs produced by the same auth methods.
 * @member {String} audit-access
 */
CreateRole.prototype['audit-access'] = undefined;

/**
 * Comment about the role
 * @member {String} comment
 */
CreateRole.prototype['comment'] = undefined;

/**
 * Allow this role to view gw analytics. Currently only 'none', 'own', 'all' values are supported, allowing associated auth methods to view reports produced by the same auth methods.
 * @member {String} gw-analytics-access
 */
CreateRole.prototype['gw-analytics-access'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
CreateRole.prototype['json'] = undefined;

/**
 * Role name
 * @member {String} name
 */
CreateRole.prototype['name'] = undefined;

/**
 * Allow this role to view SRA Clusters. Currently only 'none', 'own', 'all' values are supported.
 * @member {String} sra-reports-access
 */
CreateRole.prototype['sra-reports-access'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateRole.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateRole.prototype['uid-token'] = undefined;






export default CreateRole;

