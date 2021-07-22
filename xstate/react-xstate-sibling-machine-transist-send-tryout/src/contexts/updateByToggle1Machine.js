export default function updateByToggle1Machine(toggle1_state, sendToggle2) {
  if (toggle1_state.matches('STATE_ONE')) {
  } else if (toggle1_state.matches('STATE_TWO')) {
    sendToggle2('STATE_TWO');
  } else if (toggle1_state.matches('STATE_THREE')) {
    sendToggle2('STATE_THREE');
  } else {
  }
  return false;
}
