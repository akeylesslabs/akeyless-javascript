/**
 * includes all operations supported by Akeyless.
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.0.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The UidCreateChildToken model module.
 * @module model/UidCreateChildToken
 * @version 0.0.1
 */
class UidCreateChildToken {
    /**
     * Constructs a new <code>UidCreateChildToken</code>.
     * uidCreateChildToken is a command that creates a new child token using Akeyless Universal Identity.
     * @alias module:model/UidCreateChildToken
     */
    constructor() { 
        
        UidCreateChildToken.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UidCreateChildToken</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UidCreateChildToken} obj Optional instance to populate.
     * @return {module:model/UidCreateChildToken} The populated <code>UidCreateChildToken</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UidCreateChildToken();

            if (data.hasOwnProperty('auth-method-name')) {
                obj['auth-method-name'] = ApiClient.convertToType(data['auth-method-name'], 'String');
            }
            if (data.hasOwnProperty('child-deny-inheritance')) {
                obj['child-deny-inheritance'] = ApiClient.convertToType(data['child-deny-inheritance'], 'Boolean');
            }
            if (data.hasOwnProperty('child-deny-rotate')) {
                obj['child-deny-rotate'] = ApiClient.convertToType(data['child-deny-rotate'], 'Boolean');
            }
            if (data.hasOwnProperty('child-ttl')) {
                obj['child-ttl'] = ApiClient.convertToType(data['child-ttl'], 'Number');
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
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
 * The universal identity auth method name
 * @member {String} auth-method-name
 */
UidCreateChildToken.prototype['auth-method-name'] = undefined;

/**
 * Deny from new child to create their own children
 * @member {Boolean} child-deny-inheritance
 */
UidCreateChildToken.prototype['child-deny-inheritance'] = undefined;

/**
 * Deny from new child to rotate
 * @member {Boolean} child-deny-rotate
 */
UidCreateChildToken.prototype['child-deny-rotate'] = undefined;

/**
 * New child token ttl
 * @member {Number} child-ttl
 */
UidCreateChildToken.prototype['child-ttl'] = undefined;

/**
 * New Token comment
 * @member {String} comment
 */
UidCreateChildToken.prototype['comment'] = undefined;

/**
 * Use a specific profile from your akeyless/profiles/ folder
 * @member {String} token
 */
UidCreateChildToken.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UidCreateChildToken.prototype['uid-token'] = undefined;






export default UidCreateChildToken;

