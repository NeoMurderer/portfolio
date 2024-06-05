import { Environment } from '@react-three/drei';
import { useState, useTransition } from 'react';
import { useControls } from 'leva';

export function Env() {
  const [preset, setPreset] = useState('studio');
  const [blur, setBlur] = useState(1);
  // You can use the "inTransition" boolean to react to the loading in-between state,
  // For instance by showing a message
  const [inTransition, startTransition] = useTransition();
  const {isBgEnabled} = useControls({
    blur: { value: 0.65, min: 0, max: 1, onChange: (value) => startTransition(() => setBlur(value)) },
    isBgEnabled: { value: false},
    preset: {
      value: preset,
      options: ['sunset', 'dawn', 'night', 'warehouse', 'forest', 'apartment', 'studio', 'city', 'park', 'lobby'],
      // If onChange is present the value will not be reactive, see https://github.com/pmndrs/leva/blob/main/docs/advanced/controlled-inputs.md#onchange
      // Instead we transition the preset value, which will prevents the suspense bound from triggering its fallback
      // That way we can hang onto the current environment until the new one has finished loading ...
      onChange: (value) => startTransition(() => setPreset(value))
    }
  });
  return <Environment preset={preset} background={isBgEnabled} blur={blur} />;
}
