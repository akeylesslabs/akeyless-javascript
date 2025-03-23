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
import WebBastionGuacamole from './WebBastionGuacamole';
import WebBastionRdpRecord from './WebBastionRdpRecord';

/**
 * The WebBastionConf model module.
 * @module model/WebBastionConf
 * @version 5.0.1
 */
class WebBastionConf {
    /**
     * Constructs a new <code>WebBastionConf</code>.
     * @alias module:model/WebBastionConf
     */
    constructor() { 
        
        WebBastionConf.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebBastionConf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebBastionConf} obj Optional instance to populate.
     * @return {module:model/WebBastionConf} The populated <code>WebBastionConf</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebBastionConf();

            if (data.hasOwnProperty('guacamole')) {
                obj['guacamole'] = WebBastionGuacamole.constructFromObject(data['guacamole']);
            }
            if (data.hasOwnProperty('rdp_record')) {
                obj['rdp_record'] = WebBastionRdpRecord.constructFromObject(data['rdp_record']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>WebBastionConf</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>WebBastionConf</code>.
     */
    static validateJSON(data) {
        // validate the optional field `guacamole`
        if (data['guacamole']) { // data not null
          WebBastionGuacamole.validateJSON(data['guacamole']);
        }
        // validate the optional field `rdp_record`
        if (data['rdp_record']) { // data not null
          WebBastionRdpRecord.validateJSON(data['rdp_record']);
        }

        return true;
    }


}



/**
 * @member {module:model/WebBastionGuacamole} guacamole
 */
WebBastionConf.prototype['guacamole'] = undefined;

/**
 * @member {module:model/WebBastionRdpRecord} rdp_record
 */
WebBastionConf.prototype['rdp_record'] = undefined;






export default WebBastionConf;

