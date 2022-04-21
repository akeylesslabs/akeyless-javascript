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
 * The GatewayDeleteK8SAuthConfig model module.
 * @module model/GatewayDeleteK8SAuthConfig
 * @version 2.16.3
 */
class GatewayDeleteK8SAuthConfig {
    /**
     * Constructs a new <code>GatewayDeleteK8SAuthConfig</code>.
     * gatewayDeleteK8SAuth is a command that deletes k8s auth config
     * @alias module:model/GatewayDeleteK8SAuthConfig
     * @param name {String} K8S Auth config name
     */
    constructor(name) { 
        
        GatewayDeleteK8SAuthConfig.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>GatewayDeleteK8SAuthConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayDeleteK8SAuthConfig} obj Optional instance to populate.
     * @return {module:model/GatewayDeleteK8SAuthConfig} The populated <code>GatewayDeleteK8SAuthConfig</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayDeleteK8SAuthConfig();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
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
 * K8S Auth config name
 * @member {String} name
 */
GatewayDeleteK8SAuthConfig.prototype['name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayDeleteK8SAuthConfig.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayDeleteK8SAuthConfig.prototype['uid-token'] = undefined;






export default GatewayDeleteK8SAuthConfig;

