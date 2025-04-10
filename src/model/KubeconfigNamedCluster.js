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
import KubeconfigCluster from './KubeconfigCluster';

/**
 * The KubeconfigNamedCluster model module.
 * @module model/KubeconfigNamedCluster
 * @version 5.0.2
 */
class KubeconfigNamedCluster {
    /**
     * Constructs a new <code>KubeconfigNamedCluster</code>.
     * @alias module:model/KubeconfigNamedCluster
     */
    constructor() { 
        
        KubeconfigNamedCluster.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>KubeconfigNamedCluster</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KubeconfigNamedCluster} obj Optional instance to populate.
     * @return {module:model/KubeconfigNamedCluster} The populated <code>KubeconfigNamedCluster</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KubeconfigNamedCluster();

            if (data.hasOwnProperty('cluster')) {
                obj['cluster'] = KubeconfigCluster.constructFromObject(data['cluster']);
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>KubeconfigNamedCluster</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>KubeconfigNamedCluster</code>.
     */
    static validateJSON(data) {
        // validate the optional field `cluster`
        if (data['cluster']) { // data not null
          KubeconfigCluster.validateJSON(data['cluster']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}



/**
 * @member {module:model/KubeconfigCluster} cluster
 */
KubeconfigNamedCluster.prototype['cluster'] = undefined;

/**
 * @member {String} name
 */
KubeconfigNamedCluster.prototype['name'] = undefined;






export default KubeconfigNamedCluster;

