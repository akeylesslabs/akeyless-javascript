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
 * The UidRotateToken model module.
 * @module model/UidRotateToken
 * @version 2.4.4
 */
class UidRotateToken {
    /**
     * Constructs a new <code>UidRotateToken</code>.
     * uidRotateToken is a command that rotates an Akeyless Universal Identity token.
     * @alias module:model/UidRotateToken
     */
    constructor() { 
        
        UidRotateToken.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UidRotateToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UidRotateToken} obj Optional instance to populate.
     * @return {module:model/UidRotateToken} The populated <code>UidRotateToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UidRotateToken();

            if (data.hasOwnProperty('fork')) {
                obj['fork'] = ApiClient.convertToType(data['fork'], 'Boolean');
            }
            if (data.hasOwnProperty('send-manual-ack-token')) {
                obj['send-manual-ack-token'] = ApiClient.convertToType(data['send-manual-ack-token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('with-manual-ack')) {
                obj['with-manual-ack'] = ApiClient.convertToType(data['with-manual-ack'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * Create a new child token with default parameters
 * @member {Boolean} fork
 */
UidRotateToken.prototype['fork'] = undefined;

/**
 * The new rotated token to send manual ack for (with uid-token=the-orig-token)
 * @member {String} send-manual-ack-token
 */
UidRotateToken.prototype['send-manual-ack-token'] = undefined;

/**
 * The Universal identity token
 * @member {String} uid-token
 */
UidRotateToken.prototype['uid-token'] = undefined;

/**
 * Disable automatic ack
 * @member {Boolean} with-manual-ack
 */
UidRotateToken.prototype['with-manual-ack'] = undefined;






export default UidRotateToken;

