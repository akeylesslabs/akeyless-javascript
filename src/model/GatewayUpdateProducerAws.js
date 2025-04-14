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
 * The GatewayUpdateProducerAws model module.
 * @module model/GatewayUpdateProducerAws
 * @version 5.0.3
 */
class GatewayUpdateProducerAws {
    /**
     * Constructs a new <code>GatewayUpdateProducerAws</code>.
     * gatewayUpdateProducerAws is a command that Updates aws producer [Deprecated: Use dynamic-secret-update-aws command]
     * @alias module:model/GatewayUpdateProducerAws
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        GatewayUpdateProducerAws.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['admin-rotation-interval-days'] = 0;
        obj['aws-user-console-access'] = false;
        obj['aws-user-programmatic-access'] = true;
        obj['enable-admin-rotation'] = false;
        obj['json'] = false;
        obj['name'] = name;
        obj['region'] = 'us-east-2';
        obj['secure-access-web'] = true;
        obj['secure-access-web-browsing'] = false;
        obj['secure-access-web-proxy'] = false;
        obj['user-ttl'] = '60m';
    }

    /**
     * Constructs a <code>GatewayUpdateProducerAws</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GatewayUpdateProducerAws} obj Optional instance to populate.
     * @return {module:model/GatewayUpdateProducerAws} The populated <code>GatewayUpdateProducerAws</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GatewayUpdateProducerAws();

            if (data.hasOwnProperty('access-mode')) {
                obj['access-mode'] = ApiClient.convertToType(data['access-mode'], 'String');
            }
            if (data.hasOwnProperty('admin-rotation-interval-days')) {
                obj['admin-rotation-interval-days'] = ApiClient.convertToType(data['admin-rotation-interval-days'], 'Number');
            }
            if (data.hasOwnProperty('aws-access-key-id')) {
                obj['aws-access-key-id'] = ApiClient.convertToType(data['aws-access-key-id'], 'String');
            }
            if (data.hasOwnProperty('aws-access-secret-key')) {
                obj['aws-access-secret-key'] = ApiClient.convertToType(data['aws-access-secret-key'], 'String');
            }
            if (data.hasOwnProperty('aws-role-arns')) {
                obj['aws-role-arns'] = ApiClient.convertToType(data['aws-role-arns'], 'String');
            }
            if (data.hasOwnProperty('aws-user-console-access')) {
                obj['aws-user-console-access'] = ApiClient.convertToType(data['aws-user-console-access'], 'Boolean');
            }
            if (data.hasOwnProperty('aws-user-groups')) {
                obj['aws-user-groups'] = ApiClient.convertToType(data['aws-user-groups'], 'String');
            }
            if (data.hasOwnProperty('aws-user-policies')) {
                obj['aws-user-policies'] = ApiClient.convertToType(data['aws-user-policies'], 'String');
            }
            if (data.hasOwnProperty('aws-user-programmatic-access')) {
                obj['aws-user-programmatic-access'] = ApiClient.convertToType(data['aws-user-programmatic-access'], 'Boolean');
            }
            if (data.hasOwnProperty('delete_protection')) {
                obj['delete_protection'] = ApiClient.convertToType(data['delete_protection'], 'String');
            }
            if (data.hasOwnProperty('enable-admin-rotation')) {
                obj['enable-admin-rotation'] = ApiClient.convertToType(data['enable-admin-rotation'], 'Boolean');
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('new-name')) {
                obj['new-name'] = ApiClient.convertToType(data['new-name'], 'String');
            }
            if (data.hasOwnProperty('password-length')) {
                obj['password-length'] = ApiClient.convertToType(data['password-length'], 'String');
            }
            if (data.hasOwnProperty('producer-encryption-key-name')) {
                obj['producer-encryption-key-name'] = ApiClient.convertToType(data['producer-encryption-key-name'], 'String');
            }
            if (data.hasOwnProperty('region')) {
                obj['region'] = ApiClient.convertToType(data['region'], 'String');
            }
            if (data.hasOwnProperty('secure-access-aws-account-id')) {
                obj['secure-access-aws-account-id'] = ApiClient.convertToType(data['secure-access-aws-account-id'], 'String');
            }
            if (data.hasOwnProperty('secure-access-aws-native-cli')) {
                obj['secure-access-aws-native-cli'] = ApiClient.convertToType(data['secure-access-aws-native-cli'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-bastion-issuer')) {
                obj['secure-access-bastion-issuer'] = ApiClient.convertToType(data['secure-access-bastion-issuer'], 'String');
            }
            if (data.hasOwnProperty('secure-access-certificate-issuer')) {
                obj['secure-access-certificate-issuer'] = ApiClient.convertToType(data['secure-access-certificate-issuer'], 'String');
            }
            if (data.hasOwnProperty('secure-access-delay')) {
                obj['secure-access-delay'] = ApiClient.convertToType(data['secure-access-delay'], 'Number');
            }
            if (data.hasOwnProperty('secure-access-enable')) {
                obj['secure-access-enable'] = ApiClient.convertToType(data['secure-access-enable'], 'String');
            }
            if (data.hasOwnProperty('secure-access-web')) {
                obj['secure-access-web'] = ApiClient.convertToType(data['secure-access-web'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-browsing')) {
                obj['secure-access-web-browsing'] = ApiClient.convertToType(data['secure-access-web-browsing'], 'Boolean');
            }
            if (data.hasOwnProperty('secure-access-web-proxy')) {
                obj['secure-access-web-proxy'] = ApiClient.convertToType(data['secure-access-web-proxy'], 'Boolean');
            }
            if (data.hasOwnProperty('session-tags')) {
                obj['session-tags'] = ApiClient.convertToType(data['session-tags'], 'String');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('target-name')) {
                obj['target-name'] = ApiClient.convertToType(data['target-name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('transitive-tag-keys')) {
                obj['transitive-tag-keys'] = ApiClient.convertToType(data['transitive-tag-keys'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
            if (data.hasOwnProperty('user-ttl')) {
                obj['user-ttl'] = ApiClient.convertToType(data['user-ttl'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>GatewayUpdateProducerAws</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>GatewayUpdateProducerAws</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of GatewayUpdateProducerAws.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['access-mode'] && !(typeof data['access-mode'] === 'string' || data['access-mode'] instanceof String)) {
            throw new Error("Expected the field `access-mode` to be a primitive type in the JSON string but got " + data['access-mode']);
        }
        // ensure the json data is a string
        if (data['aws-access-key-id'] && !(typeof data['aws-access-key-id'] === 'string' || data['aws-access-key-id'] instanceof String)) {
            throw new Error("Expected the field `aws-access-key-id` to be a primitive type in the JSON string but got " + data['aws-access-key-id']);
        }
        // ensure the json data is a string
        if (data['aws-access-secret-key'] && !(typeof data['aws-access-secret-key'] === 'string' || data['aws-access-secret-key'] instanceof String)) {
            throw new Error("Expected the field `aws-access-secret-key` to be a primitive type in the JSON string but got " + data['aws-access-secret-key']);
        }
        // ensure the json data is a string
        if (data['aws-role-arns'] && !(typeof data['aws-role-arns'] === 'string' || data['aws-role-arns'] instanceof String)) {
            throw new Error("Expected the field `aws-role-arns` to be a primitive type in the JSON string but got " + data['aws-role-arns']);
        }
        // ensure the json data is a string
        if (data['aws-user-groups'] && !(typeof data['aws-user-groups'] === 'string' || data['aws-user-groups'] instanceof String)) {
            throw new Error("Expected the field `aws-user-groups` to be a primitive type in the JSON string but got " + data['aws-user-groups']);
        }
        // ensure the json data is a string
        if (data['aws-user-policies'] && !(typeof data['aws-user-policies'] === 'string' || data['aws-user-policies'] instanceof String)) {
            throw new Error("Expected the field `aws-user-policies` to be a primitive type in the JSON string but got " + data['aws-user-policies']);
        }
        // ensure the json data is a string
        if (data['delete_protection'] && !(typeof data['delete_protection'] === 'string' || data['delete_protection'] instanceof String)) {
            throw new Error("Expected the field `delete_protection` to be a primitive type in the JSON string but got " + data['delete_protection']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['new-name'] && !(typeof data['new-name'] === 'string' || data['new-name'] instanceof String)) {
            throw new Error("Expected the field `new-name` to be a primitive type in the JSON string but got " + data['new-name']);
        }
        // ensure the json data is a string
        if (data['password-length'] && !(typeof data['password-length'] === 'string' || data['password-length'] instanceof String)) {
            throw new Error("Expected the field `password-length` to be a primitive type in the JSON string but got " + data['password-length']);
        }
        // ensure the json data is a string
        if (data['producer-encryption-key-name'] && !(typeof data['producer-encryption-key-name'] === 'string' || data['producer-encryption-key-name'] instanceof String)) {
            throw new Error("Expected the field `producer-encryption-key-name` to be a primitive type in the JSON string but got " + data['producer-encryption-key-name']);
        }
        // ensure the json data is a string
        if (data['region'] && !(typeof data['region'] === 'string' || data['region'] instanceof String)) {
            throw new Error("Expected the field `region` to be a primitive type in the JSON string but got " + data['region']);
        }
        // ensure the json data is a string
        if (data['secure-access-aws-account-id'] && !(typeof data['secure-access-aws-account-id'] === 'string' || data['secure-access-aws-account-id'] instanceof String)) {
            throw new Error("Expected the field `secure-access-aws-account-id` to be a primitive type in the JSON string but got " + data['secure-access-aws-account-id']);
        }
        // ensure the json data is a string
        if (data['secure-access-bastion-issuer'] && !(typeof data['secure-access-bastion-issuer'] === 'string' || data['secure-access-bastion-issuer'] instanceof String)) {
            throw new Error("Expected the field `secure-access-bastion-issuer` to be a primitive type in the JSON string but got " + data['secure-access-bastion-issuer']);
        }
        // ensure the json data is a string
        if (data['secure-access-certificate-issuer'] && !(typeof data['secure-access-certificate-issuer'] === 'string' || data['secure-access-certificate-issuer'] instanceof String)) {
            throw new Error("Expected the field `secure-access-certificate-issuer` to be a primitive type in the JSON string but got " + data['secure-access-certificate-issuer']);
        }
        // ensure the json data is a string
        if (data['secure-access-enable'] && !(typeof data['secure-access-enable'] === 'string' || data['secure-access-enable'] instanceof String)) {
            throw new Error("Expected the field `secure-access-enable` to be a primitive type in the JSON string but got " + data['secure-access-enable']);
        }
        // ensure the json data is a string
        if (data['session-tags'] && !(typeof data['session-tags'] === 'string' || data['session-tags'] instanceof String)) {
            throw new Error("Expected the field `session-tags` to be a primitive type in the JSON string but got " + data['session-tags']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['tags'])) {
            throw new Error("Expected the field `tags` to be an array in the JSON data but got " + data['tags']);
        }
        // ensure the json data is a string
        if (data['target-name'] && !(typeof data['target-name'] === 'string' || data['target-name'] instanceof String)) {
            throw new Error("Expected the field `target-name` to be a primitive type in the JSON string but got " + data['target-name']);
        }
        // ensure the json data is a string
        if (data['token'] && !(typeof data['token'] === 'string' || data['token'] instanceof String)) {
            throw new Error("Expected the field `token` to be a primitive type in the JSON string but got " + data['token']);
        }
        // ensure the json data is a string
        if (data['transitive-tag-keys'] && !(typeof data['transitive-tag-keys'] === 'string' || data['transitive-tag-keys'] instanceof String)) {
            throw new Error("Expected the field `transitive-tag-keys` to be a primitive type in the JSON string but got " + data['transitive-tag-keys']);
        }
        // ensure the json data is a string
        if (data['uid-token'] && !(typeof data['uid-token'] === 'string' || data['uid-token'] instanceof String)) {
            throw new Error("Expected the field `uid-token` to be a primitive type in the JSON string but got " + data['uid-token']);
        }
        // ensure the json data is a string
        if (data['user-ttl'] && !(typeof data['user-ttl'] === 'string' || data['user-ttl'] instanceof String)) {
            throw new Error("Expected the field `user-ttl` to be a primitive type in the JSON string but got " + data['user-ttl']);
        }

        return true;
    }


}

GatewayUpdateProducerAws.RequiredProperties = ["name"];

/**
 * @member {String} access-mode
 */
GatewayUpdateProducerAws.prototype['access-mode'] = undefined;

/**
 * Admin credentials rotation interval (days)
 * @member {Number} admin-rotation-interval-days
 * @default 0
 */
GatewayUpdateProducerAws.prototype['admin-rotation-interval-days'] = 0;

/**
 * Access Key ID
 * @member {String} aws-access-key-id
 */
GatewayUpdateProducerAws.prototype['aws-access-key-id'] = undefined;

/**
 * Secret Access Key
 * @member {String} aws-access-secret-key
 */
GatewayUpdateProducerAws.prototype['aws-access-secret-key'] = undefined;

/**
 * AWS Role ARNs to be used in the Assume Role operation (relevant only for assume_role mode)
 * @member {String} aws-role-arns
 */
GatewayUpdateProducerAws.prototype['aws-role-arns'] = undefined;

/**
 * AWS User console access
 * @member {Boolean} aws-user-console-access
 * @default false
 */
GatewayUpdateProducerAws.prototype['aws-user-console-access'] = false;

/**
 * AWS User groups
 * @member {String} aws-user-groups
 */
GatewayUpdateProducerAws.prototype['aws-user-groups'] = undefined;

/**
 * AWS User policies
 * @member {String} aws-user-policies
 */
GatewayUpdateProducerAws.prototype['aws-user-policies'] = undefined;

/**
 * Enable AWS User programmatic access
 * @member {Boolean} aws-user-programmatic-access
 * @default true
 */
GatewayUpdateProducerAws.prototype['aws-user-programmatic-access'] = true;

/**
 * Protection from accidental deletion of this object [true/false]
 * @member {String} delete_protection
 */
GatewayUpdateProducerAws.prototype['delete_protection'] = undefined;

/**
 * Automatic admin credentials rotation
 * @member {Boolean} enable-admin-rotation
 * @default false
 */
GatewayUpdateProducerAws.prototype['enable-admin-rotation'] = false;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
GatewayUpdateProducerAws.prototype['json'] = false;

/**
 * Dynamic secret name
 * @member {String} name
 */
GatewayUpdateProducerAws.prototype['name'] = undefined;

/**
 * Dynamic secret name
 * @member {String} new-name
 */
GatewayUpdateProducerAws.prototype['new-name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
GatewayUpdateProducerAws.prototype['password-length'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
GatewayUpdateProducerAws.prototype['producer-encryption-key-name'] = undefined;

/**
 * Region
 * @member {String} region
 * @default 'us-east-2'
 */
GatewayUpdateProducerAws.prototype['region'] = 'us-east-2';

/**
 * The AWS account id
 * @member {String} secure-access-aws-account-id
 */
GatewayUpdateProducerAws.prototype['secure-access-aws-account-id'] = undefined;

/**
 * The AWS native cli
 * @member {Boolean} secure-access-aws-native-cli
 */
GatewayUpdateProducerAws.prototype['secure-access-aws-native-cli'] = undefined;

/**
 * Deprecated. use secure-access-certificate-issuer
 * @member {String} secure-access-bastion-issuer
 */
GatewayUpdateProducerAws.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Secure Access
 * @member {String} secure-access-certificate-issuer
 */
GatewayUpdateProducerAws.prototype['secure-access-certificate-issuer'] = undefined;

/**
 * The delay duration, in seconds, to wait after generating just-in-time credentials. Accepted range: 0-120 seconds
 * @member {Number} secure-access-delay
 */
GatewayUpdateProducerAws.prototype['secure-access-delay'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
GatewayUpdateProducerAws.prototype['secure-access-enable'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default true
 */
GatewayUpdateProducerAws.prototype['secure-access-web'] = true;

/**
 * Secure browser via Akeyless's Secure Remote Access (SRA)
 * @member {Boolean} secure-access-web-browsing
 * @default false
 */
GatewayUpdateProducerAws.prototype['secure-access-web-browsing'] = false;

/**
 * Web-Proxy via Akeyless's Secure Remote Access (SRA)
 * @member {Boolean} secure-access-web-proxy
 * @default false
 */
GatewayUpdateProducerAws.prototype['secure-access-web-proxy'] = false;

/**
 * String of Key value session tags comma separated, relevant only for Assumed Role
 * @member {String} session-tags
 */
GatewayUpdateProducerAws.prototype['session-tags'] = undefined;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
GatewayUpdateProducerAws.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
GatewayUpdateProducerAws.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
GatewayUpdateProducerAws.prototype['token'] = undefined;

/**
 * String of transitive tag keys space separated, relevant only for Assumed Role
 * @member {String} transitive-tag-keys
 */
GatewayUpdateProducerAws.prototype['transitive-tag-keys'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
GatewayUpdateProducerAws.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
GatewayUpdateProducerAws.prototype['user-ttl'] = '60m';






export default GatewayUpdateProducerAws;

