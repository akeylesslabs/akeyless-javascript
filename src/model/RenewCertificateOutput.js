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
 * The RenewCertificateOutput model module.
 * @module model/RenewCertificateOutput
 * @version 3.6.0
 */
class RenewCertificateOutput {
    /**
     * Constructs a new <code>RenewCertificateOutput</code>.
     * @alias module:model/RenewCertificateOutput
     */
    constructor() { 
        
        RenewCertificateOutput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>RenewCertificateOutput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RenewCertificateOutput} obj Optional instance to populate.
     * @return {module:model/RenewCertificateOutput} The populated <code>RenewCertificateOutput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RenewCertificateOutput();

            if (data.hasOwnProperty('cert')) {
                obj['cert'] = ApiClient.convertToType(data['cert'], 'String');
            }
            if (data.hasOwnProperty('cert_display_id')) {
                obj['cert_display_id'] = ApiClient.convertToType(data['cert_display_id'], 'String');
            }
            if (data.hasOwnProperty('item_id')) {
                obj['item_id'] = ApiClient.convertToType(data['item_id'], 'String');
            }
            if (data.hasOwnProperty('parent_cert')) {
                obj['parent_cert'] = ApiClient.convertToType(data['parent_cert'], 'String');
            }
            if (data.hasOwnProperty('private_key')) {
                obj['private_key'] = ApiClient.convertToType(data['private_key'], 'String');
            }
            if (data.hasOwnProperty('reading_token')) {
                obj['reading_token'] = ApiClient.convertToType(data['reading_token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} cert
 */
RenewCertificateOutput.prototype['cert'] = undefined;

/**
 * @member {String} cert_display_id
 */
RenewCertificateOutput.prototype['cert_display_id'] = undefined;

/**
 * @member {String} item_id
 */
RenewCertificateOutput.prototype['item_id'] = undefined;

/**
 * @member {String} parent_cert
 */
RenewCertificateOutput.prototype['parent_cert'] = undefined;

/**
 * @member {String} private_key
 */
RenewCertificateOutput.prototype['private_key'] = undefined;

/**
 * @member {String} reading_token
 */
RenewCertificateOutput.prototype['reading_token'] = undefined;






export default RenewCertificateOutput;

