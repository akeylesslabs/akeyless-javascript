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
 * The KmipSetServerState model module.
 * @module model/KmipSetServerState
 * @version 3.3.10
 */
class KmipSetServerState {
    /**
     * Constructs a new <code>KmipSetServerState</code>.
     * kmipSetServerState is a command that sets the environment state to active/inactive.
     * @alias module:model/KmipSetServerState
     * @param state {String} 
     */
    constructor(state) { 
        
        KmipSetServerState.initialize(this, state);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, state) { 
        obj['state'] = state;
    }

    /**
     * Constructs a <code>KmipSetServerState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/KmipSetServerState} obj Optional instance to populate.
     * @return {module:model/KmipSetServerState} The populated <code>KmipSetServerState</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KmipSetServerState();

            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('state')) {
                obj['state'] = ApiClient.convertToType(data['state'], 'String');
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
KmipSetServerState.prototype['json'] = false;

/**
 * @member {String} state
 */
KmipSetServerState.prototype['state'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
KmipSetServerState.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
KmipSetServerState.prototype['uid-token'] = undefined;






export default KmipSetServerState;

