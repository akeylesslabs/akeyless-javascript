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
 * The DynamicSecretCreateAws model module.
 * @module model/DynamicSecretCreateAws
 * @version 4.0.0
 */
class DynamicSecretCreateAws {
    /**
     * Constructs a new <code>DynamicSecretCreateAws</code>.
     * dynamicSecretCreateAws is a command that creates aws dynamic secret
     * @alias module:model/DynamicSecretCreateAws
     * @param name {String} Dynamic secret name
     */
    constructor(name) { 
        
        DynamicSecretCreateAws.initialize(this, name);
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
     * Constructs a <code>DynamicSecretCreateAws</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DynamicSecretCreateAws} obj Optional instance to populate.
     * @return {module:model/DynamicSecretCreateAws} The populated <code>DynamicSecretCreateAws</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DynamicSecretCreateAws();

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
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
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
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
            }
            if (data.hasOwnProperty('target-name')) {
                obj['target-name'] = ApiClient.convertToType(data['target-name'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
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


}

/**
 * @member {String} access-mode
 */
DynamicSecretCreateAws.prototype['access-mode'] = undefined;

/**
 * Admin credentials rotation interval (days)
 * @member {Number} admin-rotation-interval-days
 * @default 0
 */
DynamicSecretCreateAws.prototype['admin-rotation-interval-days'] = 0;

/**
 * Access Key ID
 * @member {String} aws-access-key-id
 */
DynamicSecretCreateAws.prototype['aws-access-key-id'] = undefined;

/**
 * Secret Access Key
 * @member {String} aws-access-secret-key
 */
DynamicSecretCreateAws.prototype['aws-access-secret-key'] = undefined;

/**
 * AWS Role ARNs to be used in the Assume Role operation (relevant only for assume_role mode)
 * @member {String} aws-role-arns
 */
DynamicSecretCreateAws.prototype['aws-role-arns'] = undefined;

/**
 * AWS User console access
 * @member {Boolean} aws-user-console-access
 * @default false
 */
DynamicSecretCreateAws.prototype['aws-user-console-access'] = false;

/**
 * AWS User groups
 * @member {String} aws-user-groups
 */
DynamicSecretCreateAws.prototype['aws-user-groups'] = undefined;

/**
 * AWS User policies
 * @member {String} aws-user-policies
 */
DynamicSecretCreateAws.prototype['aws-user-policies'] = undefined;

/**
 * Enable AWS User programmatic access
 * @member {Boolean} aws-user-programmatic-access
 * @default true
 */
DynamicSecretCreateAws.prototype['aws-user-programmatic-access'] = true;

/**
 * Protection from accidental deletion of this item [true/false]
 * @member {String} delete_protection
 */
DynamicSecretCreateAws.prototype['delete_protection'] = undefined;

/**
 * Description of the object
 * @member {String} description
 */
DynamicSecretCreateAws.prototype['description'] = undefined;

/**
 * Automatic admin credentials rotation
 * @member {Boolean} enable-admin-rotation
 * @default false
 */
DynamicSecretCreateAws.prototype['enable-admin-rotation'] = false;

/**
 * Set output format to JSON
 * @member {Boolean} json
 * @default false
 */
DynamicSecretCreateAws.prototype['json'] = false;

/**
 * Dynamic secret name
 * @member {String} name
 */
DynamicSecretCreateAws.prototype['name'] = undefined;

/**
 * The length of the password to be generated
 * @member {String} password-length
 */
DynamicSecretCreateAws.prototype['password-length'] = undefined;

/**
 * Dynamic producer encryption key
 * @member {String} producer-encryption-key-name
 */
DynamicSecretCreateAws.prototype['producer-encryption-key-name'] = undefined;

/**
 * Region
 * @member {String} region
 * @default 'us-east-2'
 */
DynamicSecretCreateAws.prototype['region'] = 'us-east-2';

/**
 * The AWS account id
 * @member {String} secure-access-aws-account-id
 */
DynamicSecretCreateAws.prototype['secure-access-aws-account-id'] = undefined;

/**
 * The AWS native cli
 * @member {Boolean} secure-access-aws-native-cli
 */
DynamicSecretCreateAws.prototype['secure-access-aws-native-cli'] = undefined;

/**
 * Path to the SSH Certificate Issuer for your Akeyless Bastion
 * @member {String} secure-access-bastion-issuer
 */
DynamicSecretCreateAws.prototype['secure-access-bastion-issuer'] = undefined;

/**
 * Enable/Disable secure remote access [true/false]
 * @member {String} secure-access-enable
 */
DynamicSecretCreateAws.prototype['secure-access-enable'] = undefined;

/**
 * Enable Web Secure Remote Access
 * @member {Boolean} secure-access-web
 * @default true
 */
DynamicSecretCreateAws.prototype['secure-access-web'] = true;

/**
 * Secure browser via Akeyless Web Access Bastion
 * @member {Boolean} secure-access-web-browsing
 * @default false
 */
DynamicSecretCreateAws.prototype['secure-access-web-browsing'] = false;

/**
 * Web-Proxy via Akeyless Web Access Bastion
 * @member {Boolean} secure-access-web-proxy
 * @default false
 */
DynamicSecretCreateAws.prototype['secure-access-web-proxy'] = false;

/**
 * Add tags attached to this object
 * @member {Array.<String>} tags
 */
DynamicSecretCreateAws.prototype['tags'] = undefined;

/**
 * Target name
 * @member {String} target-name
 */
DynamicSecretCreateAws.prototype['target-name'] = undefined;

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
DynamicSecretCreateAws.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
DynamicSecretCreateAws.prototype['uid-token'] = undefined;

/**
 * User TTL
 * @member {String} user-ttl
 * @default '60m'
 */
DynamicSecretCreateAws.prototype['user-ttl'] = '60m';






export default DynamicSecretCreateAws;

