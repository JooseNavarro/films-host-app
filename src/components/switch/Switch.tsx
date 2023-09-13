import {useState} from "react";
import {SwitchInput, SwitchLabel, Slider} from "./Styles";

interface Props {
  onChange: (value: boolean) => void;
  label: string;
}

export default function Switch({onChange, label}: Props) {
  const [checked, setChecked] = useState(false);

  const handleToggle = () => {
    setChecked((prevChecked) => !prevChecked);
    onChange(checked);
  };

  return (
    <>
      <h4 tabIndex={0} aria-label={`Switch Input lenguage ${label}`}>
        {" "}
        {label}
      </h4>
      <SwitchLabel tabIndex={0}>
        <SwitchInput checked={checked} onChange={handleToggle} />
        <Slider className="slider" checked={checked} />
      </SwitchLabel>
    </>
  );
}
