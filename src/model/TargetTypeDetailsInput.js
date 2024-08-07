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
import AWSTargetDetails from './AWSTargetDetails';
import ArtifactoryTargetDetails from './ArtifactoryTargetDetails';
import AzureTargetDetails from './AzureTargetDetails';
import ChefTargetDetails from './ChefTargetDetails';
import CustomTargetDetails from './CustomTargetDetails';
import DbTargetDetails from './DbTargetDetails';
import DockerhubTargetDetails from './DockerhubTargetDetails';
import EKSTargetDetails from './EKSTargetDetails';
import GKETargetDetails from './GKETargetDetails';
import GcpTargetDetails from './GcpTargetDetails';
import GithubTargetDetails from './GithubTargetDetails';
import GitlabTargetDetails from './GitlabTargetDetails';
import GlobalSignAtlasTargetDetails from './GlobalSignAtlasTargetDetails';
import GlobalSignGCCTargetDetails from './GlobalSignGCCTargetDetails';
import GodaddyTargetDetails from './GodaddyTargetDetails';
import HashiVaultTargetDetails from './HashiVaultTargetDetails';
import LdapTargetDetails from './LdapTargetDetails';
import LinkedTargetDetails from './LinkedTargetDetails';
import MongoDBTargetDetails from './MongoDBTargetDetails';
import NativeK8sTargetDetails from './NativeK8sTargetDetails';
import PingTargetDetails from './PingTargetDetails';
import RabbitMQTargetDetails from './RabbitMQTargetDetails';
import SSHTargetDetails from './SSHTargetDetails';
import SalesforceTargetDetails from './SalesforceTargetDetails';
import VenafiTargetDetails from './VenafiTargetDetails';
import WebTargetDetails from './WebTargetDetails';
import WindowsTargetDetails from './WindowsTargetDetails';
import ZeroSSLTargetDetails from './ZeroSSLTargetDetails';

/**
 * The TargetTypeDetailsInput model module.
 * @module model/TargetTypeDetailsInput
 * @version 4.2.2
 */
class TargetTypeDetailsInput {
    /**
     * Constructs a new <code>TargetTypeDetailsInput</code>.
     * @alias module:model/TargetTypeDetailsInput
     */
    constructor() { 
        
        TargetTypeDetailsInput.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TargetTypeDetailsInput</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TargetTypeDetailsInput} obj Optional instance to populate.
     * @return {module:model/TargetTypeDetailsInput} The populated <code>TargetTypeDetailsInput</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TargetTypeDetailsInput();

