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
 * The K8SAuthsConfigLastChange model module.
 * @module model/K8SAuthsConfigLastChange
 * @version 2.16.6
 */
class K8SAuthsConfigLastChange {
    /**
     * Constructs a new <code>K8SAuthsConfigLastChange</code>.
     * @alias module:model/K8SAuthsConfigLastChange
     */
    constructor() { 
        
        K8SAuthsConfigLastChange.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>K8SAuthsConfigLastChange</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/K8SAuthsConfigLastChange} obj Optional instance to populate.
     * @return {module:model/K8SAuthsConfigLastChange} The populated <code>K8SAuthsConfigLastChange</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new K8SAuthsConfigLastChange();

            if (data.hasOwnProperty('changed_k8s_auths_ids')) {
                obj['changed_k8s_auths_ids'] = ApiClient.convertToType(data['changed_k8s_auths_ids'], ['String']);
            }
            if (data.hasOwnProperty('created_k8s_auths_ids')) {
                obj['created_k8s_auths_ids'] = ApiClient.convertToType(data['created_k8s_auths_ids'], ['String']);
            }
            if (data.hasOwnProperty('deleted_k8s_auths_ids')) {
                obj['deleted_k8s_auths_ids'] = ApiClient.convertToType(data['deleted_k8s_auths_ids'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<String>} changed_k8s_auths_ids
 */
K8SAuthsConfigLastChange.prototype['changed_k8s_auths_ids'] = undefined;

/**
 * @member {Array.<String>} created_k8s_auths_ids
 */
K8SAuthsConfigLastChange.prototype['created_k8s_auths_ids'] = undefined;

/**
 * @member {Array.<String>} deleted_k8s_auths_ids
 */
K8SAuthsConfigLastChange.prototype['deleted_k8s_auths_ids'] = undefined;






export default K8SAuthsConfigLastChange;

