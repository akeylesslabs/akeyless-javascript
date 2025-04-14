/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import K8SAuth from './K8SAuth';

/**
 * The K8SAuthsConfigPart model module.
 * @module model/K8SAuthsConfigPart
 * @version 5.0.3
 */
class K8SAuthsConfigPart {
    /**
     * Constructs a new <code>K8SAuthsConfigPart</code>.
     * @alias module:model/K8SAuthsConfigPart
     */
    constructor() { 
        
        K8SAuthsConfigPart.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>K8SAuthsConfigPart</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/K8SAuthsConfigPart} obj Optional instance to populate.
     * @return {module:model/K8SAuthsConfigPart} The populated <code>K8SAuthsConfigPart</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new K8SAuthsConfigPart();

            if (data.hasOwnProperty('k8s_auths')) {
                obj['k8s_auths'] = ApiClient.convertToType(data['k8s_auths'], [K8SAuth]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>K8SAuthsConfigPart</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>K8SAuthsConfigPart</code>.
     */
    static validateJSON(data) {
        if (data['k8s_auths']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['k8s_auths'])) {
                throw new Error("Expected the field `k8s_auths` to be an array in the JSON data but got " + data['k8s_auths']);
            }
            // validate the optional field `k8s_auths` (array)
            for (const item of data['k8s_auths']) {
                K8SAuth.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Array.<module:model/K8SAuth>} k8s_auths
 */
K8SAuthsConfigPart.prototype['k8s_auths'] = undefined;






export default K8SAuthsConfigPart;