            if (data.hasOwnProperty('artifactory_target_details')) {
                obj['artifactory_target_details'] = ArtifactoryTargetDetails.constructFromObject(data['artifactory_target_details']);
            }
            if (data.hasOwnProperty('aws_target_details')) {
                obj['aws_target_details'] = AWSTargetDetails.constructFromObject(data['aws_target_details']);
            }
            if (data.hasOwnProperty('azure_target_details')) {
                obj['azure_target_details'] = AzureTargetDetails.constructFromObject(data['azure_target_details']);
            }
            if (data.hasOwnProperty('chef_target_details')) {
                obj['chef_target_details'] = ChefTargetDetails.constructFromObject(data['chef_target_details']);
            }
            if (data.hasOwnProperty('custom_target_details')) {
                obj['custom_target_details'] = CustomTargetDetails.constructFromObject(data['custom_target_details']);
            }
            if (data.hasOwnProperty('db_target_details')) {
                obj['db_target_details'] = DbTargetDetails.constructFromObject(data['db_target_details']);
            }
            if (data.hasOwnProperty('dockerhub_target_details')) {
                obj['dockerhub_target_details'] = DockerhubTargetDetails.constructFromObject(data['dockerhub_target_details']);
            }
            if (data.hasOwnProperty('eks_target_details')) {
                obj['eks_target_details'] = EKSTargetDetails.constructFromObject(data['eks_target_details']);
            }
            if (data.hasOwnProperty('gcp_target_details')) {
                obj['gcp_target_details'] = GcpTargetDetails.constructFromObject(data['gcp_target_details']);
            }
            if (data.hasOwnProperty('github_target_details')) {
                obj['github_target_details'] = GithubTargetDetails.constructFromObject(data['github_target_details']);
            }
            if (data.hasOwnProperty('gitlab_target_details')) {
                obj['gitlab_target_details'] = GitlabTargetDetails.constructFromObject(data['gitlab_target_details']);
            }
            if (data.hasOwnProperty('gke_target_details')) {
                obj['gke_target_details'] = GKETargetDetails.constructFromObject(data['gke_target_details']);
            }
            if (data.hasOwnProperty('globalsign_atlas_target_details')) {
                obj['globalsign_atlas_target_details'] = GlobalSignAtlasTargetDetails.constructFromObject(data['globalsign_atlas_target_details']);
            }
            if (data.hasOwnProperty('globalsign_target_details')) {
                obj['globalsign_target_details'] = GlobalSignGCCTargetDetails.constructFromObject(data['globalsign_target_details']);
            }
            if (data.hasOwnProperty('godaddy_target_details')) {
                obj['godaddy_target_details'] = GodaddyTargetDetails.constructFromObject(data['godaddy_target_details']);
            }
            if (data.hasOwnProperty('hashi_vault_target_details')) {
                obj['hashi_vault_target_details'] = HashiVaultTargetDetails.constructFromObject(data['hashi_vault_target_details']);
            }
            if (data.hasOwnProperty('ldap_target_details')) {
                obj['ldap_target_details'] = LdapTargetDetails.constructFromObject(data['ldap_target_details']);
            }
            if (data.hasOwnProperty('linked_target_details')) {
                obj['linked_target_details'] = LinkedTargetDetails.constructFromObject(data['linked_target_details']);
            }
            if (data.hasOwnProperty('mongo_db_target_details')) {
                obj['mongo_db_target_details'] = MongoDBTargetDetails.constructFromObject(data['mongo_db_target_details']);
            }
            if (data.hasOwnProperty('native_k8s_target_details')) {
                obj['native_k8s_target_details'] = NativeK8sTargetDetails.constructFromObject(data['native_k8s_target_details']);
            }
            if (data.hasOwnProperty('ping_target_details')) {
                obj['ping_target_details'] = PingTargetDetails.constructFromObject(data['ping_target_details']);
            }
            if (data.hasOwnProperty('rabbit_mq_target_details')) {
                obj['rabbit_mq_target_details'] = RabbitMQTargetDetails.constructFromObject(data['rabbit_mq_target_details']);
            }
            if (data.hasOwnProperty('salesforce_target_details')) {
                obj['salesforce_target_details'] = SalesforceTargetDetails.constructFromObject(data['salesforce_target_details']);
            }
            if (data.hasOwnProperty('ssh_target_details')) {
                obj['ssh_target_details'] = SSHTargetDetails.constructFromObject(data['ssh_target_details']);
            }
            if (data.hasOwnProperty('venafi_target_details')) {
                obj['venafi_target_details'] = VenafiTargetDetails.constructFromObject(data['venafi_target_details']);
            }
            if (data.hasOwnProperty('web_target_details')) {
                obj['web_target_details'] = WebTargetDetails.constructFromObject(data['web_target_details']);
            }
            if (data.hasOwnProperty('windows_target_details')) {
                obj['windows_target_details'] = WindowsTargetDetails.constructFromObject(data['windows_target_details']);
            }
            if (data.hasOwnProperty('zerossl_target_details')) {
                obj['zerossl_target_details'] = ZeroSSLTargetDetails.constructFromObject(data['zerossl_target_details']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/ArtifactoryTargetDetails} artifactory_target_details
 */
TargetTypeDetailsInput.prototype['artifactory_target_details'] = undefined;

/**
 * @member {module:model/AWSTargetDetails} aws_target_details
 */
TargetTypeDetailsInput.prototype['aws_target_details'] = undefined;

/**
 * @member {module:model/AzureTargetDetails} azure_target_details
 */
TargetTypeDetailsInput.prototype['azure_target_details'] = undefined;

/**
 * @member {module:model/ChefTargetDetails} chef_target_details
 */
TargetTypeDetailsInput.prototype['chef_target_details'] = undefined;

/**
 * @member {module:model/CustomTargetDetails} custom_target_details
 */
TargetTypeDetailsInput.prototype['custom_target_details'] = undefined;

/**
 * @member {module:model/DbTargetDetails} db_target_details
 */
TargetTypeDetailsInput.prototype['db_target_details'] = undefined;

/**
 * @member {module:model/DockerhubTargetDetails} dockerhub_target_details
 */
TargetTypeDetailsInput.prototype['dockerhub_target_details'] = undefined;

/**
 * @member {module:model/EKSTargetDetails} eks_target_details
 */
TargetTypeDetailsInput.prototype['eks_target_details'] = undefined;

/**
 * @member {module:model/GcpTargetDetails} gcp_target_details
 */
TargetTypeDetailsInput.prototype['gcp_target_details'] = undefined;

/**
 * @member {module:model/GithubTargetDetails} github_target_details
 */
TargetTypeDetailsInput.prototype['github_target_details'] = undefined;

/**
 * @member {module:model/GitlabTargetDetails} gitlab_target_details
 */
TargetTypeDetailsInput.prototype['gitlab_target_details'] = undefined;

/**
 * @member {module:model/GKETargetDetails} gke_target_details
 */
TargetTypeDetailsInput.prototype['gke_target_details'] = undefined;

/**
 * @member {module:model/GlobalSignAtlasTargetDetails} globalsign_atlas_target_details
 */
TargetTypeDetailsInput.prototype['globalsign_atlas_target_details'] = undefined;

/**
 * @member {module:model/GlobalSignGCCTargetDetails} globalsign_target_details
 */
TargetTypeDetailsInput.prototype['globalsign_target_details'] = undefined;

/**
 * @member {module:model/GodaddyTargetDetails} godaddy_target_details
 */
TargetTypeDetailsInput.prototype['godaddy_target_details'] = undefined;

/**
 * @member {module:model/HashiVaultTargetDetails} hashi_vault_target_details
 */
TargetTypeDetailsInput.prototype['hashi_vault_target_details'] = undefined;

/**
 * @member {module:model/LdapTargetDetails} ldap_target_details
 */
TargetTypeDetailsInput.prototype['ldap_target_details'] = undefined;

/**
 * @member {module:model/LinkedTargetDetails} linked_target_details
 */
TargetTypeDetailsInput.prototype['linked_target_details'] = undefined;

/**
 * @member {module:model/MongoDBTargetDetails} mongo_db_target_details
 */
TargetTypeDetailsInput.prototype['mongo_db_target_details'] = undefined;

/**
 * @member {module:model/NativeK8sTargetDetails} native_k8s_target_details
 */
TargetTypeDetailsInput.prototype['native_k8s_target_details'] = undefined;

/**
 * @member {module:model/PingTargetDetails} ping_target_details
 */
TargetTypeDetailsInput.prototype['ping_target_details'] = undefined;

/**
 * @member {module:model/RabbitMQTargetDetails} rabbit_mq_target_details
 */
TargetTypeDetailsInput.prototype['rabbit_mq_target_details'] = undefined;

/**
 * @member {module:model/SalesforceTargetDetails} salesforce_target_details
 */
TargetTypeDetailsInput.prototype['salesforce_target_details'] = undefined;

/**
 * @member {module:model/SSHTargetDetails} ssh_target_details
 */
TargetTypeDetailsInput.prototype['ssh_target_details'] = undefined;

/**
 * @member {module:model/VenafiTargetDetails} venafi_target_details
 */
TargetTypeDetailsInput.prototype['venafi_target_details'] = undefined;

/**
 * @member {module:model/WebTargetDetails} web_target_details
 */
TargetTypeDetailsInput.prototype['web_target_details'] = undefined;

/**
 * @member {module:model/WindowsTargetDetails} windows_target_details
 */
TargetTypeDetailsInput.prototype['windows_target_details'] = undefined;

/**
 * @member {module:model/ZeroSSLTargetDetails} zerossl_target_details
 */
TargetTypeDetailsInput.prototype['zerossl_target_details'] = undefined;






export default TargetTypeDetailsInput;

