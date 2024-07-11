import classNames from "classnames"
import { useRef } from "react"
import { InputCheckboxComponent } from "./types"


export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`)

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        onClick={() => {
          if (!disabled) {
            onChange(!checked)
          }
        }}
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": checked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
      />
      <input
        id={inputId}
        type="checkbox"
        onChange={() => { }}
        className="RampInputCheckbox--input"
        checked={checked}
        disabled={disabled}

      />
    </div>
  )
}
