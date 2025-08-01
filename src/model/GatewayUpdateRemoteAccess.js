/**
 * Akeyless API
 * The purpose of this application is to provide access to Akeyless API.
 *
 * The version of the OpenAPI document: 3.0
 * Contact: support@akeyless.io
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The GatewayUpdateRemoteAccess model module.
 * @module model/GatewayUpdateRemoteAccess
 * @version 5.0.6
 */
class GatewayUpdateRemoteAccess {
    /**
     * Constructs a new <code>GatewayUpdateRemoteAccess</code>.
     * gatewayUpdateRemoteAccess is a command that update remote access config
     * @alias module:model/GatewayUpdateRemoteAccess
     */
    constructor() { 
        
        GatewayUpdateRemoteAccess.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
        obj['allowed-urls'] = 'use-existing';
        obj['json'] = false;
        obj['kexalgs'] = 'use-existing';
        obj['keyboard-layout'] = 'use-existing';
        obj['rdp-target-configuration'] = 'use-existing';
        obj['ssh-target-configuration'] = 'use-existing';
    }

    /**
     * Constructs a <code>GatewayUpdateRemoteAccess</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateRemoteAccess} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateRemoteAccess} The populated <code>GatewayUpdateRemoteAccess</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateRemoteAccess();

            if (data.hasOwnProperty('allowed-urls')) {
                obj['allowed-urls'] = ApiClient.convertToType(data['allowed-urls'], 'String');
            }
            if (data.hasOwnProperty('hide-session-recording')) {
                obj['hide-session-recording'] = ApiClient.convertToType(data['hide-session-recording'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('kexalgs')) {
                obj['kexalgs'] = ApiClient.convertToType(data['kexalgs'], 'String');
            }
            if (data.hasOwnProperty('keyboard-layout')) {
                obj['keyboard-layout'] = ApiClient.convertToType(data['keyboard-layout'], 'String');
            }
            if (data.hasOwnProperty('legacy-ssh-algorithm')) {
                obj['legacy-ssh-algorithm'] = ApiClient.convertToType(data['legacy-ssh-algorithm'], 'String');
            }
            if (data.hasOwnProperty('rdp-target-configuration')) {
                obj['rdp-target-configuration'] = ApiClient.convertToType(data['rdp-target-configuration'], 'String');
            }
            if (data.hasOwnProperty('ssh-target-configuration')) {
                obj['ssh-target-configuration'] = ApiClient.convertToType(data['ssh-target-configuration'], 'String');
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

    /**
     * Validates the JSON data with respect to <code>GatewayUpdateRemoteAccess</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayUpdateRemoteAccess</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['allowed-urls'] && !(typeof data['allowed-urls'] === 'string' || data['allowed-urls'] instanceof String)) {
            throw new Error("Expected the field `allowed-urls` to be a primitive type in the JSON string but got " + data['allowed-urls']);
        }
        // ensure the json data is a string
        if (data['hide-session-recording'] && !(typeof data['hide-session-recording'] === 'string' || data['hide-session-recording'] instanceof String)) {
            throw new Error("Expected the field `hide-session-recording` to be a primitive type in the JSON string but got " + data['hide-session-recording']);
        }
        // ensure the json data is a string
        if (data['kexalgs'] && !(typeof data['kexalgs'] === 'string' || data['kexalgs'] instanceof String)) {
            throw new Error("Expected the field `kexalgs` to be a primitive type in the JSON string but got " + data['kexalgs']);
        }
        // ensure the json data is a string
        if (data['keyboard-layout'] && !(typeof data['keyboard-layout'] === 'string' || data['keyboard-layout'] instanceof String)) {
            throw new Error("Expected the field `keyboard-layout` to be a primitive type in the JSON string but got " + data['keyboard-layout']);
        }
        // ensure the json data is a string
        if (data['legacy-ssh-algorithm'] && !(typeof data['legacy-ssh-algorithm'] === 'string' || data['legacy-ssh-algorithm'] instanceof String)) {
            throw new Error("Expected the field `legacy-ssh-algorithm` to be a primitive type in the JSON string but got " + data['legacy-ssh-algorithm']);
        }
        // ensure the json data is a string
        if (data['rdp-target-configuration'] && !(typeof data['rdp-target-configuration'] === 'string' || data['rdp-target-configuration'] instanceof String)) {
            throw new Error("Expected the field `rdp-target-configuration` to be a primitive type in the JSON string but got " + data['rdp-target-configuration']);
        }
        // ensure the json data is a string
        if (data['ssh-target-configuration'] && !(typeof data['ssh-target-configuration'] === 'string' || data['ssh-target-configuration'] instanceof String)) {
            throw new Error("Expected the field `ssh-target-configuration` to be a primitive type in the JSON string but got " + data['ssh-target-configuration']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }

        return true;
    }


}



/**
 * List of valid URLs to redirect from the Portal back to the remote access server (in a comma-delimited list)
 * @member {String} allowed-urls
 * @default 'use-existing'
 */
GatewayUpdateRemoteAccess.prototype['allowed-urls'] = 'use-existing';

/**
 * Specifies whether to show/hide if the session is currently recorded [true/false]
 * @member {String} hide-session-recording
 */
GatewayUpdateRemoteAccess.prototype['hide-session-recording'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateRemoteAccess.prototype['json'] = false;

/**
 * Decide which algorithm will be used as part of the SSH initial hand-shake process
 * @member {String} kexalgs
 * @default 'use-existing'
 */
GatewayUpdateRemoteAccess.prototype['kexalgs'] = 'use-existing';

/**
 * Enable support for additional keyboard layouts
 * @member {String} keyboard-layout
 * @default 'use-existing'
 */
GatewayUpdateRemoteAccess.prototype['keyboard-layout'] = 'use-existing';

/**
 * Signs SSH certificates using legacy ssh-rsa-cert-01@openssh.com signing algorithm [true/false]
 * @member {String} legacy-ssh-algorithm
 */
GatewayUpdateRemoteAccess.prototype['legacy-ssh-algorithm'] = undefined;

/**
 * Specify the usernameSubClaim that exists inside the IDP JWT, e.g. email
 * @member {String} rdp-target-configuration
 * @default 'use-existing'
 */
GatewayUpdateRemoteAccess.prototype['rdp-target-configuration'] = 'use-existing';

/**
 * Specify the usernameSubClaim that exists inside the IDP JWT, e.g. email
 * @member {String} ssh-target-configuration
 * @default 'use-existing'
 */
GatewayUpdateRemoteAccess.prototype['ssh-target-configuration'] = 'use-existing';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateRemoteAccess.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateRemoteAccess.prototype['uid-token'] = undefined;






export default GatewayUpdateRemoteAccess;

