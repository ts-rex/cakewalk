import Bitfield from "./base.ts";

/**
 * Documentation Provided by Discord, licensed under the Creative Commons Attribution-ShareAlike 4.0 International Public License.
 * @see https://discord.com/developers/docs/resources/channel#attachment-object-attachment-flags
 */
export enum AttachmentFlag {
    /**
     * Discord Docs: this attachment has been edited using the remix feature on mobile
     */
    IS_REMIX = 2
}

/**
 * Attachment Flag bitfield
 * @see Bitfield
 */
export class AttachmentFlagBitfield extends Bitfield<AttachmentFlag> {}