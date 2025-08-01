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
 * The UpdateAssoc model module.
 * @module model/UpdateAssoc
 * @version 5.0.6
 */
class UpdateAssoc {
    /**
     * Constructs a new <code>UpdateAssoc</code>.
     * updateAssoc is a command that updates the sub-claims of an association between role and auth method.
     * @alias module:model/UpdateAssoc
     * @param assocId {String} The association id to be updated
     */
    constructor(assocId) { 
        
        UpdateAssoc.initialize(this, assocId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, assocId) { 
        obj['assoc-id'] = assocId;
        obj['case-sensitive'] = 'true';
        obj['json'] = false;
    }

    /**
     * Constructs a <code>UpdateAssoc</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UpdateAssoc} obj Optional instance to populate.
     * @return {module:model/UpdateAssoc} The populated <code>UpdateAssoc</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateAssoc();

            if (data.hasOwnProperty('assoc-id')) {
                obj['assoc-id'] = ApiClient.convertToType(data['assoc-id'], 'String');
            }
            if (data.hasOwnProperty('case-sensitive')) {
                obj['case-sensitive'] = ApiClient.convertToType(data['case-sensitive'], 'String');
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

    /**
     * Validates the JSON data with respect to <code>UpdateAssoc</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UpdateAssoc</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UpdateAssoc.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['assoc-id'] && !(typeof data['assoc-id'] === 'string' || data['assoc-id'] instanceof String)) {
            throw new Error("Expected the field `assoc-id` to be a primitive type in the JSON string but got " + data['assoc-id']);
        }
        // ensure the json data is a string
        if (data['case-sensitive'] && !(typeof data['case-sensitive'] === 'string' || data['case-sensitive'] instanceof String)) {
            throw new Error("Expected the field `case-sensitive` to be a primitive type in the JSON string but got " + data['case-sensitive']);
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

UpdateAssoc.RequiredProperties = ["assoc-id"];

/**
 * The association id to be updated
 * @member {String} assoc-id
 */
UpdateAssoc.prototype['assoc-id'] = undefined;

/**
 * Treat sub claims as case-sensitive [true/false]
 * @member {String} case-sensitive
 * @default 'true'
 */
UpdateAssoc.prototype['case-sensitive'] = 'true';

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
UpdateAssoc.prototype['json'] = false;

/**
 * key/val of sub claims, e.g group=admins,developers
 * @member {Object.<String, String>} sub-claims
 */
UpdateAssoc.prototype['sub-claims'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
UpdateAssoc.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
UpdateAssoc.prototype['uid-token'] = undefined;






export default UpdateAssoc;

