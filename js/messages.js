/**
 * @file
 * Message template overrides.
 */

((Drupal) => {
  /**
   * Overrides message theme function.
   *
   * @param {object} message
   *   The message object.
   * @param {string} message.text
   *   The message text.
   * @param {object} options
   *   The message context.
   * @param {string} options.type
   *   The message type.
   * @param {string} options.id
   *   ID of the message, for reference.
   *
   * @return {HTMLElement}
   *   A DOM Node.
   */
  Drupal.theme.message = ({ text }, { type, id }) => {
    const messagesTypes = Drupal.Message.getMessageTypeLabels();
    const messageWrapper = document.createElement('div');

    messageWrapper.setAttribute('class', `messages messages--${type} cd-alert cd-alert--${type}`);
    messageWrapper.setAttribute(
      'role',
      type === 'error' || type === 'warning' ? 'alert' : 'status',
    );
    var icon_type = 'about', role='status';
    switch (type) {
      case 'error':
        icon_type = 'error';
        role = 'alert';
        break;
      case 'warning':
        icon_type = 'alert';
        break;
      case 'status':
        icon_type = 'selected';
    }
    messageWrapper.setAttribute('data-drupal-message-id', id);
    messageWrapper.setAttribute('data-drupal-message-type', type);

    messageWrapper.innerHTML = `
    <div role="${role}" aria-label="${type}">
      <svg class="cd-icon cd-icon--${icon_type}" aria-hidden="true" focusable="false" width="24" height="24">
        <use xlink:href="#cd-icon--${icon_type}"></use>
      </svg>
      <div class="cd-alert__container cd-max-width">
        <div class="cd-alert__title">
          <h2 class="visually-hidden">${messagesTypes[type]}</h2>
        </div>
        <div class="cd-alert__message [ cd-flow ]">
          ${text}
        </div>
      </div>
    </div>
  `;

    return messageWrapper;
  };
})(Drupal);
