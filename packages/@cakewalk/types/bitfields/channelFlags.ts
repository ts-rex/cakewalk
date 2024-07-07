import { Bitfield } from './base.ts'

/**
 * Documentation Provided by Discord, licensed under the Creative Commons Attribution-ShareAlike 4.0 International Public License.
 * @see https://discord.com/developers/docs/resources/channel#channel-object-channel-flags
 */
export enum ChannelFlag {
	/**
	 * Discord Docs: this thread is pinned to the top of its parent `GUILD_FORUM` or `GUILD_MEDIA` channel
	 */
	PINNED = 1,
	/**
	 * Discord Docs: whether a tag is required to be specified when creating a thread in a `GUILD_FORUM` or a `GUILD_MEDIA` channel. Tags are specified in the `applied_tags` field.
	 */
	REQUIRE_TAG = 4,
	/**
	 * Discord Docs: when set hides the embedded media download options. Available only for media channels
	 */
	HIDE_MEDIA_DOWNLOAD_OPTIONS = 15,
}

/**
 * Channel Flag bitfield
 * @see Bitfield
 */
export class ChannelFlagBitfield extends Bitfield<ChannelFlag> {}
