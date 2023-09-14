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
 * The MongoDBTargetDetails model module.
 * @module model/MongoDBTargetDetails
 * @version 3.4.0
 */
class MongoDBTargetDetails {
    /**
     * Constructs a new <code>MongoDBTargetDetails</code>.
     * @alias module:model/MongoDBTargetDetails
     */
    constructor() { 
        
        MongoDBTargetDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MongoDBTargetDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MongoDBTargetDetails} obj Optional instance to populate.
     * @return {module:model/MongoDBTargetDetails} The populated <code>MongoDBTargetDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MongoDBTargetDetails();

            if (data.hasOwnProperty('mongodb_atlas_api_private_key')) {
                obj['mongodb_atlas_api_private_key'] = ApiClient.convertToType(data['mongodb_atlas_api_private_key'], 'String');
            }
            if (data.hasOwnProperty('mongodb_atlas_api_public_key')) {
                obj['mongodb_atlas_api_public_key'] = ApiClient.convertToType(data['mongodb_atlas_api_public_key'], 'String');
            }
            if (data.hasOwnProperty('mongodb_atlas_project_id')) {
                obj['mongodb_atlas_project_id'] = ApiClient.convertToType(data['mongodb_atlas_project_id'], 'String');
            }
            if (data.hasOwnProperty('mongodb_db_name')) {
                obj['mongodb_db_name'] = ApiClient.convertToType(data['mongodb_db_name'], 'String');
            }
            if (data.hasOwnProperty('mongodb_default_auth_db')) {
                obj['mongodb_default_auth_db'] = ApiClient.convertToType(data['mongodb_default_auth_db'], 'String');
            }
            if (data.hasOwnProperty('mongodb_host_port')) {
                obj['mongodb_host_port'] = ApiClient.convertToType(data['mongodb_host_port'], 'String');
            }
            if (data.hasOwnProperty('mongodb_is_atlas')) {
                obj['mongodb_is_atlas'] = ApiClient.convertToType(data['mongodb_is_atlas'], 'Boolean');
            }
            if (data.hasOwnProperty('mongodb_password')) {
                obj['mongodb_password'] = ApiClient.convertToType(data['mongodb_password'], 'String');
            }
            if (data.hasOwnProperty('mongodb_uri_connection')) {
                obj['mongodb_uri_connection'] = ApiClient.convertToType(data['mongodb_uri_connection'], 'String');
            }
            if (data.hasOwnProperty('mongodb_uri_options')) {
                obj['mongodb_uri_options'] = ApiClient.convertToType(data['mongodb_uri_options'], 'String');
            }
            if (data.hasOwnProperty('mongodb_username')) {
                obj['mongodb_username'] = ApiClient.convertToType(data['mongodb_username'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} mongodb_atlas_api_private_key
 */
MongoDBTargetDetails.prototype['mongodb_atlas_api_private_key'] = undefined;

/**
 * @member {String} mongodb_atlas_api_public_key
 */
MongoDBTargetDetails.prototype['mongodb_atlas_api_public_key'] = undefined;

/**
 * mongodb atlas fields
 * @member {String} mongodb_atlas_project_id
 */
MongoDBTargetDetails.prototype['mongodb_atlas_project_id'] = undefined;

/**
 * common fields
 * @member {String} mongodb_db_name
 */
MongoDBTargetDetails.prototype['mongodb_db_name'] = undefined;

/**
 * @member {String} mongodb_default_auth_db
 */
MongoDBTargetDetails.prototype['mongodb_default_auth_db'] = undefined;

/**
 * @member {String} mongodb_host_port
 */
MongoDBTargetDetails.prototype['mongodb_host_port'] = undefined;

/**
 * @member {Boolean} mongodb_is_atlas
 */
MongoDBTargetDetails.prototype['mongodb_is_atlas'] = undefined;

/**
 * @member {String} mongodb_password
 */
MongoDBTargetDetails.prototype['mongodb_password'] = undefined;

/**
 * mongodb fields
 * @member {String} mongodb_uri_connection
 */
MongoDBTargetDetails.prototype['mongodb_uri_connection'] = undefined;

/**
 * @member {String} mongodb_uri_options
 */
MongoDBTargetDetails.prototype['mongodb_uri_options'] = undefined;

/**
 * @member {String} mongodb_username
 */
MongoDBTargetDetails.prototype['mongodb_username'] = undefined;






export default MongoDBTargetDetails;

