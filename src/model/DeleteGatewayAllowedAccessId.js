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
 * The DeleteGatewayAllowedAccessId model module.
 * @module model/DeleteGatewayAllowedAccessId
 * @version 3.3.4
 */
class DeleteGatewayAllowedAccessId {
    /**
     * Constructs a new <code>DeleteGatewayAllowedAccessId</code>.
     * deleteGatewayAllowedAccessId is a command that deletes access-id
     * @alias module:model/DeleteGatewayAllowedAccessId
     * @param accessId {String} The access id to be stripped of access to gateway
     * @param clusterName {String} The name of the updated cluster, e.g. acc-abcd12345678/p-123456789012/defaultCluster
     */
    constructor(accessId, clusterName) { 
        
        DeleteGatewayAllowedAccessId.initialize(this, accessId, clusterName);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, accessId, clusterName) { 
        obj['access-id'] = accessId;
        obj['cluster-name'] = clusterName;
    }

    /**
     * Constructs a <code>DeleteGatewayAllowedAccessId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteGatewayAllowedAccessId} obj Optional instance to populate.
     * @return {module:model/DeleteGatewayAllowedAccessId} The populated <code>DeleteGatewayAllowedAccessId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteGatewayAllowedAccessId();

            if (data.hasOwnProperty('access-id')) {
                obj['access-id'] = ApiClient.convertToType(data['access-id'], 'String');
            }
            if (data.hasOwnProperty('cluster-name')) {
                obj['cluster-name'] = ApiClient.convertToType(data['cluster-name'], 'String');
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
 * The access id to be stripped of access to gateway
 * @member {String} access-id
 */
DeleteGatewayAllowedAccessId.prototype['access-id'] = undefined;

/**
 * The name of the updated cluster, e.g. acc-abcd12345678/p-123456789012/defaultCluster
 * @member {String} cluster-name
 */
DeleteGatewayAllowedAccessId.prototype['cluster-name'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DeleteGatewayAllowedAccessId.prototype['json'] = false;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DeleteGatewayAllowedAccessId.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DeleteGatewayAllowedAccessId.prototype['uid-token'] = undefined;






export default DeleteGatewayAllowedAccessId;

