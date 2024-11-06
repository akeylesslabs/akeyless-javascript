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
 * The WebBastionGuacamole model module.
 * @module model/WebBastionGuacamole
 * @version 4.3.0
 */
class WebBastionGuacamole {
    /**
     * Constructs a new <code>WebBastionGuacamole</code>.
     * @alias module:model/WebBastionGuacamole
     */
    constructor() { 
        
        WebBastionGuacamole.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>WebBastionGuacamole</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/WebBastionGuacamole} obj Optional instance to populate.
     * @return {module:model/WebBastionGuacamole} The populated <code>WebBastionGuacamole</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WebBastionGuacamole();

            if (data.hasOwnProperty('keyboard_layout')) {
                obj['keyboard_layout'] = ApiClient.convertToType(data['keyboard_layout'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} keyboard_layout
 */
WebBastionGuacamole.prototype['keyboard_layout'] = undefined;






export default WebBastionGuacamole;

