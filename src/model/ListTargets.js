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
 * The ListTargets model module.
 * @module model/ListTargets
 * @version 5.0.2
 */
class ListTargets {
    /**
     * Constructs a new <code>ListTargets</code>.
     * listTargets is a command that returns a list of targets. [Deprecated: Use target-list command]
     * @alias module:model/ListTargets
     */
    constructor() { 
        
        ListTargets.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['json'] = false;
    }

    /**
     * Constructs a <code>ListTargets</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ListTargets} obj Optional instance to populate.
     * @return {module:model/ListTargets} The populated <code>ListTargets</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ListTargets();

            if (data.hasOwnProperty('filter')) {
                obj['filter'] = ApiClient.convertToType(data['filter'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('pagination-token')) {
                obj['pagination-token'] = ApiClient.convertToType(data['pagination-token'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], ['String']);
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ListTargets</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ListTargets</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['filter'] && !(typeof data['filter'] === 'string' || data['filter'] instanceof String)) {
            throw new Error("Expected the field `filter` to be a primitive type in the JSON string but got " + data['filter']);
        }
        // ensure the json data is a string
        if (data['pagination-token'] && !(typeof data['pagination-token'] === 'string' || data['pagination-token'] instanceof String)) {
            throw new Error("Expected the field `pagination-token` to be a primitive type in the JSON string but got " + data['pagination-token']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['type'])) {
            throw new Error("Expected the field `type` to be an array in the JSON data but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
    }


}



/**
 * Filter by auth method name or part of it
 * @member {String} filter
 */
ListTargets.prototype['filter'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
ListTargets.prototype['json'] = false;

/**
 * Next page reference
 * @member {String} pagination-token
 */
ListTargets.prototype['pagination-token'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
ListTargets.prototype['token'] = undefined;

/**
 * The target types list . In case it is empty, all types of targets will be returned. options: [hanadb cassandra aws ssh gke eks mysql mongodb snowflake mssql redshift artifactory azure rabbitmq k8s venafi gcp oracle dockerhub ldap github chef web salesforce postgres]
 * @member {Array.<String>} type
 */
ListTargets.prototype['type'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
ListTargets.prototype['uid-token'] = undefined;






export default ListTargets;

