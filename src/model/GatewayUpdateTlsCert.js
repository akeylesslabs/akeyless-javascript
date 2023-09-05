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
 * The GatewayUpdateTlsCert model module.
 * @module model/GatewayUpdateTlsCert
 * @version 3.3.18
 */
class GatewayUpdateTlsCert {
    /**
     * Constructs a new <code>GatewayUpdateTlsCert</code>.
     * gatewayUpdateTlsCert is a command that updates Gateway TLS certificate
     * @alias module:model/GatewayUpdateTlsCert
     */
    constructor() { 
        
        GatewayUpdateTlsCert.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GatewayUpdateTlsCert</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateTlsCert} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateTlsCert} The populated <code>GatewayUpdateTlsCert</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateTlsCert();

            if (data.hasOwnProperty('cert-data')) {
                obj['cert-data'] = ApiClient.convertToType(data['cert-data'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('key-data')) {
                obj['key-data'] = ApiClient.convertToType(data['key-data'], 'String');
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
 * TLS Certificate (base64 encoded)
 * @member {String} cert-data
 */
GatewayUpdateTlsCert.prototype['cert-data'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateTlsCert.prototype['json'] = false;

/**
 * TLS Private Key (base64 encoded)
 * @member {String} key-data
 */
GatewayUpdateTlsCert.prototype['key-data'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateTlsCert.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateTlsCert.prototype['uid-token'] = undefined;






export default GatewayUpdateTlsCert;

