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
import SAMLAttribute from './SAMLAttribute';

/**
 * The SAMLAccessRules model module.
 * @module model/SAMLAccessRules
 * @version 5.0.1
 */
class SAMLAccessRules {
    /**
     * Constructs a new <code>SAMLAccessRules</code>.
     * @alias module:model/SAMLAccessRules
     */
    constructor() { 
        
        SAMLAccessRules.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SAMLAccessRules</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SAMLAccessRules} obj Optional instance to populate.
     * @return {module:model/SAMLAccessRules} The populated <code>SAMLAccessRules</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SAMLAccessRules();

            if (data.hasOwnProperty('allowed_redirect_URIs')) {
                obj['allowed_redirect_URIs'] = ApiClient.convertToType(data['allowed_redirect_URIs'], ['String']);
            }
            if (data.hasOwnProperty('bound_attributes')) {
                obj['bound_attributes'] = ApiClient.convertToType(data['bound_attributes'], [SAMLAttribute]);
            }
            if (data.hasOwnProperty('idp_metadata_url')) {
                obj['idp_metadata_url'] = ApiClient.convertToType(data['idp_metadata_url'], 'String');
            }
            if (data.hasOwnProperty('idp_metadata_xml')) {
                obj['idp_metadata_xml'] = ApiClient.convertToType(data['idp_metadata_xml'], 'String');
            }
            if (data.hasOwnProperty('unique_identifier')) {
                obj['unique_identifier'] = ApiClient.convertToType(data['unique_identifier'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SAMLAccessRules</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SAMLAccessRules</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['allowed_redirect_URIs'])) {
            throw new Error("Expected the field `allowed_redirect_URIs` to be an array in the JSON data but got " + data['allowed_redirect_URIs']);
        }
        if (data['bound_attributes']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['bound_attributes'])) {
                throw new Error("Expected the field `bound_attributes` to be an array in the JSON data but got " + data['bound_attributes']);
            }
            // validate the optional field `bound_attributes` (array)
            for (const item of data['bound_attributes']) {
                SAMLAttribute.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['idp_metadata_url'] && !(typeof data['idp_metadata_url'] === 'string' || data['idp_metadata_url'] instanceof String)) {
            throw new Error("Expected the field `idp_metadata_url` to be a primitive type in the JSON string but got " + data['idp_metadata_url']);
        }
        // ensure the json data is a string
        if (data['idp_metadata_xml'] && !(typeof data['idp_metadata_xml'] === 'string' || data['idp_metadata_xml'] instanceof String)) {
            throw new Error("Expected the field `idp_metadata_xml` to be a primitive type in the JSON string but got " + data['idp_metadata_xml']);
        }
        // ensure the json data is a string
        if (data['unique_identifier'] && !(typeof data['unique_identifier'] === 'string' || data['unique_identifier'] instanceof String)) {
            throw new Error("Expected the field `unique_identifier` to be a primitive type in the JSON string but got " + data['unique_identifier']);
        }

        return true;
    }


}



/**
 * Allowed redirect URIs after the authentication
 * @member {Array.<String>} allowed_redirect_URIs
 */
SAMLAccessRules.prototype['allowed_redirect_URIs'] = undefined;

/**
 * The attributes that login is restricted to.
 * @member {Array.<module:model/SAMLAttribute>} bound_attributes
 */
SAMLAccessRules.prototype['bound_attributes'] = undefined;

/**
 * IDP metadata url
 * @member {String} idp_metadata_url
 */
SAMLAccessRules.prototype['idp_metadata_url'] = undefined;

/**
 * IDP metadata XML
 * @member {String} idp_metadata_xml
 */
SAMLAccessRules.prototype['idp_metadata_xml'] = undefined;

/**
 * A unique identifier to distinguish different users
 * @member {String} unique_identifier
 */
SAMLAccessRules.prototype['unique_identifier'] = undefined;






export default SAMLAccessRules;

