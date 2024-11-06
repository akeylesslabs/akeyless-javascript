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
 * @version 4.3.0
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
