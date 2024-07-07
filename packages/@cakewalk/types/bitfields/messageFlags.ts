import { Bitfield } from './base.ts'

/**
 * Documentation Provided by Discord, licensed under the Creative Commons Attribution-ShareAlike 4.0 International Public License.
 * @see https://discord.com/developers/docs/resources/channel#message-object-message-flags
 */
export enum MessageFlag {
	/**
	 * Discord Docs: this message has been published to subscribed channels (via Channel Following)
	 */
	CROSSPOSTED = 0,
	/**
	 * Discord Docs: this message originated from a message in another channel (via Channel Following)
	 */
	IS_CROSSPOST = 1,
	/**
	 * Discord Docs: do not include any embeds when serializing this message
	 */
	SUPPRESS_EMBEDS = 2,
	/**
	 * Discord Docs: the source message for this crosspost has been deleted (via Channel Following)
	 */
	SOURCE_MESSAGE_DELETED = 3,
	/**
	 * Discord Docs: this message came from the urgent message system
	 */
	URGENT = 4,
	/**
	 * Discord Docs: this message has an associated thread, with the same id as the message
	 */
	HAS_THREAD = 5,
	/**
	 * Discord Docs: this message is only visible to the user who invoked the Interaction
	 */
	EPHEMERAL = 6,
	/**
	 * Discord Docs: this message is an Interaction Response and the bot is "thinking"
	 */
	LOADING = 7,
	/**
	 * Discord Docs: this message failed to mention some roles and add their members to the thread
	 */
	FAILED_TO_MENTION_SOME_ROLES_IN_THREAD = 8,
	/**
	 * Discord Docs: this message will not trigger push and desktop notifications
	 */
	SUPPRESS_NOTIFICATIONS = 12,
	/**
	 * Discord Docs: this message is a voice message
	 */
	IS_VOICE_MESSAGE = 13,
}

/**
 * Message Flag bitfield
 * @see Bitfield
 */
export class MessageFlagBitfield extends Bitfield<MessageFlag> {}
