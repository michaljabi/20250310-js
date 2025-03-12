const BTN_COUNTER_KEY = 'btn.counter'

export function BtnComponent(counter = 0, saveState = false) {
  const btn = document.createElement('button')
  const updateState = (s: number) => {
    btn.innerText = String(s)
    if (saveState) {
      localStorage.setItem(BTN_COUNTER_KEY, String(s))
    }
  }

  const initialCount = localStorage.getItem(BTN_COUNTER_KEY)
  if (initialCount && saveState) {
    counter = Number(initialCount)
  }

  updateState(counter)
  btn.addEventListener('click', () => {
    counter++
    updateState(counter)
  })

  // function updateState(x) {
  //     btn.innerText = String(x);
  // }
  return btn
}
