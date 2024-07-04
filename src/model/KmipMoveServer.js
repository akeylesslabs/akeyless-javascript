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
 * The KmipMoveServer model module.
 * @module model/KmipMoveServer
 * @version 4.2.0
 */
class KmipMoveServer {
    /**
     * Constructs a new <code>KmipMoveServer</code>.
     * kmipMoveServer is a command that Moves the root location of the kmip server and all associated items to a new root location
     * @alias module:model/KmipMoveServer
     * @param newRoot {String} New root for the kmip server
     */
    constructor(newRoot) { 
        
        KmipMoveServer.initialize(this, newRoot);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, newRoot) { 
        obj['new-root'] = newRoot;
    }

    /**
     * Constructs a <code>KmipMoveServer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KmipMoveServer} obj Optional instance to populate.
     * @return {module:model/KmipMoveServer} The populated <code>KmipMoveServer</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KmipMoveServer();

            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('new-root')) {
                obj['new-root'] = ApiClient.convertToType(data['new-root'], 'String');
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
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
KmipMoveServer.prototype['json'] = false;

/**
 * New root for the kmip server
 * @member {String} new-root
 */
KmipMoveServer.prototype['new-root'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
KmipMoveServer.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
KmipMoveServer.prototype['uid-token'] = undefined;






export default KmipMoveServer;

