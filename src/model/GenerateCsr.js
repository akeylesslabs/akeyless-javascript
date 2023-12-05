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
 * The GenerateCsr model module.
 * @module model/GenerateCsr
 * @version 3.5.2
 */
class GenerateCsr {
    /**
     * Constructs a new <code>GenerateCsr</code>.
     * @alias module:model/GenerateCsr
     * @param commonName {String} The common name to be included in the CSR certificate
     * @param name {String} The classic key name
     */
    constructor(commonName, name) { 
        
        GenerateCsr.initialize(this, commonName, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, commonName, name) { 
        obj['common-name'] = commonName;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>GenerateCsr</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GenerateCsr} obj Optional instance to populate.
     * @return {module:model/GenerateCsr} The populated <code>GenerateCsr</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GenerateCsr();

            if (data.hasOwnProperty('alg')) {
                obj['alg'] = ApiClient.convertToType(data['alg'], 'String');
            }
            if (data.hasOwnProperty('alt-names')) {
                obj['alt-names'] = ApiClient.convertToType(data['alt-names'], 'String');
            }
            if (data.hasOwnProperty('certificate-type')) {
                obj['certificate-type'] = ApiClient.convertToType(data['certificate-type'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('common-name')) {
                obj['common-name'] = ApiClient.convertToType(data['common-name'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('critical')) {
                obj['critical'] = ApiClient.convertToType(data['critical'], 'Boolean');
            }
            if (data.hasOwnProperty('dep')) {
                obj['dep'] = ApiClient.convertToType(data['dep'], 'String');
            }
            if (data.hasOwnProperty('email-addresses')) {
                obj['email-addresses'] = ApiClient.convertToType(data['email-addresses'], 'String');
            }
            if (data.hasOwnProperty('generate-key')) {
                obj['generate-key'] = ApiClient.convertToType(data['generate-key'], 'Boolean');
            }
            if (data.hasOwnProperty('ip-addresses')) {
                obj['ip-addresses'] = ApiClient.convertToType(data['ip-addresses'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('org')) {
                obj['org'] = ApiClient.convertToType(data['org'], 'String');
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
            if (data.hasOwnProperty('uri-sans')) {
                obj['uri-sans'] = ApiClient.convertToType(data['uri-sans'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} alg
 */
GenerateCsr.prototype['alg'] = undefined;

/**
 * A comma-separated list of dns alternative names
 * @member {String} alt-names
 */
GenerateCsr.prototype['alt-names'] = undefined;

/**
 * The certificate type to be included in the CSR certificate (ssl-client/ssl-server/certificate-signing)
 * @member {String} certificate-type
 */
GenerateCsr.prototype['certificate-type'] = undefined;

/**
 * The city to be included in the CSR certificate
 * @member {String} city
 */
GenerateCsr.prototype['city'] = undefined;

/**
 * The common name to be included in the CSR certificate
 * @member {String} common-name
 */
GenerateCsr.prototype['common-name'] = undefined;

/**
 * The country to be included in the CSR certificate
 * @member {String} country
 */
GenerateCsr.prototype['country'] = undefined;

/**
 * Add critical to the key usage extension (will be false if not added)
 * @member {Boolean} critical
 */
GenerateCsr.prototype['critical'] = undefined;

/**
 * The department to be included in the CSR certificate
 * @member {String} dep
 */
GenerateCsr.prototype['dep'] = undefined;

/**
 * A comma-separated list of email addresses alternative names
 * @member {String} email-addresses
 */
GenerateCsr.prototype['email-addresses'] = undefined;

/**
 * Generate a new classic key for the csr
 * @member {Boolean} generate-key
 */
GenerateCsr.prototype['generate-key'] = undefined;

/**
 * A comma-separated list of ip addresses alternative names
 * @member {String} ip-addresses
 */
GenerateCsr.prototype['ip-addresses'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GenerateCsr.prototype['json'] = false;

/**
 * The classic key name
 * @member {String} name
 */
GenerateCsr.prototype['name'] = undefined;

/**
 * The organization to be included in the CSR certificate
 * @member {String} org
 */
GenerateCsr.prototype['org'] = undefined;

/**
 * The state to be included in the CSR certificate
 * @member {String} state
 */
GenerateCsr.prototype['state'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GenerateCsr.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GenerateCsr.prototype['uid-token'] = undefined;

/**
 * A comma-separated list of uri alternative names
 * @member {String} uri-sans
 */
GenerateCsr.prototype['uri-sans'] = undefined;






export default GenerateCsr;

