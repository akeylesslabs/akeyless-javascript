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
 * The DeleteGwCluster model module.
 * @module model/DeleteGwCluster
 * @version 3.5.1
 */
class DeleteGwCluster {
    /**
     * Constructs a new <code>DeleteGwCluster</code>.
     * @alias module:model/DeleteGwCluster
     * @param clusterName {String} Gateway Cluster, e.g. acc-abcd12345678/p-123456789012/defaultCluster
     */
    constructor(clusterName) { 
        
        DeleteGwCluster.initialize(this, clusterName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, clusterName) { 
        obj['cluster-name'] = clusterName;
    }

    /**
     * Constructs a <code>DeleteGwCluster</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteGwCluster} obj Optional instance to populate.
     * @return {module:model/DeleteGwCluster} The populated <code>DeleteGwCluster</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteGwCluster();

            if (data.hasOwnProperty('cluster-name')) {
                obj['cluster-name'] = ApiClient.convertToType(data['cluster-name'], 'String');
            }
            if (data.hasOwnProperty('force-deletion')) {
                obj['force-deletion'] = ApiClient.convertToType(data['force-deletion'], 'Boolean');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Gateway Cluster, e.g. acc-abcd12345678/p-123456789012/defaultCluster
 * @member {String} cluster-name
 */
DeleteGwCluster.prototype['cluster-name'] = undefined;

/**
 * Enforce deletion
 * @member {Boolean} force-deletion
 */
DeleteGwCluster.prototype['force-deletion'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DeleteGwCluster.prototype['json'] = false;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DeleteGwCluster.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DeleteGwCluster.prototype['uid-token'] = undefined;






export default DeleteGwCluster;

