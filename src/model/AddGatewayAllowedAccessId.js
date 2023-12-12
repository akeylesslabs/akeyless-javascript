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
 * The AddGatewayAllowedAccessId model module.
 * @module model/AddGatewayAllowedAccessId
 * @version 3.5.3
 */
class AddGatewayAllowedAccessId {
    /**
     * Constructs a new <code>AddGatewayAllowedAccessId</code>.
     * Responses:  default: errorResponse 200: addGatewayAllowedAccessIdResponse
     * @alias module:model/AddGatewayAllowedAccessId
     * @param accessId {String} The access id that will be able to access to gateway
     * @param clusterName {String} The name of the updated cluster, e.g. acc-abcd12345678/p-123456789012/defaultCluster
     */
    constructor(accessId, clusterName) { 
        
        AddGatewayAllowedAccessId.initialize(this, accessId, clusterName);
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
     * Constructs a <code>AddGatewayAllowedAccessId</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AddGatewayAllowedAccessId} obj Optional instance to populate.
     * @return {module:model/AddGatewayAllowedAccessId} The populated <code>AddGatewayAllowedAccessId</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new AddGatewayAllowedAccessId();

            if (data.hasOwnProperty('access-id')) {
                obj['access-id'] = ApiClient.convertToType(data['access-id'], 'String');
            }
            if (data.hasOwnProperty('cluster-name')) {
                obj['cluster-name'] = ApiClient.convertToType(data['cluster-name'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('sub-claims')) {
                obj['sub-claims'] = ApiClient.convertToType(data['sub-claims'], {'String': 'String'});
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
 * The access id that will be able to access to gateway
 * @member {String} access-id
 */
AddGatewayAllowedAccessId.prototype['access-id'] = undefined;

/**
 * The name of the updated cluster, e.g. acc-abcd12345678/p-123456789012/defaultCluster
 * @member {String} cluster-name
 */
AddGatewayAllowedAccessId.prototype['cluster-name'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
AddGatewayAllowedAccessId.prototype['json'] = false;

/**
 * key/val of sub claims, e.g group=admins,developers
 * @member {Object.<String, String>} sub-claims
 */
AddGatewayAllowedAccessId.prototype['sub-claims'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
AddGatewayAllowedAccessId.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
AddGatewayAllowedAccessId.prototype['uid-token'] = undefined;






export default AddGatewayAllowedAccessId;

