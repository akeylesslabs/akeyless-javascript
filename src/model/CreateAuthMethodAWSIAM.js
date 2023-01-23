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
 * The CreateAuthMethodAWSIAM model module.
 * @module model/CreateAuthMethodAWSIAM
 * @version 3.2.0
 */
class CreateAuthMethodAWSIAM {
    /**
     * Constructs a new <code>CreateAuthMethodAWSIAM</code>.
     * createAuthMethodAWSIAM is a command that creates a new Auth Method that will be able to authenticate using AWS IAM credentials.
     * @alias module:model/CreateAuthMethodAWSIAM
     * @param boundAwsAccountId {Array.<String>} A list of AWS account-IDs that the access is restricted to
     * @param name {String} Auth Method name
     */
    constructor(boundAwsAccountId, name) { 
        
        CreateAuthMethodAWSIAM.initialize(this, boundAwsAccountId, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, boundAwsAccountId, name) { 
        obj['bound-aws-account-id'] = boundAwsAccountId;
        obj['name'] = name;
    }

    /**
     * Constructs a <code>CreateAuthMethodAWSIAM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateAuthMethodAWSIAM} obj Optional instance to populate.
     * @return {module:model/CreateAuthMethodAWSIAM} The populated <code>CreateAuthMethodAWSIAM</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateAuthMethodAWSIAM();

            if (data.hasOwnProperty('access-expires')) {
                obj['access-expires'] = ApiClient.convertToType(data['access-expires'], 'Number');
            }
            if (data.hasOwnProperty('bound-arn')) {
                obj['bound-arn'] = ApiClient.convertToType(data['bound-arn'], ['String']);
            }
            if (data.hasOwnProperty('bound-aws-account-id')) {
                obj['bound-aws-account-id'] = ApiClient.convertToType(data['bound-aws-account-id'], ['String']);
            }
            if (data.hasOwnProperty('bound-ips')) {
                obj['bound-ips'] = ApiClient.convertToType(data['bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('bound-resource-id')) {
                obj['bound-resource-id'] = ApiClient.convertToType(data['bound-resource-id'], ['String']);
            }
            if (data.hasOwnProperty('bound-role-id')) {
                obj['bound-role-id'] = ApiClient.convertToType(data['bound-role-id'], ['String']);
            }
            if (data.hasOwnProperty('bound-role-name')) {
                obj['bound-role-name'] = ApiClient.convertToType(data['bound-role-name'], ['String']);
            }
            if (data.hasOwnProperty('bound-user-id')) {
                obj['bound-user-id'] = ApiClient.convertToType(data['bound-user-id'], ['String']);
            }
            if (data.hasOwnProperty('bound-user-name')) {
                obj['bound-user-name'] = ApiClient.convertToType(data['bound-user-name'], ['String']);
            }
            if (data.hasOwnProperty('force-sub-claims')) {
                obj['force-sub-claims'] = ApiClient.convertToType(data['force-sub-claims'], 'Boolean');
            }
            if (data.hasOwnProperty('gw-bound-ips')) {
                obj['gw-bound-ips'] = ApiClient.convertToType(data['gw-bound-ips'], ['String']);
            }
            if (data.hasOwnProperty('json')) {
                obj['json'] = ApiClient.convertToType(data['json'], 'Boolean');
            }
            if (data.hasOwnProperty('jwt-ttl')) {
                obj['jwt-ttl'] = ApiClient.convertToType(data['jwt-ttl'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('sts-url')) {
                obj['sts-url'] = ApiClient.convertToType(data['sts-url'], 'String');
            }
            if (data.hasOwnProperty('token')) {
                obj['token'] = ApiClient.convertToType(data['token'], 'String');
            }
            if (data.hasOwnProperty('uid-token')) {
                obj['uid-token'] = ApiClient.convertToType(data['uid-token'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Access expiration date in Unix timestamp (select 0 for access without expiry date)
 * @member {Number} access-expires
 * @default 0
 */
CreateAuthMethodAWSIAM.prototype['access-expires'] = 0;

/**
 * A list of full arns that the access is restricted to
 * @member {Array.<String>} bound-arn
 */
CreateAuthMethodAWSIAM.prototype['bound-arn'] = undefined;

/**
 * A list of AWS account-IDs that the access is restricted to
 * @member {Array.<String>} bound-aws-account-id
 */
CreateAuthMethodAWSIAM.prototype['bound-aws-account-id'] = undefined;

/**
 * A CIDR whitelist with the IPs that the access is restricted to
 * @member {Array.<String>} bound-ips
 */
CreateAuthMethodAWSIAM.prototype['bound-ips'] = undefined;

/**
 * A list of full resource ids that the access is restricted to
 * @member {Array.<String>} bound-resource-id
 */
CreateAuthMethodAWSIAM.prototype['bound-resource-id'] = undefined;

/**
 * A list of full role ids that the access is restricted to
 * @member {Array.<String>} bound-role-id
 */
CreateAuthMethodAWSIAM.prototype['bound-role-id'] = undefined;

/**
 * A list of full role-name that the access is restricted to
 * @member {Array.<String>} bound-role-name
 */
CreateAuthMethodAWSIAM.prototype['bound-role-name'] = undefined;

/**
 * A list of full user ids that the access is restricted to
 * @member {Array.<String>} bound-user-id
 */
CreateAuthMethodAWSIAM.prototype['bound-user-id'] = undefined;

/**
 * A list of full user-name that the access is restricted to
 * @member {Array.<String>} bound-user-name
 */
CreateAuthMethodAWSIAM.prototype['bound-user-name'] = undefined;

/**
 * if true: enforce role-association must include sub claims
 * @member {Boolean} force-sub-claims
 */
CreateAuthMethodAWSIAM.prototype['force-sub-claims'] = undefined;

/**
 * A CIDR whitelist with the GW IPs that the access is restricted to
 * @member {Array.<String>} gw-bound-ips
 */
CreateAuthMethodAWSIAM.prototype['gw-bound-ips'] = undefined;

/**
 * Set output format to JSON
 * @member {Boolean} json
 */
CreateAuthMethodAWSIAM.prototype['json'] = undefined;

/**
 * Jwt TTL
 * @member {Number} jwt-ttl
 */
CreateAuthMethodAWSIAM.prototype['jwt-ttl'] = undefined;

/**
 * Auth Method name
 * @member {String} name
 */
CreateAuthMethodAWSIAM.prototype['name'] = undefined;

/**
 * sts URL
 * @member {String} sts-url
 * @default 'https://sts.amazonaws.com'
 */
CreateAuthMethodAWSIAM.prototype['sts-url'] = 'https://sts.amazonaws.com';

/**
 * Authentication token (see `/auth` and `/configure`)
 * @member {String} token
 */
CreateAuthMethodAWSIAM.prototype['token'] = undefined;

/**
 * The universal identity token, Required only for universal_identity authentication
 * @member {String} uid-token
 */
CreateAuthMethodAWSIAM.prototype['uid-token'] = undefined;






export default CreateAuthMethodAWSIAM;

