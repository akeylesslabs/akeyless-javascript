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
 * The StaticCredsAuth model module.
 * @module model/StaticCredsAuth
 * @version 2.15.26
 */
class StaticCredsAuth {
    /**
     * Constructs a new <code>StaticCredsAuth</code>.
     * staticCredsAuth is a command that creates a temporary access profile using the provided static credentials.
     * @alias module:model/StaticCredsAuth
     */
    constructor() { 
        
        StaticCredsAuth.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>StaticCredsAuth</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StaticCredsAuth} obj Optional instance to populate.
     * @return {module:model/StaticCredsAuth} The populated <code>StaticCredsAuth</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new StaticCredsAuth();

            if (data.hasOwnProperty('access-id')) {
                obj['access-id'] = ApiClient.convertToType(data['access-id'], 'String');
            }
            if (data.hasOwnProperty('admin-email')) {
                obj['admin-email'] = ApiClient.convertToType(data['admin-email'], 'String');
            }
            if (data.hasOwnProperty('creds')) {
                obj['creds'] = ApiClient.convertToType(data['creds'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Akeyless JWT token
 * @member {String} access-id
 */
StaticCredsAuth.prototype['access-id'] = undefined;

/**
 * Akeyless JWT token
 * @member {String} admin-email
 */
StaticCredsAuth.prototype['admin-email'] = undefined;

/**
 * Akeyless JWT token
 * @member {String} creds
 */
StaticCredsAuth.prototype['creds'] = undefined;






export default StaticCredsAuth;

