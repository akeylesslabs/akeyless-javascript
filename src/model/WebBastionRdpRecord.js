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
import AwsStorage from './AwsStorage';
import AzureStorage from './AzureStorage';

/**
 * The WebBastionRdpRecord model module.
 * @module model/WebBastionRdpRecord
 * @version 4.2.4
 */
class WebBastionRdpRecord {
    /**
     * Constructs a new <code>WebBastionRdpRecord</code>.
     * @alias module:model/WebBastionRdpRecord
     */
    constructor() { 
        
        WebBastionRdpRecord.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebBastionRdpRecord</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebBastionRdpRecord} obj Optional instance to populate.
     * @return {module:model/WebBastionRdpRecord} The populated <code>WebBastionRdpRecord</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebBastionRdpRecord();

            if (data.hasOwnProperty('aws')) {
                obj['aws'] = AwsStorage.constructFromObject(data['aws']);
            }
            if (data.hasOwnProperty('azure')) {
                obj['azure'] = AzureStorage.constructFromObject(data['azure']);
            }
            if (data.hasOwnProperty('storage_type')) {
                obj['storage_type'] = ApiClient.convertToType(data['storage_type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/AwsStorage} aws
 */
WebBastionRdpRecord.prototype['aws'] = undefined;

/**
 * @member {module:model/AzureStorage} azure
 */
WebBastionRdpRecord.prototype['azure'] = undefined;

/**
 * @member {String} storage_type
 */
WebBastionRdpRecord.prototype['storage_type'] = undefined;






export default WebBastionRdpRecord;

