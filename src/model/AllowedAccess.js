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
 * The AllowedAccess model module.
 * @module model/AllowedAccess
 * @version 3.5.2
 */
class AllowedAccess {
    /**
     * Constructs a new <code>AllowedAccess</code>.
     * @alias module:model/AllowedAccess
     */
    constructor() { 
        
        AllowedAccess.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>AllowedAccess</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AllowedAccess} obj Optional instance to populate.
     * @return {module:model/AllowedAccess} The populated <code>AllowedAccess</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AllowedAccess();

            if (data.hasOwnProperty('access_id')) {
                obj['access_id'] = ApiClient.convertToType(data['access_id'], 'String');
            }
            if (data.hasOwnProperty('access_type')) {
                obj['access_type'] = ApiClient.convertToType(data['access_type'], 'String');
            }
            if (data.hasOwnProperty('cluster_id')) {
                obj['cluster_id'] = ApiClient.convertToType(data['cluster_id'], 'Number');
            }
            if (data.hasOwnProperty('created_at')) {
                obj['created_at'] = ApiClient.convertToType(data['created_at'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('editable')) {
                obj['editable'] = ApiClient.convertToType(data['editable'], 'Boolean');
            }
            if (data.hasOwnProperty('error')) {
                obj['error'] = ApiClient.convertToType(data['error'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('is_valid')) {
                obj['is_valid'] = ApiClient.convertToType(data['is_valid'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('permissions')) {
                obj['permissions'] = ApiClient.convertToType(data['permissions'], ['String']);
            }
            if (data.hasOwnProperty('sub_claims')) {
                obj['sub_claims'] = ApiClient.convertToType(data['sub_claims'], {'String': ['String']});
            }
            if (data.hasOwnProperty('updated_at')) {
                obj['updated_at'] = ApiClient.convertToType(data['updated_at'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} access_id
 */
AllowedAccess.prototype['access_id'] = undefined;

/**
 * @member {String} access_type
 */
AllowedAccess.prototype['access_type'] = undefined;

/**
 * @member {Number} cluster_id
 */
AllowedAccess.prototype['cluster_id'] = undefined;

/**
 * @member {Date} created_at
 */
AllowedAccess.prototype['created_at'] = undefined;

/**
 * @member {String} description
 */
AllowedAccess.prototype['description'] = undefined;

/**
 * @member {Boolean} editable
 */
AllowedAccess.prototype['editable'] = undefined;

/**
 * @member {String} error
 */
AllowedAccess.prototype['error'] = undefined;

/**
 * @member {Number} id
 */
AllowedAccess.prototype['id'] = undefined;

/**
 * @member {Boolean} is_valid
 */
AllowedAccess.prototype['is_valid'] = undefined;

/**
 * @member {String} name
 */
AllowedAccess.prototype['name'] = undefined;

/**
 * @member {Array.<String>} permissions
 */
AllowedAccess.prototype['permissions'] = undefined;

/**
 * @member {Object.<String, Array.<String>>} sub_claims
 */
AllowedAccess.prototype['sub_claims'] = undefined;

/**
 * @member {Date} updated_at
 */
AllowedAccess.prototype['updated_at'] = undefined;






export default AllowedAccess;

