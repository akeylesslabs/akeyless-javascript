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
 * The GetCertificateValue model module.
 * @module model/GetCertificateValue
 * @version 3.5.4
 */
class GetCertificateValue {
    /**
     * Constructs a new <code>GetCertificateValue</code>.
     * @alias module:model/GetCertificateValue
     * @param name {String} Certificate name
     */
    constructor(name) { 
        
        GetCertificateValue.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>GetCertificateValue</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetCertificateValue} obj Optional instance to populate.
     * @return {module:model/GetCertificateValue} The populated <code>GetCertificateValue</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetCertificateValue();

            if (data.hasOwnProperty('cert-issuer-name')) {
                obj['cert-issuer-name'] = ApiClient.convertToType(data['cert-issuer-name'], 'String');
            }
            if (data.hasOwnProperty('display-id')) {
                obj['display-id'] = ApiClient.convertToType(data['display-id'], 'String');
            }
            if (data.hasOwnProperty('ignore-cache')) {
                obj['ignore-cache'] = ApiClient.convertToType(data['ignore-cache'], 'String');
            }
            if (data.hasOwnProperty('issuance-token')) {
                obj['issuance-token'] = ApiClient.convertToType(data['issuance-token'], 'String');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('version')) {
                obj['version'] = ApiClient.convertToType(data['version'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * The parent PKI Certificate Issuer's name of the certificate, required when used with display-id and token
 * @member {String} cert-issuer-name
 */
GetCertificateValue.prototype['cert-issuer-name'] = undefined;

/**
 * Certificate display ID
 * @member {String} display-id
 */
GetCertificateValue.prototype['display-id'] = undefined;

/**
 * Retrieve the Secret value without checking the Gateway's cache [true/false]. This flag is only relevant when using the RestAPI
 * @member {String} ignore-cache
 * @default 'false'
 */
GetCertificateValue.prototype['ignore-cache'] = 'false';

/**
 * Token for getting the issued certificate
 * @member {String} issuance-token
 */
GetCertificateValue.prototype['issuance-token'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GetCertificateValue.prototype['json'] = false;

/**
 * Certificate name
 * @member {String} name
 * @default 'dummy_certificate_name'
 */
GetCertificateValue.prototype['name'] = 'dummy_certificate_name';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GetCertificateValue.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GetCertificateValue.prototype['uid-token'] = undefined;

/**
 * Certificate version
 * @member {Number} version
 */
GetCertificateValue.prototype['version'] = undefined;






export default GetCertificateValue;

