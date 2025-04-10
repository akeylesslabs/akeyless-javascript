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
import KubeconfigNamedCluster from './KubeconfigNamedCluster';
import KubeconfigNamedContext from './KubeconfigNamedContext';
import KubeconfigUser from './KubeconfigUser';

/**
 * The KubeConfigValue model module.
 * @module model/KubeConfigValue
 * @version 5.0.2
 */
class KubeConfigValue {
    /**
     * Constructs a new <code>KubeConfigValue</code>.
     * @alias module:model/KubeConfigValue
     */
    constructor() { 
        
        KubeConfigValue.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KubeConfigValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KubeConfigValue} obj Optional instance to populate.
     * @return {module:model/KubeConfigValue} The populated <code>KubeConfigValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KubeConfigValue();

            if (data.hasOwnProperty('apiVersion')) {
                obj['apiVersion'] = ApiClient.convertToType(data['apiVersion'], 'String');
            }
            if (data.hasOwnProperty('clusters')) {
                obj['clusters'] = ApiClient.convertToType(data['clusters'], [KubeconfigNamedCluster]);
            }
            if (data.hasOwnProperty('contexts')) {
                obj['contexts'] = ApiClient.convertToType(data['contexts'], [KubeconfigNamedContext]);
            }
            if (data.hasOwnProperty('current-context')) {
                obj['current-context'] = ApiClient.convertToType(data['current-context'], 'String');
            }
            if (data.hasOwnProperty('kind')) {
                obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
            }
            if (data.hasOwnProperty('users')) {
                obj['users'] = ApiClient.convertToType(data['users'], [KubeconfigUser]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>KubeConfigValue</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>KubeConfigValue</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['apiVersion'] && !(typeof data['apiVersion'] === 'string' || data['apiVersion'] instanceof String)) {
            throw new Error("Expected the field `apiVersion` to be a primitive type in the JSON string but got " + data['apiVersion']);
        }
        if (data['clusters']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['clusters'])) {
                throw new Error("Expected the field `clusters` to be an array in the JSON data but got " + data['clusters']);
            }
            // validate the optional field `clusters` (array)
            for (const item of data['clusters']) {
                KubeconfigNamedCluster.validateJSON(item);
            };
        }
        if (data['contexts']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['contexts'])) {
                throw new Error("Expected the field `contexts` to be an array in the JSON data but got " + data['contexts']);
            }
            // validate the optional field `contexts` (array)
            for (const item of data['contexts']) {
                KubeconfigNamedContext.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['current-context'] && !(typeof data['current-context'] === 'string' || data['current-context'] instanceof String)) {
            throw new Error("Expected the field `current-context` to be a primitive type in the JSON string but got " + data['current-context']);
        }
        // ensure the json data is a string
        if (data['kind'] && !(typeof data['kind'] === 'string' || data['kind'] instanceof String)) {
            throw new Error("Expected the field `kind` to be a primitive type in the JSON string but got " + data['kind']);
        }
        if (data['users']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['users'])) {
                throw new Error("Expected the field `users` to be an array in the JSON data but got " + data['users']);
            }
            // validate the optional field `users` (array)
            for (const item of data['users']) {
                KubeconfigUser.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} apiVersion
 */
KubeConfigValue.prototype['apiVersion'] = undefined;

/**
 * @member {Array.<module:model/KubeconfigNamedCluster>} clusters
 */
KubeConfigValue.prototype['clusters'] = undefined;

/**
 * @member {Array.<module:model/KubeconfigNamedContext>} contexts
 */
KubeConfigValue.prototype['contexts'] = undefined;

/**
 * @member {String} current-context
 */
KubeConfigValue.prototype['current-context'] = undefined;

/**
 * @member {String} kind
 */
KubeConfigValue.prototype['kind'] = undefined;

/**
 * @member {Array.<module:model/KubeconfigUser>} users
 */
KubeConfigValue.prototype['users'] = undefined;






export default KubeConfigValue;

