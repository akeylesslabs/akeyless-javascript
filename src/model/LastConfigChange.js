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
import K8SAuthsConfigLastChange from './K8SAuthsConfigLastChange';
import MigrationsConfigLastChange from './MigrationsConfigLastChange';

/**
 * The LastConfigChange model module.
 * @module model/LastConfigChange
 * @version 4.3.0
 */
class LastConfigChange {
    /**
     * Constructs a new <code>LastConfigChange</code>.
     * @alias module:model/LastConfigChange
     */
    constructor() { 
        
        LastConfigChange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LastConfigChange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LastConfigChange} obj Optional instance to populate.
     * @return {module:model/LastConfigChange} The populated <code>LastConfigChange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LastConfigChange();

            if (data.hasOwnProperty('last_k8s_auths_change')) {
                obj['last_k8s_auths_change'] = K8SAuthsConfigLastChange.constructFromObject(data['last_k8s_auths_change']);
            }
            if (data.hasOwnProperty('last_migrations_change')) {
                obj['last_migrations_change'] = MigrationsConfigLastChange.constructFromObject(data['last_migrations_change']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/K8SAuthsConfigLastChange} last_k8s_auths_change
 */
LastConfigChange.prototype['last_k8s_auths_change'] = undefined;

/**
 * @member {module:model/MigrationsConfigLastChange} last_migrations_change
 */
LastConfigChange.prototype['last_migrations_change'] = undefined;






export default LastConfigChange;

