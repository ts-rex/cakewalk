/**
 * Documentation Provided by Discord, licensed under the Creative Commons Attribution-ShareAlike 4.0 International Public License.
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-response-object-interaction-callback-type
 */
export enum InteractionCallbackType {
	/**
	 * Discord Docs: ACK a `Ping`
	 */
	PONG = 1,
	/**
	 * Discord Docs: respond to an interaction with a message
	 */
	CHANNEL_MESSAGE_WITH_SOURCE = 4,
	/**
	 * Discord Docs: ACK an interaction and edit a response later, the user sees a loading state
	 */
	DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE = 5,
	/**
	 * Discord Docs: for components, ACK an interaction and edit the original message later; the user does not see a loading state
	 * Only valid for [component-based](https://discord.com/developers/docs/interactions/message-components) interactions
	 */
	DEFERRED_UPDATE_MESSAGE = 6,
	/**
	 * Discord Docs: for components, edit the message the component was attached to
	 * Only valid for [component-based](https://discord.com/developers/docs/interactions/message-components) interactions
	 */
	UPDATE_MESSAGE = 7,
	/**
	 * Discord Docs: respond to an autocomplete interaction with suggested choices
	 */
	APPLICATION_COMMAND_AUTOCOMPLETE_RESULT = 8,
	/**
	 * Discord Docs: respond to an interaction with a popup modal
	 * Not available for `MODAL_SUBMIT` and `PING` interactions.
	 */
	MODAL = 9,
	/**
	 * Discord docs: respond to an interaction with an upgrade button, only available for apps with monetization enabled
	 * @deprecated This response type is deprecated. Learn more about [migrating to premium buttons](https://discord.com/developers/docs/monetization/app-subscriptions#gating-premium-interactions). `PREMIUM_REQUIRED` response type is not available for `APPLICATION_COMMAND_AUTOCOMPLETE` and `PING` interactions.
	 */
	PREMIUM_REQUIRED = 10,
}
