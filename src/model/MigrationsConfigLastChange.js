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
 * The MigrationsConfigLastChange model module.
 * @module model/MigrationsConfigLastChange
 * @version 2.16.2
 */
class MigrationsConfigLastChange {
    /**
     * Constructs a new <code>MigrationsConfigLastChange</code>.
     * @alias module:model/MigrationsConfigLastChange
     */
    constructor() { 
        
        MigrationsConfigLastChange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>MigrationsConfigLastChange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MigrationsConfigLastChange} obj Optional instance to populate.
     * @return {module:model/MigrationsConfigLastChange} The populated <code>MigrationsConfigLastChange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MigrationsConfigLastChange();

            if (data.hasOwnProperty('changed_migrations')) {
                obj['changed_migrations'] = ApiClient.convertToType(data['changed_migrations'], ['String']);
            }
            if (data.hasOwnProperty('created_migrations')) {
                obj['created_migrations'] = ApiClient.convertToType(data['created_migrations'], ['String']);
            }
            if (data.hasOwnProperty('deleted_migrations')) {
                obj['deleted_migrations'] = ApiClient.convertToType(data['deleted_migrations'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} changed_migrations
 */
MigrationsConfigLastChange.prototype['changed_migrations'] = undefined;

/**
 * @member {Array.<String>} created_migrations
 */
MigrationsConfigLastChange.prototype['created_migrations'] = undefined;

/**
 * @member {Array.<String>} deleted_migrations
 */
MigrationsConfigLastChange.prototype['deleted_migrations'] = undefined;






export default MigrationsConfigLastChange;

