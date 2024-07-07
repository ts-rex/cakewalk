/**
 * Documentation Provided by Discord, licensed under the Creative Commons Attribution-ShareAlike 4.0 International Public License.
 * @see https://discord.com/developers/docs/interactions/receiving-and-responding#interaction-object-interaction-context-types
 */
export enum InteractionContextType {
	/**
	 * Discord Docs: Interaction can be used within servers
	 */
	GUILD = 0,
	/**
	 * Discord Docs: Interaction can be used within DMs with the app's bot user
	 */
	BOT_DM = 1,
	/**
	 * Discord Docs: Interaction can be used within Group DMs and DMs other than the app's bot user
	 */
	PRIVATE_CHANNEL = 2,
}
