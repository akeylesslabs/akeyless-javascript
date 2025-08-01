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
 * The UIDTokenDetails model module.
 * @module model/UIDTokenDetails
 * @version 5.0.6
 */
class UIDTokenDetails {
    /**
     * Constructs a new <code>UIDTokenDetails</code>.
     * @alias module:model/UIDTokenDetails
     */
    constructor() { 
        
        UIDTokenDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UIDTokenDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UIDTokenDetails} obj Optional instance to populate.
     * @return {module:model/UIDTokenDetails} The populated <code>UIDTokenDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UIDTokenDetails();

            if (data.hasOwnProperty('children')) {
                obj['children'] = ApiClient.convertToType(data['children'], {'String': UIDTokenDetails});
            }
            if (data.hasOwnProperty('comment')) {
                obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
            }
            if (data.hasOwnProperty('deny_inheritance')) {
                obj['deny_inheritance'] = ApiClient.convertToType(data['deny_inheritance'], 'Boolean');
            }
            if (data.hasOwnProperty('deny_rotate')) {
                obj['deny_rotate'] = ApiClient.convertToType(data['deny_rotate'], 'Boolean');
            }
            if (data.hasOwnProperty('depth')) {
                obj['depth'] = ApiClient.convertToType(data['depth'], 'Number');
            }
            if (data.hasOwnProperty('expired_date')) {
                obj['expired_date'] = ApiClient.convertToType(data['expired_date'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('last_rotate')) {
                obj['last_rotate'] = ApiClient.convertToType(data['last_rotate'], 'String');
            }
            if (data.hasOwnProperty('revoked')) {
                obj['revoked'] = ApiClient.convertToType(data['revoked'], 'Boolean');
            }
            if (data.hasOwnProperty('ttl')) {
                obj['ttl'] = ApiClient.convertToType(data['ttl'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UIDTokenDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UIDTokenDetails</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['comment'] && !(typeof data['comment'] === 'string' || data['comment'] instanceof String)) {
            throw new Error("Expected the field `comment` to be a primitive type in the JSON string but got " + data['comment']);
        }
        // ensure the json data is a string
        if (data['expired_date'] && !(typeof data['expired_date'] === 'string' || data['expired_date'] instanceof String)) {
            throw new Error("Expected the field `expired_date` to be a primitive type in the JSON string but got " + data['expired_date']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['last_rotate'] && !(typeof data['last_rotate'] === 'string' || data['last_rotate'] instanceof String)) {
            throw new Error("Expected the field `last_rotate` to be a primitive type in the JSON string but got " + data['last_rotate']);
        }

        return true;
    }


}



/**
 * @member {Object.<String, module:model/UIDTokenDetails>} children
 */
UIDTokenDetails.prototype['children'] = undefined;

/**
 * @member {String} comment
 */
UIDTokenDetails.prototype['comment'] = undefined;

/**
 * @member {Boolean} deny_inheritance
 */
UIDTokenDetails.prototype['deny_inheritance'] = undefined;

/**
 * @member {Boolean} deny_rotate
 */
UIDTokenDetails.prototype['deny_rotate'] = undefined;

/**
 * @member {Number} depth
 */
UIDTokenDetails.prototype['depth'] = undefined;

/**
 * @member {String} expired_date
 */
UIDTokenDetails.prototype['expired_date'] = undefined;

/**
 * @member {String} id
 */
UIDTokenDetails.prototype['id'] = undefined;

/**
 * @member {String} last_rotate
 */
UIDTokenDetails.prototype['last_rotate'] = undefined;

/**
 * @member {Boolean} revoked
 */
UIDTokenDetails.prototype['revoked'] = undefined;

/**
 * @member {Number} ttl
 */
UIDTokenDetails.prototype['ttl'] = undefined;






export default UIDTokenDetails;

