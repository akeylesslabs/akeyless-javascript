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
import AttributeTypeAndValue from './AttributeTypeAndValue';

/**
 * The Name model module.
 * @module model/Name
 * @version 5.0.6
 */
class Name {
    /**
     * Constructs a new <code>Name</code>.
     * Name represents an X.509 distinguished name. This only includes the common elements of a DN. Note that Name is only an approximation of the X.509 structure. If an accurate representation is needed, asn1.Unmarshal the raw subject or issuer as an [RDNSequence].
     * @alias module:model/Name
     */
    constructor() { 
        
        Name.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Name</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Name} obj Optional instance to populate.
     * @return {module:model/Name} The populated <code>Name</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Name();

            if (data.hasOwnProperty('Country')) {
                obj['Country'] = ApiClient.convertToType(data['Country'], ['String']);
            }
            if (data.hasOwnProperty('ExtraNames')) {
                obj['ExtraNames'] = ApiClient.convertToType(data['ExtraNames'], [AttributeTypeAndValue]);
            }
            if (data.hasOwnProperty('Locality')) {
                obj['Locality'] = ApiClient.convertToType(data['Locality'], ['String']);
            }
            if (data.hasOwnProperty('Names')) {
                obj['Names'] = ApiClient.convertToType(data['Names'], [AttributeTypeAndValue]);
            }
            if (data.hasOwnProperty('SerialNumber')) {
                obj['SerialNumber'] = ApiClient.convertToType(data['SerialNumber'], 'String');
            }
            if (data.hasOwnProperty('StreetAddress')) {
                obj['StreetAddress'] = ApiClient.convertToType(data['StreetAddress'], ['String']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Name</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Name</code>.
     */
    static validateJSON(data) {
        // ensure the json data is an array
        if (!Array.isArray(data['Country'])) {
            throw new Error("Expected the field `Country` to be an array in the JSON data but got " + data['Country']);
        }
        if (data['ExtraNames']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['ExtraNames'])) {
                throw new Error("Expected the field `ExtraNames` to be an array in the JSON data but got " + data['ExtraNames']);
            }
            // validate the optional field `ExtraNames` (array)
            for (const item of data['ExtraNames']) {
                AttributeTypeAndValue.validateJSON(item);
            };
        }
        // ensure the json data is an array
        if (!Array.isArray(data['Locality'])) {
            throw new Error("Expected the field `Locality` to be an array in the JSON data but got " + data['Locality']);
        }
        if (data['Names']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['Names'])) {
                throw new Error("Expected the field `Names` to be an array in the JSON data but got " + data['Names']);
            }
            // validate the optional field `Names` (array)
            for (const item of data['Names']) {
                AttributeTypeAndValue.validateJSON(item);
            };
        }
        // ensure the json data is a string
        if (data['SerialNumber'] && !(typeof data['SerialNumber'] === 'string' || data['SerialNumber'] instanceof String)) {
            throw new Error("Expected the field `SerialNumber` to be a primitive type in the JSON string but got " + data['SerialNumber']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['StreetAddress'])) {
            throw new Error("Expected the field `StreetAddress` to be an array in the JSON data but got " + data['StreetAddress']);
        }

        return true;
    }


}



/**
 * @member {Array.<String>} Country
 */
Name.prototype['Country'] = undefined;

/**
 * ExtraNames contains attributes to be copied, raw, into any marshaled distinguished names. Values override any attributes with the same OID. The ExtraNames field is not populated when parsing, see Names.
 * @member {Array.<module:model/AttributeTypeAndValue>} ExtraNames
 */
Name.prototype['ExtraNames'] = undefined;

/**
 * @member {Array.<String>} Locality
 */
Name.prototype['Locality'] = undefined;

/**
 * Names contains all parsed attributes. When parsing distinguished names, this can be used to extract non-standard attributes that are not parsed by this package. When marshaling to RDNSequences, the Names field is ignored, see ExtraNames.
 * @member {Array.<module:model/AttributeTypeAndValue>} Names
 */
Name.prototype['Names'] = undefined;

/**
 * @member {String} SerialNumber
 */
Name.prototype['SerialNumber'] = undefined;

/**
 * @member {Array.<String>} StreetAddress
 */
Name.prototype['StreetAddress'] = undefined;






export default Name;

