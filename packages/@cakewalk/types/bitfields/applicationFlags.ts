import { Bitfield } from './base.ts'

/**
 * Documentation Provided by Discord, licensed under the Creative Commons Attribution-ShareAlike 4.0 International Public License.
 * @see https://discord.com/developers/docs/resources/application#application-object-application-flags
 */
export enum ApplicationFlag {
	/**
	 * Discord Docs: Indicates if an app uses the [Auto Moderation API](https://discord.com/developers/docs/resources/auto-moderation)
	 */
	APPLICATION_AUTO_MODERATION_RULE_CREATE_BADGE = 6,
	/**
	 * Discord Docs: Intent required for bots in 100 or more servers to receive [`presence_update` events](https://discord.com/developers/docs/topics/gateway-events#presence-update)
	 */
	GATEWAY_PRESENCE = 12,
	/**
	 * Discord Docs: Intent required for bots in under 100 servers to receive [`presence_update` events](https://discord.com/developers/docs/topics/gateway-events#presence-update), found on the Bot page in your app's settings
	 */
	GATEWAY_PRESENCE_LIMITED = 13,
	/**
	 * Discord Docs: Intent required for bots in 100 or more servers to receive member-related events like `guild_member_add`. See the list of member-related events [under `GUILD_MEMBERS`](https://discord.com/developers/docs/topics/gateway#list-of-intents)
	 */
	GATEWAY_GUILD_MEMBERS = 14,
	/**
	 * Discord Docs: Intent required for bots in under 100 servers to receive member-related events like `guild_member_add`, found on the Bot page in your app's settings. See the list of member-related events [under `GUILD_MEMBERS`](https://discord.com/developers/docs/topics/gateway#list-of-intents)
	 */
	GATEWAY_GUILD_MEMBERS_LIMITED = 15,
	/**
	 * Discord Docs: Indicates unusual growth of an app that prevents verification
	 */
	VERIFICATION_PENDING_GUILD_LIMIT = 16,
	/**
	 * Discord Docs: Indicates if an app is embedded within the Discord client (currently unavailable publicly)
	 */
	EMBEDDED = 17,
}

/**
 * Application Flag bitfield
 * @see Bitfield
 */
export class ApplicationFlagBitfield extends Bitfield<ApplicationFlag> {}
