export default function logEvent({ action, label }) {
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'GAEvent',
      eventCategory: 'Acciones',
      eventAction: action,
      eventLabel: label,
      eventValue: undefined,
    });
  }
  return;
}
