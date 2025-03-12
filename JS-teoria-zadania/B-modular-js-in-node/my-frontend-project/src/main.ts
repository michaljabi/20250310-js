import './style.css'
import { BtnComponent } from './btn-component.ts'
import { setupCounter } from './counter.ts'

document
  .querySelector<HTMLDivElement>('#app')!
  .append(BtnComponent(23), BtnComponent(23), BtnComponent(23))

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
