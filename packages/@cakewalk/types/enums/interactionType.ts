export enum InteractionType {
	/**
	 * A request from Discord to check if your application is running correctly
	 */
	PING = 1,
	/**
	 * User invoked an application command
	 */
	APPLICATION_COMMAND = 2,
	/**
	 * User interacts with a message component
	 */
	MESSAGE_COMPONENT = 3,
	/**
	 * User attempts to autocomplete
	 */
	APPLICATION_COMMAND_AUTOCOMPLETE = 4,
	/**
	 * User submits a modal
	 */
	MODAL_SUBMIT = 5,
}
