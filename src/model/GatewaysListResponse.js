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
import GwClusterIdentity from './GwClusterIdentity';

/**
 * The GatewaysListResponse model module.
 * @module model/GatewaysListResponse
 * @version 3.2.8
 */
class GatewaysListResponse {
    /**
     * Constructs a new <code>GatewaysListResponse</code>.
     * GatewaysListResponse Gateway cluster identity list
     * @alias module:model/GatewaysListResponse
     */
    constructor() { 
        
        GatewaysListResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewaysListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewaysListResponse} obj Optional instance to populate.
     * @return {module:model/GatewaysListResponse} The populated <code>GatewaysListResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewaysListResponse();

            if (data.hasOwnProperty('clusters')) {
                obj['clusters'] = ApiClient.convertToType(data['clusters'], [GwClusterIdentity]);
            }
        }
        return obj;
    }


}

/**
 * @member {Array.<module:model/GwClusterIdentity>} clusters
 */
GatewaysListResponse.prototype['clusters'] = undefined;






export default GatewaysListResponse;

