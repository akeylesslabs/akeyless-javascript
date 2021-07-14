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
import CertificateIssueInfo from './CertificateIssueInfo';
import ClassicKeyDetailsInfo from './ClassicKeyDetailsInfo';
import DynamicSecretProducerInfo from './DynamicSecretProducerInfo';
import RotatedSecretDetailsInfo from './RotatedSecretDetailsInfo';

/**
 * The ItemGeneralInfo model module.
 * @module model/ItemGeneralInfo
 * @version 2.5.3
 */
class ItemGeneralInfo {
    /**
     * Constructs a new <code>ItemGeneralInfo</code>.
     * @alias module:model/ItemGeneralInfo
     */
    constructor() { 
        
        ItemGeneralInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ItemGeneralInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ItemGeneralInfo} obj Optional instance to populate.
     * @return {module:model/ItemGeneralInfo} The populated <code>ItemGeneralInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ItemGeneralInfo();

            if (data.hasOwnProperty('cert_issue_details')) {
                obj['cert_issue_details'] = CertificateIssueInfo.constructFromObject(data['cert_issue_details']);
            }
            if (data.hasOwnProperty('classic_key_details')) {
                obj['classic_key_details'] = ClassicKeyDetailsInfo.constructFromObject(data['classic_key_details']);
            }
            if (data.hasOwnProperty('dynamic_secret_producer_details')) {
                obj['dynamic_secret_producer_details'] = DynamicSecretProducerInfo.constructFromObject(data['dynamic_secret_producer_details']);
            }
            if (data.hasOwnProperty('rotated_secret_details')) {
                obj['rotated_secret_details'] = RotatedSecretDetailsInfo.constructFromObject(data['rotated_secret_details']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/CertificateIssueInfo} cert_issue_details
 */
ItemGeneralInfo.prototype['cert_issue_details'] = undefined;

/**
 * @member {module:model/ClassicKeyDetailsInfo} classic_key_details
 */
ItemGeneralInfo.prototype['classic_key_details'] = undefined;

/**
 * @member {module:model/DynamicSecretProducerInfo} dynamic_secret_producer_details
 */
ItemGeneralInfo.prototype['dynamic_secret_producer_details'] = undefined;

/**
 * @member {module:model/RotatedSecretDetailsInfo} rotated_secret_details
 */
ItemGeneralInfo.prototype['rotated_secret_details'] = undefined;






export default ItemGeneralInfo;

